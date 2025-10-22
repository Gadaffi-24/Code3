import { useState } from 'react';
import { CreditCard, Lock, User, Mail, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface Course {
  id: string;
  title: string;
  type: string;
  price: number;
  icon: string;
  color: string;
}

interface PaymentPageProps {
  selectedCourses: Course[];
  onNavigate: (page: string) => void;
  onPaymentSuccess: () => void;
}

export default function PaymentPage({ selectedCourses, onNavigate, onPaymentSuccess }: PaymentPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTotals = () => {
    let subtotal = 0;
    selectedCourses.forEach(course => {
      subtotal += course.price;
    });
    
    const count = selectedCourses.length;
    let discountPercent = 0;
    if (count >= 4) discountPercent = 0.15;
    else if (count === 3) discountPercent = 0.10;
    else if (count === 2) discountPercent = 0.05;
    
    const discount = subtotal * discountPercent;
    const discountedPrice = subtotal - discount;
    const vat = subtotal * 0.15;
    const total = discountedPrice + vat;
    
    return { subtotal, discount, discountPercent, vat, total };
  };

  const totals = calculateTotals();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || 
        !formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Secure Checkout
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Complete your enrollment with our secure payment system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Personal Information
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="pl-11 py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="email" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-11 py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
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
                          placeholder="(+27) 123 456 7890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-11 py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl md:text-2xl text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Payment Details
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <Label htmlFor="cardNumber" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Card Number *
                    </Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                        className="pl-11 py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        maxLength={19}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cardName" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Cardholder Name *
                    </Label>
                    <Input
                      id="cardName"
                      type="text"
                      placeholder="Name as it appears on card"
                      value={formData.cardName}
                      onChange={(e) => handleInputChange('cardName', e.target.value.toUpperCase())}
                      className="py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="expiryDate" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Expiry Date *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                          id="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                          className="pl-11 py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                          maxLength={5}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cvv" className="block mb-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        CVV *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                          className="pl-11 py-5 md:py-6 border-2 rounded-xl text-sm md:text-base"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg lg:text-xl transition-all ${
                    isProcessing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  } text-white`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Payment...
                    </span>
                  ) : (
                    `Pay R${totals.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`
                  )}
                </button>
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  🔒 Your payment information is encrypted and secure
                </p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 sticky top-24">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {selectedCourses.map((course) => (
                  <div key={course.id} className="flex justify-between items-start py-3 border-b border-gray-100">
                    <div className="flex-1">
                      <p className="text-sm md:text-base text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                        {course.title}
                      </p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {course.type}
                      </p>
                    </div>
                    <p className="text-sm md:text-base text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      R{course.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-4 border-t border-gray-200">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>Subtotal:</span>
                  <span className="text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    R{totals.subtotal.toFixed(2)}
                  </span>
                </div>
                {totals.discountPercent > 0 && (
                  <div className="flex justify-between text-sm md:text-base text-green-600">
                    <span style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Discount ({(totals.discountPercent * 100).toFixed(0)}%):
                    </span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      -R{totals.discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>VAT (15%):</span>
                  <span className="text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    R{totals.vat.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border-t-2 border-gray-300 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg md:text-xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Total:
                  </span>
                  <span className="text-xl md:text-2xl text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    R{totals.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('cart')}
                className="w-full mt-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm md:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                ← Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
