import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  TwitterIcon,
  InstagramIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-[16px] leading-[24px] font-light hover:text-muted-foreground transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-[16px] leading-[24px]  font-light hover:text-muted-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-[16px] leading-[24px]  font-light hover:text-muted-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex-nowrap text-center mt-10 items-center  justify-center">
            <h1 className="text-2xl font-serif italic font-medium">
              Jotter Press
            </h1>
            <h2 className="text-3xl font-serif mb-8 mt-10">New Releases in Shop</h2>
          </div>
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-8 cursor-pointer space-x-4">
            <InstagramIcon />
            <TwitterIcon fill="black" />
            <ShoppingCartIcon />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-muted-foreground"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-muted-foreground"
                >
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
