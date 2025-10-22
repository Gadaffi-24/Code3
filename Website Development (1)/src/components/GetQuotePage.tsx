import { Heart, Scissors, Leaf, Lightbulb, Baby, Utensils, Flower, Calculator, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface GetQuotePageProps {
  onNavigate?: (page: string) => void;
}

interface CourseOption {
  id: string;
  title: string;
  price: number;
  type: string;
  icon: any;
  color: string;
}

export default function GetQuotePage({ onNavigate }: GetQuotePageProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [showQuote, setShowQuote] = useState(false);

  const learnerships: CourseOption[] = [
    { id: 'first-aid', title: 'First Aid', price: 1500, type: 'learnership', icon: Heart, color: 'red' },
    { id: 'sewing', title: 'Sewing', price: 1500, type: 'learnership', icon: Scissors, color: 'purple' },
    { id: 'landscaping', title: 'Landscaping', price: 1500, type: 'learnership', icon: Leaf, color: 'green' },
    { id: 'life-skills', title: 'Life Skills', price: 1500, type: 'learnership', icon: Lightbulb, color: 'yellow' },
  ];

  const shortCourses: CourseOption[] = [
    { id: 'child-care', title: 'Child Care', price: 750, type: 'short', icon: Baby, color: 'blue' },
    { id: 'cooking', title: 'Cooking', price: 750, type: 'short', icon: Utensils, color: 'orange' },
    { id: 'garden-maintenance', title: 'Garden Maintenance', price: 750, type: 'short', icon: Flower, color: 'teal' },
  ];

  const allCourses = [...learnerships, ...shortCourses];

  const toggleCourse = (courseId: string) => {
    setSelectedCourses(prev =>
      prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]
    );
  };

  const calculateDiscount = (count: number) => {
    if (count >= 4) return 0.15;
    if (count === 3) return 0.10;
    if (count === 2) return 0.05;
    return 0;
  };

  const calculateTotals = () => {
    const subtotal = selectedCourses.reduce((sum, courseId) => {
      const course = allCourses.find(c => c.id === courseId);
      return sum + (course?.price || 0);
    }, 0);

    const discountPercent = calculateDiscount(selectedCourses.length);
    const discount = subtotal * discountPercent;
    const discountedPrice = subtotal - discount;
    
    // VAT is calculated on the SUBTOTAL (original price), not the discounted price
    const vat = subtotal * 0.15;
    const total = discountedPrice + vat;

    return { subtotal, discount, discountPercent, vat, total };
  };

  const handleCalculateQuote = () => {
    if (selectedCourses.length === 0) {
      alert('Please select at least one course');
      return;
    }
    if (!name || !phone || !email) {
      alert('Please fill in all contact details');
      return;
    }
    setShowQuote(true);
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; icon: string; checkbox: string } } = {
      red: { bg: 'bg-red-100', icon: 'text-red-600', checkbox: 'border-red-300' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600', checkbox: 'border-purple-300' },
      green: { bg: 'bg-green-100', icon: 'text-green-600', checkbox: 'border-green-300' },
      yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600', checkbox: 'border-yellow-300' },
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600', checkbox: 'border-blue-300' },
      orange: { bg: 'bg-orange-100', icon: 'text-orange-600', checkbox: 'border-orange-300' },
      teal: { bg: 'bg-teal-100', icon: 'text-teal-600', checkbox: 'border-teal-300' }
    };
    return colors[color] || colors.blue;
  };

  const totals = calculateTotals();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-20">
          <h1 className="text-4xl text-center mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Get Your Course Quote
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            Select your courses and receive a personalized quote. Our consultant will contact you to complete your booking.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
              <h2 className="text-2xl mb-6 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Your Contact Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-11 py-6 border-2 rounded-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-11 py-6 border-2 rounded-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 py-6 border-2 rounded-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleCalculateQuote}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                  >
                    <Calculator size={20} />
                    Calculate Quote
                  </button>
                </div>

                {selectedCourses.length > 0 && (
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-blue-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <span style={{ fontWeight: 600 }}>{selectedCourses.length}</span> course{selectedCourses.length > 1 ? 's' : ''} selected
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Course Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* 6-Month Learnerships */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  6-Month Learnership Programmes
                </h2>
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  R1,500 each
                </span>
              </div>

              <div className="space-y-4">
                {learnerships.map(course => {
                  const Icon = course.icon;
                  const colors = getColorClasses(course.color);
                  const isSelected = selectedCourses.includes(course.id);

                  return (
                    <div
                      key={course.id}
                      onClick={() => toggleCourse(course.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleCourse(course.id)}
                        className="h-5 w-5"
                      />
                      <div className={`${colors.bg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon size={24} className={colors.icon} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                          {course.title}
                        </h3>
                      </div>
                      <div className="text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                        R{course.price.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Short Courses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Short Skills Training Programmes
                </h2>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  R750 each
                </span>
              </div>

              <div className="space-y-4">
                {shortCourses.map(course => {
                  const Icon = course.icon;
                  const colors = getColorClasses(course.color);
                  const isSelected = selectedCourses.includes(course.id);

                  return (
                    <div
                      key={course.id}
                      onClick={() => toggleCourse(course.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                        isSelected ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleCourse(course.id)}
                        className="h-5 w-5"
                      />
                      <div className={`${colors.bg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon size={24} className={colors.icon} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                          {course.title}
                        </h3>
                      </div>
                      <div className="text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                        R{course.price.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote Summary */}
            {showQuote && selectedCourses.length > 0 && (
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Your Quote Summary
                </h2>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Selected Courses:</span>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{selectedCourses.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Subtotal:</span>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>R{totals.subtotal.toFixed(2)}</span>
                    </div>
                    {totals.discountPercent > 0 && (
                      <div className="flex justify-between text-yellow-300">
                        <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Discount ({(totals.discountPercent * 100).toFixed(0)}%):</span>
                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>-R{totals.discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-white/30 pt-3">
                      <span style={{ fontFamily: 'Montserrat, sans-serif' }}>VAT (15% on original):</span>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>R{totals.vat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/30 pt-3 text-xl">
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Total Amount:</span>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>R{totals.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                  <h3 className="mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Contact Details:</h3>
                  <div className="space-y-2 text-white/90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <p><span style={{ fontWeight: 600 }}>Name:</span> {name}</p>
                    <p><span style={{ fontWeight: 600 }}>Phone:</span> {phone}</p>
                    <p><span style={{ fontWeight: 600 }}>Email:</span> {email}</p>
                  </div>
                </div>

                <div className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4 mb-6">
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ℹ️ This is a quotation only. Our consultant will contact you to verify your course selection and complete your booking.
                  </p>
                </div>

                <button
                  onClick={() => setShowQuote(false)}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  Modify Selection
                </button>
              </div>
            )}

            {/* Discount Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl mb-4 text-gray-800 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Bulk Discount Benefits
              </h2>
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center">
                  <p className="text-2xl text-gray-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>0%</p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>1 Course</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                  <p className="text-2xl text-blue-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>5%</p>
                  <p className="text-sm text-blue-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>2 Courses</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center">
                  <p className="text-2xl text-pink-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>10%</p>
                  <p className="text-sm text-pink-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>3 Courses</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                  <p className="text-2xl text-purple-600 mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>15%</p>
                  <p className="text-sm text-purple-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>4+ Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
