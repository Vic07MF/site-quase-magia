import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://quasemagia.com.br'),
  title: 'Quase Magia | Peças impressas em 3D',
  description: 'Pequenas peças, grandes encantos. Conheça a vitrine da Quase Magia e crie algo personalizado.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    title: 'Quase Magia | Peças impressas em 3D',
    description: 'Pequenas peças, grandes encantos. Conheça a vitrine da Quase Magia e crie algo personalizado.',
    url: 'https://quasemagia.com.br/',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fffcff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
