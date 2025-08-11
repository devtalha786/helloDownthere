import { Card } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author?: string;
  price: string;
  image: string;
  backgroundColor: string;
  featured?: boolean;
}

const BookCard = ({
  title,
  author,
  price,
  image,
  backgroundColor,
  featured = false,
}: BookCardProps) => {
  const cardClasses = featured
    ? "aspect-[3/4] overflow-hidden transition-transform hover:scale-105 cursor-pointer"
    : "aspect-square overflow-hidden transition-transform hover:scale-105 cursor-pointer";

  return (
    <div className="group">
      <Card className={cardClasses}>
        <div
          className="w-full h-full flex items-center justify-center p-6"
          style={{ backgroundColor }}
        >
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full object-contain drop-shadow-lg"
          />
        </div>
      </Card>
      <div className="mt-3 space-y-1">
        <h3 className="font-light text-[21px] leading-[31px]">{title}</h3>
        {author && <p className="text-sm text-muted-foreground">{author}</p>}
        <p className="font-light text-[18px] leading-[26px]">${price}</p>
      </div>
    </div>
  );
};

export default BookCard;
