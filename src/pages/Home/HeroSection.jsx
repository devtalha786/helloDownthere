import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookCard from "./BookCard";
// Import generated images
import bookNavigatingExhibition from "../../../public/images/book-navigating-exhibition.jpg";
import bookUntitled37 from "../../../public/images/book-untitled-37.jpg";
import bookVariableFonts from "../../../public/images/book-variable-fonts.jpg";
import magazineWinding from "../../../public/images/magazine-winding.jpg";
import gifbook from "../../../public/images/animation_1.gif";
import gifsec from "../../../public/images/graphic.webp";
const HeroSection = () => {
  const staffPicks = [
    {
      id: 1,
      title: "Untitled No.37",
      price: "60.00",
      image: bookUntitled37,
      backgroundColor: "#F4D03F",
    },
    {
      id: 2,
      title: "A Curated Collection",
      price: "45.00",
      image: bookNavigatingExhibition,
      backgroundColor: "#BB9FE5",
    },
  ];

  const additionalBooks = [
    {
      id: 3,
      title: "Variable Fonts",
      price: "45.00",
      image: bookVariableFonts,
      backgroundColor: "#7DCEA0",
    },
    {
      id: 4,
      title: "On Flight",
      price: "35.00",
      image: bookNavigatingExhibition,
      backgroundColor: "#D7BDE2",
    },
    {
      id: 5,
      title: "A Residency in Portraits",
      price: "55.00",
      image: bookUntitled37,
      backgroundColor: "#F8C471",
    },
  ];

  const magazines = [
    {
      id: 6,
      title: "Magnetize",
      price: "35.00",
      image: bookVariableFonts,
      backgroundColor: "#2C3E50",
    },
    {
      id: 7,
      title: "Winding",
      price: "28.00",
      image: magazineWinding,
      backgroundColor: "#27AE60",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* New Releases Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="max-w-md mx-auto">
              <BookCard
                // title="Navigating Exhibition"
                // author="Mark Nove"
                // price="45.00"
                image={bookNavigatingExhibition}
                backgroundColor="#2ECC71"
                featured={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Picks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/3">
              <h2 className="text-[34px] leading-[39px] font-light font-serif mb-6">
                Staff Picks
              </h2>
              <Button
                variant="outline"
                className="rounded-full px-20 py-6 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                Shop More
              </Button>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {staffPicks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Books Grid */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Craig Classon Section */}
      <section className="py-16">
        <div className=" mx-auto px-4 md:px-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="aspect-[4/3] ">
              <Card className="w-full rounded-none overflow-hidden bg-sage">
                <div className="w-full h-full ">
                  <img
                    src={gifbook}
                    alt="Craig Classon Book"
                    className="max-w-full max-h-full object-contain drop-shadow-lg"
                  />
                </div>
              </Card>
            </div>
            <div className="aspect-[4/3] ">
              <Card className="w-full rounded-none overflow-hidden bg-sage">
                <div className="w-full h-full ">
                  <img
                    src={gifsec}
                    alt="Craig Classon Book"
                    className="max-w-full max-h-full object-contain drop-shadow-lg"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Magazines Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {magazines.map((magazine) => (
                <BookCard key={magazine.id} {...magazine} />
              ))}
            </div>
            <div className="lg:w-1/3">
              <h2 className="text-[34px] leading-[39px] font-light font-serif ">
                Magazines:
              </h2>
              <p className="text-[34px] leading-[39px] font-light font-serif mb-4">
                Make It Smart. Out
              </p>
              <Button
                variant="outline"
                className="rounded-full px-20 py-6 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                Shop More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
