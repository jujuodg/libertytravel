'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  Users,
  Home,
  MessageSquare,
  Phone,
  Clock,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { shortFaqs } from '@/lib/lists';

const shortletSlides = [
  {
    id: 1,
    image: '/short1.jpg',
    title: 'Luxury Waterfront Residences',
    subtitle: 'Where Comfort Meets Elegance',
    description:
      'Wake up to breathtaking lagoon views in our luxury waterfront residences — a fusion of hotel-grade comfort and shortlet privacy. Each unit combines refined interiors, curated art, and full modern amenities to create a truly elevated stay for business leaders, couples, and lifestyle travelers.',
    features: [
      'Panoramic water views',
      '24/7 concierge and housekeeping',
      'Infinity pool & fitness studio',
      'High-speed WiFi',
      'Smart entertainment systems',
      'Secure on-site parking',
    ],
  },
  {
    id: 2,
    image: '/short2.jpg',
    title: 'Modern City Studios & Hotel Rooms',
    subtitle: 'Smart Living in Prime Locations',
    description:
      'Our modern city studios and boutique hotel rooms sit in the heart of Lagos — blending the independence of a shortlet with the service of a premium hotel. Ideal for young professionals, digital nomads, and couples who crave stylish urban living with effortless access to top attractions.',
    features: [
      'Central locations: Lekki, VI, Ikoyi',
      'Smart home features',
      'Mini kitchenettes & lounge areas',
      'Work-friendly desks',
      '24-hour front desk & security',
      'Instant check-in/out',
    ],
  },
  {
    id: 3,
    image: '/short3.png',
    title: 'Family Suites & Penthouses',
    subtitle: 'Space, Comfort, and Togetherness',
    description:
      'Whether you’re traveling as a family or group, our spacious penthouses and family suites offer the warmth of home with the service of a hotel. Enjoy large living spaces, fully equipped kitchens, and private terraces designed for shared moments and lasting memories.',
    features: [
      'Multiple bedrooms & bathrooms',
      'Private balconies/terraces',
      'Family-friendly amenities',
      'Spacious living & dining areas',
      'Panoramic city views',
      'Daily cleaning & concierge',
    ],
  },
  {
    id: 4,
    image: '/short4.png',
    title: 'Budget-Friendly Stays',
    subtitle: 'Affordable Comfort, Trusted Quality',
    description:
      'Perfect for short visits or extended stays, our budget-friendly shortlets and hotel rooms deliver clean, secure, and comfortable experiences without the high price tag. Great for students, solo travelers, or guests seeking convenience on a budget.',
    features: [
      'Competitive rates',
      'Fully furnished interiors',
      'Essential amenities',
      'Safe, accessible locations',
      'Flexible check-in/out',
      'Reliable housekeeping',
    ],
  },
  {
    id: 5,
    image: '/short5.jpg',
    title: 'Executive Business Hotels',
    subtitle: 'Stay Productive, Stay Relaxed',
    description:
      'Our executive business suites and hotels are designed for productivity and rest. With elegant interiors, fast WiFi, meeting rooms, and business lounge access, you can focus on work while enjoying the comfort of a premium stay in the city.',
    features: [
      'Dedicated workspace & ergonomic seating',
      'High-speed internet',
      'On-site meeting facilities',
      'Business lounge & printing services',
      'Airport pickup & drop-off',
      'Concierge and room service',
    ],
  },
];

