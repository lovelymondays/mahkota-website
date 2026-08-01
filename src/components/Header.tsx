import { Phone, MapPin, Clock } from 'lucide-react'

export default function Header() {
  return (
    <div className="bg-primary-dark text-accent text-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+31123456789" className="hover:text-primary transition-colors">
                +31 (0)1 2345 6789
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Amsterdam, Netherlands</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Open 6 PM - 11 PM Daily</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
