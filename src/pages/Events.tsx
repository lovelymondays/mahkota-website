import { Helmet } from 'react-helmet-async'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import SchemaMarkup from '../components/SchemaMarkup'

const events = [
  {
    id: 1,
    title: 'Wine Tasting Evening',
    date: '2024-02-15',
    time: '19:00',
    description: 'Join our sommelier for an exclusive tasting of Dutch and European wines paired with light bites.',
    location: 'Main Dining Room',
    capacity: '30 guests',
    price: '€95 per person',
  },
  {
    id: 2,
    title: 'Chef\'s Table Experience',
    date: '2024-02-22',
    time: '19:30',
    description: 'Intimate dinner at our chef\'s table with a personalized 7-course tasting menu and wine pairings.',
    location: 'Chef\'s Counter',
    capacity: '8 guests',
    price: '€185 per person',
  },
  {
    id: 3,
    title: 'Truffle Affair',
    date: '2024-03-01',
    time: '19:00',
    description: 'Celebrate the truffle season with a special menu featuring premium black and white truffles.',
    location: 'Main Dining Room',
    capacity: '40 guests',
    price: '€125 per person',
  },
  {
    id: 4,
    title: 'Seasonal Spring Menu Launch',
    date: '2024-03-15',
    time: '18:30',
    description: 'Preview our new spring menu featuring fresh seasonal ingredients. Includes welcome cocktail and canapes.',
    location: 'Main Dining Room & Bar',
    capacity: '50 guests',
    price: '€65 per person',
  },
]

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  name: 'Mahkota Special Events',
  organizer: {
    '@type': 'Restaurant',
    name: 'Mahkota',
    url: 'https://mahkota-restaurant.nl',
  },
  event: events.map((event) => ({
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: `${event.date}T${event.time}`,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Amsterdam',
        addressCountry: 'NL',
      },
    },
    offers: {
      '@type': 'Offer',
      price: event.price.replace('€', '').split(' ')[0],
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://mahkota-restaurant.nl/events',
    },
  })),
}

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events - Mahkota Fine Dining Restaurant Amsterdam</title>
        <meta
          name="description"
          content="Discover Mahkota's special events and dining experiences. Wine tastings, chef's table experiences, and seasonal celebrations."
        />
        <meta property="og:title" content="Events - Mahkota Restaurant" />
        <meta property="og:description" content="Join us for exclusive dining events and experiences" />
      </Helmet>

      <SchemaMarkup type="EventSeries" data={eventSchema} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-accent-dark border-b border-border py-12">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-accent text-center">
              Special Events
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
              Experience exclusive dining events and unforgettable evenings at Mahkota
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="py-16 md:py-24">
          <div className="container">
            {events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="p-8 bg-accent-dark border border-border rounded-lg hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Calendar size={20} />
                      <span className="font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                        {' '}
                        @ {event.time}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-accent mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin size={16} className="text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Users size={16} className="text-primary flex-shrink-0" />
                        <span>{event.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock size={16} className="text-primary flex-shrink-0" />
                        <span>{event.price}</span>
                      </div>
                    </div>

                    <Link
                      to="/reservations"
                      className="inline-block px-6 py-2 bg-primary text-background font-medium rounded hover:bg-primary-dark transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      Register Now
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No upcoming events at the moment.</p>
                <p className="text-muted-foreground mt-2">Check back soon for our special dining experiences.</p>
              </div>
            )}
          </div>
        </div>

        {/* Private Events Section */}
        <section className="py-16 md:py-24 bg-accent-dark border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
                Host Your Private Event
              </h2>
              <p className="text-muted-foreground mb-8">
                Mahkota offers the perfect venue for private parties, corporate events, and special celebrations. Our
                team will work with you to create a memorable experience tailored to your needs.
              </p>
              <div className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground">Customized menus and wine selections</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground">Private dining rooms available</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground">Professional event planning assistance</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground">Accommodation for 20-100 guests</p>
                </div>
              </div>
              <a
                href="mailto:events@mahkota.nl"
                className="inline-block px-8 py-3 bg-primary text-background font-semibold rounded hover:bg-primary-dark transition-colors"
              >
                Inquire About Private Events
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
