import { Heart, Scissors, Leaf, Lightbulb, Baby, Utensils, Flower, Calculator } from 'lucide-react';
import { useState } from 'react';

interface CoursesPageProps {
  onNavigate?: (page: string) => void;
  onCalculateClick?: (selectedCourseIds: string[]) => void;
  onCourseDetail?: (courseId: string) => void;
}

export default function CoursesPage({ onNavigate, onCalculateClick, onCourseDetail }: CoursesPageProps) {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const learnerships = [
    {
      id: 'first-aid',
      title: 'First Aid',
      description: 'Provide first aid and basic life support including CPR, choking, bleeding, fractures, and emergency response.',
      icon: Heart,
      color: 'red',
      price: 1500
    },
    {
      id: 'sewing',
      title: 'Sewing',
      description: 'Learn garment creation and alteration including stitch types, machine use, buttons/zips, and design.',
      icon: Scissors,
      color: 'purple',
      price: 1500
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      description: 'Train in garden layout and aesthetics including plant types, structures, balancing colors, and garden layout.',
      icon: Leaf,
      color: 'green',
      price: 1500
    },
    {
      id: 'life-skills',
      title: 'Life Skills',
      description: 'Improve basic life functioning skills including banking, labour rights, literacy, and numeracy.',
      icon: Lightbulb,
      color: 'yellow',
      price: 1500
    }
  ];

  const shortCourses = [
    {
      id: 'child-care',
      title: 'Child Care',
      description: 'Teach baby and toddler care including understanding needs by age and educational toys.',
      icon: Baby,
      color: 'blue',
      price: 750
    },
    {
      id: 'cooking',
      title: 'Cooking',
      description: 'Learn nutritious family meal preparation including nutrition, meal planning, and cooking techniques.',
      icon: Utensils,
      color: 'orange',
      price: 750
    },
    {
      id: 'garden-maintenance',
      title: 'Garden Maintenance',
      description: 'Train in domestic garden care including watering, pruning, and planting techniques.',
      icon: Flower,
      color: 'teal',
      price: 750
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; icon: string } } = {
      red: { bg: 'bg-red-100', icon: 'text-red-600' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600' },
      green: { bg: 'bg-green-100', icon: 'text-green-600' },
      yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
      orange: { bg: 'bg-orange-100', icon: 'text-orange-600' },
      teal: { bg: 'bg-teal-100', icon: 'text-teal-600' }
    };
    return colors[color] || colors.blue;
  };

  const toggleCourse = (id: string) => {
    setSelectedCourses(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 md:py-16 lg:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-3 md:mb-4 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Our Course Offerings
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto px-4">
          Choose from our comprehensive learnership programs or focused short skills training to enhance your capabilities and career prospects.
        </p>
      </section>

      {/* 6-Month Learnership Programmes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-12 md:pb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
          <span className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            6-Month Learnership Programmes
          </span>
          <span className="bg-pink-600 text-white px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            R1,500 per course
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {learnerships.map(course => {
            const Icon = course.icon;
            const colors = getColorClasses(course.color);
            const isSelected = selectedCourses.includes(course.id);
            return (
              <div key={course.id} className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all ${isSelected ? 'ring-4 ring-blue-500' : ''}`}>
                <div className={`${colors.bg} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                  <Icon size={24} className={`${colors.icon} md:w-8 md:h-8`} />
                </div>
                <h3 className="text-lg md:text-xl text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {course.title}
                </h3>
                {(course.id === 'first-aid' || course.id === 'sewing' || course.id === 'landscaping' || course.id === 'life-skills') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCourseDetail?.(course.id);
                    }}
                    className="text-blue-600 hover:text-blue-800 underline mb-2 text-xs md:text-sm block"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    View Details →
                  </button>
                )}
                <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {course.description}
                </p>
                <button
                  onClick={() => toggleCourse(course.id)}
                  className={`w-full py-2.5 md:py-3 rounded-lg text-sm md:text-base transition-colors ${
                    isSelected
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  {isSelected ? 'Selected ✓' : 'Enroll Now'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Short Skills Training Programmes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-12 md:pb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
          <span className="bg-pink-600 text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Short Skills Training Programmes
          </span>
          <span className="bg-purple-600 text-white px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            R750 per course
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {shortCourses.map(course => {
            const Icon = course.icon;
            const colors = getColorClasses(course.color);
            const isSelected = selectedCourses.includes(course.id);
            return (
              <div key={course.id} className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transition-all ${isSelected ? 'ring-4 ring-pink-500' : ''}`}>
                <div className={`${colors.bg} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                  <Icon size={24} className={`${colors.icon} md:w-8 md:h-8`} />
                </div>
                <h3 className="text-lg md:text-xl text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {course.title}
                </h3>
                {(course.id === 'child-care' || course.id === 'cooking' || course.id === 'garden-maintenance') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCourseDetail?.(course.id);
                    }}
                    className="text-blue-600 hover:text-blue-800 underline mb-2 text-xs md:text-sm block"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    View Details →
                  </button>
                )}
                <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm lg:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {course.description}
                </p>
                <button
                  onClick={() => toggleCourse(course.id)}
                  className={`w-full py-2.5 md:py-3 rounded-lg text-sm md:text-base transition-colors ${
                    isSelected
                      ? 'bg-green-600 text-white'
                      : 'bg-pink-600 text-white hover:bg-pink-700'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  {isSelected ? 'Selected ✓' : 'Enroll Now'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Multiple Course Discounts */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-3 md:mb-4 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Multiple Course Discounts
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-12 lg:mb-16 px-4">
            Save more when you enroll in multiple courses! Our automatic discount calculator makes it easy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
              <p className="text-4xl text-gray-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>0%</p>
              <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>No discount</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <p className="text-blue-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>2 Courses</p>
              <p className="text-4xl text-blue-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>5%</p>
              <p className="text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>Discount applied</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center">
              <p className="text-pink-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>3 Courses</p>
              <p className="text-4xl text-pink-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>10%</p>
              <p className="text-pink-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>Great savings</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <p className="text-purple-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>4+ Courses</p>
              <p className="text-4xl text-purple-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>15%</p>
              <p className="text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>Maximum savings</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              {selectedCourses.length > 0 ? `${selectedCourses.length} Course${selectedCourses.length > 1 ? 's' : ''} Selected!` : 'Ready to Calculate Your Savings?'}
            </h3>
            <p className="mb-8">
              {selectedCourses.length > 0 
                ? 'View your savings and discounts in our calculator.' 
                : 'Select courses above and use our automatic discount calculator to see your total cost with discounts applied.'}
            </p>
            <button 
              onClick={() => onCalculateClick?.(selectedCourses)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              <Calculator size={20} />
              Calculate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
