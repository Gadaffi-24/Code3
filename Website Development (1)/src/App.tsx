import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import CalculationsPage from './components/CalculationsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CartPage from './components/CartPage';
import GetQuotePage from './components/GetQuotePage';
import PaymentPage from './components/PaymentPage';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import FirstAidDetailPage from './components/FirstAidDetailPage';
import SewingDetailPage from './components/SewingDetailPage';
import LandscapingDetailPage from './components/LandscapingDetailPage';
import LifeSkillsDetailPage from './components/LifeSkillsDetailPage';
import ChildCareDetailPage from './components/ChildCareDetailPage';
import CookingDetailPage from './components/CookingDetailPage';
import GardenMaintenanceDetailPage from './components/GardenMaintenanceDetailPage';

interface Course {
  id: string;
  title: string;
  type: string;
  price: number;
  icon: string;
  color: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCourses, setCartCourses] = useState<Course[]>([]);
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // All available courses
  const allCourses: Course[] = [
    { id: 'first-aid', title: 'First Aid', type: '6-Month Learnership Programmes', price: 1500, icon: 'heart', color: 'red' },
    { id: 'sewing', title: 'Sewing', type: '6-Month Learnership Programmes', price: 1500, icon: 'scissors', color: 'purple' },
    { id: 'landscaping', title: 'Landscaping', type: '6-Month Learnership Programmes', price: 1500, icon: 'leaf', color: 'green' },
    { id: 'life-skills', title: 'Life Skills', type: '6-Month Learnership Programmes', price: 1500, icon: 'lightbulb', color: 'yellow' },
    { id: 'child-care', title: 'Child Care', type: 'Short Skills Training Programmes', price: 750, icon: 'baby', color: 'blue' },
    { id: 'cooking', title: 'Cooking', type: 'Short Skills Training Programmes', price: 750, icon: 'utensils', color: 'orange' },
    { id: 'garden-maintenance', title: 'Garden Maintenance', type: 'Short Skills Training Programmes', price: 750, icon: 'flower', color: 'teal' },
  ];

  const handleCalculateClick = (courseIds: string[]) => {
    setSelectedCourseIds(courseIds);
    setCurrentPage('calculator');
  };

  const handleProceedToCart = (numCourses: number) => {
    // If the number matches selected courses, use the actual selected courses
    // Otherwise, use the first N courses (user adjusted in calculator)
    let coursesToAdd: Course[];
    
    if (numCourses === selectedCourseIds.length && selectedCourseIds.length > 0) {
      // Use the exact courses the user selected
      coursesToAdd = selectedCourseIds
        .map(id => allCourses.find(c => c.id === id))
        .filter((c): c is Course => c !== undefined);
    } else {
      // User adjusted the count in calculator, select first N courses
      coursesToAdd = allCourses.slice(0, numCourses);
    }
    
    setCartCourses(coursesToAdd);
    setCurrentPage('cart');
  };

  const handleRemoveCourse = (courseId: string) => {
    setCartCourses(prev => prev.filter(course => course.id !== courseId));
  };

  const handleCourseDetail = (courseId: string) => {
    if (courseId === 'first-aid') {
      setCurrentPage('first-aid-detail');
    } else if (courseId === 'sewing') {
      setCurrentPage('sewing-detail');
    } else if (courseId === 'landscaping') {
      setCurrentPage('landscaping-detail');
    } else if (courseId === 'life-skills') {
      setCurrentPage('life-skills-detail');
    } else if (courseId === 'child-care') {
      setCurrentPage('child-care-detail');
    } else if (courseId === 'cooking') {
      setCurrentPage('cooking-detail');
    } else if (courseId === 'garden-maintenance') {
      setCurrentPage('garden-maintenance-detail');
    }
  };

  // Handle enrollment from detail pages
  const handleEnrollNow = (courseId: string) => {
    const course = allCourses.find(c => c.id === courseId);
    if (course) {
      setCartCourses([course]);
      setCurrentPage('cart');
    }
  };

  // Handle add to cart from detail pages
  const handleAddToCart = (courseId: string) => {
    const course = allCourses.find(c => c.id === courseId);
    if (course) {
      // Check if course is already in cart
      const isAlreadyInCart = cartCourses.some(c => c.id === courseId);
      if (!isAlreadyInCart) {
        setCartCourses(prev => [...prev, course]);
      }
      setSelectedCourseIds([courseId]);
      setCurrentPage('calculator');
    }
  };

  // Handle proceeding to payment
  const handleProceedToPayment = () => {
    setCurrentPage('payment');
  };

  // Handle payment success
  const handlePaymentSuccess = () => {
    setCurrentPage('payment-success');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'courses':
        return <CoursesPage onNavigate={setCurrentPage} onCalculateClick={handleCalculateClick} onCourseDetail={handleCourseDetail} />;
      case 'calculator':
        return <CalculationsPage onNavigate={setCurrentPage} onProceedToCart={handleProceedToCart} initialCourseCount={selectedCourseIds.length} />;
      case 'cart':
        return <CartPage selectedCourses={cartCourses} onNavigate={setCurrentPage} onRemoveCourse={handleRemoveCourse} onProceedToPayment={handleProceedToPayment} />;
      case 'payment':
        return <PaymentPage selectedCourses={cartCourses} onNavigate={setCurrentPage} onPaymentSuccess={handlePaymentSuccess} />;
      case 'payment-success':
        return <PaymentSuccessPage onNavigate={setCurrentPage} />;
      case 'quote':
        return <GetQuotePage onNavigate={setCurrentPage} />;
      case 'first-aid-detail':
        return <FirstAidDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'sewing-detail':
        return <SewingDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'landscaping-detail':
        return <LandscapingDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'life-skills-detail':
        return <LifeSkillsDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'child-care-detail':
        return <ChildCareDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'cooking-detail':
        return <CookingDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'garden-maintenance-detail':
        return <GardenMaintenanceDetailPage onNavigate={setCurrentPage} onEnrollNow={handleEnrollNow} onAddToCart={handleAddToCart} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />; // Added onNavigate to AboutPage
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />; // Added onNavigate to ContactPage
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const isDetailPage = currentPage === 'first-aid-detail' || currentPage === 'sewing-detail' || 
                       currentPage === 'landscaping-detail' || currentPage === 'life-skills-detail' || 
                       currentPage === 'child-care-detail' || currentPage === 'cooking-detail' || 
                       currentPage === 'garden-maintenance-detail';

  const isPaymentPage = currentPage === 'payment' || currentPage === 'payment-success';

  return (
    <div className="min-h-screen flex flex-col">
      {!isDetailPage && !isPaymentPage && <Header currentPage={currentPage} onNavigate={setCurrentPage} />}
      <main className={isDetailPage || isPaymentPage ? "flex-1" : "flex-1 pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[166px]"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      {/* FIX: Pass the setCurrentPage function to the Footer component */}
      {!isDetailPage && !isPaymentPage && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}