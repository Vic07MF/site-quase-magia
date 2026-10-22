import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const linkButtonClassName =
  'h-auto min-h-14 w-full whitespace-normal rounded-xl border-[#eadff3] bg-white px-5 py-4 text-base font-semibold text-[#382451] shadow-sm hover:border-[#a78ad9] hover:bg-[#f6f0fb] focus-visible:ring-[#a78ad9]'

export default function LinksPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffcff] px-5 py-10 text-[#382451]">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <Image
          src="/quase-magia-logo-completa.png"
          alt="Quase Magia"
          width={320}
          height={320}
          priority
          className="mb-5 size-36 object-contain"
        />
        <h1 className="font-display text-3xl font-semibold">Quase Magia</h1>
        <p className="mt-2 text-base text-[#715f80]">
          Pequenas peças, grandes encantos. ✨
        </p>

        <nav aria-label="Links da Quase Magia" className="mt-8 flex w-full flex-col gap-3">
          <Button asChild variant="outline" className={linkButtonClassName}>
            <a
              href="https://wa.me/5519998026176"
              target="_blank"
              rel="noreferrer"
            >
              Fazer um pedido pelo WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className={linkButtonClassName}>
            <a
              href="https://www.instagram.com/quase_magia/"
              target="_blank"
              rel="noreferrer"
            >
              Conheça nosso Instagram
            </a>
          </Button>
          <Button asChild variant="outline" className={linkButtonClassName}>
            <Link href="/">Ver nossos produtos</Link>
          </Button>
        </nav>
      </div>
    </main>
  )
}
