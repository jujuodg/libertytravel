'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users, Star, Clock, Phone, Quote } from 'lucide-react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { testimonials } from '@/lib/lists';

const packages = [
  {
    id: 'kenya-experience',
    title: 'Kenya Experience Beauty in the Wild',
    description:
      'Discover the breathtaking landscapes and wildlife of Kenya with our comprehensive safari package.',
    longDescription:
      "Embark on an unforgettable journey through Kenya's most spectacular destinations. From the world-famous Maasai Mara to the vibrant culture of Nairobi, this package offers the perfect blend of wildlife adventure and cultural immersion. Experience the Great Migration, witness the Big Five, and create memories that will last a lifetime.",
    price: '₦580,000',
    originalPrice: '₦750,000',
    location: 'Nairobi, Kenya',
    duration: '7 Days',
    rating: 4.8,
    reviews: 124,
    images: [
      '/ken 1.jpg',
      '/ken 2.jpg',
      '/ken 3.jpg',
      '/ken 4.jpg',
      '/ken 5.jpg',
      '/ken 6.jpg',
    ],
    highlights: [
      'Maasai Mara Safari',
      'Nairobi National Park',
      'Cultural Village Visit',
      'beaches of Diani or Mombasa',
    ],
    included: [
      '3 NIGHTS HOTEL RESERVATION',
      'BREAKFAST INCLUSIVE',
      'TOUR GUIDE SERVICES',
      'AIRPORT TRANSFER',
      'VISA FEE',
      'SAFARI TOUR (NAIROBI NATIONAL PARK)',
      'PRISTINE BEACHES OF DIANI',
    ],
    terms: [
      'Packages rates displayed are subject to change and availability.',
      'Package is valid from May 30th to October 30th (festive and exhibition dates not inclusive).',
      'Flight rates are not included.',
      'Offer is not inclusive of travel expenses like travel insurance, medical expenses, tips, phone calls, laundry, beverages, meals, activities & personal transfers etc. other than stated above.',
    ],
    // itinerary: [
    //   {
    //     day: 1,
    //     title: 'Arrival in Nairobi',
    //     description:
    //       'Airport pickup and transfer to hotel. Evening city tour and welcome dinner.',
    //   },
    //   {
    //     day: 2,
    //     title: 'Nairobi National Park',
    //     description:
    //       'Morning game drive in Nairobi National Park. Afternoon visit to Giraffe Centre and Karen Blixen Museum.',
    //   },
    //   {
    //     day: 3,
    //     title: 'Travel to Maasai Mara',
    //     description:
    //       'Drive to Maasai Mara National Reserve. Afternoon game drive and sunset viewing.',
    //   },
    //   {
    //     day: 4,
    //     title: 'Full Day Maasai Mara',
    //     description:
    //       'Full day game drives in Maasai Mara. Optional hot air balloon safari at dawn.',
    //   },
    //   {
    //     day: 5,
    //     title: 'Cultural Experience',
    //     description:
    //       'Visit traditional Maasai village. Learn about local culture and traditions.',
    //   },
    //   {
    //     day: 6,
    //     title: 'Return to Nairobi',
    //     description:
    //       'Morning game drive, then return to Nairobi. Shopping at local markets.',
    //   },
    //   {
    //     day: 7,
    //     title: 'Departure',
    //     description: 'Transfer to airport for departure flight.',
    //   },
    // ],
  },
  {
    id: 'dubai-glamour',
    title: 'Glamour with the Magic of Dubai',
    description:
      'Uncover glamour with the magic of Dubai — where luxury meets adventure under the Arabian sun.',
    longDescription:
      'Uncover glamour with the magic of Dubai — where luxury meets adventure under the Arabian sun. Cruise along the dazzling Marina, shop in world-famous malls, and marvel at iconic landmarks like the Burj Khalifa. Feel the thrill of desert safaris, dune bashing, and sunset camel rides. Then cool off at world-class waterparks or enjoy a dhow dinner cruise under the stars. This summer, let Dubai sweep you off your feet with style, sparkle, and unforgettable moments.',
    price: '₦935,000',
    originalPrice: '₦1,050,000',
    location: 'Dubai, UAE',
    duration: '5 Days',
    rating: 4.9,
    reviews: 89,
    images: [
      '/Dub 1.jpg',
      '/Dub 2.jpg',
      '/Dub 3.jpg',
      '/Dub 4.jpg',
      '/Dub 5.jpg',
      '/Dub 6.jpg',
      '/Dub 7.jpg',
      '/Dub 8.jpg',
    ],
    highlights: [
      'Desert Safari',
      'Burj Khalifa Visit',
      'Dubai Marina Cruise',
      'Shopping Mall Tours',
    ],
    included: [
      '3 NIGHTS HOTEL RESERVATION',
      'BREAKFAST INCLUSIVE',
      'TOUR GUIDE SERVICES',
      'AIRPORT TRANSFER',
      'VISA FEE',
      'DESERT SAFARI WITH DUNE BASHING, CAMEL RIDE & BBQ DINNER',
      'MARINA YACHT TOUR WITH LIVE MUSIC',
    ],
    terms: [
      'Packages rates displayed are subject to change and availability.',
      'Package is valid from May 30th to October 30th (festive and exhibition dates not inclusive).',
      'Flight rates are not included.',
      'Offer is not inclusive of travel expenses like travel insurance, medical expenses, tips, phone calls, laundry, beverages, meals, activities & personal transfers etc. other than stated above.',
    ],
    // itinerary: [
    //   {
    //     day: 1,
    //     title: 'Arrival in Dubai',
    //     description:
    //       'Airport pickup and hotel check-in. Evening Dubai Marina cruise with dinner.',
    //   },
    //   {
    //     day: 2,
    //     title: 'Dubai City Tour',
    //     description:
    //       'Visit Burj Khalifa, Dubai Mall, Gold Souk, and Spice Souk. Afternoon at leisure.',
    //   },
    //   {
    //     day: 3,
    //     title: 'Desert Safari Adventure',
    //     description:
    //       'Full day desert safari with dune bashing, camel riding, and traditional BBQ dinner.',
    //   },
    //   {
    //     day: 4,
    //     title: 'Modern Dubai',
    //     description:
    //       'Visit Palm Jumeirah, Atlantis Hotel, and Dubai Frame. Shopping at Mall of Emirates.',
    //   },
    //   {
    //     day: 5,
    //     title: 'Departure',
    //     description:
    //       'Last-minute shopping and transfer to airport for departure.',
    //   },
    // ],
  },
];

