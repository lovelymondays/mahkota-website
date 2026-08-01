import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import SchemaMarkup from '../components/SchemaMarkup'

const menuData = {
  appetizers: [
    {
      name: 'Amuse-Bouche Selection',
      description: 'Chef\'s choice of three small bites',
      price: '€18',
    },
    {
      name: 'Foie Gras Terrine',
      description: 'House-made foie gras with brioche toast and fig compote',
      price: '€28',
    },
    {
      name: 'Oyster Trio',
      description: 'Three different oyster preparations',
      price: '€22',
    },
    {
      name: 'Burrata & Heirloom Tomato',
      description: 'Italian burrata, local heirloom tomatoes, basil oil',
      price: '€16',
    },
  ],
  mains: [
    {
      name: 'Pan-Seared Duck Breast',
      description: 'Cherry gastrique, foie gras mousse, seasonal vegetables',
      price: '€48',
    },
    {
      name: 'Pan-Roasted Sea Bass',
      description: 'Citrus beurre blanc, microgreens, pommes Anna',
      price: '€52',
    },
    {
      name: 'Grass-Fed Beef Tenderloin',
      description: 'Truffle jus, gratin dauphinois, roasted bone marrow',
      price: '€62',
    },
    {
      name: 'Lobster Thermidor',
      description: 'Classic French preparation with cognac cream sauce',
      price: '€58',
    },
  ],
  desserts: [
    {
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla bean ice cream',
      price: '€14',
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic French custard with caramelized sugar',
      price: '€12',
    },
    {
      name: 'Seasonal Fruit Tart',
      description: 'Fresh seasonal fruits in pastry cream',
      price: '€13',
    },
    {
      name: 'Cheese Selection',
      description: 'Curated selection of French and Dutch cheeses with crackers and preserves',
      price: '€18',
    },
  ],
}

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Mahkota Fine Dining Menu',
  description: 'Contemporary international cuisine with Dutch influences',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Appetizers',
      hasMenuItem: menuData.appetizers.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.replace('€', ''),
          priceCurrency: 'EUR',
        },
      })),
    },
    {
      '@type': 'MenuSection',
      name: 'Main Courses',
      hasMenuItem: menuData.mains.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.replace('€', ''),
          priceCurrency: 'EUR',
        },
      })),
    },
    {
      '@type': 'MenuSection',
      name: 'Desserts',
      hasMenuItem: menuData.desserts.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.replace('€', ''),
          priceCurrency: 'EUR',
        },
      })),
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
  ]

  const activeItems = menuData[activeCategory as keyof typeof menuData]

  return (
    <>
      <Helmet>
        <title>Menu - Mahkota Fine Dining Restaurant Amsterdam</title>
        <meta
          name="description"
          content="Explore Mahkota's fine dining menu featuring contemporary international cuisine with Dutch influences. Premium ingredients and innovative preparations."
        />
        <meta property="og:title" content="Menu - Mahkota Restaurant" />
        <meta property="og:description" content="Discover our seasonal fine dining menu" />
      </Helmet>

      <SchemaMarkup type="Menu" data={menuSchema} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-accent-dark border-b border-border py-12">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-accent text-center">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
              Seasonal menus crafted with premium Dutch and international ingredients
            </p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="py-16 md:py-24">
          <div className="container">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 font-medium rounded transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-background'
                      : 'bg-accent-dark text-accent border border-border hover:border-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="max-w-3xl mx-auto">
              {activeItems.map((item, idx) => (
                <div key={idx} className="mb-8 pb-8 border-b border-border last:border-b-0">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-accent">{item.name}</h3>
                    <span className="text-lg font-semibold text-primary flex-shrink-0">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Wine Pairing Note */}
            <div className="mt-16 p-8 bg-accent-dark border border-border rounded-lg">
              <h3 className="text-xl font-semibold text-accent mb-2">Wine Pairings Available</h3>
              <p className="text-muted-foreground">
                Our sommelier has curated an exceptional wine list featuring Dutch and European selections. Speak with
                our staff about wine pairings tailored to your menu selections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
