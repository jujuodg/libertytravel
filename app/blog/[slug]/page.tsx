import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  User,
  ArrowRight,
  MessageCircle,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getRecentPosts,
  categories,
} from '@/lib/lists';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function processContentWithImages(
  content: string,
  inlineImages?: {
    position: number;
    src: string;
    alt: string;
    caption?: string;
  }[]
) {
  if (!inlineImages || inlineImages.length === 0) {
    return (
      <div
        className='space-y-5'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  let processedContent = content;

  // Replace image placeholders with actual images
  inlineImages.forEach((image) => {
    const placeholder = `<div class="inline-image-placeholder" data-position="${image.position}"></div>`;
    const imageHtml = `
      <div class="inline-image-container my-8">
        <img src="${image.src}" alt="${
      image.alt
    }" class="w-full h-80 object-cover rounded-lg shadow-lg" />
        ${
          image.caption
            ? `<p class="text-center text-sm text-gray-600 mt-2 italic">${image.caption}</p>`
            : ''
        }
      </div>
    `;
    processedContent = processedContent.replace(placeholder, imageHtml);
  });

  return (
    <div
      className='space-y-5'
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(blogPost.id, 3);
  const recentPosts = getRecentPosts(4);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <div className='container mx-auto px-4 py-8'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 text-sm text-gray-500 mb-8'>
          <Link href='/' className='hover:text-purple-600'>
            Liberty Hospitality Limited
          </Link>
          <span>»</span>
          <Link href='/blog' className='hover:text-purple-600'>
            Blog
          </Link>
          <span>»</span>
          <span className='text-gray-800'>{blogPost.title}</span>
        </nav>

        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-3'>
            <article>
              {/* Post Header */}
              <div className='mb-8'>
                <div className='flex items-center gap-2 mb-4'>
                  <Badge
                    variant='outline'
                    className='text-purple-600 border-purple-600'
                  >
                    {blogPost.category}
                  </Badge>
                  {blogPost.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant='outline'
                      className='text-purple-600 border-purple-600'
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                  {blogPost.title}
                </h1>

                <div className='flex items-center gap-6 text-sm text-gray-500 mb-6'>
                  <div className='flex items-center gap-2'>
                    <span>written by</span>
                    <span className='font-medium text-gray-700'>
                      {blogPost.author}
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Calendar className='h-4 w-4' />
                    {blogPost.date}
                  </div>
                  <div>{blogPost.readTime}</div>
                </div>
              </div>

              {/* Featured Image */}
              <div className='mb-8'>
                <Image
                  src={blogPost.image || '/placeholder.svg'}
                  alt={blogPost.title}
                  width={800}
                  height={500}
                  className='w-full h-[400px] object-cover rounded-lg'
                />
              </div>

              {/* Post Content with Inline Images */}
              <div className='prose prose-lg space-y-5 max-w-none mb-12'>
                {processContentWithImages(
                  blogPost.content,
                  blogPost.inlineImages
                )}
              </div>

              {/* Social Share & Engagement */}
              <div className='flex items-center justify-between py-6 border-t border-b border-gray-200 mb-8'>
                <div className='flex items-center gap-4'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-purple-600'
                  >
                    <MessageCircle className='h-4 w-4 mr-1' />0 comment
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-purple-600'
                  >
                    <Heart className='h-4 w-4 mr-1' />0
                  </Button>
                </div>
                <div className='flex items-center gap-2'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-purple-600'
                  >
                    <Facebook className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-purple-600'
                  >
                    <Twitter className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-purple-600'
                  >
                    <Linkedin className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-gray-500 hover:text-purple-600'
                  >
                    <Mail className='h-4 w-4' />
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <Card className='mb-12'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                      <User className='h-8 w-8 text-gray-400' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold mb-2'>
                        LIBERTY HOSPITALITY LIMITED
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        Liberty Hospitality Limited provides exceptional travel
                        and event experiences through the most efficient
                        arrangements that set the standards for quality service
                        and excellent customer satisfaction. We control and
                        reverse the unfair and unrealistic inflation of
                        travel/tourism pricing that makes the average individual
                        unable to have memorable travel experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className='flex justify-between items-center mb-12'>
                <div className='text-left'>
                  <p className='text-sm text-gray-500 mb-1'>previous post</p>
                  <Link
                    href='#'
                    className='text-lg font-medium hover:text-purple-600'
                  >
                    Previous Article
                  </Link>
                </div>
                <div className='text-right'>
                  <p className='text-sm text-gray-500 mb-1'>next post</p>
                  <Link
                    href='#'
                    className='text-lg font-medium hover:text-purple-600'
                  >
                    Next Article
                  </Link>
                </div>
              </div>

              {/* You May Also Like */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-center mb-8'>
                  YOU MAY ALSO LIKE
                </h2>
                <div className='grid md:grid-cols-3 gap-6'>
                  {relatedPosts.map((post) => (
                    <Card
                      key={post.id}
                      className='group hover:shadow-lg transition-shadow'
                    >
                      <div className='relative overflow-hidden rounded-t-lg'>
                        <Image
                          src={post.image || '/placeholder.svg'}
                          alt={post.title}
                          width={300}
                          height={200}
                          className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                      </div>
                      <CardContent className='p-4'>
                        <h3 className='font-bold mb-2 group-hover:text-purple-600 transition-colors'>
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className='text-sm text-gray-500'>{post.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Comment Form */}
              <section>
                <h2 className='text-2xl font-bold mb-6'>LEAVE A COMMENT</h2>
                <form className='space-y-6'>
                  <Textarea
                    placeholder='Your Comment'
                    className='min-h-[120px]'
                  />
                  <div className='grid md:grid-cols-3 gap-4'>
                    <Input placeholder='Name*' required />
                    <Input placeholder='Email*' type='email' required />
                    <Input placeholder='Website' />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='save-info' />
                    <label
                      htmlFor='save-info'
                      className='text-sm text-gray-600'
                    >
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <Button
                    type='submit'
                    className='bg-purple-600 hover:bg-purple-700'
                  >
                    Post Comment
                  </Button>
                </form>
              </section>
            </article>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Search */}
            <Card>
              <CardContent className='p-6'>
                <Input placeholder='Type and hit enter...' />
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
// import { Textarea } from '@/components/ui/textarea';
// import { Checkbox } from '@/components/ui/checkbox';
// import {
//   Search,
//   Calendar,
//   User,
//   ArrowRight,
//   Clock,
//   Facebook,
//   Twitter,
//   Instagram,
//   Mail,
//   MessageCircle,
//   Heart,
// } from 'lucide-react';
// import Link from 'next/link';
// import Header from '../../components/header';
// import Footer from '../../components/footer';

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   const blogPost = {
//     title: 'Visa-free countries for first-time travellers',
//     content: `
//       <p>Are you thinking about going abroad?</p>

//       <p>Although most countries worldwide do require Nigerians to get a visa before arrival, there are over 50 countries where you can enjoy hassle-free travel, fortunately.</p>

//       <p>One of the things we look out for while choosing a destination to visit is how easy or difficult it is to obtain a visa.</p>

//       <p>Since there are only a handful of visa-free countries for Nigerian Citizens, this factor plays a huge role in deciding which places we get to visit.</p>

//       <h3>5 places you should visit with your partner in 2022</h3>

//       <p>In this article, we will give you an overview of countries you can travel to more freely, without needing to go through the process of getting an embassy visa before you take off.</p>

//       <p>We have also included a few destination ideas to help you choose the best holiday for you!</p>

//       <h4>Visa-free countries for first-time travellers</h4>

//       <p>Travellers are generally granted 30 days' entry, but in some countries, it can be more. For instance, if you travel to <a href="#" class="text-purple-600 hover:underline">Benin</a>, Chad, Gambia, Haiti, Saint Kitts and Nevis, or Senegal, you can stay for 90 days. Meanwhile, if you are travelling to Barbados or Dominica, you can stay for a massive 180 days.</p>

//       <p>Here is the list of visa-free destinations for Nigerian passport-holders:</p>

//       <ul>
//         <li>Barbados</li>
//         <li>Benin</li>
//         <li>Burkina Faso</li>
//         <li>Cameroon</li>
//         <li>Cape Verde</li>
//         <li>Chad</li>
//         <li>Cook Islands</li>
//         <li>Côte d'Ivoire</li>
//         <li>Dominica</li>
//         <li>Ecuador</li>
//         <li>Fiji</li>
//         <li>Gambia</li>
//         <li>Ghana</li>
//         <li>Guinea</li>
//         <li>Guinea-Bissau</li>
//         <li>Haiti</li>
//         <li>Liberia</li>
//         <li>Mali</li>
//         <li>Micronesia</li>
//         <li>Niger</li>
//         <li>Saint Kitts and Nevis</li>
//         <li>Senegal</li>
//         <li>Sierra Leone</li>
//         <li>Togo</li>
//         <li>Vanuatu</li>
//       </ul>

//       <p>It's also important that your passport is valid beyond your return date.</p>

//       <p>In addition, there is often a minimum number of months your passport needs to be valid for in order to be granted a visa, so make sure you check this carefully.</p>

//       <p>Need assistance with visa? Kindly reach out to us on 08035946158.</p>
//     `,
//     image: '/placeholder.svg?height=400&width=800&text=Nigerian Passports',
//     category: 'Visa',
//     author: 'Liberty Hospitality',
//     date: 'August 5, 2022',
//     readTime: '5 min read',
//   };

//   const relatedPosts = [
//     {
//       id: 'bali-travel-2023',
//       title: '15 reasons to visit Bali in 2023',
//       image: '/placeholder.svg?height=200&width=300&text=Bali Beach',
//       date: 'January 22, 2023',
//     },
//     {
//       id: 'lagos-resorts',
//       title: 'TOP 10 BEAUTIFUL RESORTS IN LAGOS',
//       image: '/placeholder.svg?height=200&width=300&text=Lagos Resort',
//       date: 'July 13, 2022',
//     },
//     {
//       id: 'lagos-recreation',
//       title: '10 Beautiful Recreational Spots in Lagos, Nigeria',
//       image: '/placeholder.svg?height=200&width=300&text=Lagos Recreation',
//       date: 'June 4, 2021',
//     },
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

//   const categories = [
//     'Adventure',
//     'Baecation',
//     'Daycation',
//     'Destinations',
//     'Family',
//     'Getaways',
//     'Honeymoon',
//     'Local Tours',
//     'Visa',
//   ];

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <Header />

//       <div className='container mx-auto px-4 py-8'>
//         {/* Breadcrumb */}
//         <nav className='text-sm text-gray-500 mb-8'>
//           <Link href='/' className='hover:text-purple-600'>
//             Liberty Hospitality
//           </Link>
//           <span className='mx-2'>»</span>
//           <Link href='/blog' className='hover:text-purple-600'>
//             Blog
//           </Link>
//           <span className='mx-2'>»</span>
//           <span>{blogPost.title}</span>
//         </nav>

//         <div className='grid lg:grid-cols-4 gap-12'>
//           {/* Main Content */}
//           <div className='lg:col-span-3'>
//             <article>
//               {/* Post Header */}
//               <div className='mb-8'>
//                 <div className='flex items-center gap-4 mb-4'>
//                   <Badge className='bg-purple-600 text-white'>
//                     {blogPost.category}
//                   </Badge>
//                   <Badge variant='outline'>{blogPost.category}</Badge>
//                 </div>

//                 <h1 className='text-4xl font-bold mb-4 text-purple-600'>
//                   {blogPost.title}
//                 </h1>

//                 <div className='flex items-center text-gray-500 text-sm mb-6'>
//                   <span className='mr-4'>
//                     written by <strong>{blogPost.author}</strong>
//                   </span>
//                   <Calendar className='h-4 w-4 mr-1' />
//                   <span className='mr-4'>{blogPost.date}</span>
//                   <Clock className='h-4 w-4 mr-1' />
//                   <span>{blogPost.readTime}</span>
//                 </div>
//               </div>

//               {/* Featured Image */}
//               <div className='mb-8'>
//                 <img
//                   src={blogPost.image || '/placeholder.svg'}
//                   alt={blogPost.title}
//                   className='w-full h-96 object-cover rounded-lg'
//                 />
//               </div>

//               {/* Post Content */}
//               <div
//                 className='prose prose-lg max-w-none mb-12'
//                 dangerouslySetInnerHTML={{ __html: blogPost.content }}
//               />

//               {/* Social Share & Engagement */}
//               <div className='flex items-center justify-between py-6 border-t border-b border-gray-200 mb-12'>
//                 <div className='flex items-center gap-4'>
//                   <Button variant='ghost' size='sm' className='text-gray-500'>
//                     <MessageCircle className='h-4 w-4 mr-1' />0 comment
//                   </Button>
//                   <Button variant='ghost' size='sm' className='text-gray-500'>
//                     <Heart className='h-4 w-4 mr-1' />0
//                   </Button>
//                 </div>
//                 <div className='flex items-center gap-2'>
//                   <Button variant='ghost' size='sm'>
//                     <Facebook className='h-4 w-4' />
//                   </Button>
//                   <Button variant='ghost' size='sm'>
//                     <Twitter className='h-4 w-4' />
//                   </Button>
//                   <Button variant='ghost' size='sm'>
//                     <Instagram className='h-4 w-4' />
//                   </Button>
//                   <Button variant='ghost' size='sm'>
//                     <Mail className='h-4 w-4' />
//                   </Button>
//                 </div>
//               </div>

//               {/* Author Bio */}
//               <Card className='mb-12'>
//                 <CardContent className='p-8'>
//                   <div className='flex items-start gap-6'>
//                     <div className='w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center'>
//                       <User className='h-10 w-10 text-gray-500' />
//                     </div>
//                     <div>
//                       <h3 className='text-xl font-bold mb-2 text-purple-600'>
//                         LIBERTY HOSPITALITY
//                       </h3>
//                       <p className='text-gray-600 leading-relaxed'>
//                         Liberty Hospitality Limited provides exceptional travel
//                         and event experiences through the most efficient
//                         arrangements that set the standards for quality service
//                         and excellent customer satisfaction. We control and
//                         reverse the unfair and unrealistic inflation of
//                         travel/tourism pricing that makes the average individual
//                         unable to have memorable travel experiences.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Navigation */}
//               <div className='flex justify-between items-center mb-12'>
//                 <div className='text-left'>
//                   <p className='text-gray-500 text-sm mb-1'>previous post</p>
//                   <Link
//                     href='#'
//                     className='text-purple-600 hover:underline font-semibold'
//                   >
//                     5 places you should visit with your partner in 2022
//                   </Link>
//                 </div>
//                 <div className='text-right'>
//                   <p className='text-gray-500 text-sm mb-1'>next post</p>
//                   <Link
//                     href='#'
//                     className='text-purple-600 hover:underline font-semibold'
//                   >
//                     15 reasons to visit Bali in 2023
//                   </Link>
//                 </div>
//               </div>

//               {/* Related Posts */}
//               <div className='mb-12'>
//                 <h2 className='text-3xl font-bold text-center mb-8'>
//                   YOU MAY ALSO LIKE
//                 </h2>
//                 <div className='grid md:grid-cols-3 gap-6'>
//                   {relatedPosts.map((post) => (
//                     <Card
//                       key={post.id}
//                       className='overflow-hidden hover:shadow-lg transition-shadow'
//                     >
//                       <img
//                         src={post.image || '/placeholder.svg'}
//                         alt={post.title}
//                         className='w-full h-48 object-cover'
//                       />
//                       <CardContent className='p-4'>
//                         <h3 className='font-bold mb-2 hover:text-purple-600 cursor-pointer'>
//                           {post.title}
//                         </h3>
//                         <p className='text-sm text-gray-500'>{post.date}</p>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>

//               {/* Comment Form */}
//               <div>
//                 <h2 className='text-3xl font-bold text-center mb-8'>
//                   LEAVE A COMMENT
//                 </h2>
//                 <Card>
//                   <CardContent className='p-8'>
//                     <form className='space-y-6'>
//                       <Textarea
//                         placeholder='Your Comment'
//                         className='min-h-32'
//                       />
//                       <div className='grid md:grid-cols-3 gap-4'>
//                         <Input placeholder='Name*' />
//                         <Input placeholder='Email*' type='email' />
//                         <Input placeholder='Website' />
//                       </div>
//                       <div className='flex items-center space-x-2'>
//                         <Checkbox id='save-info' />
//                         <label
//                           htmlFor='save-info'
//                           className='text-sm text-gray-600'
//                         >
//                           Save my name, email, and website in this browser for
//                           the next time I comment.
//                         </label>
//                       </div>
//                       <Button className='bg-purple-600 hover:bg-purple-700'>
//                         Post Comment
//                       </Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </div>
//             </article>
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
//                     CATEGORIES
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
