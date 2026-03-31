import { useMemo } from "react";
import PageHero from "../components/PageHero";

function CertificatePage() {
  const certificateId = useMemo(
    () => `ELEC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    [],
  );

  return (
    <>
      <PageHero
        small
        title="Certificate of Completion"
        subtitle="Recognizing achievement in Electronic Devices Fundamentals"
      />
      <main className="container">
        <section className="certificate-wrapper">
          <div className="certificate-card">
            <div className="certificate-header">
              <p className="certificate-label">This is to certify that</p>
              <h2 className="certificate-name">[ Student Name ]</h2>
            </div>
            <p className="certificate-body">
              has successfully completed the learning quiz on{" "}
              <span className="highlight">Electronic Devices</span> and
              demonstrated a solid understanding of key concepts including
              diodes, transistors, rectifiers, and basic amplifier operation.
            </p>
            <div className="certificate-meta">
              <p>
                <b>Course:</b> Electronic Devices Fundamentals
              </p>
              <p>
                <b>Assessment:</b> Electronic Devices Learning Quiz
              </p>
              <p>
                <b>Status:</b> Completed with Merit
              </p>
            </div>
            <div className="certificate-footer">
              <div className="certificate-footer-item">
                <span className="line" />
                <p>Instructor / Mentor</p>
              </div>
              <div className="certificate-footer-item">
                <span className="line" />
                <p>Date of Completion</p>
              </div>
              <div className="certificate-footer-item">
                <span className="line" />
                <p>Certificate ID: {certificateId}</p>
              </div>
            </div>
          </div>
          <div className="certificate-actions">
            <button type="button" onClick={() => window.print()}>
              Print / Save as PDF
            </button>
            <p className="helper-text">
              Tip: Use your browser print dialog and choose <b>Save as PDF</b>{" "}
              to download this certificate.
            </p>
          </div>
        </section>
        <section className="section certificate-details">
          <h2>What you have achieved</h2>
          <div className="grid">
            <div className="card">
              <h3>Core Topics Covered</h3>
              <ul>
                <li>PN junction behavior and diode characteristics</li>
                <li>Rectification and basic power supply circuits</li>
                <li>BJT and FET operation modes</li>
                <li>Biasing techniques and stability</li>
              </ul>
            </div>
            <div className="card">
              <h3>Skills Demonstrated</h3>
              <ul>
                <li>Interpreting circuit diagrams</li>
                <li>Relating device parameters to real circuits</li>
                <li>Applying theory to solve conceptual questions</li>
                <li>Identifying correct device usage in a circuit</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CertificatePage;
