import { useState } from 'react';

const PROGRAM = [
  ['FRI 8:00 PM', 'Drum night at Iga Idunganran', 'Bàtá and gègè drums answer each other till late. Bring a wrapper if you wish to sit with the elders.'],
  ['SAT 5:30 AM', 'Dawn gathering, Idumota', 'The white robes assemble in silence. Spectators line the kerb; the road closes at 6 AM.'],
  ['SAT 7:00 AM', 'Procession sets out', 'The leading Ẹ̀yọ crosses from Idumota towards Obun Eko, staff raised, incense ahead.'],
  ['SAT 9:30 AM', 'Farewell at the lagoon front', 'The final prayers are given facing the water. The robes return to their houses in quiet.'],
  ['SAT 12:00 PM', 'Roads reopen', 'Eko Atlantic–Marina corridor reopens; markets resume trading.'],
] as const;

const ROUTE = ['Idumota', 'Obun Eko', 'Ebute-Ero', 'Campos Square', 'Iga Idunganran', 'Marina waterfront'] as const;

const TICKETS = [
  ['Standard wristband', '₦3,000', 'Procession viewing zones, drum night entry'],
  ['Child wristband', '₦1,000', 'Under 12, accompanied at all times'],
  ['Family pack', '₦8,000', '2 adults + 3 children, reserved kerb section'],
  ['Patron wristband', '₦25,000', 'Shaded seating at Campos, refreshments, archives gift'],
] as const;

const NOTES = [
  'The Ẹ̀yọ are sacred figures, not costumes — do not touch or block them.',
  'Photographs from the kerb are fine; flashes and drones are not.',
  'White attire honours the occasion. Wear it if you are joining a house.',
  'Loud farewell calls are made only at the lagoon front, never mid-route.',
  'Follow the marshals; the procession has right of way on every crossing.',
] as const;
export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="ey">
      <nav className={menu ? 'wnav open' : 'wnav'}>
        <a href="#top">Ẹ̀yọ ’27</a>
        <div className="g" onClick={() => setMenu(false)}>
          <a href="#programme">Programme</a><a href="#route">Route</a><a href="#tickets">Wristbands</a><a href="#notes">Etiquette</a>
          <a className="wb" href="#tickets">Get wristband</a>
        </div>
        <button className="wbtn" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>MENU</button>
      </nav>
      <header className="poster" id="top">
        <p className="p-edition">Lagos Island · Easter Saturday · Third Procession</p>
        <h1>Ẹ̀yọ</h1>
        <p className="p-sub">Procession of the white robes</p>
        <p className="p-meta">One morning each year, the streets from <b>Idumota to the Marina</b> belong to the ancestors. Stand at the kerb, keep your voice low, and let the robes pass.</p>
        <div className="p-dots" aria-hidden="true"><span /><span /><span /><span /></div>
      </header>
      <section className="osec" id="programme">
        <div className="ohead"><span className="n">01</span><h2>Programme</h2><p>All times follow the drum — arrive early, the road moves on its own clock.</p></div>
        <div className="prog">
          {PROGRAM.map((p) => (
            <div className="prow" key={p[0]}>
              <div className="t">{p[0]}</div>
              <div><h3>{p[1]}</h3><p>{p[2]}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="osec" id="route">
        <div className="ohead"><span className="n">02</span><h2>The route</h2><p>Road closures from 6 AM to 12 PM. Marshals wear gold armbands.</p></div>
        <div className="route">
          {ROUTE.map((r, i) => (
            <div className="rstop" key={r}>
              <span className={'rdot' + (i === 0 ? ' start' : i === ROUTE.length - 1 ? ' end' : '')} />
              <div><b>{r}</b><small>Stop {i + 1} of {ROUTE.length}</small></div>
            </div>
          ))}
        </div>
      </section>
      <section className="osec" id="tickets">
        <div className="ohead"><span className="n">03</span><h2>Wristbands</h2><p>Proceeds fund the drums, the marshals and the robes&apos; upkeep.</p></div>
        <div className="tkts">
          {TICKETS.map((t) => (
            <div className="tkt" key={t[0]}>
              <h3>{t[0]}</h3>
              <div className="tp">{t[1]}</div>
              <p>{t[2]}</p>
              <a href="tel:08122223344">Reserve</a>
            </div>
          ))}
        </div>
      </section>
      <section className="osec" id="notes">
        <div className="ohead"><span className="n">04</span><h2>Etiquette of the procession</h2></div>
        <ul className="notes">
          {NOTES.map((n) => <li key={n}>{n}</li>)}
        </ul>
        <p className="lineage">Ẹ̀yọ has walked this island for more than two centuries. We keep the day because the city keeps its memory.</p>
      </section>
      <footer className="ofoot">
        <span>© {new Date().getFullYear()} Eko Ẹ̀yọ Festival Committee · Iga Idunganran, Lagos Island.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}