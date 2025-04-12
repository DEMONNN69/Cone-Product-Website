"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsRedirecting(true)

      // Send form data to Google Sheets via the Apps Script URL
  const formPayload = new FormData();
  formPayload.append("name", formData.name);
  formPayload.append("email", formData.email);
  formPayload.append("subject", formData.subject);
  formPayload.append("message", formData.message);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxq4uzqyd595nXHYWzk22s97-TTQMLcsSeaZBgZZOzSarCFYqm-_SwNuGD0DLIraeU/exec', {
      method: 'POST',
      body: formPayload,
    });

    if (response.ok) {
      
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setIsRedirecting(false)
      }, 5000);
    } else {
      alert("Submission failed.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred while submitting the form.");
  }

    const { name, email, subject, message } = formData
    


    const whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    const phoneNumber = '919082922321'

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Contact Us</h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
              Have questions or want to place an order? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-muted/30 p-8 rounded-lg animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-900 text-green-800 dark:text-green-300 p-4 rounded-md mb-6 animate-scale">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Aman Sharma"
                    required
                    className="focus-visible:ring-primary transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="aman@gmail.com"
                    required
                    className="focus-visible:ring-primary transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="focus-visible:ring-primary transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="focus-visible:ring-primary transition-all duration-300"
                  />
                </div>

                <Button type="submit" className="w-full hover-lift" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
              </form>
              <p className="text-sm text-muted-foreground mt-2 text-gray-900 dark:text-white text-center opacity-70">Note: You will be redirected to WhatsApp</p>
              {isRedirecting && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-xl shadow-lg p-6 w-72 text-center animate-fade-in">
      <p className="text-lg font-semibold text-gray-800 mb-2">Redirecting to WhatsApp</p>
      <p className="text-sm text-gray-500">Please wait while we open the app...</p>
    </div>
  </div>
)}


            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                    D -22
                      <br />
                      Industrial area
                      <br />
                      Kalyan East
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main Office :7900074083

                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: surajyadav22@gmail.com
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift transition-all duration-300">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Everyday : 10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center animate-slide-up">Find Us</h2>
          <div className="h-96 bg-muted rounded-lg overflow-hidden animate-scale animation-delay-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60271.513407290484!2d73.08934375005255!3d19.240157141382777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796f457b1b76f%3A0x35df463ca445bd26!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1744454889961!5m2!1sen!2sin" className="object-cover w-full h-full" loading="lazy"></iframe>
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center animate-slide-up">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg hover-lift animate-fade-in animation-delay-200">
                <h3 className="text-lg font-semibold mb-2">Where can I buy Suraj Cone Production cones?</h3>
                <p className="text-muted-foreground">
                  Our cones are available through wholesale distribution to ice cream shops, restaurants, and specialty
                  food stores. For retail customers, we offer smaller packages through select gourmet food retailers.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg hover-lift animate-fade-in animation-delay-300">
                <h3 className="text-lg font-semibold mb-2">Do you offer gluten-free or allergen-free options?</h3>
                <p className="text-muted-foreground">
                  Yes! We have a dedicated gluten-free production line for our gluten-free cones. We also clearly label
                  all potential allergens for each of our products.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg hover-lift animate-fade-in animation-delay-400">
                <h3 className="text-lg font-semibold mb-2">Can I tour your factory?</h3>
                <p className="text-muted-foreground">
                  We offer guided tours of our main production facility on select days. Tours must be booked in advance.
                  Please contact us for availability and reservations.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg hover-lift animate-fade-in animation-delay-500">
                <h3 className="text-lg font-semibold mb-2">What is your minimum order quantity?</h3>
                <p className="text-muted-foreground">
                  For wholesale customers, our minimum order is typically one case (200-1000 cones depending on the
                  product). For custom orders, minimums may vary. Please contact our sales team for specific
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 animate-slide-up">Join Our Newsletter</h2>
            <p className="text-xl mb-8 animate-fade-in animation-delay-200">
              Stay updated with our latest products, promotions, and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in animation-delay-300">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground text-primary transition-all duration-300 focus-visible:ring-offset-primary"
                required
              />
              <Button variant="secondary" type="submit" className="flex-shrink-0 hover-lift">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
