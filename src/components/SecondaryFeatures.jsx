import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-6.png'
import avatarImage2 from '@/images/avatars/avatar-6.png'
import avatarImage3 from '@/images/avatars/avatar-6.png'

const features = [
  {
    name: 'dr inż., prof CWUP',
    summary: 'Piotr Nadybski',
    description:
      'Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet',
    image: avatarImage1,
  },
  {
    name: 'mgr inż.',
    summary: 'Krzysztof Rewak',
    description:
      'Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet',
    image: avatarImage2,
  },
  {
    name: 'mgr inż.',
    summary: 'Marcin Tracz',
    description:
      'Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit ametLorem ipsum sit ametLorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet',
    image: avatarImage3,
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
          'w-40 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <Image
          className="w-full"
          src={feature.image}
          alt=""
        />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
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
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
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
            O nas
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Poznaj nas bliżej ;)
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
