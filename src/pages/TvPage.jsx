import PageHero from "../components/PageHero";

function TvPage() {
  return (
    <>
      <PageHero
        small
        title="Television Technology"
        subtitle="Internal structure, signal flow and working principles."
      />
      <main className="container">
        <section className="section">
          <h2>Introduction</h2>
          <div className="card">
            <p>
              Television is an electronic device used for receiving broadcast
              signals and displaying moving images with sound. Modern
              televisions use LCD or LED technology to display images using
              millions of pixels.
            </p>
            <p>
              Televisions receive signals through antennas, cable systems or
              internet streaming. These signals contain encoded video and audio
              information. The internal electronics decode these signals and
              convert them into visual images and sound.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>Main Internal Components</h2>
          <div className="image-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Cptvdisplay.jpg"
              alt="Television internal components"
            />
          </div>
          <div className="card">
            <ul>
              <li><b>Power Supply Unit</b> - Converts AC electricity into DC power.</li>
              <li><b>Main Board</b> - Processes video and audio signals.</li>
              <li><b>T-CON Board</b> - Synchronizes display signals.</li>
              <li><b>Display Panel</b> - Creates images using pixels.</li>
              <li><b>Backlight</b> - Illuminates the LCD screen.</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2>How Television Works</h2>
          <div className="card">
            <p>
              The working of a television begins when a broadcast signal is
              received through an antenna or cable connection.
            </p>
            <p>
              The signal is sent to the main board where the encoded digital
              data is decoded into video frames and audio signals.
            </p>
            <p>
              The T-CON board converts this information into electrical signals
              that control the pixels in the display panel.
            </p>
            <p>
              The backlight behind the LCD panel provides illumination so that
              the images become visible on the screen.
            </p>
            <p>
              Finally, audio signals are sent to speakers which produce sound
              synchronized with the images.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>Signal Flow Diagram</h2>
          <div className="diagram">
            <div className="box">Signal Input</div>
            <div className="arrow">→</div>
            <div className="box">Main Board</div>
            <div className="arrow">→</div>
            <div className="box">T-CON</div>
            <div className="arrow">→</div>
            <div className="box">Display Panel</div>
          </div>
        </section>
        <section className="section">
          <h2>Educational Video</h2>
          <iframe
            src="https://www.youtube.com/embed/xAMhX3Drq14"
            title="OLED Displays, How do they work?"
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

export default TvPage;
