//import imgImg from "../imports/figma:asset/247994863b8471178dc4ea890efc120946e98219.png";
import { GraduationCap, Users, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-20 py-20">
        <h1 className="text-4xl text-center mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Our Story
        </h1>
        <p className="text-xl text-center text-black max-w-3xl mx-auto mb-16 leading-relaxed">
          Founded by Precious Radebe in 2022, our mission stems from a personal journey of empowerment and the belief that everyone deserves access to quality education and skills development.
        </p>

        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="src/assets/247994863b8471178dc4ea890efc120946e98219.png" alt="Precious Radebe" className="w-full h-96 object-cover" />
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Precious Radebe's Vision
            </h2>
            <p className="text-black mb-8 italic leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              "She was motivated to launch this project because her parents and older family members were never given the chance to further their education or acquire new skills. In order to address this, "Empowering the Nation" provides both lengthy and brief training programs designed specifically for gardeners and domestic helpers."
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl text-purple-500 mb-2 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  10
                </p>
                <p className="text-gray-600 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Graduates
                </p>
              </div>
              <div>
                <p className="text-4xl text-pink-500 mb-2 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  7
                </p>
                <p className="text-gray-600 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-20 pb-24">
        <div className="grid grid-cols-3 gap-8">
          {/* Professional Training */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Professional Training
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Comprehensive courses designed to enhance skills and employability
            </p>
          </div>

          {/* Community Impact */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Community Impact
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Empowering marginalized communities through accessible education
            </p>
          </div>

          {/* Entrepreneurship */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-gradient-to-r from-blue-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Entrepreneurship
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Supporting learners to start their own successful businesses
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
