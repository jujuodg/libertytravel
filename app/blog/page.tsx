import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { blogPosts, categories, getRecentPosts } from '@/lib/lists';

export default function BlogPage() {
  const recentPosts = getRecentPosts(4);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-top bg-no-repeat text-white py-36'
        style={{
          backgroundImage: "url('/travelblog.jpeg')",
          // replace with your image path
        }}
      >
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative container mx-auto px-4 text-center'>
          <h1 className='text-5xl text-white font-bold mb-4'>Travel Blog</h1>
          <p className='text-xl text-gray-200 max-w-2xl mx-auto'>
            Discover amazing destinations, travel tips, and inspiring stories
            from around the world
          </p>
        </div>
      </section>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-3'>
            <div className='grid md:grid-cols-3 gap-8'>
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className='group hover:shadow-lg transition-shadow overflow-hidden'
                >
                  <div className='relative overflow-hidden'>
                    <Image
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      width={400}
                      height={250}
                      className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute top-4 left-4'>
                      <Badge className='bg-purple-600 text-white'>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className='p-6'>
                    <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='h-4 w-4' />
                        {post.date}
                      </div>
                      <div className='flex items-center gap-1'>
                        <User className='h-4 w-4' />
                        {post.author}
                      </div>
                    </div>
                    <h2 className='text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors'>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className='text-gray-600 mb-4 line-clamp-3'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-500'>
                        {post.readTime}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className='text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1'
                      >
                        Read More <ArrowRight className='h-4 w-4' />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Search */}
            <Card>
              <CardContent className='p-6'>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
                  <Input
                    placeholder='Type and hit enter...'
                    className='pl-10'
                  />
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-lg font-bold mb-4 bg-gray-800 text-white px-4 py-2 rounded -mx-6 -mt-6'>
                  RECENT POSTS
                </h3>
                <div className='space-y-4'>
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className='flex gap-3 group'
                    >
                      <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        width={80}
                        height={80}
                        className='w-20 h-20 object-cover rounded flex-shrink-0'
                      />
                      <div className='flex-1 min-w-0'>
                        <h4 className='font-medium text-sm line-clamp-2 group-hover:text-purple-600 transition-colors'>
                          {post.title}
                        </h4>
                        <p className='text-xs text-gray-500 mt-1'>
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-lg font-bold mb-4 bg-gray-800 text-white px-4 py-2 rounded -mx-6 -mt-6'>
                  CATEGORIES
                </h3>
                <div className='space-y-2'>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category.toLowerCase()}`}
                      className='flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 transition-colors group'
                    >
                      <span className='text-gray-700 group-hover:text-purple-600'>
                        {category}
                      </span>
                      <ArrowRight className='h-4 w-4 text-gray-400 group-hover:text-purple-600' />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';
// import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
// import Link from 'next/link';
// import Header from '../components/header';
// import Footer from '../components/footer';

// export default function BlogPage() {
//   const blogPosts = [
//     {
//       id: 'visa-free-countries-nigerians',
//       title: 'Visa-free countries for first-time travellers',
//       excerpt:
//         'Are you thinking about going abroad? Although most countries worldwide do require Nigerians to get a visa before arrival, there are over 50 countries where you can enjoy hassle-free travel...',
//       image: '/placeholder.svg?height=300&width=400&text=Nigerian Passport',
//       category: 'Visa',
//       author: 'Liberty Hospitality',
//       date: 'August 5, 2022',
//       readTime: '5 min read',
//     },
//     {
//       id: 'bali-travel-guide-2023',
//       title: '15 reasons to visit Bali in 2023',
//       excerpt:
//         'Bali is a beautiful and popular destination that attracts millions of visitors every year. Here are 15 reasons why you should consider visiting Bali in 2023...',
//       image: '/placeholder.svg?height=300&width=400&text=Bali Beach Resort',
//       category: 'Destinations',
//       author: 'Liberty Hospitality',
//       date: 'January 22, 2023',
//       readTime: '8 min read',
//     },
//     {
//       id: 'lagos-recreational-spots',
//       title: '10 Beautiful Recreational Spots in Lagos, Nigeria',
//       excerpt:
//         "Lagos offers amazing recreational spots for families and couples. Discover the most beautiful places to visit and create memorable experiences in Nigeria's commercial capital...",
//       image: '/placeholder.svg?height=300&width=400&text=Lagos Recreation',
//       category: 'Local Tours',
//       author: 'Liberty Hospitality',
//       date: 'June 4, 2021',
//       readTime: '6 min read',
//     },
//     {
//       id: 'top-resorts-lagos',
//       title: 'TOP 10 BEAUTIFUL RESORTS IN LAGOS',
//       excerpt:
//         "If you're looking for very beautiful resorts in Lagos, Nigeria, then this article is for you. We have compiled a list of the most stunning resorts that offer luxury and comfort...",
//       image: '/placeholder.svg?height=300&width=400&text=Lagos Resort',
//       category: 'Local Tours',
//       author: 'Liberty Hospitality',
//       date: 'July 13, 2022',
//       readTime: '7 min read',
//     },
//     {
//       id: 'romantic-destinations-couples',
//       title: '5 places you should visit with your partner in 2022',
//       excerpt:
//         'Although a lot has changed in the world of travel following the insurgence of Covid-19, tourists are back and most tourist destinations are bubbling. While many couples have been unable...',
//       image: '/placeholder.svg?height=300&width=400&text=Romantic Destination',
//       category: 'Honeymoon',
//       author: 'Liberty Hospitality',
//       date: 'July 28, 2022',
//       readTime: '5 min read',
//     },
//     {
//       id: 'visa-free-countries-list',
//       title: '12 VISA-FREE COUNTRIES FOR NIGERIANS',
//       excerpt:
//         'Ever wondered if there are countries you can visit without a visa as a Nigerian? The good news is that there are several destinations where Nigerian passport holders can travel visa-free...',
//       image: '/placeholder.svg?height=300&width=400&text=Travel Destinations',
//       category: 'Visa',
//       author: 'Liberty Hospitality',
//       date: 'April 27, 2021',
//       readTime: '4 min read',
//     },
//   ];

//   const categories = [
//     'Adventure',
//     'Destinations',
//     'Local Tours',
//     'Family',
//     'Honeymoon',
//     'Visa',
//     'Travel Tips',
//     'Baecation',
//   ];

//   const recentPosts = [
//     {
//       title: '15 reasons to visit Bali in 2023',
//       image: '/placeholder.svg?height=80&width=80&text=Bali',
//       date: 'January 22, 2023',
//     },
//     {
//       title: 'Visa-free countries for first-time travellers',
//       image: '/placeholder.svg?height=80&width=80&text=Passport',
//       date: 'August 5, 2022',
//     },
//     {
//       title: '5 places you should visit with your partner in 2022',
//       image: '/placeholder.svg?height=80&width=80&text=Couple',
//       date: 'July 28, 2022',
//     },
//     {
//       title: 'TOP 10 BEAUTIFUL RESORTS IN LAGOS',
//       image: '/placeholder.svg?height=80&width=80&text=Resort',
//       date: 'July 13, 2022',
//     },
//   ];

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <Header />

//       {/* Hero Section */}
//       <section className='relative bg-gradient-to-r from-slate-800 to-slate-600 text-white py-32'>
//         <div
//           className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
//           style={{
//             backgroundImage:
//               "url('/placeholder.svg?height=400&width=1200&text=Cruise Ship at Sea')",
//           }}
//         />
//         <div className='relative container mx-auto px-4 text-center'>
//           <h1 className='text-6xl font-bold mb-4'>OUR BLOG</h1>
//           <p className='text-xl text-gray-200'>
//             Discover travel tips, destination guides, and inspiring stories
//           </p>
//         </div>
//       </section>

//       <div className='container mx-auto px-4 py-16'>
//         <div className='grid lg:grid-cols-4 gap-12'>
//           {/* Main Content */}
//           <div className='lg:col-span-3'>
//             <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
//               {blogPosts.map((post) => (
//                 <Card
//                   key={post.id}
//                   className='overflow-hidden hover:shadow-lg transition-shadow group'
//                 >
//                   <div className='relative overflow-hidden'>
//                     <img
//                       src={post.image || '/placeholder.svg'}
//                       alt={post.title}
//                       className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
//                     />
//                     <Badge className='absolute top-4 left-4 bg-purple-600 text-white'>
//                       {post.category}
//                     </Badge>
//                   </div>
//                   <CardContent className='p-6'>
//                     <div className='flex items-center text-sm text-gray-500 mb-3'>
//                       <Calendar className='h-4 w-4 mr-1' />
//                       <span className='mr-4'>{post.date}</span>
//                       <Clock className='h-4 w-4 mr-1' />
//                       <span>{post.readTime}</span>
//                     </div>
//                     <h3 className='text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors'>
//                       <Link href={`/blog/${post.id}`}>{post.title}</Link>
//                     </h3>
//                     <p className='text-gray-600 mb-4 line-clamp-3'>
//                       {post.excerpt}
//                     </p>
//                     <div className='flex items-center justify-between'>
//                       <div className='flex items-center text-sm text-gray-500'>
//                         <User className='h-4 w-4 mr-1' />
//                         <span>{post.author}</span>
//                       </div>
//                       <Link href={`/blog/${post.id}`}>
//                         <Button
//                           variant='ghost'
//                           size='sm'
//                           className='text-purple-600 hover:text-purple-700'
//                         >
//                           Read More
//                           <ArrowRight className='h-4 w-4 ml-1' />
//                         </Button>
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className='lg:col-span-1'>
//             <div className='space-y-8'>
//               {/* Search */}
//               <Card>
//                 <CardContent className='p-6'>
//                   <div className='relative'>
//                     <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
//                     <Input
//                       placeholder='Type and hit enter...'
//                       className='pl-10'
//                     />
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Recent Posts */}
//               <Card>
//                 <CardContent className='p-6'>
//                   <div className='bg-gray-800 text-white px-4 py-2 rounded mb-4 text-center font-semibold'>
//                     RECENT POSTS
//                   </div>
//                   <div className='space-y-4'>
//                     {recentPosts.map((post, index) => (
//                       <div key={index} className='flex gap-3'>
//                         <img
//                           src={post.image || '/placeholder.svg'}
//                           alt={post.title}
//                           className='w-16 h-16 object-cover rounded'
//                         />
//                         <div className='flex-1'>
//                           <h4 className='font-semibold text-sm mb-1 line-clamp-2 hover:text-purple-600 cursor-pointer'>
//                             {post.title}
//                           </h4>
//                           <p className='text-xs text-gray-500'>{post.date}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Categories */}
//               <Card>
//                 <CardContent className='p-6'>
//                   <div className='bg-gray-800 text-white px-4 py-2 rounded mb-4 text-center font-semibold'>
//                     BROWSE CATEGORIES
//                   </div>
//                   <div className='space-y-2'>
//                     {categories.map((category) => (
//                       <div
//                         key={category}
//                         className='flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0'
//                       >
//                         <span className='text-purple-600 hover:text-purple-700 cursor-pointer'>
//                           {category}
//                         </span>
//                         <ArrowRight className='h-4 w-4 text-gray-400' />
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
