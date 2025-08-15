'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Wifi,
  Tv,
  Coffee,
  Utensils,
  Wind,
  Shield,
  Star,
  Calendar,
  Users,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Link from 'next/link';
import { scrollToSection } from '@/lib/lists';

interface Shortlet {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  hasParking: boolean;
  amenities: string[];
  images: string[];
  description: string;
  features: string[];
}

const shortlets: Shortlet[] = [
  {
    id: 1,
    name: 'Luxury Penthouse Suite',
    location: 'Victoria Island, Lagos',
    price: 45000,
    rating: 4.9,
    reviews: 127,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    hasParking: true,
    amenities: [
      'WiFi',
      'Air Conditioning',
      'Kitchen',
      'TV',
      'Security',
      'Pool',
    ],
    images: [
      '/placeholder.svg?height=400&width=600&text=Luxury+Penthouse+Living+Room',
      '/placeholder.svg?height=400&width=600&text=Modern+Kitchen',
      '/placeholder.svg?height=400&width=600&text=Master+Bedroom',
      '/placeholder.svg?height=400&width=600&text=City+View+Balcony',
    ],
    description:
      'Experience luxury living in this stunning penthouse suite with panoramic city views. Perfect for business travelers and families seeking comfort and elegance.',
    features: [
      '24/7 Security',
      'Rooftop Pool',
      'Gym Access',
      'Concierge Service',
      'High-Speed Internet',
      'Smart TV with Netflix',
    ],
  },
  {
    id: 2,
    name: 'Cozy Studio Apartment',
    location: 'Lekki Phase 1, Lagos',
    price: 18000,
    rating: 4.6,
    reviews: 89,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    hasParking: true,
    amenities: ['WiFi', 'Air Conditioning', 'Kitchenette', 'TV', 'Security'],
    images: [
      '/placeholder.svg?height=400&width=600&text=Cozy+Studio+Interior',
      '/placeholder.svg?height=400&width=600&text=Compact+Kitchen',
      '/placeholder.svg?height=400&width=600&text=Comfortable+Bed',
      '/placeholder.svg?height=400&width=600&text=Modern+Bathroom',
    ],
    description:
      'A perfect retreat for couples or solo travelers. This modern studio offers all the essentials in a stylish, compact space.',
    features: [
      'Gated Community',
      'Backup Generator',
      'DSTV Subscription',
      'Fully Furnished',
      'Close to Shopping Mall',
      '24/7 Water Supply',
    ],
  },
  {
    id: 3,
    name: 'Family Duplex',
    location: 'Ikeja GRA, Lagos',
    price: 35000,
    rating: 4.8,
    reviews: 156,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    hasParking: true,
    amenities: [
      'WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'TV',
      'Security',
      'Garden',
    ],
    images: [
      '/placeholder.svg?height=400&width=600&text=Spacious+Living+Room',
      '/placeholder.svg?height=400&width=600&text=Dining+Area',
      '/placeholder.svg?height=400&width=600&text=Children+Bedroom',
      '/placeholder.svg?height=400&width=600&text=Private+Garden',
    ],
    description:
      'Spacious family home perfect for extended stays. Features a private garden and multiple bedrooms for large families or groups.',
    features: [
      'Private Parking for 2 Cars',
      "Children's Play Area",
      'Washing Machine',
      'Microwave & Oven',
      'Quiet Neighborhood',
      'Close to Airport',
    ],
  },
  {
    id: 4,
    name: 'Executive 2-Bedroom',
    location: 'Ikoyi, Lagos',
    price: 28000,
    rating: 4.7,
    reviews: 203,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    hasParking: true,
    amenities: [
      'WiFi',
      'Air Conditioning',
      'Kitchen',
      'TV',
      'Security',
      'Balcony',
    ],
    images: [
      '/placeholder.svg?height=400&width=600&text=Executive+Living+Space',
      '/placeholder.svg?height=400&width=600&text=Modern+Kitchen+Island',
      '/placeholder.svg?height=400&width=600&text=Master+Suite',
      '/placeholder.svg?height=400&width=600&text=Scenic+Balcony+View',
    ],
    description:
      'Elegant 2-bedroom apartment in the heart of Ikoyi. Perfect for business executives and discerning travelers.',
    features: [
      'Premium Location',
      'Elevator Access',
      'Backup Power',
      'Housekeeping Service',
      'Business Center Access',
      'Restaurant Nearby',
    ],
  },
];

