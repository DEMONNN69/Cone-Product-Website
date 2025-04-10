import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Classic Waffle Cone",
      description: "Our signature waffle cone with the perfect balance of crispness and chewiness.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Waffle",
      sizes: ["Small", "Medium", "Large"],
      featured: true,
    },
    {
      id: 2,
      name: "Sugar Cone",
      description: "Crispy, sweet, and perfectly pointed for easy eating and less dripping.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Sugar",
      sizes: ["Small", "Medium", "Large"],
      featured: true,
    },
    {
      id: 3,
      name: "Chocolate-Dipped Waffle Cone",
      description: "Our classic waffle cone dipped in premium Belgian chocolate.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Specialty",
      sizes: ["Medium", "Large"],
      featured: false,
    },
    {
      id: 4,
      name: "Pretzel Cone",
      description: "A sweet and salty pretzel-flavored cone for a unique taste experience.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Specialty",
      sizes: ["Medium", "Large"],
      featured: false,
    },
    {
      id: 5,
      name: "Gluten-Free Waffle Cone",
      description: "All the flavor and texture of our classic waffle cone, but gluten-free.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Dietary",
      sizes: ["Medium", "Large"],
      featured: true,
    },
    {
      id: 6,
      name: "Cake Cone",
      description: "Light, crispy cake cones perfect for soft serve and traditional scoops.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Cake",
      sizes: ["Small", "Medium", "Large"],
      featured: false,
    },
    {
      id: 7,
      name: "Cinnamon Waffle Cone",
      description: "Our classic waffle cone infused with warm cinnamon flavor.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Waffle",
      sizes: ["Medium"],
      featured: false,
    },
    {
      id: 8,
      name: "Chocolate Waffle Cone",
      description: "Rich chocolate-flavored waffle cone for chocolate lovers.",
      image: "/placeholder.svg?height=400&width=400",
      category: "Waffle",
      sizes: ["Medium", "Large"],
      featured: false,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Our Products</h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
              Discover our range of premium ice cream cones, crafted with the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">Featured Cones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => product.featured)
              .map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 animate-slide-up">All Cones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center animate-slide-up">Cone Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden group animate-fade-in animation-delay-200">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Waffle Cones"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Waffle Cones</h3>
                <p className="text-white/80 mb-4">Our signature waffle cones in various flavors and sizes.</p>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Explore Waffle Cones
                </Button>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden group animate-fade-in animation-delay-300">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sugar Cones"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Sugar Cones</h3>
                <p className="text-white/80 mb-4">Crispy, sweet cones perfect for any ice cream flavor.</p>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Discover Sugar Cones
                </Button>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden group animate-fade-in animation-delay-400">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Specialty Cones"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Specialty Cones</h3>
                <p className="text-white/80 mb-4">Unique and innovative cone creations for special occasions.</p>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Browse Specialty Cones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Cone-Making Process</h2>
              <p className="text-muted-foreground mb-6">
                At ConeWorks, we combine traditional techniques with modern precision to create the perfect cone every
                time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Premium Ingredients</h3>
                    <p className="text-muted-foreground">
                      We start with the finest flours, sugars, and natural flavors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Perfect Batter</h3>
                    <p className="text-muted-foreground">
                      Our proprietary batter recipes are mixed to precise specifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Precision Baking</h3>
                    <p className="text-muted-foreground">
                      Each cone is baked at the perfect temperature for the ideal texture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quality Control</h3>
                    <p className="text-muted-foreground">
                      Every cone is inspected to ensure it meets our high standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-slide-in-right">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Cone manufacturing process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">Packaging Options</h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Our cones are available in various packaging options to suit your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg text-center hover-lift animate-fade-in animation-delay-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail Packs</h3>
              <p className="text-muted-foreground mb-4">
                Boxes of 12, 24, or 36 cones, perfect for retail stores and small ice cream shops.
              </p>
              <p className="font-semibold">Starting at $12.99</p>
            </div>

            <div className="bg-background p-8 rounded-lg text-center hover-lift animate-fade-in animation-delay-400">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bulk Cases</h3>
              <p className="text-muted-foreground mb-4">
                Cases of 200, 500, or 1000 cones for medium to large ice cream shops and restaurants.
              </p>
              <p className="font-semibold">Starting at $89.99</p>
            </div>

            <div className="bg-background p-8 rounded-lg text-center hover-lift animate-fade-in animation-delay-500">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Orders</h3>
              <p className="text-muted-foreground mb-4">
                Custom packaging and branding options available for large chains and specialty shops.
              </p>
              <p className="font-semibold">Contact for pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold mb-4">Wholesale Opportunities</h2>
                <p className="mb-6">
                  Are you an ice cream shop, cafe, or retailer interested in serving ConeWorks cones? We offer wholesale
                  options with competitive pricing and reliable delivery.
                </p>
                <Button asChild variant="secondary" className="hover-lift">
                  <Link href="/contact">Contact Our Sales Team</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden animate-slide-in-right">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wholesale cones"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 animate-slide-up">Ready to Order ConeWorks Cones?</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              Contact us today to place an order or request samples of our premium cones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Button asChild size="lg" className="hover-lift">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
