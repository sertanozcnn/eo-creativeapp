/* eslint-disable react/prop-types */
const Logo = ({ isScrolled }) => (
  <div className="relative h-14 w-60">
    {/* Logo 1 (Varsayılan Logo) */}

    <a href="/">
      <img
        src="/white_logo.svg"
        alt="Logo 1"
        className={`absolute inset-0 h-13  w-auto transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />
    </a>
    {/* Logo 2 (Scroll Edildiğinde Gözükecek Logo) */}
    <a href="/">
      <img
        src="/black_logo.svg"
        alt="Logo 2"
        className={`absolute inset-0 h-13 w-auto transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  </div>
);

export default Logo;
