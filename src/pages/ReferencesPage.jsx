import PageHero from "../components/PageHero";

function ReferencesPage() {
  return (
    <>
      <PageHero
        small
        title="References"
        subtitle="Trusted external resources to continue your study."
      />
      <main className="container">
        <section className="section">
          <div className="card">
            <ul>
              <li>Wikipedia - LCD Television Technology</li>
              <li>HowStuffWorks - Inside a Cell Phone</li>
              <li>Basic Electronics Tutorials</li>
              <li>YouTube Educational Electronics Channels</li>
            </ul>
            <p className="helper-text">
              Use these links as starting points and always cross-check
              information with multiple sources.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ReferencesPage;
