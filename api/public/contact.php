<?php

declare(strict_types=1);

use Dotenv\Dotenv;
use PHPMailer\PHPMailer\Exception as MailException;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/../vendor/autoload.php';

header('Content-Type: application/json; charset=utf-8');

/**
 * Send a JSON response to the browser and stop the script.
 */
function respond(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

// 1. Load settings from .env (secrets are never written in code)
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();
$dotenv->required(['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO', 'ALLOWED_ORIGIN']);

// 2. Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// 3. Only accept requests from our own website
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== $_ENV['ALLOWED_ORIGIN']) {
    respond(403, ['ok' => false, 'error' => 'Forbidden.']);
}

// 4. Read the JSON sent by the React form
$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request.']);
}

// 5. Spam trap: real people never fill in the hidden "website" field
if (!empty($input['website'])) {
    respond(200, ['ok' => true]); // pretend it worked, so the bot moves on
}

// 6. Clean and validate every field (never trust the browser)
$name = trim((string) ($input['name'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$service = trim((string) ($input['service'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

$errors = [];
if ($name === '' || mb_strlen($name) > 100) {
    $errors['name'] = 'Please enter your name (up to 100 characters).';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
    $errors['email'] = 'Please enter a valid email address.';
}
if (mb_strlen($service) > 100) {
    $errors['service'] = 'Please choose a service.';
}
if (mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    $errors['message'] = 'Please write between 10 and 5,000 characters.';
}
if ($errors !== []) {
    respond(422, ['ok' => false, 'errors' => $errors]);
}

// Remove line breaks from one-line fields (blocks email header tricks)
$name = str_replace(["\r", "\n"], ' ', $name);
$service = str_replace(["\r", "\n"], ' ', $service);

// 7. Send the email
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USER'];
    $mail->Password = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) $_ENV['SMTP_PORT'];
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->setFrom($_ENV['SMTP_USER'], 'Kei-Tech Website');
    $mail->addAddress($_ENV['MAIL_TO']);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = "New inquiry from {$name}";
    $mail->Body = "Name: {$name}\nEmail: {$email}\nService: {$service}\n\nMessage:\n{$message}\n";

    $mail->send();
    respond(200, ['ok' => true]);
} catch (MailException $e) {
    error_log('Contact form mail error: ' . $mail->ErrorInfo);
    respond(500, ['ok' => false, 'error' => 'Sorry, your message could not be sent. Please message me on Messenger or email instead.']);
}