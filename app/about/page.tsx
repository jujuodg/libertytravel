import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Clock, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '98%', label: 'Success Rate', icon: Award },
  ];

  const team = [
    {
      name: 'Adebayo Johnson',
      position: 'CEO & Founder',
      image: '/placeholder.svg?height=300&width=300&text=CEO',
      description:
        '15+ years in travel industry with expertise in international travel and visa processing.',
    },
    {
      name: 'Fatima Abdullahi',
      position: 'Head of Operations',
      image: '/placeholder.svg?height=300&width=300&text=Operations',
      description:
        'Operations expert ensuring seamless travel experiences for all our clients.',
    },
    {
      name: 'Chinedu Okafor',
      position: 'Visa Specialist',
      image: '/placeholder.svg?height=300&width=300&text=Visa Specialist',
      description:
        'Certified visa consultant with 95% approval rate across all visa categories.',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description:
        'We strive for excellence in every service we provide, ensuring the highest quality experience.',
      icon: Star,
    },
    {
      title: 'Integrity',
      description:
        'Honest, transparent, and ethical practices in all our business dealings.',
      icon: Award,
    },
    {
      title: 'Customer Focus',
      description:
        'Our customers are at the heart of everything we do, driving our commitment to service.',
      icon: Users,
    },
    {
      title: 'Innovation',
      description:
        'Continuously improving our services with the latest technology and industry best practices.',
      icon: Globe,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <Badge className='mb-4 bg-white/20 text-white'>✈️ Since 2010</Badge>
            <h1 className='text-5xl font-bold mb-6'>
              About Liberty Hospitality
            </h1>
            <p className='text-xl mb-8 text-purple-100'>
              Your trusted travel partner for over a decade, making dreams come
              true with exceptional service and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6'>Our Story</h2>
              <div className='space-y-4 text-gray-600 text-lg'>
                <p>
                  Founded in 2010, Liberty Hospitality Limited began as a small
                  travel agency with a big vision: to make international travel
                  accessible and hassle-free for everyone. What started as a
                  passion project has grown into one of Nigeria's most trusted
                  travel service providers.
                </p>
                <p>
                  Over the years, we have helped thousands of travelers explore
                  the world, from business executives attending international
                  conferences to families embarking on dream vacations. Our
                  commitment to excellence and personalized service has earned
                  us a reputation as a reliable partner in the travel industry.
                </p>
                <p>
                  Today, we offer comprehensive travel services including visa
                  assistance, flight bookings, hotel reservations, car rentals,
                  and curated tour packages. Our team of experienced
                  professionals works tirelessly to ensure every journey is
                  memorable and stress-free.
                </p>
              </div>
            </div>
            <div>
              <img
                src='/about.jpg'
                alt='Liberty Hospitality Office'
                className='rounded-lg shadow-lg w-full'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-purple-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Our Achievements</h2>
            <p className='text-xl text-purple-100'>
              Numbers that speak to our commitment and success
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='h-10 w-10' />
                </div>
                <div className='text-4xl font-bold mb-2'>{stat.number}</div>
                <div className='text-purple-100'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12'>
            <Card className='p-8 hover:shadow-lg transition-shadow'>
              <CardContent className='p-0'>
                <h3 className='text-3xl font-bold mb-4 text-purple-600'>
                  Our Mission
                </h3>
                <p className='text-gray-600 text-lg leading-relaxed'>
                  To provide exceptional travel services that exceed our
                  clients' expectations while making international travel
                  accessible, affordable, and enjoyable for everyone. We are
                  committed to delivering personalized solutions that cater to
                  the unique needs of each traveler.
                </p>
              </CardContent>
            </Card>

            <Card className='p-8 hover:shadow-lg transition-shadow'>
              <CardContent className='p-0'>
                <h3 className='text-3xl font-bold mb-4 text-purple-600'>
                  Our Vision
                </h3>
                <p className='text-gray-600 text-lg leading-relaxed'>
                  To become the leading travel service provider in West Africa,
                  recognized for our innovation, reliability, and
                  customer-centric approach. We envision a world where travel
                  barriers are minimized, and every journey becomes an
                  opportunity for growth and discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-20 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Our Core Values</h2>
            <p className='text-xl text-gray-600'>
              The principles that guide everything we do
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardContent className='p-8'>
                  <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <value.icon className='h-8 w-8 text-purple-600' />
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{value.title}</h3>
                  <p className='text-gray-600'>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind your perfect travel experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className='py-20 bg-purple-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-4'>
            Ready to Start Your Journey?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Join thousands of satisfied customers who trust us with their travel
            needs
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-white text-purple-600 hover:bg-gray-100'
              >
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </Link>
            <Link href='/packages'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-purple-600 bg-transparent'
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
