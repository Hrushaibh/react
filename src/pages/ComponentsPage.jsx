import PageHero from "../components/PageHero";

function ComponentsPage() {
  return (
    <>
      <PageHero
        small
        title="Electronic Components"
        subtitle="Meet the fundamental building blocks of every circuit."
      />
      <main className="container">
        <section className="section">
          <h2>Basic Components</h2>
          <div className="grid">
            <div className="card">
              <h3>Resistor</h3>
              <p>Limits the flow of electric current and divides voltage in a circuit.</p>
            </div>
            <div className="card">
              <h3>Capacitor</h3>
              <p>Stores electrical energy temporarily and smooths voltage variations.</p>
            </div>
            <div className="card">
              <h3>Diode</h3>
              <p>Allows current to flow in only one direction and is used for rectification.</p>
            </div>
            <div className="card">
              <h3>Transistor</h3>
              <p>Acts as an electronic switch or amplifier in digital and analog circuits.</p>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>Simple Component Flow</h2>
          <div className="diagram">
            <div className="box">Battery</div>
            <div className="arrow">→</div>
            <div className="box">Resistor</div>
            <div className="arrow">→</div>
            <div className="box">LED (Diode)</div>
          </div>
          <p className="helper-text">
            Current flows from the battery through the resistor (to limit current)
            and then through the LED, which lights up when the current is within
            a safe range.
          </p>
        </section>
      </main>
    </>
  );
}

export default ComponentsPage;
