import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  sizes: string[]
  featured?: boolean
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const animationDelay = `animation-delay-${(index % 8) * 100}`

  return (
    <div
      className={`group relative bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover-lift animate-fade-in ${animationDelay}`}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        {product.featured && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded animate-bounce-light">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">Available in: {product.sizes.join(", ")}</div>
          <Button asChild size="sm" className="transition-all duration-300 hover:scale-105">
            <Link href={`/contact`}>Get</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
