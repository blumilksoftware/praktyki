import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const features = [
  {
    summary:
      'Krótko o nas',
    description:
      'Nasza firma zatrudnia wykwalifikowanych inżynierów, którzy posiadają ogromne doświadczenie w branży. Nasi pracownicy są pasjonatami swojej pracy, dzięki czemu zawsze dają z siebie 100% i chętnie wzajemnie sobie pomagają. Nasz prezes, pan Piotr Nadybski, posiada tytuł doktora i jest profesorem na CWUP. Jego wiedza i doświadczenie w połączeniu z kompetencjami naszych inżynierów gwarantują wysoką jakość świadczonych przez nas usług. Dzięki temu nasza firma cieszy się zaufaniem i uznaniem wśród naszych klientów.',
  },
  {
    summary: 'Czym się zajmujemy na co dzień?',
    description:
      'Tworzymy szyte na miarę aplikacje webowe, które są wygodne w użyciu na każdym urządzeniu, szybkie, łatwo rozszerzalne i bezpiecznie. Nasz zespół potrafi szybko zgłębić domenę produktu, co pozwala nam dostosować nasze rozwiązania do potrzeb klienta, niezależnie od branży, w jakiej działa.',
  },
  {
    summary:
      'Kształcimy studentów',
    description:
      'Niektórzy z naszych pracowników również pracują jako nauczyciele akademiccy na lokalnej uczelni, gdzie zajmują się kierunkiem Informatyka, specjalizacją Programowanie aplikacji mobilnych i internetowych. Prowadzą takie przedmioty jak: sieci komputerowe, bazy danych, programowanie obiektowe, programowanie aplikacji mobilnych i internetowych i wiele innych.',
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
      </div>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            O Blumilku
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Nasz zespół zawsze chętnie przyjmuje nowych praktykantów, którzy chcą się rozwijać i zdobywać cenne doświadczenie w branży. Poznaj nas bliżej.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
