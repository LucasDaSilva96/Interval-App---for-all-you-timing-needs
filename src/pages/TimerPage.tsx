import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TimerPage() {
  // ADD nav, timer outlet and footer here
  return (
    <section className='w-full overflow-hidden min-h-screen bg-blue flex flex-col justify-between p-4'>
      <Nav />
      <Outlet />
      <Footer />
    </section>
  );
}
