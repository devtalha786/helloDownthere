import ufoSpaceship from "../../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="py-20 relative border-t border-border">
      <div className="container mx-auto px-4 text-center">
        {/* Scrolling text animation */}

        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <img
              src={ufoSpaceship}
              alt="UFO spaceship with lime green lights"
              className="w-32 h-20 mx-auto alien-glow floating"
            />
          </div>

          <h3 className="font-cosmic font-bold text-2xl md:text-[13px] text-[#CFFF7F] mb-8">
            USE THIS SPECIAL EDITION TEMPLATE, OR ONE OF OUR OTHER AWARD-WINNING
            DESIGNS, AS A STARTING POINT FOR YOUR OWN WEBSITE.
          </h3>

          {/* <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cosmic-transition font-cosmic text-lg px-8 py-6"
          >
          </Button> */}

          <button className="px-14 border rounded-full border-[#CFFF7F]  text-[#CFFF7F]">
            {" "}
            BROWSE TEMPLATES
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
