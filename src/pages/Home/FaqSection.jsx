import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "WHAT PLANET DO WE LIVE ON?",
      answer:
        "We originate from the Zeta Reticuli star system, specifically from a planet we call Zephyria in your language.",
    },
    {
      question: "ARE WE VEGETARIANS?",
      answer:
        "Indeed! We sustain ourselves through photosynthesis and energy absorption from cosmic radiation.",
    },
    {
      question: "DO WE BREATHE OXYGEN?",
      answer:
        "Not exactly. We process atmospheric gases differently and can adapt to various planetary environments.",
    },
    {
      question: "DO WE BELIEVE IN ASTROLOGY?",
      answer:
        "We view celestial bodies as navigation tools and energy sources rather than mystical guides.",
    },
    {
      question: "HOW MUCH DNA DO WE SHARE?",
      answer:
        "Surprisingly, about 12% - evidence of ancient cosmic seeding across the galaxy.",
    },
    {
      question: "DO WE LIKE EARTH?",
      answer:
        "Earth is magnificent! Your planet's biodiversity and ocean systems are truly remarkable.",
    },
    {
      question: "DO WE WATCH FOOTBALL?",
      answer:
        "We find human sports fascinating. We prefer zero-gravity quantum ball myself.",
    },
    {
      question: "HOW LONG HAVE WE BEEN AROUND?",
      answer: "Our civilization spans approximately 847,000 Earth years.",
    },
    {
      question: "HOW LONG ARE WE STAYING?",
      answer:
        "That depends on how receptive Earthlings are to cultural exchange!",
    },
    {
      question: "HOW SHOULD YOU GREET US?",
      answer:
        "A simple wave works perfectly. We also appreciate your 'peace' hand gesture.",
    },
    {
      question: "CAN YOU VISIT OUR PLANET?",
      answer:
        "With proper interstellar travel permits and environmental suits, absolutely!",
    },
    {
      question: "DO WE HAVE ANY HOBBIES?",
      answer:
        "We enjoy cosmic gardening, dimensional mathematics, and collecting rare minerals.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cosmic font-bold text-4xl md:text-5xl text-[#CFFF7F] glow-text text-center mb-16">
            FAQS
          </h2>

          <p className="text-center max-w-2xl mx-auto text-[#CFFF7F] mb-12 text-[13px] leading-[18px] font-normal">
            We understand enough about your fragile human brains to know that
            you probably have a lot of questions. Please see some of our most of
            technologically superior space beings on your intergalactic
            doorstep. Our Human Affairs Officer has prepared some answers below.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-cosmic text-primary hover:text-primary/80 cosmic-transition">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-transparent border border-[#CFFF7F]   py-4">
          <div className="whitespace-nowrap animate-marquee text-[#CFFF7F] px-10 font-cosmic text-sm">
            🛸 WE COME IN PEACE 🛸 WE COME IN PEACE 🛸 WE COME IN PEACE 🛸 WE
            COME IN PEACE 🛸 WE COME IN PEACE 🛸 COME IN PEACE 🛸 WE COME IN
            PEACE 🛸 COME IN PEACE 🛸 WE COME IN PEACE 🛸 COME IN PEACE 🛸 WE
            COME IN PEACE 🛸
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
