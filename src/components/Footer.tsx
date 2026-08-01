// import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-foreground border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-serif text-primary mb-4">
              Mahkota
            </h3>
            <p className="text-muted-foreground text-sm">
              Experience culinary excellence in the heart of Amsterdam. Fine
              dining that celebrates local ingredients and global inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground font-medium">
                  Monday - Thursday
                </span>
                <p>6:00 PM - 11:00 PM</p>
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Friday - Saturday
                </span>
                <p>6:00 PM - 12:00 AM</p>
              </li>
              <li>
                <span className="text-foreground font-medium">Sunday</span>
                <p>5:00 PM - 10:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Herengracht 123
              <br />
              Amsterdam 1013 Amsterdam
              <br />
              Netherlands
            </p>
            <a
              href="tel:+31123456789"
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              +31 (0)1 2345 6789
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mahkota Restaurant. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {/* <Facebook size={20} /> */}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {/* <Instagram size={20} /> */}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {/* <Twitter size={20} /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
