import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Our Story</h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
              From a small family bakery to a leading cone manufacturer, discover the journey of Suraj Cone Production.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Legacy Since 1997</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                Suraj Cone Production is a Mumbai-based manufacturer specializing in high-quality ice cream cones. Situated in Ulhasnagar, we are dedicated to delivering premium sugar cones that meet the diverse needs of our clients across India.
                </p>
                <p>
                Our commitment to excellence is evident in our product offerings, which are crafted to ensure optimal taste and texture. With a focus on quality and customer satisfaction, we strive to provide products that enhance the ice cream experience for both businesses and consumers.
                </p>
                <p>
                At Suraj Cone Production, we understand the importance of reliable supply and timely delivery. Our efficient production processes and logistics ensure that we can meet bulk orders promptly, maintaining the highest standards of service.
                </p>
                <p>
                We take pride in our role within the confectionery industry and are continually working to innovate and improve our products. Whether you're a small business or a large enterprise, Suraj Cone Production is your trusted partner for quality ice cream cones.​


                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="hover-lift">
                  <Link href="/products">Explore Our Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slide-in-right">
              <Image
                src="/bg2.jpeg?height=1000&width=800"
                alt="Founders of Suraj Cone Production"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Our Values</h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              The principles that guide everything we do at Suraj Cone Production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm hover-lift animate-fade-in animation-delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our ingredients or our process. Every batch of cones must meet our
                exacting standards before it leaves our facility.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm hover-lift animate-fade-in animation-delay-400">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
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
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                While we respect tradition, we also embrace innovation. We're constantly experimenting with new flavors
                and techniques to create exciting cone experiences.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm hover-lift animate-fade-in animation-delay-500">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to environmentally responsible practices throughout our business, from sourcing
                ingredients to packaging and distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Our Process</h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              How we create the perfect cone, from farm to bakery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="space-y-8">
                <div className="flex gap-4 hover-lift transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ingredient Selection</h3>
                    <p className="text-muted-foreground">
                      We carefully select the finest flours, sugars, and natural flavors from trusted suppliers,
                      ensuring premium quality in every cone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 hover-lift transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Batter Preparation</h3>
                    <p className="text-muted-foreground">
                      Our proprietary batter recipes are mixed to precise specifications, creating the perfect
                      consistency for each type of cone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 hover-lift transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Precision Baking</h3>
                    <p className="text-muted-foreground">
                      Each cone is baked at the perfect temperature for the ideal texture - crisp yet sturdy, with
                      delicious flavor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 hover-lift transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Testing</h3>
                    <p className="text-muted-foreground">
                      Every cone undergoes rigorous quality testing before packaging to ensure it meets our high
                      standards for flavor, texture, and consistency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[600px] rounded-lg overflow-hidden shadow-xl animate-slide-in-right">
              <Image
                src="/bg3.jpeg?height=1200&width=800"
                alt="Cone production process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Meet the Owner</h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              The passionate people behind Suraj Cone Production.
            </p>
          </div>

          <div className="w-3/4 lg:w-1/3 mx-auto mb-8 animate-fade-in animation-delay-100">
            <div className="bg-background rounded-lg overflow-hidden shadow-sm hover-lift animate-fade-in animation-delay-300">
              
              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-1">Suraj Yadav</h3>
                <p className="text-sm text-center text-muted-foreground mb-3">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Son of the original founders, Suraj has been involved in the business since childhood and now
                  leads the company with the same passion for quality.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Join the Suraj Cone Production Family</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              We're always looking for passionate people to join our team. Check out our current openings or contact us
              to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Button asChild size="lg" className="hover-lift">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
