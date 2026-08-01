import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold font-serif text-primary hover:text-primary-dark transition-colors">
              Mahkota
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary border-b-2 border-primary pb-2'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/reservations"
                className="px-6 py-2 bg-primary text-background font-medium rounded hover:bg-primary-dark transition-colors"
              >
                Book a Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-foreground"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservations"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 w-full px-6 py-2 bg-primary text-background font-medium rounded text-center hover:bg-primary-dark transition-colors"
              >
                Book a Table
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}
