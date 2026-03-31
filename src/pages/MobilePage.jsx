import PageHero from "../components/PageHero";

function MobilePage() {
  return (
    <>
      <PageHero
        small
        title="Mobile Phone Technology"
        subtitle="Internal architecture and how smartphones process information."
      />
      <main className="container">
        <section className="section">
          <h2>Introduction</h2>
          <div className="card">
            <p>
              Mobile phones are compact electronic communication devices that
              combine computing, multimedia processing and wireless
              communication. Modern smartphones are capable of performing tasks
              such as internet browsing, video playback, gaming and
              photography.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>Internal Components</h2>
          <div className="image-box">
            <img
              src="https://c7.alamy.com/comp/2AD363W/smartphone-structure-cutaway-computer-illustration-showing-the-internal-components-of-a-typical-smartphone-and-the-metals-involved-in-their-manufactu-2AD363W.jpg"
              alt="Smartphone internal components"
            />
          </div>
          <div className="card">
            <ul>
              <li><b>Processor (SoC)</b> - Executes instructions and controls the device.</li>
              <li><b>RAM</b> - Temporary memory used by applications.</li>
              <li><b>Storage</b> - Stores operating system and user files.</li>
              <li><b>Battery</b> - Provides electrical power.</li>
              <li><b>Sensors</b> - Detect motion, light and orientation.</li>
              <li><b>Communication Module</b> - Enables cellular, Wi-Fi and Bluetooth connectivity.</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2>How Mobile Phones Work</h2>
          <div className="card">
            <p>
              When a user touches the screen, the touch sensor detects the
              position and sends this information to the processor.
            </p>
            <p>
              The processor interprets the input and executes commands in the
              operating system. Applications are loaded into RAM where they run
              temporarily.
            </p>
            <p>
              If communication is required, the communication module connects
              the device to cellular towers or Wi-Fi networks.
            </p>
            <p>
              The display controller converts graphical data into signals that
              control pixels on the screen, allowing the user to see images and
              interface elements.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>Video Explanation</h2>
          <iframe
            src="https://www.youtube.com/embed/1JZG9x_VOwA"
            title="How does your mobile phone work? | ICT #1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>
      </main>
    </>
  );
}

export default MobilePage;
