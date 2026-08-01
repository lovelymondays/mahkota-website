import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop"
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl uppercase md:text-7xl font-serif font-bold text-accent mb-6 text-balance">
            de smaken van midden-java
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Indonesisch eten IN ZOETERMEER sinds 1997
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="px-8 py-3 bg-primary text-background font-semibold rounded text-lg hover:bg-primary-dark transition-colors"
            >
              Reserveer nu
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded text-lg hover:bg-primary hover:text-background transition-colors"
            >
              Menu verkennen
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
