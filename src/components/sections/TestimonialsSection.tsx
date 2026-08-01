import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jan Pieterzoon',
    role: 'Food Critic',
    text: 'Mahkota is not just a restaurant; it is a culinary journey. Every dish tells a story, and the chef\'s passion is evident in every bite. An absolute must-visit in Amsterdam.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Maria van der Berg',
    role: 'Michelin Guide Reviewer',
    text: 'The attention to detail is exceptional. From the amuse-bouche to the petit fours, every element is carefully considered. The service is impeccable and the atmosphere is sophisticated yet welcoming.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Henrik Larsson',
    role: 'Food Journalist',
    text: 'Mahkota represents the future of Amsterdam dining. The chef innovates without losing respect for tradition. This is haute cuisine at its finest, and it deserves recognition on the international stage.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-accent-dark border-b border-border">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
            What Guests Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our guests about their unforgettable experiences at Mahkota
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-background border border-border rounded-lg hover:border-primary transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-accent">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
