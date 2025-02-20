import Link from 'next/link'

import { Container } from '@/components/Container'
import Logo from '@/images/logos/blumilk.webp'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Image className="mx-auto h-10 w-auto"  src={Logo} alt="Blumilk logo" unoptimized />
          <nav className="mt-10 text-sm" aria-label="Linki do poszczególnych sekcji">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/#features">Projekty</NavLink>
              <NavLink href="/#secondary-features">O nas</NavLink>
              <NavLink href="/#testimonials">Opinie</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:justify-between md:flex-row-reverse">
          <div className="flex gap-x-6">
            <Link
                href="https://www.blumilk.pl/"
                className="group"
                aria-label="Blumilk - Website"
            >
              <svg
                  aria-hidden="true"
                  className="size-6 fill-slate-500 group-hover:fill-slate-700"
                  viewBox="0 0 360 360"
              >
                <path fill="#fff" d="M142.403 119.977h137.57v118.884h-137.57z"/>
                <path fill="#fff" d="M252.91 94.202h44.783v86.022H252.91z"/>
                <path fill="#fff" d="M85.055 67.462H282.23v67.014H85.055z"/>
                <path fill="#fff" d="M67.462 100.86h81.259v224.592H67.46zM152.069 226.296H294.47v94.398H152.07z"/>
                <path d="M72.295 318.685h68.693V115.357L107.124 79.46l-34.83 35.987zm81.145 24.912H59.841c-6.88 0-12.456-5.578-12.456-12.456V110.408c0-3.23 1.26-6.339 3.506-8.659l47.401-48.978c2.367-2.447 5.6-3.751 9.03-3.795a12.463 12.463 0 0 1 8.978 3.908l46.203 48.977a12.452 12.452 0 0 1 3.392 8.547v220.733c0 6.878-5.575 12.456-12.455 12.456"/>
                <path d="M302.625 343.537h-149.39c-6.878 0-12.455-5.573-12.455-12.45v-214.58c0-6.877 5.577-12.455 12.455-12.455 6.88 0 12.456 5.578 12.456 12.456v202.125h124.478v-74.825l-31.473-31.802a12.442 12.442 0 0 1-3.599-8.938 12.434 12.434 0 0 1 3.852-8.828l31.22-29.796v-56.286c0-6.88 5.578-12.456 12.456-12.456 6.88 0 12.454 5.576 12.454 12.456v61.614c0 3.404-1.39 6.661-3.854 9.009l-25.902 24.72 26.154 26.424a12.458 12.458 0 0 1 3.602 8.761v92.4c0 6.878-5.574 12.451-12.454 12.451"/>
                <path d="M302.633 120.611a12.426 12.426 0 0 1-9.665-4.59l-36.34-44.632-146.627.185h-.016c-6.873 0-12.442-5.561-12.454-12.437-.01-6.875 5.561-12.456 12.438-12.467l152.552-.2h.022c3.737 0 7.288 1.688 9.652 4.593l40.085 49.227c4.345 5.339 3.544 13.181-1.788 17.525a12.422 12.422 0 0 1-7.859 2.796"/>
                <path d="M263.592 71.574H109.985c-6.88 0-12.455-5.575-12.455-12.453V35.297c0-6.879 5.575-12.456 12.455-12.456h153.607c6.877 0 12.45 5.577 12.45 12.456V59.12c0 6.878-5.573 12.453-12.45 12.453"/>
              </svg>
            </Link>
            <Link
                href="https://github.com/blumilksoftware"
                className="group"
                aria-label="Blumilk - GitHub"
            >
              <svg
                  aria-hidden="true"
                  className="size-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link
                href="https://linkedin.com/company/blumilksoftware"
                className="group"
                aria-label="Blumilk - LinkedIn"
            >
              <svg
                  aria-hidden="true"
                  className="size-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>              </svg>
            </Link>
            <Link
                href="https://facebook.com/blumilksoftware"
                className="group"
                aria-label="Blumilk - Facebook"
            >
              <svg
                  aria-hidden="true"
                  className="size-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>              </svg>
            </Link>
            <Link
                href="https://instagram.com/blumilksoftware/"
                className="group"
                aria-label="Blumilk - Instagram"
            >
              <svg
                  aria-hidden="true"
                  className="size-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link
              href="https://twitter.com/blumilksoftware"
              className="group"
              aria-label="Blumilk - Twitter"
            >
              <svg
                aria-hidden="true"
                className="size-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>              </svg>
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <div className="text-center text-sm text-slate-700">
              &copy; {new Date().getFullYear()} Blumilk
              <div className="mt-8 block text-center md:mt-0 md:inline">
                <Link href="/privacy-policy" className="ml-4 block hover:text-gray-900 sm:inline">
                  Polityka prywatności
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
