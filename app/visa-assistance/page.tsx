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
import { CheckCircle, FileText, Globe, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function VisaAssistancePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    destinationCountry: '',
    passportCountry: '',
    passportNumber: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  // const visaServices = [
  //   {
  //     title: 'Tourist Visa',
  //     description:
  //       'Complete assistance for tourist visa applications worldwide',
  //     features: [
  //       'Document preparation',
  //       'Application submission',
  //       'Interview coaching',
  //       'Status tracking',
  //     ],
  //     processingTime: '5-15 days',
  //     price: 'From ₦25,000',
  //   },
  //   {
  //     title: 'Business Visa',
  //     description: 'Professional visa services for business travelers',
  //     features: [
  //       'Business documentation',
  //       'Invitation letters',
  //       'Fast-track processing',
  //       'Multiple entry options',
  //     ],
  //     processingTime: '3-10 days',
  //     price: 'From ₦35,000',
  //   },
  //   {
  //     title: 'Student Visa',
  //     description: 'Educational visa support for international students',
  //     features: [
  //       'University liaison',
  //       'Financial documentation',
  //       'Accommodation proof',
  //       'Health insurance',
  //     ],
  //     processingTime: '10-30 days',
  //     price: 'From ₦40,000',
  //   },
  // ];

  // const countries = [
  //   { name: 'United States', flag: '🇺🇸', processing: '10-15 days' },
  //   { name: 'United Kingdom', flag: '🇬🇧', processing: '5-10 days' },
  //   { name: 'Canada', flag: '🇨🇦', processing: '7-14 days' },
  //   { name: 'Schengen Area', flag: '🇪🇺', processing: '5-12 days' },
  //   { name: 'Australia', flag: '🇦🇺', processing: '8-20 days' },
  //   { name: 'Dubai/UAE', flag: '🇦🇪', processing: '3-7 days' },
  // ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <Badge className='mb-4 bg-white/20 text-white'>
              ✈️ Visa Experts
            </Badge>
            <h1 className='text-5xl font-bold mb-6'>
              Visa Assistance Services
            </h1>
            <p className='text-xl mb-8 text-blue-100'>
              Professional visa consultation and application services for all
              destinations worldwide
            </p>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-gray-100'
              >
                Get Visa Consultation
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column - Information */}
          <div>
            <h1 className='text-3xl font-bold mb-6'>Visa Assistance Program</h1>

            <p className='text-gray-600 mb-6'>
              Meet Liberty Hospitality Limited's Visa Team, our seasoned experts
              specialize in navigating the complexities of visa processing. We
              guide you every step of the way:
            </p>

            <ul className='space-y-3 mb-8'>
              <li className='flex items-start gap-3'>
                <CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
                <span>Profiling to ensure the best approach</span>
              </li>
              <li className='flex items-start gap-3'>
                <CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
                <span>Expert assistance with application forms</span>
              </li>
              <li className='flex items-start gap-3'>
                <CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
                <span>Thorough document vetting</span>
              </li>
              <li className='flex items-start gap-3'>
                <CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
                <span>Securing appointment dates</span>
              </li>
              <li className='flex items-start gap-3'>
                <CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
                <span>
                  Pre-interview sessions (where applicable) to boost your
                  confidence and chances of success
                </span>
              </li>
            </ul>

            <p className='text-gray-600 mb-6'>
              We prioritize integrity and transparency, discouraging any form of
              immigration default. Visa issuance is ultimately at the embassy's
              discretion, and we respect that process.
            </p>

            <p className='text-gray-600 mb-8'>
              Get personalized support from our visa consultants for all your
              travel visa queries.
            </p>

            <div className='space-y-2'>
              <p>
                <span className='font-semibold'>Email:</span>{' '}
                info@libertytravelsng.com
              </p>
              <p>
                <span className='font-semibold'>Phone:</span> 08023874076
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card>
              <CardHeader className='bg-purple-600 text-white'>
                <CardTitle className='flex items-center gap-2'>
                  <CheckCircle className='h-6 w-6' />
                  Get Visa Assistance Now
                </CardTitle>
                <p className='text-purple-100'>
                  We're bringing you a new level of comfort.
                </p>
              </CardHeader>
              <CardContent className='p-6'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input
                      id='phone'
                      name='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='departureDate'>Departure Date</Label>
                      <Input
                        id='departureDate'
                        name='departureDate'
                        type='date'
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor='returnDate'>Return Date</Label>
                      <Input
                        id='returnDate'
                        name='returnDate'
                        type='date'
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='destinationCountry'>
                      Destination Country
                    </Label>
                    <Input
                      id='destinationCountry'
                      name='destinationCountry'
                      value={formData.destinationCountry}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor='passportCountry'>Passport Country</Label>
                    <Input
                      id='passportCountry'
                      name='passportCountry'
                      value={formData.passportCountry}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor='passportNumber'>Passport Number</Label>
                    <Input
                      id='passportNumber'
                      name='passportNumber'
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor='passport'>Upload Passport</Label>
                    <Input
                      id='passport'
                      name='passport'
                      type='file'
                      accept='.pdf,.jpg,.jpeg,.png'
                    />
                  </div>

                  <div>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      name='message'
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='Tell us about your travel plans...'
                    />
                  </div>

                  <div className='flex items-start gap-2'>
                    <input
                      type='checkbox'
                      id='terms'
                      className='mt-1'
                      required
                    />
                    <Label htmlFor='terms' className='text-sm text-gray-600'>
                      By proceeding, I acknowledge that I have read and agreed
                      to Travelbeta's Flight booking terms & conditions
                    </Label>
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-gray-600 hover:bg-gray-700'
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Our Visa Process</h2>
            <p className='text-xl text-gray-600'>
              Simple steps to get your visa approved
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FileText className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>1. Consultation</h3>
              <p className='text-gray-600'>
                Free consultation to assess your visa requirements
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>2. Documentation</h3>
              <p className='text-gray-600'>
                Assistance with document preparation and verification
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Globe className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>3. Application</h3>
              <p className='text-gray-600'>
                Professional application submission and tracking
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CheckCircle className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>4. Approval</h3>
              <p className='text-gray-600'>
                Visa collection and travel preparation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-4'>
            Ready to Apply for Your Visa?
          </h2>
          <p className='text-xl mb-8 text-blue-100'>
            Get expert assistance with your visa application today
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-gray-100'
              >
                Start Application
              </Button>
            </Link>
            <a href='tel:08023874076'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-blue-600 bg-transparent'
              >
                Call: +234 802 3874 076
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
