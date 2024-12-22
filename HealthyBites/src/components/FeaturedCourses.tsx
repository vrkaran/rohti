// import Link from 'next/link'; // Import Link for routing
// import courseData from '../data/music_courses.json'; // Assuming courseData is used elsewhere
import FeaturedSection_bg from '@/assets/FeaturedSection.png'; // Import the image

function FeaturedCourses() {
  // Filter for featured courses
  // const featuredCourses = courseData.courses.filter(course => course.isFeatured);

  return (
    <div
      className="relative" // Position the container to allow absolute positioning
      style={{
        padding: '3rem 0', // Equivalent to `py-12`
        backgroundColor: '#1a202c', // Fallback background color
      }}
    >
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FeaturedSection_bg.src})`,
          opacity: 0.7, // Adjust the opacity here
        }}
      />
      
      {/* Section Title */}
      <div className="relative z-10 text-center p-10 z-10">
        <h2 className="text-base text-rose-300 text-xl font-bold tracking-wide uppercase bg">
          FEATURED CUISINES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Get ready to explore our delicious range of dishes
        </p>
      </div>


    </div>
  );
}

export default FeaturedCourses;