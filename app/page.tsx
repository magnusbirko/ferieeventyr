import Header from "./Header";

const signs = ["Natur", "Historie", "Oplevelser", "Sammen ♥"];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <h1 className="logo">
            <img src="/logo.png" alt="FERIEEVENTYR" width="677" height="322" />
          </h1>
          <p className="script">Ud i verden. Ind i eventyret.</p>
          <p className="lead">
            FERIEEVENTYR gør familieturen til et rigtigt eventyr.
          </p>
          <ul className="signs" aria-label="Det handler om">
            {signs.map((s) => (
              <li key={s} className="sign">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <div className="landscape">
          <img src="/landskab.jpg" alt="En familie går mod en kyst med fyrtårn, ruin og dysse" width="1024" height="504" />
        </div>

        <section id="eventyret" className="paper">
          <div className="wrap">
            <p>
              Med et fysisk kort, missioner og små udfordringer bliver børn og
              voksne sendt ud for at opdage spændende steder, natur og
              lokalhistorie sammen.
            </p>
            <p>
              Undervejs skal familien undersøge, løse opgaver, finde spor og
              opleve stederne på en ny måde.
            </p>
          </div>
        </section>

        <section className="quote-band">
          <div className="wrap">
            <p>
              Det handler ikke om at komme hurtigst frem, men om nysgerrighed,
              fælles oplevelser og lysten til at gå på opdagelse.
            </p>
          </div>
        </section>

        <section id="univers" className="paper">
          <div className="wrap">
            <p>
              FERIEEVENTYR udvikles som et univers, der kan vokse med familien
              og åbne døren til nye eventyr over hele Danmark.
            </p>
          </div>
        </section>

        <section id="djursland" className="night">
          <div className="wrap">
            <p>
              Lige nu testes den første version på Djursland sammen med familier,
              som har lyst til at være med helt fra begyndelsen.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>FERIEEVENTYR</p>
      </footer>
    </>
  );
}
