import Image from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoStacks from '@/images/logos/stacks.png'
import logoMeema from '@/images/logos/meema.jpeg'
import logoGreenline from '@/images/logos/greenline.jpg'
import logoDataSix from '@/images/logos/datasix.png'
import logoOw3 from '@/images/logos/ow3.png'
import logoJwi from '@/images/logos/jwi.svg'
import logoCbmSkills from '@/images/logos/cbm.svg'
import logo361gradmedien from '@/images/logos/361gradmedien.png'
import logoForstamt from '@/images/logos/forstamt.png'
import logoLabor from '@/images/logos/labor.png'
import logoYara from '@/images/logos/yara.png'
import logoUni from '@/images/logos/uni.png'

const praktikum = [
  {
    name: '361gradmedien',
    description:
      'PRogramieren einer HTML-Programms als Bewerbungsmappe, Designen mehrer kleiner Projekte',
    link: { href: 'https://361gradmedien.de/', label: '361gradmedien.de' },
    logo: logo361gradmedien,
  },
  {
    name: 'MVZ Labor Münster Hafenweg GmbH, Münster',
    description:
      'Ein Tag ins Labor geschnuppert, Aufgrund von Corona leider nichts aktives gemacht, sondern nur geschaut',
    link: { href: 'https://www.labor-muenster.de/', label: 'labor-muenster.de' },
    logo: logoLabor,
  },
  {
    name: 'Förster Schulte-Everding',
    description:
      'Bäume anzeichnen, Bäume ausmessen, Wald bestand aufnehmen.',
    link: { href: 'https://www.wald-und-holz.nrw.de/ueber-uns/einrichtungen/regionalforstaemter/muensterland', label: 'wald-und-holz.nrw.de/ueber-uns/einrichtungen/regionalforstaemter/muensterland (Baumberge)' },
    logo: logoForstamt,
  },
  {
    name: 'Yara GmbH & Co. KG',
    description: 'Düngemittel mischen, Dünemittel aufs Feld bringen, Pflanzenproben entnehmen.',
    link: { href: 'https://www.yara.de/', label: 'yara.de' },
    logo: logoYara,
  },
    {
      name: 'Stacks',
      description:
        'kleiner Codingprojekte, Coden der Website',
      link: { href: 'https://stacksjs.org', label: 'stacksjs.org' },
      logo: logoStacks,
    },
  {
    name: 'Universität Münster',
    description: 'V9orlesung zum Thema Mathe und BIologie angehört, Gelände erkunden',
    link: { href: 'https://www.uni-muenster.de/de/', label: 'uni-muenster.de/de' },
    logo: logoUni,
  },
  // {
  //   name: 'DataSix',
  //   description: 'A big data analytics tool to see Facebook advertising costs and insights across your market—before you buy.',
  //   link: { href: 'https://datasix.com', label: 'datasix.com' },
  //   logo: logoDataSix,
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Praktikum() {
  return (
    <>
      <Head>
        <title>Praktikum - Aron Frye</title>
        <meta
          name="description"
          content="Meine Praktikas"
        />
      </Head>
      <SimpleLayout
        title="Meine Praktikas, bisher:"
        intro="Ich habe bis her ein paar Paktikas in verschieden bereichen von Biologie bis Informatik gemacht, bin aber immer offen für neue Erfahrungen!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {praktikum.map((praktikum) => (
            <Card as="li" key={praktikum.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={praktikum.logo}
                  alt=""
                  className="h-8 w-8 rounded-full "
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={praktikum.link.href}>{praktikum.name}</Card.Link>
              </h2>
              <Card.Description>{praktikum.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{praktikum.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
