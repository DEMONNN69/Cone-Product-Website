import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg1.jpeg?height=1080&width=1920"
            alt="Cone manufacturing facility"
            fill
            className="object-cover brightness-[0.7] dark:brightness-[0.5]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Crafting Perfect Cones Since 1997
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-200">
              Softy Cones, sugar, and specialty cones made with the finest ingredients and traditional techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Button asChild size="lg" className="group hover-lift">
                <Link href="/products">
                  Explore Our Cones
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover-lift"
              >
                <Link href="/about">About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Why Choose Suraj Cone Production?</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-scale animation-delay-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift animate-fade-in animation-delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Premium Ingredients</h3>
              <p className="text-muted-foreground text-center">
                We source only the finest flours, sugars, and natural flavors to ensure exceptional quality in every
                cone.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift animate-fade-in animation-delay-400">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Artisanal Process</h3>
              <p className="text-muted-foreground text-center">
                Our cones are crafted using traditional methods and modern precision to create the perfect texture and
                flavor.
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md hover-lift animate-fade-in animation-delay-500">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sustainable Practices</h3>
              <p className="text-muted-foreground text-center">
                We're committed to environmentally friendly practices, from sourcing to packaging, to protect our
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-scale animation-delay-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="bg-muted/30 p-8 rounded-lg hover-lift animate-fade-in animation-delay-300">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
        <span className="text-primary font-bold">RK</span>
      </div>
      <div>
        <h4 className="font-semibold">Rina Kapoor</h4>
        <p className="text-sm text-muted-foreground">Café Owner – Delhi</p>
      </div>
    </div>
    <p className="text-muted-foreground">
      "Suraj Cone Production's cones add a premium feel to our sundaes. My customers love the crispy texture and light sweetness – perfect for Indian palettes!"
    </p>
  </div>

  <div className="bg-muted/30 p-8 rounded-lg hover-lift animate-fade-in animation-delay-400">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
        <span className="text-primary font-bold">AK</span>
      </div>
      <div>
        <h4 className="font-semibold">Amit Khanna</h4>
        <p className="text-sm text-muted-foreground">Dessert Parlour Owner – Mumbai</p>
      </div>
    </div>
    <p className="text-muted-foreground">
      "We've been sourcing cones from Suraj Cone for years. Their quality is top-notch, and their chocolate-dipped cones are an absolute hit during summer."
    </p>
  </div>

  <div className="bg-muted/30 p-8 rounded-lg hover-lift animate-fade-in animation-delay-500">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
        <span className="text-primary font-bold">NS</span>
      </div>
      <div>
        <h4 className="font-semibold">Neha Shah</h4>
        <p className="text-sm text-muted-foreground">Food Influencer – Ahmedabad</p>
      </div>
    </div>
    <p className="text-muted-foreground">
      "Tried their cones during a tasting event – absolutely delicious! Their innovative flavours and gluten-free options make them stand out in the market."
    </p>
  </div>
</div>

        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Ready to Elevate Your Ice Cream Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Discover our range of delicious cones and find out how they can enhance your ice cream business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <Button asChild size="lg" variant="secondary" className="hover-lift">
              <Link href="/products">View Our Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10 hover-lift border-2"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
