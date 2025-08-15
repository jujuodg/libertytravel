'use client';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, MapPin, DollarSign, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/lists';

const packages = [
  {
    id: 'kenya-experience',
    title: 'Kenya Experience Beauty in the Wild',
    description:
      'Discover the breathtaking landscapes and wildlife of Kenya with our comprehensive safari package.',
    price: '₦580,000',
    duration: '7 Days',
    image: '/ken 6.jpg',
    featured: true,
    highlights: [
      'Maasai Mara Safari',
      'Nairobi National Park',
      'Cultural Village Visit',
      'Hot Air Balloon Ride',
    ],
  },
  {
    id: 'dubai-glamour',
    title: 'Glamour with the Magic of Dubai',
    description:
      'Uncover glamour with the magic of Dubai — where luxury meets adventure under the Arabian sun.',
    price: '₦935,000',
    duration: '5 Days',
    image: '/Dub 5.jpg',
    featured: true,
    highlights: [
      'Desert Safari',
      'Burj Khalifa Visit',
      'Dubai Marina Cruise',
      'Shopping Mall Tours',
    ],
  },
  // {
  //   id: "turkey-adventure",
  //   title: "Turkey Cultural Adventure",
  //   description:
  //     "Experience the rich history and stunning landscapes of Turkey with guided tours and cultural experiences.",
  //   price: "₦720,000",
  //   duration: "6 Days",
  //   image: "/placeholder.svg?height=300&width=400&text=Turkey Cappadocia",
  //   featured: false,
  //   highlights: [
  //     "Cappadocia Hot Air Balloon",
  //     "Istanbul City Tour",
  //     "Pamukkale Thermal Pools",
  //     "Turkish Bath Experience",
  //   ],
  // },
  // {
  //   id: "maldives-paradise",
  //   title: "Maldives Paradise Getaway",
  //   description:
  //     "Escape to the pristine beaches and crystal-clear waters of the Maldives for the ultimate tropical experience.",
  //   price: "₦1,200,000",
  //   duration: "4 Days",
  //   image: "/placeholder.svg?height=300&width=400&text=Maldives Beach",
  //   featured: true,
  //   highlights: ["Overwater Villa Stay", "Snorkeling & Diving", "Sunset Cruise", "Spa Treatments"],
  // },
  // {
  //   id: "egypt-wonders",
  //   title: "Egypt Ancient Wonders",
  //   description: "Journey through time and explore the magnificent pyramids, temples, and treasures of ancient Egypt.",
  //   price: "₦680,000",
  //   duration: "8 Days",
  //   image: "/placeholder.svg?height=300&width=400&text=Egypt Pyramids",
  //   featured: false,
  //   highlights: ["Pyramids of Giza", "Nile River Cruise", "Valley of Kings", "Egyptian Museum"],
  // },
  // {
  //   id: "south-africa-safari",
  //   title: "South Africa Safari & Wine",
  //   description: "Combine thrilling wildlife encounters with world-class wine tasting in beautiful South Africa.",
  //   price: "₦890,000",
  //   duration: "9 Days",
  //   image: "/placeholder.svg?height=300&width=400&text=South Africa Safari",
  //   featured: false,
  //   highlights: ["Kruger National Park", "Cape Town City Tour", "Wine Tasting Tours", "Table Mountain Cable Car"],
  // },
];

