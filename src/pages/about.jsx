import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  BlueskyIcon,
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  DiscordIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/aron.png'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Aron Frye</title>
        <meta
          name="description"
          content="I’m Chris Breuer. I live in Silicon Beach where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Ich bin Aron Frye. Ich lebe auf dem Draum	und möchte
              die Zukunft designen.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Schon seid dem ich jung war, hat mich die Technick fasziniert und 
                ich möchte sie nach meinen Vorstellungen designen. In meiner 
                Schulzeit, im Informatikunterricht und bei meinenem Praktikum bei 
                361Gradmedien in Nottuln, hat sich mein Interesse für das Programmieren 
                gezeigt. Deswegen möchte ich in Zukunft noch viel mehr über das Coden lernen.
              </p>
              <p>
                Das Einzige was mir noch mehr Spaß macht als das Coden, ist
                der Sport und andere Aktivitäten mit meinen Freunden.
                Besonders viel Spaß macht mir das Fußball spielen, deswegen
                spiele ich im Verein beim SV Borussia Darup. 
                Auch das Fahrrad fahren macht mir viel Spaß, aus diesem Grund fahre
                ich auch jetzt immer noch gerne mit Fahrrad zur Schule oder zum Fußball.
                Natürlich nicht zu vergessen, sind auch unsere Katzen, die uns mit ihrem 
                Heißhunger immer auf trapp halten.
              </p>
              <p>
                Die letzten Jahre habe ich in der Schule verbracht.
                Zu erst war ich auf der Liebfrauenschule (Sekundarschule) 
                in Nottuln und habe den Realschulabschluss gemacht.
                Nun bin ich auf dem Rupert-Neudeck-Gymnasium in Nottuln und mache
                das Zentralabitur. Da ich von der Realschule auf das Gymnasium 
                gewechselt bin habe ich natürlich nicht den allerbesten Notenschnitt
                sollte aber mein Abitur ohne größere Probleme bestehen.
              </p>
              <p>
                Jetzt muss ich lernen, lernen, lernen.
                Denn ich möchte ja mein Abitur mit hbwegs guten Noten bestehen.
                Desweiteren möchte ich wieder zurück zu mehr coden kommen und 
                meine Skills weiter verbessern.
                Und mit meinen Skills die Digitalisierung verbessern und voran bringen.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink
                href="https://bsky.app/profile/chrisbreuer.dev"
                icon={BlueskyIcon}
              >
                Follow on Bluesky
              </SocialLink>
              <SocialLink
                href="https://twitter.com/stacksjs"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink> */}
              <SocialLink
                href="https://github.com/aronso"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              {/* <SocialLink
                href="https://www.linkedin.com/in/%F0%9F%8C%B1-chris-breuer-33231765/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink> */}
              {/* <SocialLink
                href="https://www.instagram.com/somebuddyspecial/ "
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink> */}
              
              
               <SocialLink
                href=""
                icon={DiscordIcon}
                className="mt-4"
              >
                Discord: justa8669
              </SocialLink> 

              <SocialLink
                href="mailto:aronfrye06@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                aronfrye06@gmail.com
              </SocialLink>
              <SocialLink
                href="mailto:aronfrye@gmx.de"
                icon={MailIcon}
                className="mt-4"
              >
                aronfrye@gmx.de
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
