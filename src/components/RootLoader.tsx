import { AiOutlineLoading3Quarters } from 'react-icons/ai';

// This component is used to show a loading spinner when the app is loading
export default function RootLoader() {
  return (
    <div className='fixed w-full min-h-screen bg-black/30 backdrop-blur-md flex items-center justify-center'>
      <AiOutlineLoading3Quarters className='animate-spin' />
    </div>
  );
}
