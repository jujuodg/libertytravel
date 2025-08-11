import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Star, Wifi, Car, Utensils, Waves, ArrowRight } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function HotelBookingsPage() {
  const hotelCategories = [
    {
      name: "Budget Hotels",
      description: "Comfortable accommodation at affordable prices",
      price: "₦25,000",
      features: ["Free WiFi", "24/7 Reception", "Room Service", "Air Conditioning"],
      image: "/placeholder.svg?height=200&width=300&text=Budget Hotel",
      rating: 4.2,
    },
    {
      name: "Business Hotels",
      description: "Perfect for business travelers with modern amenities",
      price: "₦45,000",
      features: ["Business Center", "Conference Rooms", "Gym", "Restaurant"],
      image: "/placeholder.svg?height=200&width=300&text=Business Hotel",
      rating: 4.5,
    },
    {
      name: "Luxury Resorts",
      description: "Premium accommodations with world-class facilities",
      price: "₦85,000",
      features: ["Spa Services", "Pool", "Fine Dining", "Concierge"],
      image: "/placeholder.svg?height=200&width=300&text=Luxury Resort",
      rating: 4.8,
    },
  ]

  const popularDestinations = [
    {
      city: "Dubai",
      country: "UAE",
      hotels: "150+ Hotels",
      price: "From ₦35,000",
      image: "/placeholder.svg?height=200&width=300&text=Dubai Hotels",
      rating: 4.7,
    },
    {
      city: "London",
      country: "UK",
      hotels: "200+ Hotels",
      price: "From ₦55,000",
      image: "/placeholder.svg?height=200&width=300&text=London Hotels",
      rating: 4.6,
    },
    {
      city: "Istanbul",
      country: "Turkey",
      hotels: "120+ Hotels",
      price: "From ₦30,000",
      image: "/placeholder.svg?height=200&width=300&text=Istanbul Hotels",
      rating: 4.5,
    },
    {
      city: "Lagos",
      country: "Nigeria",
      hotels: "80+ Hotels",
      price: "From ₦25,000",
      image: "/placeholder.svg?height=200&width=300&text=Lagos Hotels",
      rating: 4.3,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">🏨 Premium Stays</Badge>
            <h1 className="text-5xl font-bold mb-6">Hotel Bookings</h1>
            <p className="text-xl mb-8 text-purple-100">
              Discover and book the perfect accommodation for your stay with competitive rates worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Search Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto -mt-16 relative z-10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Find Your Perfect Stay</CardTitle>
              <CardDescription className="text-center">Search hotels worldwide with best prices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Where to?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="london">London, UK</SelectItem>
                      <SelectItem value="istanbul">Istanbul, Turkey</SelectItem>
                      <SelectItem value="lagos">Lagos, Nigeria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check-in</Label>
                  <Input type="date" id="checkin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout">Check-out</Label>
                  <Input type="date" id="checkout" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="1 Room, 2 Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1 Room, 2 Guests</SelectItem>
                      <SelectItem value="1-3">1 Room, 3 Guests</SelectItem>
                      <SelectItem value="2-4">2 Rooms, 4 Guests</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                <Building2 className="mr-2 h-5 w-5" />
                Search Hotels
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hotel Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hotel Categories</h2>
            <p className="text-xl text-gray-600">Choose the perfect accommodation type for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hotelCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{category.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">{category.price}</span>
                    <span className="text-gray-600 text-sm">per night</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">View Hotels</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Top destinations with the best hotel deals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.city}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">{destination.city}</h3>
                      <p className="text-sm">{destination.country}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{destination.hotels}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="font-semibold text-purple-600">{destination.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hotel Amenities</h2>
            <p className="text-xl text-gray-600">Enjoy world-class facilities and services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free WiFi</h3>
              <p className="text-gray-600">High-speed internet access throughout the property</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Parking</h3>
              <p className="text-gray-600">Complimentary parking for all hotel guests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
              <p className="text-gray-600">On-site dining with local and international cuisine</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Swimming Pool</h3>
              <p className="text-gray-600">Refreshing pool facilities for relaxation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Find the perfect hotel for your next trip with unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Search Hotels
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Call: +234 802 3874 076
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
