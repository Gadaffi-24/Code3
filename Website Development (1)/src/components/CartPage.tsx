import { Heart, Scissors, Leaf, Baby, Utensils, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  type: string;
  price: number;
  icon: string;
  color: string;
}

interface CartPageProps {
  selectedCourses: Course[];
  onNavigate: (page: string) => void;
  onRemoveCourse: (id: string) => void;
  onProceedToPayment: () => void;
}

export default function CartPage({ selectedCourses, onNavigate, onRemoveCourse, onProceedToPayment }: CartPageProps) {
  const calculateDiscount = () => {
    const count = selectedCourses.length;
    if (count >= 4) return 0.15;
    if (count === 3) return 0.10;
    if (count === 2) return 0.05;
    return 0;
  };

  const calculateTotal = () => {
    let subtotal = 0;
    selectedCourses.forEach(course => {
      subtotal += course.price;
    });
    const discountPercent = calculateDiscount();
    const discount = subtotal * discountPercent;
    const discountedPrice = subtotal - discount;
    
    // VAT is calculated on the SUBTOTAL (original price), not the discounted price
    const vat = subtotal * 0.15;
    const total = discountedPrice + vat;
    
    return {
      subtotal,
      discount,
      discountPercent,
      vat,
      total
    };
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return Heart;
      case 'scissors':
        return Scissors;
      case 'leaf':
        return Leaf;
      case 'baby':
        return Baby;
      case 'utensils':
        return Utensils;
      default:
        return Heart;
    }
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      red: 'bg-red-100',
      purple: 'bg-purple-100',
      green: 'bg-green-100',
      blue: 'bg-blue-100',
      orange: 'bg-orange-100',
    };
    return colors[color] || 'bg-blue-100';
  };

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      red: 'text-red-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      blue: 'text-blue-600',
      orange: 'text-orange-600',
    };
    return colors[color] || 'text-blue-600';
  };

  const totals = calculateTotal();

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-8 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-16 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Educational Courses
        </h1>

        {/* Cart Container */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
          {/* Course List */}
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {selectedCourses.map((course) => {
              const Icon = getIcon(course.icon);
              return (
                <div key={course.id} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">
                    <div className={`${getColorClasses(course.color)} w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className={`${getIconColor(course.color)} md:w-7 md:h-7 lg:w-8 lg:h-8`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 mb-1 md:mb-2 truncate" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-xl text-[#c6c6c6] truncate" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                        {course.type}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveCourse(course.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors p-1 md:p-2 flex-shrink-0"
                  >
                    <Trash2 size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#c6c6c6] my-6 md:my-8" />

          {/* Totals Section */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div className="flex justify-between items-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Subtotal:
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                R{totals.subtotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </p>
            </div>

            {totals.discountPercent > 0 && (
              <div className="flex justify-between items-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Discount ({(totals.discountPercent * 100).toFixed(0)}%):
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-green-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  -R{totals.discount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                VAT (15%):
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                R{totals.vat.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </p>
            </div>

            <div className="h-px bg-[#c6c6c6] my-3 md:my-4" />

            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Total Amount:
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#006aff]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                R{totals.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#c6c6c6] text-center mb-6 md:mb-8 px-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Time to secure your future. The time is now.
          </p>

          {/* Secure Checkout Button */}
          <button 
            onClick={onProceedToPayment}
            disabled={selectedCourses.length === 0}
            className={`w-full py-4 md:py-5 lg:py-6 rounded-xl md:rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-5xl transition-colors ${
              selectedCourses.length === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#006aff] hover:bg-[#0055cc]'
            } text-white`}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Secure Checkout
          </button>
        </div>
      </section>
    </div>
  );
}
