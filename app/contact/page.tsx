'use client';

import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/lists';
const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), {
  ssr: false,
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    console.log(formData);

    const payload = {
      ...formData,
      formType: 'Contact Form',
    };

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          consent: true,
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      href: 'tel:+2348023874076',
      details: ['+234 802 3874 076'],
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      href: 'mailto:info@libertytravelsng.com',
      details: ['info@libertytravelsng.com'],
      description: 'Send us your inquiries',
    },
    {
      icon: MapPin,
      title: 'Address',
      href: 'https://maps.app.goo.gl/h4c11fDJFcNBo5Ev8',
      details: ['1, Balogun street, off obafemi', 'Awolowo way, Ikeja, Lagos'],
      description: 'Visit our office',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM'],
      description: "We're here to help",
    },
  ];

  const services = [
    'Visa Assistance',
    'Flight Bookings',
    'Travel Health Insurance',
    'Shortlet Bookings',
    'Tours & Holidays',
    'Airport Transfers',
    'General Inquiry',
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white py-32'
        style={{
          backgroundImage: "url('/contact.jpg')",
          // replace with your image path
        }}
      >
        <div className='absolute inset-0 bg-black/25'></div>
        <div className='relative container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl text-white font-bold mb-6'>Contact Us</h1>
            <p className='text-xl mb-8 text-white'>
              Get in touch with our travel experts for personalized assistance
              with all your travel needs
            </p>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div>
            <Card className='shadow-lg'>
              <CardHeader>
                <CardTitle className='text-2xl'>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className='space-y-6' onSubmit={handleSubmit}>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input
                        id='firstName'
                        placeholder='Enter your first name'
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input
                        id='lastName'
                        placeholder='Enter your last name'
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Enter your email address'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='phone'>Phone Number</Label>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='Enter your phone number'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='service'>Service of Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={handleServiceChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select a service' />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem
                            key={service}
                            value={service.toLowerCase().replace(/\s+/g, '-')}
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      placeholder='Tell us about your travel plans or ask any questions...'
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type='submit'
                    disabled={loading}
                    className='w-full bg-purple-600 hover:bg-purple-700 text-lg py-6'
                  >
                    <Send className='mr-2 h-5 w-5' />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status === 'success' && (
                    <p className='text-green-600 text-sm mt-2'>
                      Message sent successfully!
                    </p>
                  )}
                  {status === 'error' && (
                    <p className='text-red-600 text-sm mt-2'>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
              <p className='text-gray-600 text-lg mb-8'>
                We're here to help you plan your perfect trip. Reach out to us
                through any of the following channels:
              </p>
            </div>

            <div className='grid gap-6'>
              {contactInfo.map((info, index) => (
                <Card key={index} className='hover:shadow-lg transition-shadow'>
                  <CardContent className='p-6'>
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <info.icon className='h-6 w-6 text-purple-600' />
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>
                          {info.title}
                        </h3>

                        <div className='space-y-1 mb-2'>
                          <a href={info.href} target='_blank'>
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className='text-gray-800 font-medium'
                              >
                                {detail}
                              </p>
                            ))}
                          </a>
                        </div>
                        <p className='text-gray-600 text-sm'>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <Card className='bg-green-50 border-green-200'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <MessageCircle className='h-6 w-6 text-green-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold mb-2'>
                      WhatsApp Support
                    </h3>
                    <p className='text-gray-600 mb-4'>
                      Get instant support via WhatsApp for quick responses
                    </p>
                    <Link href='https://wa.me/2348023874076'>
                      <Button className='bg-green-600 hover:bg-green-700'>
                        <MessageCircle className='mr-2 h-4 w-4' />
                        Chat on WhatsApp
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-4'>
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-gray-600'>
                Check out our frequently asked questions for more answers to
                some of your questions
              </p>
            </div>

            <div className='max-w-4xl mx-auto'>
              <Accordion type='single' collapsible className='space-y-4'>
                {faqs.map((faq, index) => (
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

        {/* Map Section */}
        <div className='mt-16'>
          <Card className='overflow-hidden'>
            <CardHeader>
              <CardTitle className='text-2xl'>Visit Our Office</CardTitle>
              <CardDescription>
                Find us at our Lagos headquarters
              </CardDescription>
            </CardHeader>
            <CardContent className='p-0'>
              <div className='h-96 items-center justify-center'>
                <InteractiveMap />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
