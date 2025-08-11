'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Plane,
  Car,
  Building2,
  FileText,
  MapPin,
  Globe2,
  Star,
  Users,
  Clock,
  ArrowRight,
  HeartPulse,
} from 'lucide-react';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';

export default function HomePage() {
  const services = [
    {
      icon: FileText,
      title: 'Visa Assistance',
      description: 'Expert guidance for visa applications and documentation',
      href: '/visa-assistance',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Plane,
      title: 'Flight Bookings',
      description: 'Best deals on domestic and international flights',
      href: '/flight-bookings',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: HeartPulse,
      title: 'Travel Health Insurance',
      description:
        'Protect yourself from unexpected costs and ensure peace of mind during your travels',
      href: '/travel-insurance',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Building2,
      title: 'Hotel Bookings',
      description: 'Premium accommodations at competitive rates',
      href: '/hotel-bookings',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Globe2,
      title: 'Tours & Holidays',
      description: 'Curated travel experiences and holiday packages',
      href: '/tours-holidays',
      color: 'bg-teal-50 text-teal-600',
    },
    {
      icon: FileText,
      title: 'Visa Advisory',
      description: 'Professional consultation for travel documentation',
      href: '/visa-advisory',
      color: 'bg-red-50 text-red-600',
    },
  ];

  const featuredPackages = [
    {
      title: 'Dubai Luxury Experience',
      location: 'Dubai, UAE',
      duration: '4 Days',
      price: '₦935,000',
      rating: 4.9,
      image: '/Dub 5.jpg',
      highlights: ['Desert Safari', 'Marina Cruise', 'Burj Khalifa'],
    },
    {
      title: 'Kenya Safari Adventure',
      location: 'Nairobi, Kenya',
      duration: '5 Days',
      price: '₦850,000',
      rating: 4.8,
      image: '/ken 6.jpg',
      highlights: ['Game Drives', 'Masai Mara', 'Cultural Visit'],
    },
    // {
    //   title: "Turkey Cultural Tour",
    //   location: "Istanbul, Turkey",
    //   duration: "6 Days",
    //   price: "₦750,000",
    //   rating: 4.7,
    //   image: "/placeholder.svg?height=200&width=300&text=Turkey",
    //   highlights: ["Hagia Sophia", "Bosphorus", "Turkish Cuisine"],
    // },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <Badge className='mb-4 bg-white/20 text-white hover:bg-white/30'>
              ✈️ Your Travel Partner Since 2010
            </Badge>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
              Explore the World with{' '}
              <span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
                Liberty Hospitality
              </span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto'>
              From visa assistance to luxury holiday packages, we make your
              travel dreams come true with personalized service and unbeatable
              deals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/packages'>
                <Button
                  size='lg'
                  className='bg-white text-purple-700 hover:bg-gray-100 px-8'
                >
                  Explore Packages
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-purple-700 bg-transparent px-8'
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Our Travel Services</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Comprehensive travel solutions tailored to your needs, from
              documentation to destination
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className='h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md'>
                  <CardContent className='p-8'>
                    <div
                      className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
                    >
                      <service.icon className='h-8 w-8' />
                    </div>
                    <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Featured Holiday Packages
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Handpicked destinations and experiences for the perfect getaway
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredPackages.map((pkg, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='relative'>
                  <img
                    src={pkg.image || '/placeholder.svg'}
                    alt={pkg.title}
                    className='w-full h-48 object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center'>
                    <Star className='h-4 w-4 fill-yellow-400 text-yellow-400 mr-1' />
                    <span className='text-sm font-semibold'>{pkg.rating}</span>
                  </div>
                </div>
                <CardContent className='p-6'>
                  <div className='flex justify-between items-start mb-3'>
                    <h3 className='text-lg font-bold'>{pkg.title}</h3>
                    <span className='text-purple-600 font-bold text-lg'>
                      {pkg.price}
                    </span>
                  </div>
                  <div className='flex items-center text-gray-600 mb-4'>
                    <MapPin className='h-4 w-4 mr-1' />
                    <span className='text-sm mr-4'>{pkg.location}</span>
                    {/* <Clock className='h-4 w-4 mr-1' />
                    <span className='text-sm'>{pkg.duration}</span> */}
                  </div>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {pkg.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant='secondary' className='text-xs'>
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Link href='/packages'>
                    <Button className='w-full bg-purple-600 hover:bg-purple-700'>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link href='/packages'>
              <Button
                size='lg'
                variant='outline'
                className='border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent'
              >
                View All Packages
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-purple-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Why Choose Liberty Hospitality?
            </h2>
            <p className='text-xl text-purple-100 max-w-2xl mx-auto'>
              Experience the difference with our commitment to excellence and
              personalized service
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Users className='h-10 w-10' />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Expert Team</h3>
              <p className='text-purple-100'>
                Our experienced travel consultants provide personalized guidance
                for every journey
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Globe2 className='h-10 w-10' />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Global Network</h3>
              <p className='text-purple-100'>
                Worldwide partnerships ensure seamless travel experiences and
                competitive pricing
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Star className='h-10 w-10' />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Quality Service</h3>
              <p className='text-purple-100'>
                24/7 support and attention to detail that exceeds expectations
                every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12 text-center'>
            <h2 className='text-4xl font-bold mb-4'>
              Ready to Start Your Journey?
            </h2>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Let our travel experts craft the perfect experience for you.
              Contact us today for a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='bg-purple-600 hover:bg-purple-700 px-8'
                >
                  Start Planning
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Button
                size='lg'
                variant='outline'
                onClick={() => {
                  window.location.href = 'tel:08023874076';
                }}
                className='border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 bg-transparent'
              >
                Call Us: +234 802 3874 076
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
