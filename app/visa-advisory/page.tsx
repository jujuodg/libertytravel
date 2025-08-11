'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Globe, FileText } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function VisaAdvisoryPage() {
  const services = [
    {
      title: 'Visa Requirements Analysis',
      description:
        'Comprehensive analysis of visa requirements for your destination',
    },
    {
      title: 'Document Preparation',
      description: 'Expert guidance on preparing all necessary documentation',
    },
    {
      title: 'Application Process Support',
      description: 'Step-by-step assistance throughout the application process',
    },
    {
      title: 'Embassy Liaison',
      description: 'Professional communication with embassies and consulates',
    },
    {
      title: 'Transit Visa Assistance',
      description: 'Help with transit visas for stopovers and connections',
    },
    {
      title: 'Visa Status Updates',
      description: 'Regular updates on your visa application status',
    },
  ];

  const visaTypes = [
    {
      type: 'Tourist Visa',
      description: 'For leisure and vacation travel',
      requirements: [
        'Valid passport',
        'Travel itinerary',
        'Hotel bookings',
        'Financial proof',
      ],
      processingTime: '5-15 days',
      successRate: '95%',
    },
    {
      type: 'Business Visa',
      description: 'For business meetings and conferences',
      requirements: [
        'Business invitation',
        'Company registration',
        'Financial statements',
        'Travel insurance',
      ],
      processingTime: '3-10 days',
      successRate: '92%',
    },
    {
      type: 'Student Visa',
      description: 'For educational purposes',
      requirements: [
        'Admission letter',
        'Financial proof',
        'Academic transcripts',
        'Health insurance',
      ],
      processingTime: '10-30 days',
      successRate: '88%',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          <div>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center'>
                <FileText className='h-8 w-8 text-gray-600' />
              </div>
              <h1 className='text-3xl font-bold'>VISA Advisory</h1>
            </div>
            <p className='text-gray-600 mb-6 text-lg'>
              Liberty provides top notch Visa processing guidelines for clients,
              with our team of specialized consultants. We provide and outline
              requirements for various destinations and enlighten clients on up
              to date visa information needed to have a seamless engagement with
              desired embassy's and country's.
            </p>
            <p className='text-gray-600 mb-8'>
              We also assist in getting Transit visa without hassles for
              prospective clients that require stop overs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href={'/contact'}>
                <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
                  Contact Consultant
                </Button>
              </Link>
            </div>
          </div>
          <div className='relative'>
            <img
              src='/visad.jpg'
              alt='Visa Advisory'
              className='rounded-lg shadow-lg w-full h-[500px] object-cover'
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Visa Advisory Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <Card key={index} className='hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Advisory Process
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-purple-600'>1</span>
              </div>
              <h3 className='font-semibold mb-2'>Consultation</h3>
              <p className='text-gray-600 text-sm'>
                Initial consultation to understand your travel needs
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-purple-600'>2</span>
              </div>
              <h3 className='font-semibold mb-2'>Analysis</h3>
              <p className='text-gray-600 text-sm'>
                Detailed analysis of visa requirements and documentation
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-purple-600'>3</span>
              </div>
              <h3 className='font-semibold mb-2'>Guidance</h3>
              <p className='text-gray-600 text-sm'>
                Step-by-step guidance through the application process
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-purple-600'>4</span>
              </div>
              <h3 className='font-semibold mb-2'>Support</h3>
              <p className='text-gray-600 text-sm'>
                Ongoing support until visa approval
              </p>
            </div>
          </div>
        </div>

        {/* Visa Types */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-4'>Visa Types We Handle</h2>
              <p className='text-xl text-gray-600'>
                Expert advisory for all types of visa applications
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {visaTypes.map((visa, index) => (
                <Card key={index} className='hover:shadow-lg transition-shadow'>
                  <CardHeader>
                    <CardTitle className='text-xl'>{visa.type}</CardTitle>
                    <CardDescription>{visa.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-600'>
                          Success Rate
                        </span>
                        <Badge className='bg-green-100 text-green-800'>
                          {visa.successRate}
                        </Badge>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-600'>
                          Processing Time
                        </span>
                        <span className='text-sm font-semibold'>
                          {visa.processingTime}
                        </span>
                      </div>
                      <div>
                        <h4 className='font-semibold mb-2'>Requirements:</h4>
                        <ul className='space-y-1'>
                          {visa.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className='flex items-center gap-2 text-sm'
                            >
                              <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Why Choose Our Visa Advisory?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Globe className='h-6 w-6 text-purple-600' />
                  Global Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Our consultants have extensive knowledge of visa requirements
                  for destinations worldwide, ensuring accurate and up-to-date
                  guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Users className='h-6 w-6 text-purple-600' />
                  Personalized Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  Each client receives personalized attention with tailored
                  advice based on their specific travel plans and circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className='bg-purple-600 text-white rounded-lg p-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Need Visa Advisory Services?
          </h2>
          <p className='text-xl mb-6'>
            Get expert guidance from our specialized visa consultants
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-white text-purple-600 hover:bg-gray-100'
            >
              Schedule Consultation
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-purple-600 bg-transparent'
              onClick={() => {
                window.location.href = 'tel:08023874076';
              }}
            >
              Contact: 08023874076
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Our Advisory */}
      {/* <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Why Choose Our Advisory?
            </h2>
            <p className='text-xl text-gray-600'>
              Benefits of professional visa consultation
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='h-8 w-8 text-red-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Expert Consultants</h3>
              <p className='text-gray-600'>
                Experienced visa professionals with proven track records
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CheckCircle className='h-8 w-8 text-red-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>High Success Rate</h3>
              <p className='text-gray-600'>
                Over 90% success rate across all visa categories
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Clock className='h-8 w-8 text-red-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Time Saving</h3>
              <p className='text-gray-600'>
                Avoid delays and rejections with proper guidance
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Globe className='h-8 w-8 text-red-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Global Coverage</h3>
              <p className='text-gray-600'>
                Advisory services for visas to all countries worldwide
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
