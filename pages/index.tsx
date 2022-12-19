import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Fredrik IT konsulent</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className="bg-checkerboard container">
        <Image src="/graphics/welcome.gif" width={280} height={112} alt=""/>
        <h1 className="text-[red]">Til Fredrik sin hjemme side!</h1>
        <Image className="m-4" src="/images/smile.jpg" width={250} height={250} alt=""/>
        <h2>Professional IT konsulent !</h2>
      </header>

      <section className="bg-tile container">
        <h1>Mine tjenester</h1>
        <ul className="grid grid-cols-2 p-5">
          <li className="p-5 flex items-center justify-center flex-col text-center">
            <Image src="/graphics/welcoming-desktop-computer-cartoon-clipart.png" width={100} height={100} alt=""/>
            <h3>Bygge PC</h3>
            <ol className="text-slate-300">
              <li>Montere PC deler i kabinett - 1000kr</li>
            </ol>
          </li>
          <li>
            <Image src="/graphics/IMG_0776.jpg" width={100} height={100} alt=""/>
            <h3>Hjelpe tante Erica</h3>
            <ol className="text-slate-300">
              <li>
                Hjelp med PC og andre ting
              </li>
            </ol>
          </li>
          <li>
            <h3>Og masse mer</h3>
            <ol className="text-slate-300">
              <li>
                Ring pappa for mer info
              </li>
            </ol>
          </li>
        </ul>
      </section>

      <section className="bg-star container">
        <h1>Noen bilder av meg</h1>
        <ul className="grid grid-cols-2 pt-5 gap-5">
          <li>
            <Image src="/images/319311200_880852649605876_2276400631493489912_n.jpg" width={150} height={150} alt=""/>
          </li>
          <li>
            <Image src="/images/2007_0826ChDfKonf0143.jpg" width={150} height={150} alt=""/>
          </li>
          <li>
            <Image src="/images/10561363066_6bea0ac1c4_o.jpg" width={150} height={150} alt=""/>
          </li>
          <li>
            <Image src="/images/319194719_918210835779574_4486905254310313051_n.jpg" width={150} height={150} alt=""/>
          </li>
          <li>
            <Image src="/images/319398768_3070022466629776_4999838620125427481_n.jpg" width={150} height={150} alt=""/>
          </li>
          <li>
            <Image src="/images/img_0455_28426287943_o.jpg" width={150} height={150} alt=""/>
          </li>
        </ul>
      </section>

      <section className="bg-blueball container">
        <h1>Prøv mitt julegave API</h1>
        <div className="m-10">
          <p style={{color: "blue"}}>
            https://fredrik.defrene.no/api/julegave
          </p>
          <br/>
          <strong>Method: POST</strong>
          <br/>
          <b>Body:</b>
          <ol className="list-disc pl-5">
            <li>
              <b>Avsender: </b><i>string</i>
            </li>
            <li>
              <b>Mottaker: </b><i>string</i>
            </li>
          </ol>
        </div>
        <Image src="/graphics/hhotlinks.gif" width={382} height={66} alt=""/>

      </section>

      {/*<div className="prices">*/}
      {/*  <h1>Priser</h1>*/}
      {/*  <h2>*/}
      {/*    Du finner bare bedre priser hos to andre hosting-bilder i Porsgrunn!*/}
      {/*  </h2>*/}
      {/*  <ul className="bilder-list">*/}
      {/*    <li>*/}
      {/*      <img src="img/oldman_walking_sm_wht.gif"/>*/}
      {/*      <h3>Henry (billigst)</h3>*/}
      {/*      <ol>*/}
      {/*        <li>Plass på ei gammel server i kjellerstua mi</li>*/}
      {/*        <li>10 mb fillagring</li>*/}
      {/*        <li>Maks html3</li>*/}
      {/*        <li>ingen CSS-støtte</li>*/}
      {/*        <li>Javascript må støtte IE6</li>*/}
      {/*        <li>*/}
      {/*          ** OBS, serveren går ned av og til. Når bikkja mi Horg pisser på*/}
      {/*          strømforsyninga.*/}
      {/*        </li>*/}
      {/*      </ol>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <img src="img/bmuscle.gif"/>*/}
      {/*      <h3>Nils (middels)</h3>*/}
      {/*      <ol>*/}
      {/*        <li>Del plass på ei flunka ny server på kjøkkenet mitt</li>*/}
      {/*        <li>*/}
      {/*          10 gb lagring på ekstern Western Digital USBDisk (ser ut som ei*/}
      {/*          bok!)*/}
      {/*        </li>*/}
      {/*        <li>Støtte for CSS2</li>*/}
      {/*        <li>Du kan bruke XHTML!</li>*/}
      {/*        <li>Kommer med Angular</li>*/}
      {/*        <li>*/}
      {/*          ** OBS, Har mista root-passordet, så serveren kan være stabil av*/}
      {/*          og til.*/}
      {/*        </li>*/}
      {/*      </ol>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <img src="img/Misc_muscle_man.gif"/>*/}
      {/*      <h3>Carl (Proff)</h3>*/}
      {/*      <ol>*/}
      {/*        <li>*/}
      {/*          Denne serveren står ikke i huset mitt, men ute i vedskjulet. Der*/}
      {/*          er det dritkaldt, som gir optimale forhold!*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          Du får tilgang på hele serveren, og kan sette inn den disken du*/}
      {/*          vil selv. Kult om du tar med en big meny fra bergbys nårru stikker*/}
      {/*          innom. Uten dressing!*/}
      {/*        </li>*/}
      {/*        <li>State of the art html4. Nyeste av det nye.</li>*/}
      {/*        <li>Støtte for mongodb.</li>*/}
      {/*        <li>*/}
      {/*          4 gratis e-postadresser følger med. (dittnavn@tomshosting.no)*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          ** OBS! 99% oppetid, men i fjor gikk den ned pga naboen min Gerd*/}
      {/*          kjørte grasskleppern inn i skjulet mitt.*/}
      {/*        </li>*/}
      {/*      </ol>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*  <p>De tredje beste hostingprisene i Porsgrunn. <u>Garantert!</u></p>*/}
      {/*</div>*/}

      {/*<div className="kontakt-meg">*/}
      {/*  <h1>Klar til å sette i gang?</h1>*/}
      {/*  <h2>*/}
      {/*    mail meg da vel:*/}
      {/*    <a href="mailto:tom@tomshosting.no">tom@tomshosting.no</a>*/}
      {/*  </h2>*/}
      {/*  <img src="img/email_bleu.gif"/>*/}
      {/*</div>*/}
      {/*<div className="links">*/}
      {/*  <h1>Vi (jeg) tilbyr allerede mine bilder til</h1>*/}
      {/*  <h2>*/}
      {/*    Norges første nettavis for utviklere*/}
      {/*    <a href="https://www.kode24.no">kode24.no</a>*/}
      {/*  </h2>*/}
      {/*  <img src="img/hhotlinks.gif"/>*/}
      {/*</div>*/}
    </>
  )
}
