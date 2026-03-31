import PropTypes from "prop-types";

function PageHero({ title, subtitle, small = false }) {
  return (
    <section className={`hero ${small ? "hero--small" : ""}`.trim()}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default PageHero;
