const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen border-b border-[#CFFF7F]  mt-12 flex items-center justify-center relative starfield overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-cosmic font-black  text-6xl md:text-8xl lg:text-[242px] leading-[302px] text-[#CFFF7F]  mb-10 tracking-[-0.1em]">
          HELLO
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex absolute sm:top-0 md:top-32 sm:left-0 md:left-80 justify-center items-end">
            <img
              src="../../../public/images/middle-alien.webp"
              className="md:h-[600px] sm:h-[300px]"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <h2 className="font-cosmic font-black  text-6xl md:text-8xl lg:text-[162px] leading-[302px] text-[#CFFF7F]  mb-10 z-50">
              DOWN
            </h2>
            <h2 className="font-cosmic font-black  text-6xl md:text-8xl lg:text-[162px] leading-[302px] text-[#CFFF7F]  mb-10 z-50">
              THERE
            </h2>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary rounded-full opacity-50 animate-bounce"></div>
      </div>
    </section>
  );
};

export default HeroSection;
