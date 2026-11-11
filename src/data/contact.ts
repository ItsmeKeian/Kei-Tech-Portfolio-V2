export type ContactChannel = {
  label: string
  value: string // what visitors see
  href: string // where the link goes
  icon: string // SVG path
}

export const contactChannels: ContactChannel[] = [
  {
    label: 'Facebook Messenger',
    value: 'm.me/your-page',
    href: 'https://m.me/your-page',
    icon: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',
  },
  {
    label: 'Email',
    value: 'hello@keitech.com',
    href: 'mailto:hello@keitech.com',
    icon: 'M3 5h18v14H3zM3 6l9 7 9-7',
  },
  {
    label: 'WhatsApp',
    value: '+63 9XX XXX XXXX',
    href: 'https://wa.me/639XXXXXXXXX',
    icon: 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z',
  },
]