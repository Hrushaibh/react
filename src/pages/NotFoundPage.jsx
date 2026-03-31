import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

function NotFoundPage() {
  return (
    <>
      <PageHero small title="Page Not Found" subtitle="The page you requested does not exist." />
      <main className="container">
        <div className="card">
          <Link to="/">
            <button type="button">Go Home</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
