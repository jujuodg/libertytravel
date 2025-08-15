'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  Plane,
  Building,
  FileText,
  Globe,
  Phone,
  HeartPulse,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Car,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Visa Assistance', href: '/visa-assistance', icon: FileText },
    { name: 'Flight Bookings', href: '/flight-bookings', icon: Plane },
    {
      name: 'Travel Health Insurance',
      href: '/travel-insurance',
      icon: HeartPulse,
    },
    { name: 'Shortlet Apartments', href: '/shortlet-bookings', icon: Building },
    { name: 'Tours & Holidays', href: '/tours-holidays', icon: Globe },
    { name: 'Airport Pickup', href: '/about', icon: Car },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/libertyhospitality',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/libertyhospitality',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/libertyhospitality',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/libertyhospitality',
      icon: Linkedin,
    },
  ];

  return (
    <>
      <div className='bg-purple-600 text-white py-2 text-sm'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-2'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-1'>
                <Phone className='h-4 w-4' />
                <span>+234 802 3874 076</span>
              </div>
              <div className='flex items-center gap-1'>
                <Mail className='h-4 w-4' />
                <span>info@libertytravelsng.com</span>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <span className='text-sm hidden md:inline'>Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-purple-200 transition-colors'
                  aria-label={social.name}
                >
                  <social.icon className='h-4 w-4' />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
        <div className='container flex h-20 items-center justify-between px-4 md:px-6'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='flex flex-col'>
              <Image
                src='/logo.png'
                alt='Liberty Hospitality Limited'
                width={230}
                height={230}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='hidden lg:flex'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/'
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/about'
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='grid w-[600px] grid-cols-2 gap-3 p-4'>
                    {services.map((service) => (
                      <NavigationMenuLink key={service.name} asChild>
                        <Link
                          href={service.href}
                          className='group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'
                        >
                          <div className='flex items-center gap-2'>
                            <service.icon className='h-4 w-4 text-purple-600' />
                            <div className='text-sm font-medium leading-none group-hover:underline'>
                              {service.name}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/blog'
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/contact'
                    className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* WhatsApp Button */}
          <Link href='https://wa.me/254722888888'>
            <Button className='hidden lg:flex bg-gray-500 hover:bg-gray-600 text-white'>
              <Phone className='mr-2 h-4 w-4' />
              Chat on WhatsApp
              {/* <span className='ml-1 text-xs'>Can't Wait!</span> */}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='lg:hidden bg-transparent'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
              <div className='flex flex-col space-y-4 mt-6'>
                <Link
                  href='/'
                  className='text-lg font-semibold'
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href='/about'
                  className='text-lg font-semibold'
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <div className='space-y-2'>
                  <div className='text-lg font-semibold'>Services</div>
                  <div className='ml-4 space-y-2'>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className='flex items-center gap-2 text-sm'
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className='h-4 w-4 text-purple-600' />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href='/contact'
                  className='text-lg font-semibold'
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Button className='bg-gray-500 hover:bg-gray-600 text-white mt-4'>
                  <Phone className='mr-2 h-4 w-4' />
                  Chat on WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
