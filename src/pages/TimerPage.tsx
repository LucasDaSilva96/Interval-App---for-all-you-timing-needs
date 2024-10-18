import { Outlet } from 'react-router-dom';

export default function TimerPage() {
  // ADD nav, timer outlet and footer here
  return (
    <section>
      <header>Nav</header>
      <Outlet />
      <footer>Footer</footer>
    </section>
  );
}
