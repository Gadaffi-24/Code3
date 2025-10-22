import { motion } from 'motion/react';
import { CheckCircle, Mail, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface PaymentSuccessPageProps {
  onNavigate: (page: string) => void;
}

export default function PaymentSuccessPage({ onNavigate }: PaymentSuccessPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute inset-0 bg-green-100 rounded-full blur-2xl"
              ></motion.div>
              <CheckCircle className="w-20 h-20 md:w-28 md:h-28 text-green-600 relative z-10" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 md:mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Payment Successful! 🎉
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Congratulations on taking this incredible step towards your future! We're absolutely thrilled to welcome you to our learning community.
            </p>
          </motion.div>

          {/* Confirmation Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-10"
          >
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-4 text-left">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Confirmation Email On Its Way
                  </h3>
                  <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Check your inbox! We're sending you a detailed confirmation email with all your course information, enrollment details, and next steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <Calendar className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    What Happens Next?
                  </h3>
                  <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Our team will reach out within 24-48 hours to finalize your enrollment, share your course schedule, and answer any questions you might have.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg text-gray-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    See You on Campus!
                  </h3>
                  <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We can't wait to see you at one of our campuses (Sandton, Rosebank, or Soweto). Your journey to empowerment starts here!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm md:text-base"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Return to Home
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="border-2 border-gray-300 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-50 transition-colors text-sm md:text-base"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Browse More Courses
            </button>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-200"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-500 italic" style={{ fontFamily: 'Poltawski Nowy, serif' }}>
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              - Nelson Mandela
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
