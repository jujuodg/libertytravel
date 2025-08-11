import Link from 'next/link';
import {
  Plane,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-purple-800 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-white'>
                <Plane className='h-6 w-6 text-purple-600' />
              </div>
              <div className='flex flex-col'>
                <span className='text-lg font-bold'>LIBERTY HOSPITALITY</span>
                <span className='text-xs text-purple-200'>LIMITED</span>
              </div>
            </div>
            <p className='text-purple-200 text-sm leading-relaxed'>
              Your trusted travel partner since 2013. We specialize in creating
              unforgettable travel experiences with personalized service and
              competitive prices.
            </p>
            <div className='flex space-x-4'>
              <Facebook className='h-5 w-5 text-purple-200 hover:text-white cursor-pointer' />
              <Twitter className='h-5 w-5 text-purple-200 hover:text-white cursor-pointer' />
              <Instagram className='h-5 w-5 text-purple-200 hover:text-white cursor-pointer' />
              <Linkedin className='h-5 w-5 text-purple-200 hover:text-white cursor-pointer' />
            </div>
          </div>

          {/* Overview */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Overview</h3>
            <ul className='space-y-2 text-purple-200'>
              <li>
                <Link href='/' className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-white transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/tours-holidays'
                  className='hover:text-white transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Information</h3>
            <ul className='space-y-2 text-purple-200'>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Site Map
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Community
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Head Office</h3>
            <div className='space-y-3 text-purple-200'>
              <div className='flex items-start space-x-2'>
                <MapPin className='h-5 w-5 mt-0.5 flex-shrink-0' />
                <div>
                  <p>1, Balogun street, off obafemi</p>
                  <p>Awolowo way, Ikeja</p>
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-5 w-5 flex-shrink-0' />
                <p>+234 802 3874 076</p>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='h-5 w-5 flex-shrink-0' />
                <p>info@libertytravelsng.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-purple-700 mt-8 pt-8 text-center text-purple-200'>
          <p>
            &copy; {new Date().getFullYear()} Liberty Hospitality Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
