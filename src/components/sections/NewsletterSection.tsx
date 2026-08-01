import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mail className="text-primary" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
            Stay Updated Yes
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates about seasonal menus,
            special events, and exclusive dining experiences.
          </p>

          {submitted ? (
            <div className="p-4 bg-green-900/20 border border-green-700 rounded text-green-400 font-medium">
              Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-accent-dark border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
