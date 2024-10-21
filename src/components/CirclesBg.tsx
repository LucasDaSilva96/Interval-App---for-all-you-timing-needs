type CirclesBgProps = {
  animate?: boolean;
};

export default function CirclesBg({ animate = false }: CirclesBgProps) {
  return (
    <div
      className={`w-[700px] ${
        animate ? 'animate-pulse' : ''
      } h-[700px] bg-[#141414] rounded-full p-12`}
    >
      <div className='w-full h-full rounded-full bg-[#1a1a1a] p-12'>
        <div className='w-full h-full rounded-full bg-[#1f1f1f] p-12'>
          <div className='w-full h-full rounded-full bg-[#242424] p-12'>
            <div className='w-full h-full rounded-full bg-[#292929] p-12'>
              <div className='w-full h-full rounded-full bg-[#2e2e2e] p-12'>
                <div className='w-full h-full rounded-full bg-[#333333] p-12'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