const getAmenityIcon = (amenity: string) => {
  const iconProps = 'h-5 w-5 text-purple-600';

  switch (amenity) {
    case 'WiFi':
      return <Wifi className={iconProps} />;
    case 'Air Conditioning':
      return <Wind className={iconProps} />;
    case 'Kitchen':
    case 'Full Kitchen':
      return <Utensils className={iconProps} />;
    case 'Kitchenette':
      return <Coffee className={iconProps} />;
    case 'TV':
      return <Tv className={iconProps} />;
    case 'Security':
      return <Shield className={iconProps} />;
    case 'Pool':
      return <span className='text-purple-600 text-xl'>🏊</span>;
    case 'Garden':
      return <span className='text-purple-600 text-xl'>🌿</span>;
    case 'Balcony':
      return <span className='text-purple-600 text-xl'>🏢</span>;
    default:
      return <span className='text-purple-600'>•</span>;
  }
};

export default function ShortletsPage() {
  const [selectedShortlet, setSelectedShortlet] = useState<Shortlet | null>(
    null
  );
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationData, setReservationData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleReservation = (shortlet: Shortlet) => {
    setSelectedShortlet(shortlet);
    setIsReservationOpen(true);
  };

  const handleSubmitReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    alert(`Reservation request submitted for ${selectedShortlet?.name}!`);
    setIsReservationOpen(false);
    setReservationData({
      checkIn: '',
      checkOut: '',
      guests: '',
      name: '',
      email: '',
      phone: '',
      specialRequests: '',
    });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white py-20'
        style={{
          backgroundImage:
            "url('/WhatsApp Image 2025-08-11 at 16.12.07 (2).jpeg')",
          // replace with your image path
        }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Premium Shortlet Apartments
          </h1>
          <p className='text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto'>
            Discover comfortable, fully-furnished apartments for your short-term
            stays in Lagos. Perfect for business trips, vacations, or temporary
            relocations.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-white text-purple-600 hover:bg-gray-100'
              onClick={() => scrollToSection('shortlets-section')}
            >
              Browse Apartments
            </Button>
            <Link href='/contact'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-purple-600 bg-transparent'
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shortlets Grid */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
              Available Apartments
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Choose from our carefully selected collection of premium shortlet
              apartments across Lagos
            </p>
          </div>

          <div
            id='shortlets-section'
            className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          >
            {shortlets.map((shortlet) => (
              <Card
                key={shortlet.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <CardHeader className='p-0'>
                  <Carousel className='w-full'>
                    <CarouselContent>
                      {shortlet.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className='relative h-48'>
                            <Image
                              src={image || '/placeholder.svg'}
                              alt={`${shortlet.name} - Image ${index + 1}`}
                              fill
                              className='object-cover'
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className='left-2' />
                    <CarouselNext className='right-2' />
                  </Carousel>
                </CardHeader>

                <CardContent className='p-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <Badge
                      variant='secondary'
                      className='bg-purple-100 text-purple-800'
                    >
                      ₦{shortlet.price.toLocaleString()}/night
                    </Badge>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='text-sm font-medium'>
                        {shortlet.rating}
                      </span>
                      <span className='text-sm text-gray-500'>
                        ({shortlet.reviews})
                      </span>
                    </div>
                  </div>

                  <CardTitle className='text-lg mb-2'>
                    {shortlet.name}
                  </CardTitle>

                  <div className='flex items-center gap-1 text-gray-600 mb-3'>
                    <MapPin className='h-4 w-4' />
                    <span className='text-sm'>{shortlet.location}</span>
                  </div>

                  <div className='flex items-center gap-4 text-sm text-gray-600 mb-4'>
                    <div className='flex items-center gap-1'>
                      <Bed className='h-4 w-4' />
                      <span>{shortlet.bedrooms} bed</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Bath className='h-4 w-4' />
                      <span>{shortlet.bathrooms} bath</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Users className='h-4 w-4' />
                      <span>{shortlet.maxGuests} guests</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-2 mb-4'>
                    {shortlet.hasParking && (
                      <Badge variant='outline' className='text-xs'>
                        <Car className='h-3 w-3 mr-1' />
                        Parking
                      </Badge>
                    )}
                    <Badge variant='outline' className='text-xs'>
                      <Wifi className='h-3 w-3 mr-1' />
                      WiFi
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      <Wind className='h-3 w-3 mr-1' />
                      AC
                    </Badge>
                  </div>
                </CardContent>

                <CardFooter className='p-4 pt-0 flex gap-2'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant='outline'
                        className='flex-1 bg-transparent'
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='max-w-7xl w-[95vw] max-h-[95vh] overflow-y-auto'>
                      <DialogHeader className='pb-6'>
                        <DialogTitle className='text-3xl font-bold'>
                          {shortlet.name}
                        </DialogTitle>
                        <div className='flex items-center justify-between mt-4'>
                          <div className='flex items-center gap-2'>
                            <MapPin className='h-6 w-6 text-purple-600' />
                            <span className='text-lg font-medium text-gray-700'>
                              {shortlet.location}
                            </span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <Star className='h-6 w-6 fill-yellow-400 text-yellow-400' />
                            <span className='text-lg font-medium'>
                              {shortlet.rating}
                            </span>
                            <span className='text-gray-500'>
                              ({shortlet.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className='space-y-8'>
                        {/* Image Gallery */}
                        <div className='w-full'>
                          <Carousel className='w-full'>
                            <CarouselContent>
                              {shortlet.images.map((image, index) => (
                                <CarouselItem key={index}>
                                  <div className='relative h-96 md:h-[500px]'>
                                    <Image
                                      src={image || '/placeholder.svg'}
                                      alt={`${shortlet.name} - Image ${
                                        index + 1
                                      }`}
                                      fill
                                      className='object-cover rounded-xl'
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className='left-4' />
                            <CarouselNext className='right-4' />
                          </Carousel>
                        </div>

                        {/* Main Content Grid */}
                        <div className='grid lg:grid-cols-3 gap-8'>
                          {/* Left Column - Details */}
                          <div className='lg:col-span-2 space-y-8'>
                            {/* Price and Description */}
                            <div className='space-y-4'>
                              <div className='text-4xl font-bold text-purple-600'>
                                ₦{shortlet.price.toLocaleString()}
                                <span className='text-xl text-gray-500 font-normal'>
                                  /night
                                </span>
                              </div>
                              <p className='text-lg text-gray-600 leading-relaxed'>
                                {shortlet.description}
                              </p>
                            </div>

                            {/* Room Details */}
                            <div className='bg-gray-50 p-6 rounded-xl'>
                              <h3 className='text-2xl font-semibold mb-6'>
                                Room Details
                              </h3>
                              <div className='grid md:grid-cols-2 gap-6'>
                                <div className='flex items-center gap-4'>
                                  <div className='bg-purple-100 p-3 rounded-lg'>
                                    <Bed className='h-8 w-8 text-purple-600' />
                                  </div>
                                  <div>
                                    <div className='font-semibold text-lg'>
                                      {shortlet.bedrooms}
                                    </div>
                                    <div className='text-gray-600'>
                                      Bedrooms
                                    </div>
                                  </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                  <div className='bg-purple-100 p-3 rounded-lg'>
                                    <Bath className='h-8 w-8 text-purple-600' />
                                  </div>
                                  <div>
                                    <div className='font-semibold text-lg'>
                                      {shortlet.bathrooms}
                                    </div>
                                    <div className='text-gray-600'>
                                      Bathrooms
                                    </div>
                                  </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                  <div className='bg-purple-100 p-3 rounded-lg'>
                                    <Users className='h-8 w-8 text-purple-600' />
                                  </div>
                                  <div>
                                    <div className='font-semibold text-lg'>
                                      {shortlet.maxGuests}
                                    </div>
                                    <div className='text-gray-600'>
                                      Max Guests
                                    </div>
                                  </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                  <div className='bg-purple-100 p-3 rounded-lg'>
                                    <Car className='h-8 w-8 text-purple-600' />
                                  </div>
                                  <div>
                                    <div className='font-semibold text-lg'>
                                      {shortlet.hasParking
                                        ? 'Available'
                                        : 'Not Available'}
                                    </div>
                                    <div className='text-gray-600'>Parking</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Amenities */}
                            <div>
                              <h3 className='text-2xl font-semibold mb-6'>
                                Amenities
                              </h3>
                              <div className='grid md:grid-cols-2 gap-4'>
                                {shortlet.amenities.map((amenity, index) => (
                                  <div
                                    key={index}
                                    className='flex items-center gap-4 p-4 bg-white rounded-lg border'
                                  >
                                    {getAmenityIcon(amenity)}
                                    <span className='text-lg'>{amenity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className='text-2xl font-semibold mb-6'>
                                Features & Services
                              </h3>
                              <div className='grid md:grid-cols-2 gap-3'>
                                {shortlet.features.map((feature, index) => (
                                  <div
                                    key={index}
                                    className='flex items-center gap-3 p-3 bg-white rounded-lg border'
                                  >
                                    <div className='w-2 h-2 bg-purple-600 rounded-full flex-shrink-0'></div>
                                    <span className='text-gray-700'>
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column - Reservation Card */}
                          <div className='lg:col-span-1'>
                            <div className='sticky top-4 bg-white p-6 rounded-xl border-2 border-purple-100 shadow-lg'>
                              <div className='text-center mb-6'>
                                <div className='text-3xl font-bold text-purple-600 mb-2'>
                                  ₦{shortlet.price.toLocaleString()}
                                  <span className='text-lg text-gray-500 font-normal'>
                                    /night
                                  </span>
                                </div>
                                <p className='text-gray-600'>
                                  Ready to book your stay?
                                </p>
                              </div>
                              <Button
                                className='w-full bg-purple-600 hover:bg-purple-700 text-lg py-6'
                                onClick={() => handleReservation(shortlet)}
                              >
                                Reserve This Apartment
                              </Button>
                              <div className='mt-4 text-center text-sm text-gray-500'>
                                Free cancellation up to 24 hours before check-in
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className='flex-1 bg-purple-600 hover:bg-purple-700'
                    onClick={() => handleReservation(shortlet)}
                  >
                    Reserve
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
        <DialogContent className='max-w-5xl w-[95vw] max-h-[95vh] overflow-y-auto'>
          <DialogHeader className='pb-6'>
            <DialogTitle className='text-3xl font-bold'>
              Reserve {selectedShortlet?.name}
            </DialogTitle>
            <p className='text-lg text-gray-600 mt-2'>
              Complete your booking details below
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmitReservation} className='space-y-8'>
            <div className='grid lg:grid-cols-2 gap-8'>
              {/* Left Column - Booking Form */}
              <div className='space-y-8'>
                {/* Booking Details */}
                <div className='space-y-6'>
                  <div className='flex items-center gap-3 pb-4 border-b'>
                    <div className='bg-purple-100 p-2 rounded-lg'>
                      <Calendar className='h-6 w-6 text-purple-600' />
                    </div>
                    <h3 className='text-2xl font-semibold'>Booking Details</h3>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='checkIn' className='text-lg font-medium'>
                        Check-in Date *
                      </Label>
                      <Input
                        id='checkIn'
                        type='date'
                        value={reservationData.checkIn}
                        onChange={(e) =>
                          setReservationData({
                            ...reservationData,
                            checkIn: e.target.value,
                          })
                        }
                        className='h-12 text-lg'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='checkOut' className='text-lg font-medium'>
                        Check-out Date *
                      </Label>
                      <Input
                        id='checkOut'
                        type='date'
                        value={reservationData.checkOut}
                        onChange={(e) =>
                          setReservationData({
                            ...reservationData,
                            checkOut: e.target.value,
                          })
                        }
                        className='h-12 text-lg'
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='guests' className='text-lg font-medium'>
                      Number of Guests *
                    </Label>
                    <Select
                      value={reservationData.guests}
                      onValueChange={(value) =>
                        setReservationData({
                          ...reservationData,
                          guests: value,
                        })
                      }
                    >
                      <SelectTrigger className='h-12 text-lg'>
                        <SelectValue placeholder='Select number of guests' />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          { length: selectedShortlet?.maxGuests || 8 },
                          (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1} Guest{i + 1 > 1 ? 's' : ''}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className='space-y-6'>
                  <div className='flex items-center gap-3 pb-4 border-b'>
                    <div className='bg-purple-100 p-2 rounded-lg'>
                      <User className='h-6 w-6 text-purple-600' />
                    </div>
                    <h3 className='text-2xl font-semibold'>
                      Personal Information
                    </h3>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='name' className='text-lg font-medium'>
                      Full Name *
                    </Label>
                    <Input
                      id='name'
                      value={reservationData.name}
                      onChange={(e) =>
                        setReservationData({
                          ...reservationData,
                          name: e.target.value,
                        })
                      }
                      placeholder='Enter your full name'
                      className='h-12 text-lg'
                      required
                    />
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='email' className='text-lg font-medium'>
                        Email Address *
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        value={reservationData.email}
                        onChange={(e) =>
                          setReservationData({
                            ...reservationData,
                            email: e.target.value,
                          })
                        }
                        placeholder='your@email.com'
                        className='h-12 text-lg'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='phone' className='text-lg font-medium'>
                        Phone Number *
                      </Label>
                      <Input
                        id='phone'
                        type='tel'
                        value={reservationData.phone}
                        onChange={(e) =>
                          setReservationData({
                            ...reservationData,
                            phone: e.target.value,
                          })
                        }
                        placeholder='+234 xxx xxx xxxx'
                        className='h-12 text-lg'
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className='space-y-4'>
                  <Label
                    htmlFor='specialRequests'
                    className='text-lg font-medium'
                  >
                    Special Requests
                  </Label>
                  <Textarea
                    id='specialRequests'
                    value={reservationData.specialRequests}
                    onChange={(e) =>
                      setReservationData({
                        ...reservationData,
                        specialRequests: e.target.value,
                      })
                    }
                    placeholder='Any special requests or requirements...'
                    rows={4}
                    className='text-lg'
                  />
                </div>
              </div>

              {/* Right Column - Booking Summary */}
              <div className='space-y-6'>
                <div className='bg-gray-50 p-6 rounded-xl'>
                  <h4 className='text-2xl font-semibold mb-6'>
                    Booking Summary
                  </h4>
                  {selectedShortlet && (
                    <div className='space-y-4'>
                      <div className='relative h-48 rounded-lg overflow-hidden'>
                        <Image
                          src={selectedShortlet.images[0] || '/placeholder.svg'}
                          alt={selectedShortlet.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div className='space-y-3'>
                        <div className='flex justify-between items-start'>
                          <span className='text-gray-600'>Apartment:</span>
                          <span className='font-semibold text-right'>
                            {selectedShortlet.name}
                          </span>
                        </div>
                        <div className='flex justify-between items-start'>
                          <span className='text-gray-600'>Location:</span>
                          <span className='font-medium text-right'>
                            {selectedShortlet.location}
                          </span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-gray-600'>Rate per night:</span>
                          <span className='font-bold text-lg text-purple-600'>
                            ₦{selectedShortlet.price.toLocaleString()}
                          </span>
                        </div>
                        <div className='pt-4 border-t'>
                          <div className='flex items-center gap-2 mb-2'>
                            <Bed className='h-5 w-5 text-gray-500' />
                            <span>{selectedShortlet.bedrooms} Bedrooms</span>
                          </div>
                          <div className='flex items-center gap-2 mb-2'>
                            <Bath className='h-5 w-5 text-gray-500' />
                            <span>{selectedShortlet.bathrooms} Bathrooms</span>
                          </div>
                          <div className='flex items-center gap-2 mb-2'>
                            <Users className='h-5 w-5 text-gray-500' />
                            <span>
                              Up to {selectedShortlet.maxGuests} Guests
                            </span>
                          </div>
                          {selectedShortlet.hasParking && (
                            <div className='flex items-center gap-2'>
                              <Car className='h-5 w-5 text-gray-500' />
                              <span>Parking Available</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className='bg-purple-50 p-6 rounded-xl'>
                  <h5 className='font-semibold text-lg mb-3'>
                    What's Included
                  </h5>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                      Free WiFi & Utilities
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                      24/7 Security
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                      Housekeeping Service
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                      Customer Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='flex gap-6 pt-6 border-t'>
              <Button
                type='button'
                variant='outline'
                className='flex-1 h-12 text-lg bg-transparent'
                onClick={() => setIsReservationOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                className='flex-1 h-12 text-lg bg-purple-600 hover:bg-purple-700'
              >
                Submit Reservation Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
