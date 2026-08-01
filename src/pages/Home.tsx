import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Trophy } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import SchemaMarkup from "../components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mahkota - Fine Dining Restaurant Amsterdam | Netherlands</title>
        <meta
          name="description"
          content="Discover Mahkota, Amsterdam's premier fine dining restaurant. Experience culinary excellence with international cuisine and Dutch heritage in the heart of Amsterdam."
        />
        <meta
          name="keywords"
          content="restaurant Amsterdam, fine dining Netherlands, international cuisine, Amsterdam dining, upscale restaurant"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mahkota - Fine Dining Restaurant Amsterdam"
        />
        <meta
          property="og:description"
          content="Experience culinary excellence at Mahkota, Amsterdam's finest dining destination."
        />
        <meta property="og:url" content="https://mahkota-restaurant.nl" />
      </Helmet>

      <SchemaMarkup
        type="Restaurant"
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Mahkota",
          description:
            "Fine dining restaurant in Amsterdam offering international and Dutch cuisine",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Herengracht 123",
            addressLocality: "Amsterdam",
            addressCountry: "NL",
            postalCode: "1013 Amsterdam",
          },
          telephone: "+31123456789",
          url: "https://mahkota-restaurant.nl",
          image:
            "https://images.unsplash.com/photo-1517248135467-4d71bcdd2085?w=1200",
          priceRange: "$$$",
          servesCuisine: ["International", "Dutch", "European"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "18:00",
              closes: "23:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Friday", "Saturday"],
              opens: "18:00",
              closes: "00:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "17:00",
              closes: "22:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "247",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Jan Pieterzoon" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Exceptional dining experience. The chef&apos;s attention to detail is remarkable. Highly recommended!",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Maria van der Berg" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Best restaurant in Amsterdam. Impeccable service and incredible food. Will definitely return.",
            },
          ],
        }}
      />

      <HeroSection />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-accent-dark border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
                Welkom bij Mahkota
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Toko Mahkota bestaat sinds 1997 en bied een breed scala aan
                heerlijke gerechten uit Midden Java. Daar waar mogelijk
                gebruiken wij zo veel mogelijk verse kruiden en dat proef je
                zeker terug. De gerechten zijn niet al te pittig en ook voor
                vegetariërs is er volop keus. Bekijk onze menukaart en kom eens
                langs!
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Elk gerecht wordt met zorg bereid door onze bekroonde chef-kok,
                waarbij seizoensgebonden ingrediënten en innovatieve
                smaakcombinaties centraal staan. Wij geloven dat dineren niet
                alleen om het eten draait, maar om het creëren van
                herinneringen.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded hover:bg-primary-dark transition-colors"
              >
                Bekijk Ons ​​Menu
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src="/TokoMahkota_Store.webp"
                alt="Mahkota restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Why Choose Mahkota
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our carefully curated menu to our impeccable service, every
              detail reflects our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Award-Winning Cuisine",
                description:
                  "Our chef brings decades of experience and multiple international awards to every plate.",
              },
              {
                icon: Users,
                title: "Personalized Service",
                description:
                  "Our staff is trained to provide attentive, personalized service for every guest.",
              },
              {
                icon: Clock,
                title: "Seasonal Menus",
                description:
                  "We celebrate the seasons with rotating menus featuring the finest local ingredients.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-accent-dark border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <Icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-accent mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 md:py-24 bg-accent-dark border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4 text-center">
            Featured Dishes
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Get a taste of what our chefs create seasonally
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pan-Seared Duck Breast",
                description:
                  "Duck with cherry gastrique, foie gras mousse, and microgreens",
                image:
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
              },
              {
                name: "Saffron Risotto",
                description:
                  "Creamy arborio rice with saffron, truffles, and parmigiano-reggiano",
                image:
                  "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=300&fit=crop",
              },
              {
                name: "Pan-Roasted Sea Bass",
                description:
                  "Fresh sea bass with citrus beurre blanc and seasonal vegetables",
                image:
                  "https://images.unsplash.com/photo-1504674900944-658900baaf60?w=400&h=300&fit=crop",
              },
            ].map((dish, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded hover:bg-primary hover:text-background transition-colors"
            >
              View Full Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
