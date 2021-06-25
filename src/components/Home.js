import Courses from './CoursesSection/Courses';
import Hero from './HeroSection/Hero';
import CoursesComponent from '../HomepageComponents/CoursesComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonial from './TestimonialSection/Testimonial';
import Instructors from '../HomepageComponents/Instructors';
import Partners from './PartnersSection/Partners';
import FooterComponent from '../HomepageComponents/FooterComponent';
import News from '../Oxunjon/News/News';

function Home() {
  return (
    <div>
      <Hero/>
      <CoursesComponent/>
      <Courses/>
      <Testimonial/>
      <Instructors/>
      <Partners/>
      <FooterComponent/>
      <News/>
    </div>
  );
}

export default Home;
