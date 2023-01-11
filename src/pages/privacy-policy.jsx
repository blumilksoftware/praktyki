import Head from 'next/head'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Cookies } from '@/components/Cookies'
import { PersonalDataController } from '@/components/PersonalDataController'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Praktyki w Blumilku - polityka prywatności</title>
        <meta
          name="description"
          content="Zdobądź cenne doświadczenie zawodowe jako praktykant w Blumilku."
        />
      </Head>
      <Header />
      <main>
      <Cookies/>
      <PersonalDataController/>
      </main>
      <Footer />
    </>
  )
}
