import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, Users, Clock, Mail, Phone, MapPin } from 'lucide-react'

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Reservation submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Helmet>
        <title>Reservations - Mahkota Fine Dining Restaurant Amsterdam</title>
        <meta name="description" content="Book your table at Mahkota. Reserve your seat for an exceptional dining experience." />
        <meta property="og:title" content="Reservations - Mahkota Restaurant" />
        <meta property="og:description" content="Book your table at Mahkota" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-accent-dark border-b border-border py-12">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-accent text-center">
              Make a Reservation
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
              Reserve your table at Mahkota and prepare for an unforgettable dining experience
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Reservation Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="p-8 bg-green-900/20 border border-green-700 rounded text-center">
                    <p className="text-green-400 font-semibold text-lg mb-2">Reservation Request Sent!</p>
                    <p className="text-green-400/80">
                      Thank you for your interest. We will contact you shortly to confirm your reservation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-4">Your Information</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-4">Reservation Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select Time</option>
                          {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(
                            (time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            )
                          )}
                        </select>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground focus:outline-none focus:border-primary transition-colors"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-4">Special Requests</h3>
                      <textarea
                        name="specialRequests"
                        placeholder="Any dietary restrictions, preferences, or special occasions?"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-primary text-background font-semibold rounded hover:bg-primary-dark transition-colors text-lg"
                    >
                      Request Reservation
                    </button>
                  </form>
                )}
              </div>

              {/* Information Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Dining Hours */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h4 className="font-semibold text-accent mb-4 flex items-center gap-2">
                      <Clock size={20} />
                      Dining Hours
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">Monday - Thursday</p>
                        <p>6:00 PM - 11:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Friday - Saturday</p>
                        <p>6:00 PM - 12:00 AM</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Sunday</p>
                        <p>5:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h4 className="font-semibold text-accent mb-4">Contact Us</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-muted-foreground">Phone</p>
                          <a href="tel:+31123456789" className="text-primary hover:text-primary-dark font-medium">
                            +31 (0)1 2345 6789
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-muted-foreground">Email</p>
                          <a href="mailto:info@mahkota.nl" className="text-primary hover:text-primary-dark font-medium">
                            info@mahkota.nl
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-muted-foreground">Location</p>
                          <p className="text-foreground">
                            Herengracht 123<br />
                            Amsterdam, Netherlands
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cancellation Policy */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h4 className="font-semibold text-accent mb-4">Cancellation Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      Cancellations must be made 24 hours in advance. Late cancellations may be subject to a charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
