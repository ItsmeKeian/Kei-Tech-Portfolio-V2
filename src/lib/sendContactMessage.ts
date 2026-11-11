export type ContactMessage = {
  name: string
  email: string
  service: string
  message: string
  website: string // hidden spam trap; real people leave it empty
}

export type ContactResult =
  | { ok: true }
  | { ok: false; error?: string; errors?: Record<string, string> }

export async function sendContactMessage(data: ContactMessage): Promise<ContactResult> {
  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return (await response.json()) as ContactResult
  } catch {
    return { ok: false, error: 'Could not reach the server. Please check your connection and try again.' }
  }
}