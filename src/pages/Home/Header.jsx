const Header = () => {
  return (
    <header className="relative top-0 w-full z-50 ">
      <div className="container mx-auto px-16 py-4">
        <nav className="flex items-center justify-between">
          {/* <div className="font-cosmic font-bold text-xl text-primary glow-text">
            GALACTIC HQ
          </div> */}

          <img src="/images/logo.png" alt="Galactic HQ Logo" className="h-10" />
          <div className="flex items-center flex-col">
            <div className="hidden md:flex  space-x-8">
              <a
                href="#home"
                className="cosmic-transition text-[#CFFF7F] hover:text-primary"
              >
                VISIT SPACECRAFT
              </a>
              <a
                href="#about"
                className="cosmic-transition text-[#CFFF7F] hover:text-primary"
              >
                OUR HISTORY
              </a>
            </div>
            <a
              href="#faq"
              className="cosmic-transition text-[#CFFF7F] hover:text-primary"
            >
              BODILY COVERINGS
            </a>
          </div>
          <h2
            onClick={() => (window.location.href = "/cart")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cosmic-transition font-cosmic alien-glow"
          >
            CART (0)
          </h2>
        </nav>
      </div>
    </header>
  );
};

export default Header;
