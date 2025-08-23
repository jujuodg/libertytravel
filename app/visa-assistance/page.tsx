'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, Globe, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import dynamic from 'next/dynamic';
import { SingleValue } from 'react-select';
const AirportSelect = dynamic(() => import('../components/AirportSelect'), {
  ssr: false,
});
import { countries } from '@/lib/lists';

type CountryOption = {
  value: string;
  label: string;
};

export default function VisaAssistancePage() {
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
    passportFile: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        passportFile: e.target.files[0], // store file in state
      });
    }
  };

  const handleSelectChange = (
    field: 'destinationCountry' | 'passportCountry',
    option: SingleValue<CountryOption>
  ) => {
    setFormData({
      ...formData,
      [field]: option ? option.value : '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new FormData();

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'passportFile') {
        formPayload.append(key, String(value ?? ''));
      }
    });

    // Append file (if any)
    if (formData.passportFile) {
      formPayload.append('passport', formData.passportFile); // name it "passport"
    }

    // ✅ Add your extra field here
    formPayload.append('formType', 'visa assistance');

    try {
      // IMPORTANT: do NOT set Content-Type; the browser will set the correct multipart boundary
      const res = await fetch('/api/form', {
        method: 'POST',
        body: formPayload,
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(`Submit failed: ${res.status} ${msg}`);
      }

      // reset
      setFormData({
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
        passportFile: null as File | null,
      });
    } catch (error) {
      console.error(error);
      console.log('Form not submitted:', formPayload);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white py-20'
        style={{
          backgroundImage: "url('/assvis.jpg')",
          // replace with your image path
        }}
      >
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <Badge className='mb-4 bg-white/20 text-white'>
              ✈️ Visa Experts
            </Badge>
            <h1 className='text-5xl text-white font-bold mb-6'>
              Visa Assistance Services
            </h1>
            <p className='text-xl mb-8 text-gray-100'>
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
          {/* Left Column - Info */}
          <div>
            <h1 className='text-3xl font-bold mb-6'>Visa Assistance Program</h1>
            <p className='text-gray-600 mb-6'>
              Meet Liberty Hospitality Limited's Visa Team, our seasoned experts
              specialize in navigating the complexities of visa processing.
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
                <span>Pre-interview sessions to boost your confidence</span>
              </li>
            </ul>
            <p className='text-gray-600 mb-6'>
              Visa issuance is ultimately at the embassy's discretion.
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

                  {/* Destination Country - react-select */}
                  <div>
                    <Label>Destination Country</Label>
                    <AirportSelect
                      inputId='destinationCountry'
                      options={countries}
                      value={
                        countries.find(
                          (c) => c.value === formData.destinationCountry
                        ) || null
                      }
                      onChange={(option) =>
                        handleSelectChange('destinationCountry', option)
                      }
                      placeholder='Select destination country'
                    />
                  </div>

                  {/* Passport Country - react-select */}
                  <div>
                    <Label>Passport Country</Label>
                    <AirportSelect
                      inputId='passportCountry'
                      options={countries}
                      value={
                        countries.find(
                          (c) => c.value === formData.passportCountry
                        ) || null
                      }
                      onChange={(option) =>
                        handleSelectChange('passportCountry', option)
                      }
                      placeholder='Select passport country'
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
                      onChange={handleFileChange}
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
                      to Liberty Travels's Flight booking terms & conditions
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
        {/* Services Grid */}
        <div className='mb-16 mt-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Visa Assistance Services
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
            Our Assistance Process
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
      </div>

      <Footer />
    </div>
  );
}
