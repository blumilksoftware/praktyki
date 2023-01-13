export function Cookies() {
  return (
    <section
      id="privacy-policy"
      aria-label="Polityka prywatności"
      className="bg-white py-20 sm:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pb-8 text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Polityka prywatności
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Na naszej stronie internetowej stosujemy pliki cookies w celu świadczenia usług na najwyższym poziomie i dostosowania ich specjalnie do Twoich potrzeb. Pliki cookies są wykorzystywane do celów statystycznych.
          </p>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-4 text-center lg:flex-row lg:py-0 lg:text-left">
          <div className="md:flex-1">
            <div>
              <h3 className="mt-4 mb-1 text-lg font-bold text-slate-600">
                Czym są pliki cookies?
              </h3>
              <div className="text-slate-700">
                Pliki cookies inaczej &quot;ciasteczka&quot; to małe pliki wysyłane przez stronę, którą odwiedzasz i zapisywane na twoim urządzeniu końcowym (komputerze, laptopie, smartfonie).
              </div>
              <h3 className="mt-4 mb-1 text-lg font-bold text-slate-600">
                Dlaczego używamy ciasteczek?
              </h3>
              <div className="text-slate-700">
                Stosujemy pliki cookies w celach szacunkowych, aby poznać ilość użytkowników odwiedzających naszą stronę internetową. Te dane umożliwiają nam analizę, a co za tym idzie stały rozwój strony. W tym celu korzystamy także z &quot;Google Analytics&quot;. Co istotne &quot;Google Analytics&quot; zapisuje tylko adres IP przypisany do Ciebie w dniu wizyty na tej stronie, a nie Twoje imię i nazwisko lub inne informacje umożliwiające identyfikację. Szczegóły dotyczące działania &quot;Google Analytics&quot; znajdziesz pod adresem policies.google.com/privacy oraz google.com/analytics/terms.
              </div>
              <h3 className="mt-4 mb-1 text-lg font-bold text-slate-600">
                Masz pytania?
              </h3>
              <div className="text-slate-700">
                Jeśli chcesz dowiedzieć się więcej o naszej Polityce Prywatności skorzystaj z formularza kontaktowego lub napisz do nas na adres: hello@blumilk.pl
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
