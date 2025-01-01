import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
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

export default function Uses() {
  return (
    <>
      <Head>
        <title>Jobs - Aron Frye</title>
        <meta
          name="description"
          content="Meine Jobs die ich bisher gemacht habe"
        />
      </Head>
      <SimpleLayout
        title="Meine Jobs die ich bisher gemacht habe"
        intro="Meine Minijobs in den ich bisher gearbeitet hab und Spaß gehabt habe :)"
      >
        <div className="space-y-20">
          <ToolsSection title="Babyschwimmen">
            <Tool title="Coesfeld Kinder Betreuung">
              ICh habe einer netten Dame beim Babyschwimmen ausgefholfen. Wir haben von Babys bis Kleinkindern das schwimmen beigebracht. 
              Dabei haben wir aufgepasst, dass keine Kinder untergehen, sich nicht überanstrengen und das sie das Schwimmen richtig lernen.
            </Tool>
            {/* <Tool title="Apple Studio Display">
              Coming from LG’s 27” UltraFine 5K IPS Monitor, I had pretty high expectations for a display.
              The Apple Studio Display reached them, and went beyond. Its sleek design is a wonderful bonus!
            </Tool>
            <Tool title="MX Keys for Mac">
              Love the travel time of this keyboard. Feels similar to the MacBooks, but a little more travel.
              It’s designed to work seamlessly with Macs & iPads. A pretty decent keyboard for developers.
            </Tool>
            <Tool title="MX Master 3S">
              I’ve been using the MX Master 3 for a few years now and it’s been great. The MX Master 3S feels similar, 
              with a few minor improvements, like the clicks. The scroll wheel is great as always!
            </Tool> */}
          </ToolsSection>
          <ToolsSection title="Gartenarbeiten">
            <Tool title="Gärtnerei Neiteler">
              Ich habe mit einem Freund, beid der Gärtnerei NEiteler wausgeholfen.
              Wir haben z.B. Salatpflanzen eingepflanz und die Treibhäuser frei geräumt, sodass sie für den Winter fertig gemaht werden können.
            </Tool>
            {/* <Tool title="iTerm2">
              Jeffrey Way recommended it years ago during one of the Laracasts
              videos I was watching. Stuck with it ever since, great terminal.
              <em> Currently exploring Warp.</em>
            </Tool>
            <Tool title="Stacks">
               The Stacks Desktop app is key to my productivity.
               It supercharges my local development experience,
               and automates management of cloud resources.
            </Tool>
            <Tool title="TablePlus">
               Over the years, I have used many database tools,
               and TablePlus is the best I have used.
               Great software for working with databases.
            </Tool>
            <Tool title="Cursor">
              Cursor, just like VS Code, is an amazing editor that ships with a powerfulAI integration—one that is super easy to use.
            </Tool>
            <Tool title="Supermaven">
              Similar to GitHub Copilot, Supermaven is another AI-powered tool that suggests code snippets incredibly well, and fast.
            </Tool>*/}
          </ToolsSection> 
          {/* <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for everything.
            </Tool> 
          </ToolsSection>*/}
          <ToolsSection title="Kinderbetreung">
            <Tool title="Abenteuer Hof Bargert">
              Ich habe bei der Kinderbetreung des Abenteuerhof Bagert mit geholfen. Wir mussten die Kinder belustigen,
              aufpassen, dass sie sich und die Tiere nicht verletzen und das sie immer Spaß haben. 
            </Tool>
            {/* <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool> */}
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
