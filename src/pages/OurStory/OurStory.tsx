import banner from '../../assets/banners/contact.svg'
import Footer from "../../components/Footer/Footer";
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'

import { useParams, Navigate } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import videoCoverImage from '../../assets/story1.png'
import ImageSlider from '../../components/ImageSliders/ImageSlider';

import videoSrc from '../../assets/vid.mp4'

const OurStory = () => {
  // Access the dynamic parameter using useParams
  const { name } = useParams();

  const validateName = (name: string | undefined)=> {
    // Check if the name is present in a list of valid names
    const validNames = ['ifunnaya', 'story2', 'story3'];
    if (name)
      return validNames.includes(name.toLowerCase());
  }

  // Check if the provided name is valid (e.g., validate against a list of valid names)
  const isValidName = validateName(name);

  if (!isValidName) {
    // Redirect to the 404 page if the name is not valid
    return <Navigate to="/404" />;
  }
  return (
    <div>
      <div className='relative h-[300px] lg:h-[446px]'>
        <img alt='' src={banner} className='absolute inset-0 w-full h-full object-cover ' />
        <div className='absolute w-[100vw] lg:w-auto bottom-[8vh] lg:bottom-[20vh] xl:bottom-[30vh] 2xl:bottom-[10vh] left-1/2 transform -translate-x-1/2 text-center'>
          <p className='mb-3 font-bold text-white text-[25px] md:text-[40px] text-center capitalize'>Our Stories</p>
        </div>
      </div>
      <div className='mb-5 mx-auto py-6 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] text-[25px] md:text-[40px] md:leading-5 lg:leading-7 xl:leading-10 md:mt-[6px] md:mb-[25px] capitalize text-center'>
        <p className='my-5'>{name}</p>
        <VideoPlayer 
          videoCoverImage={videoCoverImage}
          videoSrc={videoSrc}
        />
      </div>
      <div className='my-5 md:ml-10 md:my-[51px]'>
        <div className='flex justify-center md:mb-5'>
          <img alt='' src={leftArrow} className='object-contain  w-1/4 md:w-1/6'/>
          <span className='text-xl md:text-[30px] lg:text-[40px] text-primary px-4'>Our Stories</span>
          <img alt='' src={rightArrow} className='object-contain  w-1/4 md:w-1/6' />
        </div>
        <div className="container mx-auto p-4">
          <ImageSlider />
        </div>
      </div>
      <Footer hideTopFooter />
    </div>
  )
}

export default OurStory;
