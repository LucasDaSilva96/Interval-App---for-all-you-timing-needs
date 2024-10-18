import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoadingPage from './pages/LoadingPage.tsx';
import SetTimerPage from './pages/SetTimerPage.tsx';
import TimerPage from './pages/TimerPage.tsx';
import AlarmPage from './pages/AlarmPage.tsx';
import NotFoundPage from './pages/404-not-found.tsx';
import Analog from './components/Timers/Analog.tsx';
import Digital from './components/Timers/Digital.tsx';
import Visual from './components/Timers/Visual.tsx';
import LevelUp from './components/Timers/LevelUpTimer.tsx';

// This is the main entry point of the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoadingPage />,
  },
  {
    path: '/settings',
    element: <SetTimerPage />,
  },
  {
    path: '/timer',
    element: <TimerPage />,
    children: [
      {
        index: true,
        element: <Analog />,
      },
      {
        path: 'digital',
        element: <Digital />,
      },
      {
        path: 'visual',
        element: <Visual />,
      },
      {
        path: 'levelUp',
        element: <LevelUp />,
      },
    ],
  },
  {
    path: '/alarm',
    element: <AlarmPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