export default function PackageDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const packageData = packages.find((pkg) => pkg.id === params.id);

  const router = useRouter();

  if (!packageData) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <div className='container mx-auto px-4 py-8'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Left Column - Images and Info */}
          <div className='lg:col-span-2'>
            {/* Image Gallery */}
            <div className='mb-6'>
              <div className='mb-4'>
                <img
                  src={packageData.images[selectedImage] || '/placeholder.svg'}
                  alt={packageData.title}
                  className='w-full h-96 object-cover rounded-lg'
                />
              </div>
              <div className='grid grid-cols-4 gap-2'>
                {packageData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-purple-600' : ''
                    }`}
                  >
                    <img
                      src={image || '/placeholder.svg'}
                      alt={`View ${index + 1}`}
                      className='w-full h-20 object-cover'
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Package Info */}
            <div className='mb-6'>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-purple-600'>Featured</Badge>
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                  <span className='font-semibold'>{packageData.rating}</span>
                  <span className='text-gray-600'>
                    ({packageData.reviews} reviews)
                  </span>
                </div>
              </div>
              <h1 className='text-3xl font-bold mb-4'>{packageData.title}</h1>
              <p className='text-gray-600 mb-4'>
                {packageData.longDescription}
              </p>

              <div className='flex items-center gap-6 text-sm text-gray-600'>
                {/* <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>{packageData.duration}</span>
                </div> */}
                <div className='flex items-center gap-1'>
                  <MapPin className='h-4 w-4' />
                  <span>{packageData.location}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Users className='h-4 w-4' />
                  <span>Per Person Sharing</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue='details' className='w-full'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='details'>Package Details</TabsTrigger>
                {/* <TabsTrigger value='itinerary'>Itinerary</TabsTrigger> */}
                <TabsTrigger value='terms'>Terms & Conditions</TabsTrigger>
              </TabsList>

              <TabsContent value='details' className='mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2'>
                      {packageData.included.map((item, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-green-600 mt-1'>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* <TabsContent value='itinerary' className='mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Day by Day Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      {packageData.itinerary.map((day, index) => (
                        <div
                          key={index}
                          className='border-l-2 border-purple-200 pl-4 pb-4'
                        >
                          <div className='flex items-center gap-2 mb-2'>
                            <div className='w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                              {day.day}
                            </div>
                            <h3 className='font-semibold'>{day.title}</h3>
                          </div>
                          <p className='text-gray-600 ml-10'>
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent> */}

              <TabsContent value='terms' className='mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Terms & Conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4 text-sm'>
                      {packageData.terms.map((term, index) => (
                        <div key={index}>
                          <li className='text-gray-600'>{term}</li>
                        </div>
                      ))}
                      {/* <div>
                        <h4 className='font-semibold mb-2'>
                          Booking & Payment
                        </h4>
                        <ul className='space-y-1 text-gray-600'>
                          <li>• Full payment required at time of booking</li>
                          <li>• Prices are subject to change without notice</li>
                          <li>• All bookings are subject to availability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className='font-semibold mb-2'>
                          Cancellation Policy
                        </h4>
                        <ul className='space-y-1 text-gray-600'>
                          <li>
                            • 30+ days before departure: 10% cancellation fee
                          </li>
                          <li>
                            • 15-29 days before departure: 25% cancellation fee
                          </li>
                          <li>
                            • 7-14 days before departure: 50% cancellation fee
                          </li>
                          <li>• Less than 7 days: No refund</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className='font-semibold mb-2'>
                          Travel Requirements
                        </h4>
                        <ul className='space-y-1 text-gray-600'>
                          <li>
                            • Valid passport required (minimum 6 months
                            validity)
                          </li>
                          <li>• Visa assistance provided</li>
                          <li>• Travel insurance recommended</li>
                          <li>• Health requirements may apply</li>
                        </ul>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            {/* Client Testimonials */}
            <section className='py-20 bg-gray-50'>
              <div className='container mx-auto px-4'>
                {/* <div className='text-center mb-16'>
                  <h2 className='text-4xl font-bold mb-4'>Clients Say</h2>
                  <p className='text-xl text-gray-600'>
                    Our goal is to make sure that our clients are always
                    satisfied and get value for their money.
                  </p>
                </div> */}

                <div className='grid md:grid-cols-3 gap-8'>
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className='px-5 py-2 hover:shadow-lg transition-shadow'
                    >
                      <CardContent className='p-0'>
                        <div className='mb-6'>
                          <Quote className='h-6 w-6 text-purple-600 mb-4' />
                          <p className='text-gray-600 text-sm leading-relaxed mb-6'>
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
          </div>

          {/* Right Column - Booking Card */}
          <div className='lg:col-span-1'>
            <Card className='sticky top-4'>
              <CardHeader className='bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg'>
                <CardTitle className='text-2xl font-bold'>
                  {packageData.title}
                </CardTitle>
                <CardDescription className='text-purple-100'>
                  Per Person sharing from
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='mb-6'>
                  <div className='flex items-baseline gap-2 mb-2'>
                    <span className='text-3xl font-bold'>
                      {packageData.price}
                    </span>
                    {packageData.originalPrice && (
                      <span className='text-lg text-gray-500 line-through'>
                        {packageData.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className='text-sm text-gray-600'>Per person sharing</p>
                </div>

                <div className='space-y-4 mb-6'>
                  <div className='flex justify-between items-center'>
                    {/* <span className='text-sm text-gray-600'>Duration:</span>
                    <span className='font-semibold'>
                      {packageData.duration}
                    </span> */}
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>Rating:</span>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='font-semibold'>
                        {packageData.rating}
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>Reviews:</span>
                    <span className='font-semibold'>
                      {packageData.reviews} reviews
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => router.push('/contact')}
                  className='w-full bg-gray-600 hover:bg-gray-700 text-white py-3 text-lg font-semibold'
                >
                  Reserve Package →
                </Button>

                <div className='mt-4 pt-4 border-t'>
                  <a href='tel:08023874076'>
                    <Button variant='outline' className='w-full bg-transparent'>
                      <Phone className='mr-2 h-4 w-4' />
                      Call for Booking
                    </Button>
                  </a>
                </div>

                <p className='text-xs text-gray-500 mt-4 text-center'>
                  Secure booking • No hidden fees • 24/7 support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
