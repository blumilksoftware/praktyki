import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.jpeg'
import avatarImage2 from '@/images/avatars/avatar-2.jpeg'
import avatarImage3 from '@/images/avatars/avatar-3.jpg'
import avatarImage4 from '@/images/avatars/avatar-4.jpeg'
import avatarImage5 from '@/images/avatars/avatar-5.jpeg'
import avatarImage6 from '@/images/avatars/avatar-6.jpeg'

const testimonials = [
  [
    {
      content:
        'Praktyki były dla mnie cennym doświadczeniem. Poznałem różne technologie i narzędzia, a także zdobyłem doświadczenie w pracy w zespole. Co więcej, po praktykach dostałem pracę w Blumilku i jestem z tego powodu bardzo zadowolony :)',
      author: {
        name: 'Michał Myśków',
        role: 'luty - lipiec 2022',
        image: avatarImage2,
      },
    },
    {
      content:
        'Praca w zespole była bardzo inspirująca i pozwoliła mi zrozumieć, jak ważne jest wsparcie i współpraca w tej branży. Poszerzyłam wiedzę z zakresu programowania, co na pewno przyda mi się w przyszłości - zarówno na studiach jak i w pracy.',
      author: {
        name: 'Aleksandra Kozubal',
        role: 'czerwiec 2022',
        image: avatarImage5,
      },
    },
  ],
  [
    {
      content:
        'Dzięki temu, że miałem możliwość pracować nad ciekawym projektem, nauczyłem się wielu nowych rzeczy i poszerzyłem swoje horyzonty na tyle, że dostałem swoją pierwszą pracę jako frontend developer w innej firmie.',
      author: {
        name: 'Łukasz Podlipski',
        role: 'lipiec 2021',
        image: avatarImage1,
      },
    },
    {
      content:
        'Spędziłem trzy miesiące na praktykach w Blumilku i było to dla mnie niesamowite doświadczenie. Pracowałem w zespole z innymi programistami i czułem, że wnoszę realny wkład w rozwój firmy. Pracownicy byli bardzo otwarci i zawsze chętnie dzielili się swoją wiedzą. Jestem bardzo szczęśliwy, że dostałem pracę po tych praktykach.',
      author: {
        name: 'Dawid Rudnik',
        role: 'maj 2021 - lipiec 2021',
        image: avatarImage3,
      },
    },
  ],
  [
    {
      content:
        'Moje praktyki w firmie programistycznej były bardzo intensywne i wymagające. Musiałam pracować w grupie i nauczyć się współpracować z innymi. Poznałam nowe narzędzia oraz technologie.',
      author: {
        name: 'Paulina Lencka',
        role: 'lipiec 2021',
        image: avatarImage6,
      },
    },
    {
      content:
        'Atmosfera w firmie była bardzo przyjazna i luźna, co sprawiało, że z przyjemnością chodziłem tam codziennie. Wraz z innymi praktykantami tworzyliśmy aplikację do meetupów. Wiele się nauczyłem, a w szczególności frontendu.',
      author: {
        name: 'Jakub Zakowicz',
        role: 'maj 2022 - lipiec 2022',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Opinie praktykantów"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Co mówią o nas praktykanci?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Zachęcamy do zapoznania się z tymi opiniami i dowiedzenia się, co myślą o nas ci, którzy mieli okazję pracować z nami na co dzień.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
