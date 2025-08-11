import earthFromSpace from "../../../public/images/earth.webp";

const AboutSection = () => {
  return (
    <section id="about"  className="py-20 landing relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <img
              src={earthFromSpace}
              alt="Earth as seen from space by alien visitors"
              className="w-64 h-64 mx-auto rounded-full alien-glow floating"
            />
          </div>

          <h2 className="font-cosmic font-bold text-4xl md:text-5xl text-primary text-[#CFFF7F] mb-12">
            GREETINGS, EARTHLINGS!
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-foreground">
              What does a highly advanced civilization have to do to get noticed
              around here?
            </p>

            <p className="text-muted-foreground">
              We hail from the constellation{" "}
              <span className="text-primary">Canis Minor</span> and we're here
              to make our grand debut, your oceana for rocket fuel, kidnap!
              That's more of a Lewis Major vibe.
            </p>

            <p className="text-muted-foreground">
              Given that our human civilization has not yet achieved
              interstellar travel, you are likely unaware of how lovely space
              is. We've had the pick of hooked garbage graveyards so a couple of
              film-wrapped Carls we know, and they all say: find some friends in
              the cosmos.
            </p>

            <p className="text-muted-foreground">
              For the past thousand years, we've been trying to make contact
              with earthlings. But then we dive down Super Neophyte-like eyes
              have captured countless UFO footage which has been buried by your
              internet. So with the help of your Squarespace technology, we
              successfully hope the big-dish life is in the stars!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
