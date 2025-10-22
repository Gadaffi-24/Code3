import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface CalculationsPageProps {
  onNavigate?: (page: string) => void;
  onProceedToCart?: (numCourses: number) => void;
  initialCourseCount?: number;
}

export default function CalculationsPage({ onNavigate, onProceedToCart, initialCourseCount = 0 }: CalculationsPageProps) {
  const [numCourses, setNumCourses] = useState(initialCourseCount);
  const totalCourses = 7;

  // Pricing
  const learnershipsCount = 4; // First Aid, Sewing, Landscaping, Life Skills
  const shortCoursesCount = 3; // Child Care, Cooking, Garden Maintenance
  const learnershipPrice = 1500;
  const shortCoursePrice = 750;

  const calculateDiscount = (courses: number) => {
    if (courses >= 4) return 0.15;
    if (courses === 3) return 0.10;
    if (courses === 2) return 0.05;
    return 0;
  };

  const calculateTotal = (courses: number) => {
    // Assume first 4 are learnerships, next 3 are short courses
    const learnershipsTaken = Math.min(courses, learnershipsCount);
    const shortCoursesTaken = Math.max(0, courses - learnershipsCount);
    
    const subtotal = (learnershipsTaken * learnershipPrice) + (shortCoursesTaken * shortCoursePrice);
    const discount = calculateDiscount(courses);
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;
    
    return {
      subtotal,
      discount: discount * 100,
      discountAmount,
      total
    };
  };

  const incrementCourses = () => {
    if (numCourses < totalCourses) {
      setNumCourses(numCourses + 1);
    }
  };

  const decrementCourses = () => {
    if (numCourses > 0) {
      setNumCourses(numCourses - 1);
    }
  };

  const totals = calculateTotal(numCourses);
  const progress = (numCourses / totalCourses) * 100;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-20 py-20">
        <h1 className="text-6xl text-center mb-6 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Calculate Your Savings
        </h1>
        <p className="text-2xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Unlock your course instantly. The more you study the bigger the saving!
        </p>

        {/* Calculator Card */}
        <div className="bg-white rounded-[30px] shadow-[8px_6px_8px_0px_rgba(0,0,0,0.25)] p-16 max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 gap-16 relative">
            {/* Left Side - Number of Courses */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl mb-12 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Number of Courses
              </h2>
              
              <div className="relative mb-12">
                {/* Circular Progress */}
                <svg className="w-[280px] h-[280px]" style={{ transform: 'rotate(-90deg)' }}>
                  {/* Background circle */}
                  <circle
                    cx="140"
                    cy="140"
                    r="136.5"
                    stroke="#D9D9D9"
                    strokeWidth="7"
                    fill="white"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="140"
                    cy="140"
                    r="136.5"
                    stroke="#006AFF"
                    strokeWidth="7"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 136.5}`}
                    strokeDashoffset={`${2 * Math.PI * 136.5 * (1 - progress / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.35s ease' }}
                  />
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl text-gray-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Selected Courses
                  </p>
                  <p className="text-6xl text-gray-800 leading-[40px]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {numCourses} / {totalCourses}
                  </p>
                </div>
              </div>

              {/* Plus/Minus Buttons */}
              <div className="flex gap-10">
                <button
                  onClick={incrementCourses}
                  disabled={numCourses === totalCourses}
                  className="bg-[#D9D9D9] hover:bg-[#bfbfbf] disabled:opacity-50 disabled:cursor-not-allowed w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                >
                  <Plus size={32} className="text-[#006aff]" strokeWidth={3} />
                </button>
                <button
                  onClick={decrementCourses}
                  disabled={numCourses === 0}
                  className="bg-[#D9D9D9] hover:bg-[#bfbfbf] disabled:opacity-50 disabled:cursor-not-allowed w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                >
                  <Minus size={32} className="text-[#006aff]" strokeWidth={3} />
                </button>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E1E1E1] transform -translate-x-1/2" />

            {/* Right Side - Your Savings */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl mb-12 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Your Savings
              </h2>
              
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <p className="text-[128px] leading-[40px] text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {totals.discount}%
                  </p>
                  <p className="text-4xl text-[#434951] leading-[40px] ml-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    OFF
                  </p>
                </div>
                <p className="text-2xl text-gray-600 leading-[28px] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Discount Applied
                </p>
              </div>

              {/* Horizontal Divider */}
              <div className="w-full max-w-[430px] h-[1px] bg-[#E1E1E1] mb-8" />

              <div className="text-center">
                <p className="text-4xl text-gray-800 leading-[40px] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  R{totals.discountAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} <span className="text-[#006aff]">Saved!</span>
                </p>
                <p className="text-2xl text-gray-600 leading-[28px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Total Saved!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Discount Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => onProceedToCart?.(numCourses)}
            className="bg-[#006aff] hover:bg-[#0055cc] text-white px-16 py-4 rounded-[20px] text-2xl transition-colors" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Apply Discount & Procced
          </button>
        </div>
      </section>

      {/* Multiple Course Discounts Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-20">
          <h2 className="text-4xl text-center mb-4 text-gray-800 leading-[40px]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Multiple Course Discounts
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 leading-[28px]">
            Save more when you enroll in multiple courses! Our automatic discount calculator makes it easy.
          </p>

          <div className="grid grid-cols-4 gap-6 max-w-[896px] mx-auto">
            {/* 1 Course */}
            <div className="bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-2xl p-6 text-center h-[200px] flex flex-col justify-center">
              <p className="text-3xl text-gray-800 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                1 Course
              </p>
              <p className="text-4xl text-gray-600 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                0%
              </p>
              <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                No discount
              </p>
            </div>

            {/* 2 Courses */}
            <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-2xl p-6 text-center h-[200px] flex flex-col justify-center">
              <p className="text-3xl text-blue-800 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                2 Courses
              </p>
              <p className="text-4xl text-blue-600 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                5%
              </p>
              <p className="text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Discount applied
              </p>
            </div>

            {/* 3 Courses */}
            <div className="bg-gradient-to-br from-[#fdf2f8] to-[#fce7f3] rounded-2xl p-6 text-center h-[200px] flex flex-col justify-center">
              <p className="text-3xl text-pink-800 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                3 Courses
              </p>
              <p className="text-4xl text-pink-600 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                10%
              </p>
              <p className="text-pink-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Great savings
              </p>
            </div>

            {/* 4+ Courses */}
            <div className="bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] rounded-2xl p-6 text-center h-[200px] flex flex-col justify-center">
              <p className="text-3xl text-purple-800 mb-3 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                4+
              </p>
              <p className="text-3xl text-purple-800 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Courses
              </p>
              <p className="text-4xl text-purple-600 mb-2 leading-[normal]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                15%
              </p>
              <p className="text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Maximum savings
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
