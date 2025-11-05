import { useState } from 'react';
import { X } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogTrigger } from './ui/dialog';

function ImageCarouselModal({
  accommodation,
  isOpen,
  onClose,
  isFormOpen,
  setIsFormOpen,
}: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentImageIndex((prev: any) =>
      prev === 0 ? accommodation.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev: any) =>
      prev === accommodation.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden'>
        <div className='flex justify-between items-center p-6 border-b'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>
              {accommodation.title}
            </h2>
            <p className='text-gray-600 mt-1'>{accommodation.location}</p>
          </div>
          <button
            onClick={onClose}
            className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            aria-label='Close modal'
          >
            <X className='h-6 w-6 text-gray-600' />
          </button>
        </div>

        <div className='relative h-[500px] bg-gray-200'>
          <img
            src={accommodation.images[currentImageIndex] || '/placeholder.svg'}
            alt={`${accommodation.title} - Image ${currentImageIndex + 1}`}
            className='w-full h-full object-cover'
          />

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-colors shadow-lg'
            aria-label='Previous image'
          >
            <ChevronLeft className='h-6 w-6 text-gray-900' />
          </button>

          <button
            onClick={handleNext}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-colors shadow-lg'
            aria-label='Next image'
          >
            <ChevronRight className='h-6 w-6 text-gray-900' />
          </button>

          {/* Image Counter */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium'>
            {currentImageIndex + 1} / {accommodation.images.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className='flex gap-2 p-4 bg-gray-50 overflow-x-auto'>
          {accommodation.images.map((image: any, idx: any) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                idx === currentImageIndex
                  ? 'border-purple-600'
                  : 'border-gray-300'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={image || '/placeholder.svg'}
                alt={`Thumbnail ${idx + 1}`}
                className='w-full h-full object-cover'
              />
            </button>
          ))}
        </div>

        <div className='p-6 border-t'>
          <div className='flex gap-2 mb-4'>
            {accommodation.tags.map((tag: any) => (
              <span
                key={tag}
                className='bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button className='w-full bg-purple-600 hover:bg-purple-700'>
                Book Now
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default ImageCarouselModal;
