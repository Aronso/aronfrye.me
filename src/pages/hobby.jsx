import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import logoDarup from '@/images/logos/darup.png'

import { SimpleLayout } from '@/components/SimpleLayout'
function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}


export default function () {
  return (
    <>
      <Head>
        <title>Hobby - Aron Frye</title>
        <meta
          name="description"
          content="Fußball, Freunde, Zocken"
        />
            </Head>
      <SimpleLayout
        itle="Meine Hobbys"
        intro="Fußball, Freunde, Zocken"
      >
        
        <div className="space-y-20">
          <ToolsSection title="Fußball">
            <Tool title="SV Borussia Darup">
              Ich spiele bei Borussia Darup in der A-Jugend und warscheinlich nächstes Jahr in der Zweiten.
              Meine Position ist der linke Verteidiger, ich könnte auch im linken Mittelfeld spielen.
              Auch wenn wir nicht jedes Spiel gewinnen, macht es mir sehr viel Spaß mit meinen Teamkollegen zu spielen,
              da sie alle sehr cool drauf sind und es fast immer eine gute Stimmung gibt.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Freunde">
            <Tool title="Treffen, Schule, Fußball">
              Mit meinen Freunden verbringe ich selbstverständlich gerne Zeit.
              Auch wenn jetzt sich viele alte Freundschaften aus einander leben, macht es mir sehr viel Spaß mich mit ihnen zu treffen 
              oder sie zumindest beim Fußball oder in der Schule zu sehen und mit ihnen dort Zeit zu verbringen.
            </Tool>
          </ToolsSection> 
          <ToolsSection title="Zoken">
            <Tool title="Vorwiegend Minecraft aber auch Brawlstars">
               Wie fast jeder junge Mensch, habe ich sehr viel Spaß mich an den PC zu setzten und zu spielen.
               Ich spiele vorallem gerne "Minecraft", dort auf dem Server Hypixel Skyblock.
               Aber auch das Handyspiel "Brawlstars" macht mir Spaß es mit Freunden oder meiner Schwester zu spielen.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
    
  )
}
