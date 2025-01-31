const LogoTwo = () => (
  <div className="relative h-14 w-60">
    <a href="/">
      <img
        src="/logo2.svg"
        alt="Logo 1"
        className={`absolute inset-0 h-14 w-auto transition-opacity duration-500 opacity-100 `}
      />
    </a>
  </div>
);

export default LogoTwo;
