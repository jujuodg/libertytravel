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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plane, MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function FlightBookingsPage() {
  const [tripType, setTripType] = useState('roundtrip');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    adults: '1',
    children: '0',
    infants: '0',
    class: 'economy',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Flight search:', { tripType, ...formData });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <Badge className='mb-4 bg-white/20 text-white'>
              ✈️ Best Flight Deals
            </Badge>
            <h1 className='text-5xl font-bold mb-6'>Flight Bookings</h1>
            <p className='text-xl mb-8 text-green-100'>
              Find and book the best flight deals to destinations worldwide with
              competitive prices
            </p>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Find Your Perfect Flight</h1>
          <p className='text-xl text-gray-600'>
            Search and compare flights from hundreds of airlines
          </p>
        </div>

        {/* Flight Search Form */}
        <Card className='max-w-6xl mx-auto mb-12'>
          <CardHeader className='bg-purple-600 text-white'>
            <CardTitle className='text-2xl'>Book Your Flight</CardTitle>
          </CardHeader>
          <CardContent className='p-6'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Trip Type */}
              <div>
                <Label className='text-base font-medium mb-3 block'>
                  Trip Type
                </Label>
                <RadioGroup
                  value={tripType}
                  onValueChange={setTripType}
                  className='flex gap-6'
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='roundtrip' id='roundtrip' />
                    <Label htmlFor='roundtrip'>Round Trip</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='oneway' id='oneway' />
                    <Label htmlFor='oneway'>One Way</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* From and To */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='from'>From</Label>
                  <Input
                    id='from'
                    name='from'
                    placeholder='Departure city or airport'
                    value={formData.from}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor='to'>To</Label>
                  <Input
                    id='to'
                    name='to'
                    placeholder='Destination city or airport'
                    value={formData.to}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Dates */}
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
                {tripType === 'roundtrip' && (
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
                )}
              </div>

              {/* Passengers */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                  <Label htmlFor='adults'>Adults (12+)</Label>
                  <Input
                    id='adults'
                    name='adults'
                    type='number'
                    min='1'
                    max='9'
                    value={formData.adults}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor='children'>Children (2–11)</Label>
                  <Input
                    id='children'
                    name='children'
                    type='number'
                    min='0'
                    max='9'
                    value={formData.children}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor='infants'>Infants (Under 2)</Label>
                  <Input
                    id='infants'
                    name='infants'
                    type='number'
                    min='0'
                    max='9'
                    value={formData.infants}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Class */}
              <div>
                <Label htmlFor='class'>Class</Label>
                <select
                  id='class'
                  name='class'
                  value={formData.class}
                  onChange={(e) =>
                    setFormData({ ...formData, class: e.target.value })
                  }
                  className='w-full p-2 border border-gray-300 rounded-md'
                >
                  <option value='economy'>Economy</option>
                  <option value='premium'>Premium Economy</option>
                  <option value='business'>Business</option>
                  <option value='first'>First Class</option>
                </select>
              </div>

              <Button
                type='submit'
                size='lg'
                className='w-full text-md bg-purple-600 hover:bg-purple-700'
              >
                <Plane className='mr-2 h-5 w-5' />
                Book Flight
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Flight Bookings Info */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative'>
            <img
              src='/flight.jpg'
              alt='Flight Bookings'
              className='rounded-lg shadow-lg w-full h-[400px] object-cover'
            />
          </div>
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
                <Plane className='h-6 w-6 text-gray-600' />
              </div>
              <h2 className='text-2xl font-bold'>Flight Bookings</h2>
            </div>
            <p className='text-gray-600 mb-6'>
              Whether it's a business trip or family holiday, we book local,
              regional and international flight tickets that are flexible and
              affordable on safe & secure airlines. At Liberty Travels, we're
              well-positioned to offer very competitive flight deals with your
              budget in mind.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
