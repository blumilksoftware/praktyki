import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.webp'
import screenshotMeetup from '@/images/screenshots/project-2.webp'
import screenshotInternships from '@/images/screenshots/project-1.webp'
import screenshotLaravelPolandMeetup from '@/images/screenshots/project-3.webp'
import screenshotEscooters from '@/images/screenshots/project-4.webp'
import screenshotQuiz from '@/images/screenshots/project-5.webp'

const features = [
  {
    title: 'Internships',
    description:
      'Ten kto szukał praktyk studenckich ten wie, że nie jest to łatwe zadanie - ta aplikacja ma na celu przejrzyste pokazanie, gdzie są praktyki, a firmy mogą zakładać konta i dodawać oferty praktyk.',
    image: screenshotInternships,
  },
  {
    title: 'Meetup',
    description:
      'Meetup to biblioteka, która umożliwia użytkownikom o różnym poziomie technicznym stworzenie aplikacji do organizacji własnych spotkań. Dla zaawansowanych użytkowników, którzy chcą rozszerzyć funkcjonalność biblioteki, istnieje możliwość nadpisywania ustawień i samodzielnego rozszerzania jej możliwości.',
    image: screenshotMeetup,
  },
  {
    title: 'Laravel Poland Meetup',
    description:
      'Projekt, który nie jest tylko sztuką dla sztuki - strona internetowa dla najbardziej popularnego meetupu o PHP i Laravelu - brzmi jak wyzwanie, któremu nasi praktykanci podołali w 100% ;)',
    image: screenshotLaravelPolandMeetup,
  },
  {
    title: 'E-scooters',
    description:
        'E-scooters to aplikacja, gdzie w jednym miejscu można znaleźć dostępnych dostawców hulajnóg elektrycznych (i nie tylko) w miastach na całym świecie.',
    image: screenshotEscooters,
  },
  {
    title: 'Quiz',
    description:
        'Aplikacja do przeprowadzania konkursów w formie quizów, umożliwiająca tworzenie i zarządzanie pytaniami oraz automatycznie tworzenie rankingów.',
    image: screenshotQuiz,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="O nas"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Projekty realizowane przez naszych praktykantów
          </h2>
          <p className="mt-6 text-lg tracking-tight text-white">
            Chcemy pokazać, jakie zadania i wyzwania stawiamy przed naszymi praktykantami oraz jakie umiejętności zdobywają dzięki pracy w naszej firmie.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-white hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-white group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
