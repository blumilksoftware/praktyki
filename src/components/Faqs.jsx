import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Co muszę umieć, aby dostać się na praktyki?',
      answer:
        'Jeśli umiesz programować w PHP, znasz paradygmat obiektowy, GitHub nie jest Ci obcy, praca w zespole nie sprawia Ci problemu i chcesz się rozwijać - to tyle nam wystarczy - na początek ;) Reszty Cię nauczymy.',
    },
    {
      question: 'Jestem z innej uczelni - czy mogę aplikować?',
      answer: 'Oczywiście, że tak! Jesteśmy otwarci na współpracę.',
    },
    {
      question: 'Jak wygląda proces rekrutacji?',
      answer:
        'Wyślij nam kilka słów o sobie, załącz CV oraz link do GitHuba. Jeżeli wszystko będzie w porządku, to zaprosimy Cię na krótką rozmowę - od razu dowiesz się, czy zaczynasz praktyki czy niestety musisz szukać gdzieś indziej.',
    },
  ],
  [
    {
      question: 'Co będę robić na praktykach?',
      answer:
        'Każda grupa praktykantów realizuje ciekawy projekt zespołowy - zazwyczaj my wymyślamy temat, ale jeśli masz pomysły, to śmiało możesz coś zaproponować.',
    },
    {
      question:
        'Co zyskam przychodząc na praktyki do Blumilka?',
      answer:
        'Przede wszystkim code review od profesjonalistów - wierzymy, że to jest najlepszy sposób, aby podnieść swoje umiejętności. Cotygodniowe lekcje z native-speakerem z Anglii, możliwość napisania do kogokolwiek z firmy w razie problemów, zdobywanie wiedzy i praca w rzeczywistym środowisku pracy - to możemy zaoferować.',
    },
    {
      question:
        'Kiedy odbywają się praktyki?',
      answer:
        'Zazwyczaj praktyki prowadzimy w okresie wakacyjnym.',
    },
  ],
  [
    {
      question: 'Czy mogę pracować zdalnie?',
      answer:
        'Preferujemy pracę w biurze - dzięki temu masz okazję bliżej nas poznać, a my Ciebie. Poza tym, naszym zdaniem więcej się nauczysz będąc na miejscu.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Najczęściej zadawane pytania
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Jeśli nie możesz znaleźć tego, czego szukasz, napisz do nas na career@blumilk.pl.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
