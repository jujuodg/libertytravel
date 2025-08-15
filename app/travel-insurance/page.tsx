import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Shield,
  Heart,
  Plane,
  CreditCard,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

export default function TravelHealthInsurance() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white py-20'
        style={{
          backgroundImage: "url('/travelise.jpg')",
          // replace with your image path
        }}
      >
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex justify-center mb-6'>
              <Shield className='h-16 w-16 text-white' />
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Travel Health Insurance
            </h1>
            <p className='text-xl md:text-2xl mb-8 opacity-90'>
              Your Safety Net Abroad
            </p>
            <p className='text-lg md:text-xl max-w-3xl mx-auto text-white leading-relaxed'>
              As your trusted travel partner, we want to ensure you're protected
              against unexpected medical emergencies while exploring the world.
              That's why we highly recommend investing in travel health
              insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Why You Need Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Why Do You Need Travel Health Insurance?
              </h2>
              <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                Protect yourself from unexpected costs and ensure peace of mind
                during your travels
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='border-2 border-gray-100 hover:border-purple-200 transition-colors'>
                <CardHeader>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                    <Heart className='h-6 w-6 text-purple-600' />
                  </div>
                  <CardTitle className='text-xl text-gray-900'>
                    Medical Emergencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Falling ill or getting injured abroad can be costly. Medical
                    bills, hospital stays, and even evacuations can be
                    financially crippling without proper coverage.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-2 border-gray-100 hover:border-purple-200 transition-colors'>
                <CardHeader>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                    <Plane className='h-6 w-6 text-purple-600' />
                  </div>
                  <CardTitle className='text-xl text-gray-900'>
                    Trip Disruptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    If you're hospitalized or need to return home due to a
                    medical issue, travel health insurance can help cover
                    additional expenses, such as trip cancellations or
                    interruptions.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-2 border-gray-100 hover:border-purple-200 transition-colors'>
                <CardHeader>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                    <CreditCard className='h-6 w-6 text-purple-600' />
                  </div>
                  <CardTitle className='text-xl text-gray-900'>
                    Financial Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600'>
                    Medical costs abroad can be exorbitant. With travel health
                    insurance, you can avoid financial ruin and focus on your
                    recovery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                What Does Travel Health Insurance Typically Cover?
              </h2>
              <p className='text-lg text-gray-600'>
                Comprehensive coverage for your peace of mind
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <Heart className='h-4 w-4 text-purple-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>
                      Medical Expenses
                    </h3>
                    <p className='text-gray-600'>
                      Including hospital stays and doctor visits
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <Plane className='h-4 w-4 text-purple-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>
                      Emergency Evacuations
                    </h3>
                    <p className='text-gray-600'>
                      Emergency evacuations and repatriation
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <CreditCard className='h-4 w-4 text-purple-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>
                      Trip Cancellations
                    </h3>
                    <p className='text-gray-600'>
                      Trip cancellations or interruptions due to medical reasons
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                    <Shield className='h-4 w-4 text-purple-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>
                      Additional Expenses
                    </h3>
                    <p className='text-gray-600'>
                      Such as accommodation and transportation costs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Travel with Peace of Mind
            </h2>
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Liberty Hospitality Limited cares about your well-being and
              financial security. That's why we recommend purchasing travel
              health insurance for your upcoming trip. Contact us to learn more
              about our insurance options and let's get you protected for your
              next adventure!
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                size='lg'
                className='bg-purple-600 hover:bg-purple-700'
              >
                <Link href='/contact'>Get Insurance Quote</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent'
              >
                <Link href='/packages'>Browse Travel Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className='py-16 bg-purple-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
              Need Help? Contact Our Insurance Specialists
            </h3>

            <div className='grid md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Phone className='h-6 w-6 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>Phone</h4>
                <p className='text-gray-600'>+1 (555) 123-4567</p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Mail className='h-6 w-6 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>Email</h4>
                <p className='text-gray-600'>
                  insurance@libertyhospitality.com
                </p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-6 w-6 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>Hours</h4>
                <p className='text-gray-600'>Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='w-full flex justify-center items-center py-16'>
        <Image
          src={'/WhatsApp Image 2025-08-11 at 16.12.07 (3).jpeg'}
          alt='liberty travels'
          width={1500}
          height={300}
          className='h-[33rem]'
        />
      </section>

      <Footer />
    </div>
  );
}