export default function PackagesPage() {
  const [isCustomFormOpen, setIsCustomFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: '',
    destination: '',
    budget: '',
    duration: '',
    travelDate: '',
    specialRequests: '',
  });
  const featuredPackages = packages.filter((pkg) => pkg.featured);
  const allPackages = packages;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Custom package request:', formData);
    // You can add API call or email functionality here
    alert(
      "Thank you! We'll contact you within 24 hours with a custom package proposal."
    );
    setIsCustomFormOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      numberOfPeople: '',
      destination: '',
      budget: '',
      duration: '',
      travelDate: '',
      specialRequests: '',
    });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white py-32'
        style={{
          backgroundImage: "url('/vacation.jpg')",
          // replace with your image path
        }}
      >
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-5xl font-bold mb-4 italic'>Vacation Packages</h1>
          <p className='text-xl'>
            Discover amazing destinations with our curated travel packages
          </p>
        </div>
      </section>

      <div className='container mx-auto px-4 py-12'>
        {/* Featured Packages */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Featured Packages
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative'>
                  <img
                    src={pkg.image || '/placeholder.svg'}
                    alt={pkg.title}
                    className='w-full h-48 object-cover'
                  />
                  <Badge className='absolute top-4 right-4 bg-purple-600'>
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className='text-xl'>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex justify-between items-center mb-4'>
                    <span className='text-2xl font-bold text-purple-600'>
                      {pkg.price}{' '}
                      <span className='text-sm text-gray-600'>
                        per person sharing
                      </span>
                    </span>
                    {/* <span className='text-gray-600'>{pkg.duration}</span> */}
                  </div>
                  <div className='mb-4'>
                    <h4 className='font-semibold mb-2'>Highlights:</h4>
                    <ul className='text-sm text-gray-600 space-y-1'>
                      {pkg.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button className='w-full bg-purple-600 hover:bg-purple-700'>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Packages */}
        <section>
          <h2 className='text-3xl font-bold text-center mb-8'>All Packages</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {allPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative'>
                  <img
                    src={pkg.image || '/placeholder.svg'}
                    alt={pkg.title}
                    className='w-full h-48 object-cover'
                  />
                  {pkg.featured && (
                    <Badge className='absolute top-4 right-4 bg-purple-600'>
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className='text-xl'>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex justify-between items-center mb-4'>
                    <span className='text-2xl font-bold text-purple-600'>
                      {pkg.price}{' '}
                      <span className='text-sm text-gray-600'>
                        per person sharing
                      </span>
                    </span>
                    {/* <span className='text-gray-600'>{pkg.duration}</span> */}
                  </div>
                  <div className='mb-4'>
                    <h4 className='font-semibold mb-2'>Highlights:</h4>
                    <ul className='text-sm text-gray-600 space-y-1'>
                      {pkg.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button className='w-full bg-purple-600 hover:bg-purple-700'>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}

            {/* Custom Package Card */}
            <Card className='overflow-hidden hover:shadow-lg transition-shadow border-2 border-dashed border-purple-300 bg-purple-50'>
              <CardContent className='flex flex-col items-center justify-center h-full p-8 text-center'>
                <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
                  <Plus className='w-10 h-10 text-purple-600' />
                </div>
                <CardTitle className='text-xl mb-2 text-purple-800'>
                  Create Custom Package
                </CardTitle>
                <CardDescription className='mb-6 text-gray-600'>
                  Don't see what you're looking for? Let us create a
                  personalized travel package just for you!
                </CardDescription>

                <Dialog
                  open={isCustomFormOpen}
                  onOpenChange={setIsCustomFormOpen}
                >
                  <DialogTrigger asChild>
                    <Button className='bg-purple-600 hover:bg-purple-700 text-white'>
                      <Plus className='w-4 h-4 mr-2' />
                      Customize Package
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
                    <DialogHeader>
                      <DialogTitle className='text-2xl text-purple-800'>
                        Create Your Custom Package
                      </DialogTitle>
                      <DialogDescription>
                        Tell us about your dream trip and we'll create a
                        personalized package for you.
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                      {/* Personal Information */}
                      <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-800 flex items-center'>
                          <User className='w-5 h-5 mr-2 text-purple-600' />
                          Personal Information
                        </h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                          <div>
                            <Label htmlFor='name'>Full Name *</Label>
                            <Input
                              id='name'
                              value={formData.name}
                              onChange={(e) =>
                                handleInputChange('name', e.target.value)
                              }
                              placeholder='Enter your full name'
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor='email'>Email Address *</Label>
                            <Input
                              id='email'
                              type='email'
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange('email', e.target.value)
                              }
                              placeholder='Enter your email'
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor='phone'>Phone Number *</Label>
                          <Input
                            id='phone'
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange('phone', e.target.value)
                            }
                            placeholder='Enter your phone number'
                            required
                          />
                        </div>
                      </div>

                      {/* Trip Details */}
                      <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-800 flex items-center'>
                          <MapPin className='w-5 h-5 mr-2 text-purple-600' />
                          Trip Details
                        </h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                          <div>
                            <Label htmlFor='destination'>Destination *</Label>
                            <Input
                              id='destination'
                              value={formData.destination}
                              onChange={(e) =>
                                handleInputChange('destination', e.target.value)
                              }
                              placeholder='Where would you like to go?'
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor='numberOfPeople'>
                              Number of Travelers *
                            </Label>
                            <Select
                              onValueChange={(value) =>
                                handleInputChange('numberOfPeople', value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder='Select number of people' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value='1'>1 Person</SelectItem>
                                <SelectItem value='2'>2 People</SelectItem>
                                <SelectItem value='3'>3 People</SelectItem>
                                <SelectItem value='4'>4 People</SelectItem>
                                <SelectItem value='5'>5 People</SelectItem>
                                <SelectItem value='6+'>6+ People</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-4'>
                          <div>
                            <Label htmlFor='duration'>Trip Duration *</Label>
                            <Select
                              onValueChange={(value) =>
                                handleInputChange('duration', value)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder='Select duration' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value='3-4 days'>
                                  3-4 Days
                                </SelectItem>
                                <SelectItem value='5-7 days'>
                                  5-7 Days
                                </SelectItem>
                                <SelectItem value='1-2 weeks'>
                                  1-2 Weeks
                                </SelectItem>
                                <SelectItem value='2+ weeks'>
                                  2+ Weeks
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor='travelDate'>
                              Preferred Travel Date
                            </Label>
                            <Input
                              id='travelDate'
                              type='date'
                              value={formData.travelDate}
                              onChange={(e) =>
                                handleInputChange('travelDate', e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Budget */}
                      <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-800 flex items-center'>
                          <DollarSign className='w-5 h-5 mr-2 text-purple-600' />
                          Budget Information
                        </h3>
                        <div>
                          <Label htmlFor='budget'>Budget Range (₦) *</Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange('budget', value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder='Select your budget range' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='300000-500000'>
                                ₦300,000 - ₦500,000
                              </SelectItem>
                              <SelectItem value='500000-800000'>
                                ₦500,000 - ₦800,000
                              </SelectItem>
                              <SelectItem value='800000-1200000'>
                                ₦800,000 - ₦1,200,000
                              </SelectItem>
                              <SelectItem value='1200000-2000000'>
                                ₦1,200,000 - ₦2,000,000
                              </SelectItem>
                              <SelectItem value='2000000+'>
                                ₦2,000,000+
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-800'>
                          Special Requests & Preferences
                        </h3>
                        <div>
                          <Label htmlFor='specialRequests'>
                            Tell us more about your ideal trip
                          </Label>
                          <Textarea
                            id='specialRequests'
                            value={formData.specialRequests}
                            onChange={(e) =>
                              handleInputChange(
                                'specialRequests',
                                e.target.value
                              )
                            }
                            placeholder="Any specific activities, accommodations, dietary requirements, or special occasions you'd like us to consider?"
                            rows={4}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className='flex gap-4 pt-4'>
                        <Button
                          type='button'
                          variant='outline'
                          onClick={() => setIsCustomFormOpen(false)}
                          className='flex-1'
                        >
                          Cancel
                        </Button>
                        <Button
                          type='submit'
                          className='flex-1 bg-purple-600 hover:bg-purple-700'
                        >
                          Submit Request
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-4'>
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-gray-600'>
                Check out our frequently asked questions for more answers to
                some of your questions
              </p>
            </div>

            <div className='max-w-4xl mx-auto'>
              <Accordion type='single' collapsible className='space-y-4'>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className='border border-gray-200 rounded-lg'
                  >
                    <AccordionTrigger className='px-6 py-4 text-left hover:no-underline hover:bg-purple-50 rounded-lg'>
                      <span className='text-purple-600 font-semibold'>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className='px-6 pb-4 text-gray-600 leading-relaxed'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
