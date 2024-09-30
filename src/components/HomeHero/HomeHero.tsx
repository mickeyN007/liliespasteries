
import HomeHeroPng from '../../assets/banners/homeHero.png'
import MessageFrame from '../../assets/frame.svg'
import { CTAButton } from '../CTAButton';

const HomeHero = () => {
  return (
    <div
      className="relative w-full h-full bg-cover"
      style={{ backgroundImage: `url(${HomeHeroPng})` }}
    >
      <div className='absolute left-0 w-[30%] ml-10 mt-10'>
        <img
          src={MessageFrame}
          className='w-full h-full'
        />
        <div
          className='absolute w-full h-[65%] inset-0 top-20 flex flex-col items-center justify-between'
        >
          <p className='font-bold text-[22px]'>
            Chef’s Honour: Join the Next Class!
          </p>
          <div className='text-[22px] w-[75%] text-center'>
            <p className=''>
              Registration is now open for the December batch of our Intro to Baking class.
            </p>
            <p className=''>
              Grab your chef’s cap and join us for two weeks of learning and tasting! 
            </p>
          </div>
          <div className='flex'>
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero;