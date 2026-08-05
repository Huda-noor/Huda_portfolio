import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'

export const metadata: Metadata = {
  title: 'Huda Noor — AI Automation Engineer & AI Agent Developer',
  description: 'Professional portfolio showcasing AI automation expertise, n8n workflows, AI agents, and generative AI integration.',
  keywords: 'AI Automation, n8n, AI Agents, Generative AI, Portfolio, Web Development',
  openGraph: {
    title: 'Huda Noor — AI Automation Engineer',
    description: 'Professional portfolio with 100+ workflows and AI automation expertise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050402" />
      </head>
      <body className="bg-dark-primary text-text-primary">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
