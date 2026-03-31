function Footer({ onOpenCookieSettings }) {
  return (
    <footer>
      Electronics Learning Platform ·{" "}
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onOpenCookieSettings();
        }}
      >
        Cookie preferences
      </a>
    </footer>
  );
}

export default Footer;
