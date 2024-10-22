import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className='w-full h-screen flex items-center justify-center flex-col bg-black'>
      <h1 className='uppercase text-4xl'>Page not found</h1>
      <button
        onClick={() => navigate('/')}
        className=' text-white px-4 py-2 rounded-lg border mt-4'
      >
        <span>Go back</span>
      </button>
    </section>
  );
}
