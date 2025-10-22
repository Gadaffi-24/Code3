import Sewing from '../imports/Sewing';

interface SewingDetailPageProps {
  onNavigate?: (page: string) => void;
  onEnrollNow?: (courseId: string) => void;
  onAddToCart?: (courseId: string) => void;
}

export default function SewingDetailPage({ onNavigate, onEnrollNow, onAddToCart }: SewingDetailPageProps) {
  // Wrap the Figma import and add click handlers for navigation
  return (
    <div 
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Handle navigation button clicks
        if (target.textContent === 'Home' || target.closest('p')?.textContent === 'Home') {
          e.preventDefault();
          onNavigate?.('home');
        } else if (target.textContent === 'Courses' || target.closest('p')?.textContent === 'Courses') {
          e.preventDefault();
          onNavigate?.('courses');
        } else if (target.textContent === 'About Us' || target.closest('p')?.textContent === 'About Us') {
          e.preventDefault();
          onNavigate?.('about');
        } else if (target.textContent === 'Contact' || target.closest('p')?.textContent === 'Contact') {
          e.preventDefault();
          onNavigate?.('contact');
        } else if (target.textContent === 'Get Quote' || target.closest('button')?.textContent?.includes('Get Quote')) {
          e.preventDefault();
          onNavigate?.('quote');
        } else if (target.textContent === 'Enroll Now' || target.closest('button')?.textContent?.includes('Enroll Now')) {
          e.preventDefault();
          onEnrollNow?.('sewing');
        } else if (target.textContent === 'Add To Cart' || target.closest('button')?.textContent?.includes('Add To Cart')) {
          e.preventDefault();
          onAddToCart?.('sewing');
        }
      }}
      className="cursor-pointer"
    >
      <Sewing />
    </div>
  );
}
