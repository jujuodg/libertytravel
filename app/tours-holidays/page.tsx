import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Plane,
  Camera,
  Mountain,
  Waves,
} from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';

const featuredDestinations = [
  {
    id: 1,
    name: 'Dubai, UAE',
    description:
      'Experience luxury and adventure in the heart of the Middle East',
    image: '/Dub 5.jpg',
    price: 'From ₦935,000',
    duration: '5 Days',
    rating: 4.9,
    popular: true,
  },
  {
    id: 2,
    name: 'Kenya Safari',
    description: 'Witness the Great Migration and explore the Maasai Mara',
    image: '/ken 6.jpg',
    price: 'From ₦580,000',
    duration: '7 Days',
    rating: 4.8,
    popular: true,
  },
  // {
  //   id: 3,
  //   name: 'Turkey Adventure',
  //   description: 'Discover ancient history and stunning landscapes',
  //   image: '/placeholder.svg?height=300&width=400&text=Turkey Cappadocia',
  //   price: 'From ₦720,000',
  //   duration: '6 Days',
  //   rating: 4.7,
  //   popular: false,
  // },
];

const tourTypes = [
  {
    icon: Mountain,
    title: 'Adventure Tours',
    description: 'Thrilling experiences for the adventurous spirit',
    count: '15+ Tours',
  },
  {
    icon: Waves,
    title: 'Beach Holidays',
    description: 'Relax and unwind at pristine beach destinations',
    count: '12+ Tours',
  },
  {
    icon: Camera,
    title: 'Cultural Tours',
    description: 'Immerse yourself in local cultures and traditions',
    count: '20+ Tours',
  },
  {
    icon: Plane,
    title: 'City Breaks',
    description: 'Explore vibrant cities around the world',
    count: '18+ Tours',
  },
];

export default function ToursHolidaysPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <div className='relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center'>
        <div
          className='absolute inset-0 bg-cover bg-center opacity-20'
          style={{
            backgroundImage: "url('/tour.jpg')",
          }}
        />
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <h1 className='text-5xl font-bold mb-4'>Tours & Holidays</h1>
          <p className='text-xl mb-8'>
            Discover amazing destinations with our carefully curated tour
            packages and holiday experiences
          </p>
          <Link href='/packages'>
            <Button
              size='lg'
              className='bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3'
            >
              Browse Tours
            </Button>
          </Link>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        {/* Tour Types */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Tour Categories
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {tourTypes.map((type, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow cursor-pointer'
              >
                <CardHeader>
                  <div className='mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
                    <type.icon className='h-8 w-8 text-purple-600' />
                  </div>
                  <CardTitle className='text-xl'>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant='secondary'>{type.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Destinations */}
        <section className='mb-16'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold'>Featured Destinations</h2>
            <Link href='/packages'>
              <Button variant='outline'>View All Packages</Button>
            </Link>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative'>
                  <img
                    src={destination.image || '/placeholder.svg'}
                    alt={destination.name}
                    className='w-full h-48 object-cover'
                  />
                  {destination.popular && (
                    <Badge className='absolute top-4 right-4 bg-orange-500'>
                      Popular
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle className='text-xl'>
                        {destination.name}
                      </CardTitle>
                      <CardDescription>
                        {destination.description}
                      </CardDescription>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='text-sm font-semibold'>
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='flex justify-between items-center mb-4'>
                    <span className='text-2xl font-bold text-purple-600'>
                      {destination.price}
                    </span>
                    {/* <div className='flex items-center gap-1 text-gray-600'>
                      <Calendar className='h-4 w-4' />
                      <span className='text-sm'>{destination.duration}</span>
                    </div> */}
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
        </section>

        {/* Why Choose Us */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Why Choose Our Tours?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Expert Guides</h3>
              <p className='text-gray-600'>
                Professional local guides with extensive knowledge of
                destinations and cultures
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <MapPin className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Unique Experiences</h3>
              <p className='text-gray-600'>
                Carefully curated experiences that showcase the best of each
                destination
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Star className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>5-Star Service</h3>
              <p className='text-gray-600'>
                Premium service and attention to detail throughout your entire
                journey
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='text-center bg-purple-600 text-white rounded-lg p-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready for Your Next Adventure?
          </h2>
          <p className='text-xl mb-8'>
            Browse our complete collection of tour packages and start planning
            your dream vacation today
          </p>
          <Link href='/packages'>
            <Button
              size='lg'
              className='bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3'
            >
              Browse All Tours
            </Button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
