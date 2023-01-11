import Image from 'next/image'

import TermsImage from '@/images/terms.svg'

export function PersonalDataController() {
  return (
    <section
      id="personal-controller-data"
      aria-label="Administrator danych osobowych"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Administrator danych osobowych
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Administrator danych osobowych to odpowiedzialna za przetwarzanie danych osobowych osoba lub podmiot, zabezpieczająca je przed nieuprawnionym dostępem oraz przestrzegająca przepisów ochrony danych.
          </p>
        </div>
        <div className="container px-6 mx-auto text-center lg:text-left flex justify-center items-center flex-col lg:flex-row py-4 lg:py-0">
          <div className="md:flex-1">
            <div>
              <h3 className="mt-4 mb-1 text-slate-600 font-bold text-lg">
                Administrator danych osobowych
              </h3>
              <div className="text-slate-700">
                Administratorem Twoich danych osobowych jest Blumilk Sp. z o.o. z siedzibą w Legnicy, e-mail: career@blumilk.pl. Twoje dane osobowe przetwarzamy wyłącznie w celu przeprowadzenia rekrutacji obecnej i przyszłej, jeśli wyraziłeś/aś stosowną zgodę w treści swojej aplikacji. Twoje dane osobowe podane w zgłoszeniu, wskazane w Kodeksie pracy lub w innych ustawach szczegółowych przetwarzamy w oparciu o przepisy prawa i ich podanie jest konieczne do wzięcia udziału w rekrutacji. Pozostałe dane osobowe (np. Twój wizerunek) przetwarzamy na podstawie Twojej dobrowolnej zgody, którą wyraziłeś/aś, wysyłając nam swoje zgłoszenie rekrutacyjne. Nie przekazujemy Twoich danych osobowych poza Europejski Obszar Gospodarczy. Twoje dane osobowe przetwarzamy w celu przeprowadzenia rekrutacji przez okres 1 roku od momentu otrzymania od Ciebie aplikacji. Twoje dane osobowe możemy przekazać dostawcom usług publikacji ogłoszeń o pracę, dostawcom systemów do zarządzania rekrutacjami, dostawcom usług IT takich jak hosting oraz dostawcom systemów informatycznych. W każdym czasie możesz cofnąć zgodę, kontaktując się z nami pod adresem e-mail career@blumilk.pl. Cofnięcie zgody pozostaje bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Masz również prawo dostępu do swoich danych, w tym uzyskania ich kopii, sprostowania danych, żądania ich usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu wobec przetwarzania oraz przeniesienia podanych danych (na których przetwarzanie wyraziłeś/aś zgodę) do innego administratora danych. W razie naruszeń dotyczących Twoich danych osobowych masz prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych. Jeżeli chcesz, aby Twoje CV zostało wykorzystane do innych naszych rekrutacji, umieść dodatkowo w CV następującą zgodę: "Zgadzam się na przetwarzanie przez Blumilk Sp. z o.o. z siedzibą w Legnicy danych osobowych zawartych w moim zgłoszeniu rekrutacyjnym dla celów przyszłych rekrutacji".
              </div>
            </div>
          </div>
          <div className="md:flex-1 w-full">
            <Image className="px-4 py-8 sm:px-16 sm:py-8 md:px-12 xl:p-24 relative z-10 pointer-events-none"
                   src={TermsImage} alt="terms"
                   title="privacy"/>
          </div>
        </div>
      </div>
    </section>
  )
}
