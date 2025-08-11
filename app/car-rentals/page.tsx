import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Fuel, Settings, Star, ArrowRight, Shield, Clock } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function CarRentalsPage() {
  const carCategories = [
    {
      name: "Economy",
      description: "Perfect for city driving and budget-conscious travelers",
      price: "₦15,000",
      features: ["5 Seats", "Manual", "AC", "Fuel Efficient"],
      image: "/placeholder.svg?height=200&width=300&text=Economy Car",
      popular: false,
    },
    {
      name: "SUV",
      description: "Spacious and comfortable for family trips",
      price: "₦35,000",
      features: ["7 Seats", "Automatic", "4WD", "Premium Interior"],
      image: "/placeholder.svg?height=200&width=300&text=SUV",
      popular: true,
    },
    {
      name: "Luxury",
      description: "Premium vehicles for special occasions",
      price: "₦65,000",
      features: ["5 Seats", "Automatic", "Leather", "Premium Sound"],
      image: "/placeholder.svg?height=200&width=300&text=Luxury Car",
      popular: false,
    },
  ]

  const locations = [
    { city: "Lagos", airport: "Murtala Muhammed Airport", local: "Victoria Island, Ikeja" },
    { city: "Abuja", airport: "Nnamdi Azikiwe Airport", local: "Central Area, Garki" },
    { city: "Port Harcourt", airport: "Port Harcourt Airport", local: "GRA, Trans Amadi" },
    { city: "Kano", airport: "Mallam Aminu Kano Airport", local: "Sabon Gari, Fagge" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white">🚗 Reliable Rentals</Badge>
            <h1 className="text-5xl font-bold mb-6">Car Rentals</h1>
            <p className="text-xl mb-8 text-orange-100">
              Rent quality vehicles for your business trips, vacations, and daily transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Car Rental Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto -mt-16 relative z-10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Book Your Car</CardTitle>
              <CardDescription className="text-center">Find the perfect vehicle for your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup-location">Pickup Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos-airport">Lagos Airport</SelectItem>
                      <SelectItem value="lagos-vi">Lagos - Victoria Island</SelectItem>
                      <SelectItem value="abuja-airport">Abuja Airport</SelectItem>
                      <SelectItem value="abuja-central">Abuja - Central Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <Input type="date" id="pickup-date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return Date</Label>
                  <Input type="date" id="return-date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="car-type">Car Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                <Car className="mr-2 h-5 w-5" />
                Search Cars
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Vehicle Categories</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of quality vehicles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {carCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  {category.popular && <Badge className="absolute top-4 right-4 bg-orange-600">Popular</Badge>}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{category.price}</span>
                    <span className="text-gray-600 text-sm">per day</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Rental Locations</h2>
            <p className="text-xl text-gray-600">Convenient pickup and drop-off locations across Nigeria</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Airport: {location.airport}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">City Locations: {location.local}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Car Rentals?</h2>
            <p className="text-xl text-gray-600">Benefits that make us your preferred car rental partner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">All vehicles come with comprehensive insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock roadside assistance and customer support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fuel className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fuel Efficient</h3>
              <p className="text-gray-600">Well-maintained vehicles for optimal fuel efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Fleet</h3>
              <p className="text-gray-600">Modern, clean, and regularly serviced vehicles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Book your perfect rental car today and enjoy the freedom to explore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
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
