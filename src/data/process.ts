export type ProcessStep = {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  { title: 'Consultation', description: 'We talk about your problem and goals. Free, in person or online.' },
  { title: 'Proposal & Quote', description: 'A clear plan, timeline and price before any work starts.' },
  { title: 'Design', description: 'You see how it will look and approve it first.' },
  { title: 'Development', description: 'I build it and share progress with you regularly.' },
  { title: 'Testing', description: 'Checked on phones and computers, and fixed before launch.' },
  { title: 'Launch', description: 'Your system goes live, and I show you how to use it.' },
  { title: 'Support', description: 'Help with fixes and updates after launch.' },
]