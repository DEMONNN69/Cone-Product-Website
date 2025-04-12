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
              Crafting Perfect Cones Since 1989
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-200">
              Artisanal waffle, sugar, and specialty cones made with the finest ingredients and traditional techniques.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Why Choose ConeWorks?</h2>
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
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jane Doe</h4>
                  <p className="text-sm text-muted-foreground">Ice Cream Shop Owner</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The waffle cones from ConeWorks are simply the best I've ever used in my shop. My customers rave about
                the texture and flavor. They're the perfect complement to our premium ice cream."
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg hover-lift animate-fade-in animation-delay-400">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-muted-foreground">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "We've been serving ConeWorks cones in our restaurant for over 5 years. They're consistently excellent,
                and the company is a pleasure to work with. Their specialty chocolate-dipped cones are a customer
                favorite."
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg hover-lift animate-fade-in animation-delay-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">AJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amy Johnson</h4>
                  <p className="text-sm text-muted-foreground">Food Blogger</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The attention to detail and commitment to quality at ConeWorks is evident in every bite. Their
                gluten-free options are a game-changer for those with dietary restrictions who still want to enjoy a
                delicious cone!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Our Featured Cones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Discover our most popular cone varieties, crafted with care and precision for the perfect ice cream
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg overflow-hidden shadow-sm group animate-fade-in animation-delay-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/p1.jpeg?height=400&width=400"
                  alt="Classic Waffle Cone"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classic Waffle Cone</h3>
                <p className="text-muted-foreground mb-4">
                  Our signature waffle cone with the perfect balance of crispness and chewiness.
                </p>
                <Button asChild className="w-full hover-lift">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm group animate-fade-in animation-delay-400">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/p2.jpeg?height=400&width=400"
                  alt="Sugar Cone"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sugar Cone</h3>
                <p className="text-muted-foreground mb-4">
                  Crispy, sweet, and perfectly pointed for easy eating and less dripping.
                </p>
                <Button asChild className="w-full hover-lift">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm group animate-fade-in animation-delay-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/p3.jpeg?height=400&width=400"
                  alt="Chocolate-Dipped Cone"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chocolate-Dipped Cone</h3>
                <p className="text-muted-foreground mb-4">
                  Our classic waffle cone dipped in premium Belgian chocolate for an extra indulgent treat.
                </p>
                <Button asChild className="w-full hover-lift">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
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
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10 hover-lift"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
