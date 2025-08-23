'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import { Plane, User, Phone, CreditCard } from 'lucide-react';

import Header from '../components/header';
import Footer from '../components/footer';
import { allAirports } from '@/lib/lists';

const AirportSelect = dynamic(() => import('../components/AirportSelect'), {
  ssr: false,
});

const airports = allAirports
  .slice(0, Math.floor(allAirports.length * 0.8))
  .map((a) => ({
    value: a.code,
    label: `${a.name} (${a.code})`,
  }));

export default function FlightBookingsPage() {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    adults: '1',
    children: '0',
    infants: '0',
    travelClass: 'economy',
  });

  const [passengerData, setPassengerData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    emergencyContact: '',
    emergencyPhone: '',
    specialRequests: '',
  });

  // ---- handlers ----
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePassengerChange = (
    name: keyof typeof passengerData,
    value: string
  ) => {
    setPassengerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (
    field: 'from' | 'to',
    selected: { value: string } | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: selected ? selected.value : '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const payload = {
      formType: 'flight-booking',
      tripType,
      ...formData,
      passenger: passengerData,
    };

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        // reset both forms to defaults
        setFormData({
          from: '',
          to: '',
          departureDate: '',
          returnDate: '',
          adults: '1',
          children: '0',
          infants: '0',
          travelClass: 'economy',
        });
        setPassengerData({
          title: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          nationality: '',
          passportNumber: '',
          passportExpiry: '',
          emergencyContact: '',
          emergencyPhone: '',
          specialRequests: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white py-40'
        style={{ backgroundImage: "url('/flighthero.jpg')" }}
      >
        <div className='absolute inset-0 bg-black/30' />
        <div className='relative container mx-auto px-4'>
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
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Find Your Perfect Flight</h1>
          <p className='text-xl text-gray-600'>
            Search and compare flights from hundreds of airlines
          </p>
        </div>

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
                  onValueChange={(v) => setTripType(v as any)}
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

              {/* From / To */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='from'>From</Label>
                  <AirportSelect
                    inputId='from'
                    options={airports.filter((a) => a.value !== formData.to)}
                    value={
                      formData.from
                        ? airports.find((a) => a.value === formData.from) ??
                          null
                        : null
                    }
                    onChange={(selected: any) =>
                      handleSelectChange('from', selected)
                    }
                    placeholder='Departure city or airport'
                  />
                </div>
                <div>
                  <Label htmlFor='to'>To</Label>
                  <AirportSelect
                    inputId='to'
                    options={airports.filter((a) => a.value !== formData.from)}
                    value={
                      formData.to
                        ? airports.find((a) => a.value === formData.to) ?? null
                        : null
                    }
                    onChange={(selected: any) =>
                      handleSelectChange('to', selected)
                    }
                    placeholder='Destination city or airport'
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
                    onChange={handleFormChange}
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
                      onChange={handleFormChange}
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              {/* Class */}
              <div>
                <Label htmlFor='travelClass'>Class</Label>
                <select
                  id='travelClass'
                  name='travelClass'
                  value={formData.travelClass}
                  onChange={handleFormChange}
                  className='w-full p-2 border border-gray-300 rounded-md'
                >
                  <option value='economy'>Economy</option>
                  <option value='premium'>Premium Economy</option>
                  <option value='business'>Business</option>
                  <option value='first'>First Class</option>
                </select>
              </div>

              <Separator className='my-8' />

              {/* Passenger Information */}
              <div>
                <h3 className='text-2xl font-semibold mb-6 flex items-center'>
                  <User className='mr-3 h-6 w-6 text-green-600' />
                  Passenger Information
                </h3>

                {/* Personal */}
                <div className='mb-8'>
                  <h4 className='text-lg font-semibold mb-4 text-gray-700'>
                    Personal Details
                  </h4>
                  <div className='grid md:grid-cols-3 gap-4 mb-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='title'>Title</Label>
                      <Select
                        onValueChange={(v) => handlePassengerChange('title', v)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select title' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='mr'>Mr.</SelectItem>
                          <SelectItem value='mrs'>Mrs.</SelectItem>
                          <SelectItem value='ms'>Ms.</SelectItem>
                          <SelectItem value='dr'>Dr.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input
                        id='firstName'
                        value={passengerData.firstName}
                        onChange={(e) =>
                          handlePassengerChange('firstName', e.target.value)
                        }
                        placeholder='Enter first name'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input
                        id='lastName'
                        value={passengerData.lastName}
                        onChange={(e) =>
                          handlePassengerChange('lastName', e.target.value)
                        }
                        placeholder='Enter last name'
                        required
                      />
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='dateOfBirth'>Date of Birth</Label>
                      <Input
                        id='dateOfBirth'
                        type='date'
                        value={passengerData.dateOfBirth}
                        onChange={(e) =>
                          handlePassengerChange('dateOfBirth', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='nationality'>Nationality</Label>
                      <Select
                        onValueChange={(v) =>
                          handlePassengerChange('nationality', v)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select nationality' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='nigerian'>Nigerian</SelectItem>
                          <SelectItem value='american'>American</SelectItem>
                          <SelectItem value='british'>British</SelectItem>
                          <SelectItem value='canadian'>Canadian</SelectItem>
                          <SelectItem value='other'>Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className='mb-8'>
                  <h4 className='text-lg font-semibold mb-4 text-gray-700 flex items-center'>
                    <Phone className='mr-2 h-5 w-5' />
                    Contact Information
                  </h4>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='email'>Email Address</Label>
                      <Input
                        id='email'
                        type='email'
                        value={passengerData.email}
                        onChange={(e) =>
                          handlePassengerChange('email', e.target.value)
                        }
                        placeholder='Enter email address'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='phone'>Phone Number</Label>
                      <Input
                        id='phone'
                        type='tel'
                        value={passengerData.phone}
                        onChange={(e) =>
                          handlePassengerChange('phone', e.target.value)
                        }
                        placeholder='Enter phone number'
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Passport */}
                <div className='mb-8'>
                  <h4 className='text-lg font-semibold mb-4 text-gray-700 flex items-center'>
                    <CreditCard className='mr-2 h-5 w-5' />
                    Passport Information
                  </h4>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='passportNumber'>Passport Number</Label>
                      <Input
                        id='passportNumber'
                        value={passengerData.passportNumber}
                        onChange={(e) =>
                          handlePassengerChange(
                            'passportNumber',
                            e.target.value
                          )
                        }
                        placeholder='Enter passport number'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='passportExpiry'>
                        Passport Expiry Date
                      </Label>
                      <Input
                        id='passportExpiry'
                        type='date'
                        value={passengerData.passportExpiry}
                        onChange={(e) =>
                          handlePassengerChange(
                            'passportExpiry',
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency */}
                <div className='mb-8'>
                  <h4 className='text-lg font-semibold mb-4 text-gray-700 flex items-center'>
                    <Phone className='mr-2 h-5 w-5' />
                    Emergency Contact
                  </h4>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='emergencyContact'>
                        Emergency Contact Name
                      </Label>
                      <Input
                        id='emergencyContact'
                        value={passengerData.emergencyContact}
                        onChange={(e) =>
                          handlePassengerChange(
                            'emergencyContact',
                            e.target.value
                          )
                        }
                        placeholder='Enter emergency contact name'
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='emergencyPhone'>
                        Emergency Contact Phone
                      </Label>
                      <Input
                        id='emergencyPhone'
                        type='tel'
                        value={passengerData.emergencyPhone}
                        onChange={(e) =>
                          handlePassengerChange(
                            'emergencyPhone',
                            e.target.value
                          )
                        }
                        placeholder='Enter emergency contact phone'
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className='mb-8'>
                  <h4 className='text-lg font-semibold mb-4 text-gray-700'>
                    Special Requests (Optional)
                  </h4>
                  <div className='space-y-2'>
                    <Label htmlFor='specialRequests'>
                      Special Requests or Dietary Requirements
                    </Label>
                    <textarea
                      id='specialRequests'
                      value={passengerData.specialRequests}
                      onChange={(e) =>
                        handlePassengerChange('specialRequests', e.target.value)
                      }
                      placeholder='Enter any special requests, dietary requirements, or accessibility needs'
                      className='w-full p-3 border border-gray-300 rounded-md resize-none h-24'
                    />
                  </div>
                </div>
              </div>

              <Button
                type='submit'
                size='lg'
                className='w-full text-md bg-purple-600 hover:bg-purple-700'
                disabled={loading}
              >
                <Plane className='mr-2 h-5 w-5' />
                {loading ? 'Submitting...' : 'Book Flight'}
              </Button>
              {status === 'success' && (
                <p className='text-green-600 text-sm'>
                  Submitted successfully.
                </p>
              )}
              {status === 'error' && (
                <p className='text-red-600 text-sm'>
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Info */}
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
