import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Helmet>
        <title>Contact - Mahkota Fine Dining Restaurant Amsterdam</title>
        <meta
          name="description"
          content="Get in touch with Mahkota. Find our contact information, hours, and location in Amsterdam."
        />
        <meta property="og:title" content="Contact - Mahkota Restaurant" />
        <meta property="og:description" content="Contact Mahkota restaurant" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-accent-dark border-b border-border py-12">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-accent text-center">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions or inquiries.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                      <MapPin size={20} className="text-primary" />
                      Location
                    </h3>
                    <p className="text-foreground mb-1">Herengracht 123</p>
                    <p className="text-foreground mb-1">Amsterdam 1013 Amsterdam</p>
                    <p className="text-foreground">Netherlands</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors mt-3 inline-block font-medium"
                    >
                      Get Directions →
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                      <Phone size={20} className="text-primary" />
                      Phone
                    </h3>
                    <a href="tel:+31123456789" className="text-primary hover:text-primary-dark transition-colors font-medium">
                      +31 (0)1 2345 6789
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      For reservations and general inquiries
                    </p>
                  </div>

                  {/* Email */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                      <Mail size={20} className="text-primary" />
                      Email
                    </h3>
                    <a href="mailto:info@mahkota.nl" className="text-primary hover:text-primary-dark transition-colors font-medium">
                      info@mahkota.nl
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      For general inquiries and feedback
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="p-6 bg-accent-dark border border-border rounded-lg">
                    <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                      <Clock size={20} className="text-primary" />
                      Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium text-foreground">Mon - Thu</p>
                        <p className="text-muted-foreground">6:00 PM - 11:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Fri - Sat</p>
                        <p className="text-muted-foreground">6:00 PM - 12:00 AM</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Sunday</p>
                        <p className="text-muted-foreground">5:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="p-8 bg-green-900/20 border border-green-700 rounded text-center">
                    <p className="text-green-400 font-semibold text-lg mb-2">Message Sent Successfully!</p>
                    <p className="text-green-400/80">
                      Thank you for reaching out. We will get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />

                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-primary text-background font-semibold rounded hover:bg-primary-dark transition-colors text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="bg-accent-dark border-t border-border py-12">
          <div className="container">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.449045814834!2d4.872309!3d52.369831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sHerengracht%20123%2C%20Amsterdam!5e0!3m2!1sen!2snl!4v0000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
