import ufoSpaceship from "@/assets/ufo-spaceship.jpg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 relative border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <img
              src={ufoSpaceship}
              alt="UFO spaceship with lime green lights"
              className="w-32 h-20 mx-auto alien-glow floating"
            />
          </div>

          <h3 className="font-cosmic font-bold text-2xl md:text-3xl text-primary glow-text mb-8">
            USE THIS SPECIAL EDITION TEMPLATE, OR ONE OF OUR OTHER AWARD-WINNING
            DESIGNS, AS A STARTING POINT FOR YOUR OWN WEBSITE.
          </h3>

          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cosmic-transition font-cosmic text-lg px-8 py-6"
          >
            BROWSE TEMPLATES
          </Button>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>🛸</span>
              <span className="font-cosmic">WE COME IN PEACE</span>
              <span>🛸</span>
            </div>

            <div className="mt-4 text-xs text-muted-foreground font-cosmic">
              Create A Site Like This
              <br />
              Powered by cosmic energy
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling text animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-primary/10 py-2">
        <div className="whitespace-nowrap animate-marquee text-primary font-cosmic text-sm">
          🛸 WE COME IN PEACE 🛸 WE COME IN PEACE 🛸 WE COME IN PEACE 🛸 WE COME
          IN PEACE 🛸 WE COME IN PEACE 🛸
        </div>
      </div>
    </footer>
  );
};

export default Footer;
