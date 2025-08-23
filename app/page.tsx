'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Plane,
  Building2,
  FileText,
  MapPin,
  Globe2,
  Star,
  Users,
  ArrowRight,
  HeartPulse,
  Quote,
} from 'lucide-react';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/lib/lists';

type Slide = {
  src: string;
  overlay: number; // 0.45–0.7 recommended
  objectPosition?: string; // e.g., "50% 40%"
};

const services = [
  {
    icon: '/visaa.png', //FileText,
    title: 'Visa Assistance',
    description: 'Expert guidance for visa applications and documentation',
    href: '/visa-assistance',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: '/fly.jpg', //Plane,
    title: 'Flight Bookings',
    description: 'Best deals on domestic and international flights',
    href: '/flight-bookings',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: '/travin.jpg', //HeartPulse,
    title: 'Travel Health Insurance',
    description:
      'Protect yourself from unexpected costs and ensure peace of mind during your travels',
    href: '/travel-insurance',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: '/shortle.jpg', //Building2,
    title: 'Shortlet Apartments',
    description: 'Premium accommodations at competitive rates',
    href: '/shortlet-bookings',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: '/tourshol.jpg', //Globe2,
    title: 'Tours & Holidays',
    description: 'Curated travel experiences and holiday packages',
    href: '/tours-holidays',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: '/airportpi.jpg', //FileText,
    title: 'Airport Pickup',
    description:
      'Premium airport transfer service offering comfort, punctuality, and peace of mind from arrival to destination.',
    href: '/contact',
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

const slides: Slide[] = [
  { src: '/pkg1.jpg', overlay: 0.55, objectPosition: '50% 40%' },
  { src: '/pkg.jpg', overlay: 0.62, objectPosition: '50% 50%' },
];

export default function HomePage() {
  const [idx, setIdx] = useState(0);
  const prefersNoMotion = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (prefersNoMotion.current || timer.current) return;
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      6000
    );
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    prefersNoMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!prefersNoMotion.current) start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => setIdx((i + slides.length) % slides.length);
  const prev = () => goTo(idx - 1);
  const next = () => goTo(idx + 1);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative h-[72vh] min-h-[520px] w-full overflow-hidden text-white'
        onMouseEnter={stop}
        onMouseLeave={start}
        onFocusCapture={stop}
        onBlurCapture={start}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prev();
          if (e.key === 'ArrowRight') next();
        }}
        aria-roledescription='carousel'
        aria-label='Featured destinations'
      >
        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={s.src}
            className='absolute inset-0 transition-opacity duration-700'
            style={{ opacity: i === idx ? 1 : 0 }}
            aria-hidden={i !== idx}
          >
            <Image
              src={s.src}
              alt='' // decorative background
              aria-hidden='true'
              fill
              priority={i === 0}
              sizes='100vw'
              className='object-cover'
              style={{ objectPosition: s.objectPosition ?? '50% 50%' }}
            />
            {/* brand‑tinted overlay scrim */}

            <div className='absolute inset-0 bg-black/40'></div>
          </div>
        ))}

        {/* Content */}
        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-center'>
          <div className='mx-auto max-w-4xl'>
            <Badge className='mb-4 bg-white/20 text-white hover:bg-white/30'>
              ✈️ Your Travel Partner Since 2013
            </Badge>

            <h1 className='mb-6 text-5xl font-bold leading-tight md:text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]'>
              Explore the World with{' '}
              <span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
                Liberty Hospitality
              </span>
            </h1>

            <p className='mx-auto mb-8 max-w-3xl text-xl md:text-2xl text-purple-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]'>
              From visa assistance to luxury holiday packages, we make your
              travel dreams come true with personalized service and unbeatable
              deals.
            </p>

            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Link href='/packages'>
                <Button
                  size='lg'
                  className='bg-white px-8 text-purple-700 hover:bg-gray-100'
                >
                  Explore Packages
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  size='lg'
                  variant='outline'
                  className='bg-transparent px-8 text-white hover:bg-white hover:text-purple-700 border-white'
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          aria-label='Previous slide'
          onClick={prev}
          className='group absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD166]'
        >
          ‹
        </button>
        <button
          aria-label='Next slide'
          onClick={next}
          className='group absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD166]'
        >
          ›
        </button>

        {/* Dots */}
        <div className='absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === idx}
              onClick={() => goTo(i)}
              className='h-3 w-3 rounded-full border border-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD166]'
              style={{ background: i === idx ? 'white' : 'transparent' }}
            />
          ))}
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
                    {/* Image container */}
                    <div className='mb-6 flex justify-center'>
                      <Image
                        src={service.icon} // image path in your services array
                        alt={service.title}
                        className='w-full h-4/6 object-cover rounded-xl'
                        width={596}
                        height={96}
                      />
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

          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
          </div> */}
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

      {/* Client Testimonials */}
      <section className='py-20 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Clients Say</h2>
            <p className='text-xl text-gray-600'>
              Our goal is to make sure that our clients are always satisfied and
              get value for their money.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className='px-8 py-4 hover:shadow-lg transition-shadow'
              >
                <CardContent className='p-0'>
                  <div className='mb-6'>
                    <Quote className='h-10 w-10 text-purple-600 mb-4' />
                    <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                      {testimonial.text}
                    </p>
                    <div className='flex mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-5 w-5 text-yellow-400 fill-current'
                        />
                      ))}
                    </div>
                    <p className='font-bold text-gray-900'>
                      {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div
            className='relative rounded-3xl p-12 text-center bg-cover bg-center bg-no-repeat'
            style={{
              backgroundImage: "url('/journeyta.jpg')", // replace with your image path
            }}
          >
            <div className='absolute inset-0 bg-black/35'></div>
            {/* Optional overlay to make text readable */}
            <div className='relative p-8 rounded-3xl'>
              <h2 className='text-4xl font-bold mb-4 text-white'>
                Ready to Start Your Journey?
              </h2>
              <p className='text-xl text-gray-100 mb-8 max-w-2xl mx-auto'>
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
                <a href='tel:08023874076'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-white text-white hover:bg-purple-600 hover:text-white px-8 bg-transparent'
                  >
                    Call Us: +234 802 3874 076
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
