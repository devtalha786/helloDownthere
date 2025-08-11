import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h4 className="font-serif text-lg mb-4">Jotter Press</h4>
            <address className="text-sm text-primary-foreground/70 not-italic">
              132 Ocean Street, New York City
              <br />
              publishing@jotterpress.com
              <br />
              (914) 555-6603
            </address>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-medium mb-4">Shop</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Legal
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h5 className="font-medium mb-4">Instagram</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-md mx-auto flex-col gap-y-4">
            <h3 className="text-lg font-serif mb-4">Subscribe Newsletter</h3>
            <div className="">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background text-foreground border-border"
              />
              <Button variant="secondary" className="whitespace-nowrap mt-4">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
      </div>
    </footer>
  );
};

export default Footer;
