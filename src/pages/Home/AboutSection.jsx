import earthFromSpace from "../../../public/images/earth.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-20  relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <img
              src={earthFromSpace}
              alt="Earth as seen from space by alien visitors"
              className="w-64 h-64 mx-auto rounded-full alien-glow floating"
            />
          </div>

          <h2 className="font-cosmic text-[19px] leading-[27px] font-normal text-primary text-[#CFFF7F] mb-12">
            GREETINGS, EARTHLINGS!
          </h2>

          <div className="space-y-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <p className="text-[13px] leading-[18px] font-normal text-primary text-[#CFFF7F]">
              What does a highly advanced civilization have to do to get noticed
              around here?
            </p>

            <p className="text-[13px] leading-[18px] font-normal text-primary text-[#CFFF7F]">
              We hail from the constellation Canis Minor and we’re here to
              harvest your organs and drain your oceans for rocket fuel.
              Kidding! That’s more of a Canis Major vibe.
            </p>

            <p className="text-[13px] leading-[18px] font-normal text-primary text-[#CFFF7F]">
              Given that your human civilization has not yet achieved
              interstellar travel, you are likely unaware of how lonely space
              is. But we are aware! So we hooked up some garvanplows to a couple
              of flargenbows (and a minoflor, just for giggles) and set out to
              find some friends in the cosmos.
            </p>

            <p className="text-[13px] leading-[18px] font-normal text-primary text-[#CFFF7F]">
              For the last hundred years, we’ve been trying to make contact with
              you, to no avail. But then our Lead Human Researcher made a huge
              breakthrough: nothing is real to humans until it is on the
              internet. So with the help of your Squarespace technology, we
              sincerely hope the 55,419th time is the charm!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
