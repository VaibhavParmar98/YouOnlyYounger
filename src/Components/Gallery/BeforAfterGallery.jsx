import React, { useState, useMemo } from 'react';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import Text from '../Common/Text';


const BeforeAfterGallery = () => {
  const IMAGES_PER_PAGE = 15; 

  const generateImages = () => {
    const images = [];
    let imageIndex = 1;

    const addImages = (category, count, titlePrefix) => {
      for (let i = 1; i <= count; i++) {
        if (imageIndex <= 88) {
          images.push({
            id: `${category}-${i}`,
            src: `./gallery/${String(imageIndex).padStart(3, '0')}.jpeg`,
            category,
            title: `${titlePrefix} ${i}`,
          });
          imageIndex++;
        }
      }
    };

    addImages('acne', 5, 'Acne Treatment'); 
    addImages('body-counting', 1, 'Body Counting Treatment'); 
    addImages('ears', 11, 'Ears Treatment'); 
    addImages('smile-lines', 57, 'Smile Lines Treatment'); 
    addImages('tear-troughs', 8, 'Tear Troughs Treatment'); 
    addImages('vascular', 6, 'Vascular Treatment'); 

    return images;
  };

  const allImages = generateImages();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 

  const categories = [
    { id: 'all', name: 'All', count: allImages.length },
    { id: 'acne', name: 'Acne', count: allImages.filter((img) => img.category === 'acne').length },
    { id: 'body-counting', name: 'Body Counting', count: allImages.filter((img) => img.category === 'body-counting').length },
    { id: 'ears', name: 'Ears', count: allImages.filter((img) => img.category === 'ears').length },
    { id: 'smile-lines', name: 'Smile Lines', count: allImages.filter((img) => img.category === 'smile-lines').length },
    { id: 'tear-troughs', name: 'Tear Troughs', count: allImages.filter((img) => img.category === 'tear-troughs').length },
    { id: 'vascular', name: 'Vascular', count: allImages.filter((img) => img.category === 'vascular').length },
  ];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return allImages;
    }
    return allImages.filter((image) => image.category === activeCategory);
  }, [activeCategory, allImages]);

  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    return filteredImages.slice(startIndex, endIndex);
  }, [filteredImages, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedImageIndex(null); 
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => {
      const globalIndex = (currentPage - 1) * IMAGES_PER_PAGE + prevIndex;
      if (globalIndex === filteredImages.length - 1) {
        setCurrentPage(1);
        return 0;
      } else if (prevIndex === paginatedImages.length - 1) {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => {
      const globalIndex = (currentPage - 1) * IMAGES_PER_PAGE + prevIndex;
      if (globalIndex === 0) {
        setCurrentPage(totalPages);
        return (filteredImages.length % IMAGES_PER_PAGE || IMAGES_PER_PAGE) - 1;
      } else if (prevIndex === 0) {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
        return IMAGES_PER_PAGE - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
  };

  const getVisiblePages = () => {
    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <div className="max-w-7xl py-10 lg:py-20 lg:mt-48 md:mt-24 mt-20 mx-auto p-6 min-h-screen">
      <div className="mb-8 text-center">
        <Text variant='text5' className="text-4xl font-bold text-gray-900 mb-2 marcellus-text">Gallery</Text>
        <Text variant='text1' className="text-gray-600">
          Experience Remarkable Change <br />
          See how natural healing creates stunning transformations — inside and out. <br />
          Your journey to a youthful, vibrant you begins right here.
        </Text>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(1); 
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#400186] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
          {activeCategory !== 'all' && (
            <span className="ml-2 text-[#400186] font-medium">
              in {categories.find((cat) => cat.id === activeCategory)?.name}
            </span>
          )}
          {filteredImages.length > 0 && (
            <span className="ml-2">
              | Page {currentPage} of {totalPages}
            </span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {paginatedImages.map((image, index) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => setSelectedImageIndex(index)}
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              {/* Fallback placeholder if image fails to load */}
              <div className="absolute inset-0 text-center p-4 hidden" style={{ display: 'none' }}>
                <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 font-medium">{image.src}</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm truncate">{image.title}</h3>
              <p className="text-xs text-gray-500 mt-1 capitalize">{image.category.replace('-', ' ')}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
  <div className="mt-8 flex justify-center items-center gap-2">
    <button
      onClick={() => handlePageChange(1)}
      disabled={currentPage === 1}
      className={`px-3 py-2 rounded-full font-medium ${
        currentPage === 1
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-[#400186] text-white hover:bg-[#5b21b6]'
      }`}
      aria-label="Go to first page"
    >
      <FaAngleDoubleLeft />
    </button>

    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-3 py-2 rounded-full font-medium ${
        currentPage === 1
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-[#400186] text-white hover:bg-[#5b21b6]'
      }`}
      aria-label="Go to previous page"
    >
      <FaAngleLeft />
    </button>

    <span className="px-4 py-2 rounded-full font-medium bg-[#400186] text-white">
      {currentPage}
    </span>

    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-3 py-2 rounded-full font-medium ${
        currentPage === totalPages
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-[#400186] text-white hover:bg-[#5b21b6]'
      }`}
      aria-label="Go to next page"
    >
      <FaAngleRight />
    </button>

    <button
      onClick={() => handlePageChange(totalPages)}
      disabled={currentPage === totalPages}
      className={`px-3 py-2 rounded-full font-medium ${
        currentPage === totalPages
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-[#400186] text-white hover:bg-[#5b21b6]'
      }`}
      aria-label="Go to last page"
    >
      <FaAngleDoubleRight />
    </button>
  </div>
)}

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No images found</h3>
          <p className="text-gray-500">Try selecting a different category.</p>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleClosePopup}>
          <div
            className="relative bg-white p-4 rounded-lg max-w-4xl w-full h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={handleClosePopup}
              aria-label="Close image popup"
            >
              &times;
            </button>
            <button
              className="absolute left-2 text-white text-3xl hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
            >
              &larr;
            </button>
            <img
              src={paginatedImages[selectedImageIndex].src}
              alt={paginatedImages[selectedImageIndex].title}
              className="max-h-full max-w-full object-contain"
            />
            <button
              className="absolute right-2 text-white text-3xl hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterGallery;