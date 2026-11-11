export type Service = {
  number: string
  title: string
  description: string
  idealFor: string
  icon: string // SVG path for the icon
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Websites, Online Stores & Web Systems',
    description:
      'A fast, mobile-friendly website, an online store where customers can order and pay, or an online system for enrollment, inventory, bookings or records.',
    idealFor: 'schools · shops · small businesses',
    icon: 'M3 4h18v13H3zM8 21h8M12 17v4',
  },
  {
    number: '02',
    title: 'Web System + Mobile App',
    description:
      'One system, two screens: a web dashboard for your office and a mobile app for your staff or customers. Both always show the same up-to-date data.',
    idealFor: 'growing businesses · LGU offices',
    icon: 'M2 5h13v10H2zM5 19h7M16 8h6v12h-6z',
  },
  {
    number: '03',
    title: 'Arduino & IoT Solutions',
    description:
      'Smart devices that watch and automate things for you, like water levels, attendance or temperature alerts, with a simple dashboard to see it all.',
    idealFor: 'farms · schools · facilities',
    icon: 'M6 6h12v12H6zM10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
  },
]