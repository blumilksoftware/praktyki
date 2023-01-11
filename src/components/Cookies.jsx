import Image from 'next/image'

import PrivacyImage from '@/images/privacy.svg'

export function Cookies() {
  return (
    <section
      id="privacy-policy"
      aria-label="Polityka prywatności"
      className="bg-white py-20 sm:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Polityka prywatności
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Na naszej stronie internetowej stosujemy pliki cookies w celu świadczenia usług na najwyższym poziomie i dostosowania ich specjalnie do Twoich potrzeb. Pliki cookies są wykorzystywane do celów statystycznych.
          </p>
        </div>
        <div className="container px-6 mx-auto text-center lg:text-left flex justify-center items-center flex-col lg:flex-row py-4 lg:py-0">
          <div className="md:flex-1">
            <div>
              <h3 className="mt-4 mb-1 text-slate-600 font-bold text-lg">
                Czym są pliki cookies?
              </h3>
              <div className="text-slate-700">
                Pliki cookies inaczej "ciasteczka" to małe pliki wysyłane przez stronę, którą odwiedzasz i zapisywane na twoim urządzeniu końcowym (komputerze, laptopie, smartfonie).
              </div>
              <h3 className="mt-4 mb-1 text-slate-600 font-bold text-lg">
                Dlaczego używamy ciasteczek?
              </h3>
              <div className="text-slate-700">
                Stosujemy pliki cookies w celach szacunkowych, aby poznać ilość użytkowników odwiedzających naszą stronę internetową. Te dane umożliwiają nam analizę, a co za tym idzie stały rozwój strony. W tym celu korzystamy także z "Google Analytics". Co istotne "Google Analytics" zapisuje tylko adres IP przypisany do Ciebie w dniu wizyty na tej stronie, a nie Twoje imię i nazwisko lub inne informacje umożliwiające identyfikację. Szczegóły dotyczące działania "Google Analytics" znajdziesz pod adresem policies.google.com/privacy oraz google.com/analytics/terms.
              </div>
              <h3 className="mt-4 mb-1 text-slate-600 font-bold text-lg">
                Masz pytania?
              </h3>
              <div className="text-slate-700">
                Jeśli chcesz dowiedzieć się więcej o naszej Polityce Prywatności skorzystaj z formularza kontaktowego lub napisz do nas na adres: hello@blumilk.pl
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full">
            <Image className="px-4 py-8 sm:px-16 sm:py-8 md:px-12 xl:p-24 relative z-10 pointer-events-none"
                   src={PrivacyImage} alt="privacy"
                   title="privacy"/>
          </div>
        </div>
      </div>
    </section>
  )
}