export default function ShortletsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    days: '',
    rooms: '',
    guests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequirements: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Shortlet booking request:', formData);

    const payload = {
      ...formData,
      formType: 'Shortlet Booking',
    };
    // Handle form submission here

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsFormOpen(false);
        // Reset form
        setFormData({
          location: '',
          checkIn: '',
          checkOut: '',
          days: '',
          rooms: '',
          guests: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          specialRequirements: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section with Carousel */}
      <section className='relative h-screen'>
        <Carousel className='w-full h-full'>
          <CarouselContent>
            {shortletSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className='relative h-screen'>
                  {/* Background Image */}
                  <Image
                    src={slide.image || '/placeholder.svg'}
                    alt={slide.title}
                    fill
                    className='object-cover'
                    priority
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/30' />

                  {/* Content */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='container mx-auto px-4'>
                      <div className='max-w-4xl mx-auto text-center text-white'>
                        <h1 className='text-6xl md:text-7xl font-bold mb-4'>
                          {slide.title}
                        </h1>
                        <p className='text-2xl md:text-3xl font-light mb-8 text-purple-200'>
                          {slide.subtitle}
                        </p>
                        <p className='text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed'>
                          {slide.description}
                        </p>

                        {/* Features Grid */}
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto'>
                          {slide.features.map((feature, index) => (
                            <div
                              key={index}
                              className='flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3'
                            >
                              <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                              <span className='text-sm font-medium'>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Call to Action */}
                        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                          <DialogTrigger asChild>
                            <Button
                              size='lg'
                              className='bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                            >
                              Book Your Stay Now
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-8 h-12 w-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30' />
          <CarouselNext className='right-8 h-12 w-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30' />
        </Carousel>
      </section>

      {/* Booking Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className='max-w-4xl w-[95vw] max-h-[95vh] overflow-y-auto'>
          <DialogHeader className='mb-6'>
            <DialogTitle className='text-2xl font-bold text-center'>
              Book Your Shortlet/Hotel Stay
            </DialogTitle>
            <p className='text-gray-600 text-center'>
              Fill out the form below and we'll find the perfect accommodation
              for you
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className='space-y-8'>
            {/* Stay Details Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold flex items-center gap-2 border-b pb-2'>
                <Calendar className='h-5 w-5 text-purple-600' />
                Stay Details
              </h3>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label htmlFor='location' className='text-sm font-medium'>
                    Preferred Location
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange('location', value)
                    }
                  >
                    <SelectTrigger className='h-12'>
                      <SelectValue placeholder='Select preferred area' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='victoria-island'>
                        Victoria Island
                      </SelectItem>
                      <SelectItem value='lekki-phase1'>
                        Lekki Phase 1
                      </SelectItem>
                      <SelectItem value='lekki-phase2'>
                        Lekki Phase 2
                      </SelectItem>
                      <SelectItem value='ikoyi'>Ikoyi</SelectItem>
                      <SelectItem value='surulere'>Surulere</SelectItem>
                      <SelectItem value='yaba'>Yaba</SelectItem>
                      <SelectItem value='ikeja'>Ikeja</SelectItem>
                      <SelectItem value='ajah'>Ajah</SelectItem>
                      <SelectItem value='other'>
                        Other (specify in requirements)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor='days' className='text-sm font-medium'>
                    Number of Days
                  </Label>
                  <Input
                    id='days'
                    type='number'
                    min='1'
                    placeholder='How many days?'
                    className='h-12'
                    value={formData.days}
                    onChange={(e) => handleInputChange('days', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label htmlFor='checkIn' className='text-sm font-medium'>
                    Check-in Date
                  </Label>
                  <Input
                    id='checkIn'
                    type='date'
                    className='h-12'
                    value={formData.checkIn}
                    onChange={(e) =>
                      handleInputChange('checkIn', e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor='checkOut' className='text-sm font-medium'>
                    Check-out Date
                  </Label>
                  <Input
                    id='checkOut'
                    type='date'
                    className='h-12'
                    value={formData.checkOut}
                    onChange={(e) =>
                      handleInputChange('checkOut', e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label htmlFor='rooms' className='text-sm font-medium'>
                    Number of Rooms
                  </Label>
                  <Select
                    onValueChange={(value) => handleInputChange('rooms', value)}
                  >
                    <SelectTrigger className='h-12'>
                      <SelectValue placeholder='How many rooms?' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='1'>1 Room</SelectItem>
                      <SelectItem value='2'>2 Rooms</SelectItem>
                      <SelectItem value='3'>3 Rooms</SelectItem>
                      <SelectItem value='4'>4 Rooms</SelectItem>
                      <SelectItem value='5+'>5+ Rooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor='guests' className='text-sm font-medium'>
                    Number of Guests
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange('guests', value)
                    }
                  >
                    <SelectTrigger className='h-12'>
                      <SelectValue placeholder='How many guests?' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='1'>1 Guest</SelectItem>
                      <SelectItem value='2'>2 Guests</SelectItem>
                      <SelectItem value='3'>3 Guests</SelectItem>
                      <SelectItem value='4'>4 Guests</SelectItem>
                      <SelectItem value='5'>5 Guests</SelectItem>
                      <SelectItem value='6'>6 Guests</SelectItem>
                      <SelectItem value='7+'>7+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold flex items-center gap-2 border-b pb-2'>
                <Users className='h-5 w-5 text-purple-600' />
                Personal Information
              </h3>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label htmlFor='firstName' className='text-sm font-medium'>
                    First Name
                  </Label>
                  <Input
                    id='firstName'
                    placeholder='Enter your first name'
                    className='h-12'
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor='lastName' className='text-sm font-medium'>
                    Last Name
                  </Label>
                  <Input
                    id='lastName'
                    placeholder='Enter your last name'
                    className='h-12'
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange('lastName', e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label htmlFor='email' className='text-sm font-medium'>
                    Email Address
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    className='h-12'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor='phone' className='text-sm font-medium'>
                    Phone Number
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='Enter your phone number'
                    className='h-12'
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Special Requirements Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold flex items-center gap-2 border-b pb-2'>
                <MessageSquare className='h-5 w-5 text-purple-600' />
                Special Requirements
              </h3>

              <div>
                <Label
                  htmlFor='specialRequirements'
                  className='text-sm font-medium'
                >
                  Additional Requirements or Preferences
                </Label>
                <Textarea
                  id='specialRequirements'
                  placeholder='Please specify any special requirements, preferences, or additional information (e.g., accessibility needs, specific amenities, pet-friendly, etc.)'
                  className='min-h-[120px] mt-2'
                  value={formData.specialRequirements}
                  onChange={(e) =>
                    handleInputChange('specialRequirements', e.target.value)
                  }
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className='pt-6 border-t'>
              <Button
                type='submit'
                className='w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold'
              >
                Submit Booking Request
              </Button>
              <p className='text-sm text-gray-500 text-center mt-3'>
                We'll contact you within 24 hours to confirm your booking and
                provide available options.
              </p>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Additional Information Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-8'>
              Why Choose Our Shortlets?
            </h2>
            <div className='grid md:grid-cols-3 gap-28'>
              <Card className='p-6 w-80 hover:shadow-lg transition-shadow'>
                <CardContent className='text-center'>
                  <Home className='h-12 w-12 text-purple-600 mx-auto mb-4' />
                  <h3 className='text-xl font-semibold mb-3'>
                    Premium Locations
                  </h3>
                  <p className='text-gray-600'>
                    Stay where convenience meets class. Our properties sit in
                    prime areas with quick access to airports, shopping malls,
                    beaches, and nightlife. Whether you’re in town for work or
                    leisure, you’ll always be right where you need to be.
                  </p>
                </CardContent>
              </Card>

              <Card className='p-6 w-80 hover:shadow-lg transition-shadow'>
                <CardContent className='text-center'>
                  <Clock className='h-12 w-12 text-purple-600 mx-auto mb-4' />
                  <h3 className='text-xl font-semibold mb-3'>24/7 Support</h3>
                  <p className='text-gray-600'>
                    Hospitality doesn’t sleep. Our 24/7 support guarantees that
                    whenever you need assistance early morning or midnight help
                    is available instantly, ensuring a smooth, stress-free
                    experience.
                  </p>
                </CardContent>
              </Card>

              <Card className='p-6 w-80 hover:shadow-lg transition-shadow'>
                <CardContent className='text-center'>
                  <Phone className='h-12 w-12 text-purple-600 mx-auto mb-4' />
                  <h3 className='text-xl font-semibold mb-3'>Easy Booking</h3>
                  <p className='text-gray-600'>
                    Simple, secure, and fast — that’s how booking should be.
                    Choose your location, select your dates, and get immediate
                    confirmation. We make travel planning as easy as it should
                    be.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Check out our frequently asked questions for more answers to some
              of your questions
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Accordion type='single' collapsible className='space-y-4'>
              {shortFaqs.map((faq, index) => (
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

      <Footer />
    </div>
  );
}
