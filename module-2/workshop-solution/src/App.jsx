import { useState } from "react";
import OraCard from "./components/OraCard";

const App = () => {
  const [teljesOraszam, setTeljesOraszam] = useState(32);
  const [orak, setOrak] = useState([
    {
      id: 1,
      title: "Algoritmusok alapjai",
      description:
        "Az algoritmusok alapjai, az algoritmusok jellemzői, az algoritmusok felépítése, az algoritmusok leírása, az algoritmusok jelölése, algoritmusok példák.",
    },
    {
      id: 2,
      title: "Változók és adattípusok",
      description:
        "Változó fogalma, típusai, deklarálás, értékadás, típusok, típuskonverzió, operátorok, kifejezések, utasítások.",
    },
    {
      id: 3,
      title: "Feltételes elágazások",
      description:
        "Feltételes szerkezetek, if, if-else, if-else if, switch-case, ternary operátor, logikai operátorok.",
    },
  ]);

  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <hr />

      <section className="row">
        <div className="text-lg">Teljes óraszám:</div>
        <div className="row" style={{ gap: "0.5rem" }}>
          <button
            className="icon-button"
            onClick={() => setTeljesOraszam((prev) => prev + 1)}
          >
            +
          </button>
          <span className="font-semibold">{teljesOraszam}</span>
          <button
            className="icon-button"
            onClick={() => setTeljesOraszam((prev) => Math.max(prev - 1, 4))}
          >
            -
          </button>
        </div>
      </section>

      <section className="row">
        <div className="text-lg">Hiányzó órák:</div>
        <span className="font-semibold">{teljesOraszam - orak.length}</span>
      </section>

      <hr />

      <section style={{ padding: "0 2rem" }}>
        <button className="temakor-button">Témakörök elrejtése</button>
        <ul className="temakor-ul">
          <li>Algoritmusok alapjai</li>
          <li>Változók és adattípusok</li>
          <li>Feltételes elágazások</li>
          <li>Ciklusok</li>
          <li>Függvények</li>
          <li>Adatszerkezetek (tömbök, listák)</li>
          <li>Hibakezelés alapjai</li>
          <li>Be- és kimeneti műveletek</li>
        </ul>
      </section>

      <hr />

      <form action="#">
        <div className="col">
          <input type="text" placeholder="Cím" />
          <textarea placeholder="Leírás" rows="5"></textarea>
        </div>
        <aside className="col">
          <button className="btn">Hozzáadás</button>
          <button className="btn outline">Mégsem</button>
        </aside>
      </form>

      <section className="ora-grid">
        {orak.map((ora, index) => (
          <OraCard key={ora.id} ora={ora} index={index} />
        ))}
      </section>
    </main>
  );
};

export default App;
