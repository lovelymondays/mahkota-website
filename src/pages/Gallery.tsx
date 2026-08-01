import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    title: 'Main Dining Room',
    alt: 'Elegant main dining room with ambient lighting',
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4d71bcdd2085?w=800&h=600&fit=crop',
    title: 'Chef\'s Counter',
    alt: 'Open kitchen with chef preparing dishes',
  },
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
    title: 'Signature Dish',
    alt: 'Pan-seared duck breast with cherry gastrique',
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900944-658900baaf60?w=800&h=600&fit=crop',
    title: 'Fresh Seafood',
    alt: 'Pan-roasted sea bass preparation',
  },
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=800&h=600&fit=crop',
    title: 'Saffron Risotto',
    alt: 'Creamy saffron risotto with truffles',
  },
  {
    url: 'https://images.unsplash.com/photo-1484723091739-37d1b46a4bb3?w=800&h=600&fit=crop',
    title: 'Plated Dessert',
    alt: 'Artistic chocolate dessert presentation',
  },
  {
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    title: 'Wine Collection',
    alt: 'Curated wine selection',
  },
  {
    url: 'https://images.unsplash.com/photo-1533777282430-8a248d4a4df5?w=800&h=600&fit=crop',
    title: 'Bar Area',
    alt: 'Sophisticated bar with craft cocktails',
  },
  {
    url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop',
    title: 'Ambient Lighting',
    alt: 'Warm atmospheric lighting in dining area',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <>
      <Helmet>
        <title>Gallery - Mahkota Fine Dining Restaurant Amsterdam</title>
        <meta
          name="description"
          content="Browse our gallery showcasing Mahkota's elegant dining environment, signature dishes, and culinary creations."
        />
        <meta property="og:title" content="Gallery - Mahkota Restaurant" />
        <meta property="og:description" content="Discover the ambiance and artistry of Mahkota" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-accent-dark border-b border-border py-12">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-accent text-center">
              Gallery
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
              Explore the elegance and culinary artistry of Mahkota
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer overflow-hidden rounded-lg h-64"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-accent font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-accent font-semibold mt-4">{selectedImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
