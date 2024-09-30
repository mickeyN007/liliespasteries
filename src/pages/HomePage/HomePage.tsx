
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'

import hp1 from '../../assets/hp1.svg'
import hp2 from '../../assets/hp2.svg'

import { Link } from 'react-router-dom'
import AnimatedDiv from '../../components/AnimatedCircleDiv/AnimatedCircle'
import ImageSlider from '../../components/ImageSliders/ImageSlider'
import Footer from '../../components/Footer/Footer'
import ScrollToTopButton from '../../components/Footer/ScrollToTopButton'

type impact = {
  value: number;
  text: string;
}

const HomePage = () => {
  let numbers: impact[] = [
    {
      value: 20,
      text: 'Orphanages reached'
    },
    {
      value: 40,
      text: 'Tuitions adopted'
    },
    {
      value: 10,
      text: 'Families helped'
    },
    {
      value: 2,
      text: 'Communities reached'
    },
  ]
  return (
    <div>
      <div className='object-contain h-[300px] lg:h-[446px] bg-[#D9D9D9]'>
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
        <div className='my-11 md:mr-10 md:my-24'>
          <div className='flex text-xl md:text-[30px] lg:text-[40px] justify-center text-primary'>
            When you engage in charity works...
          </div>
          <div className='flex flex-col my-4 md:flex-row  md:gap-10 justify-between md:my-8'>
            <img alt='' src={hp1} className='object-contain w-11/12 mx-auto md:w-1/2 xl:w-full' />
            <div className='w-11/12 mx-auto mt-[15px] md:mt-[15px] lg:my-auto'>
              <div className='flex justify-center font-semibold text-lg md:text-xl lg:text-2xl md:justify-start'>
                The future is brighter
              </div>
              <div className='mb-5 md:text-lg xl:text-xl md:leading-5 lg:leading-7 xl:leading-10 md:mt-[6px] md:mb-[25px]'>
                In a world teeming with challenges, there is one cause that 
                unites us all - the welfare of our most vulnerable: orphaned 
                children. At The Compass Society, we are on a mission to create 
                a brighter future for these little souls who have faced early 
                hardships no child should endure. Our collective effort stems from 
                an unwavering belief in the power of compassion and the profound 
                impact it can have on shaping lives. Join us on this transformative 
                journey as we stand by orphanages and the children they care for, for 
                a future of hope and prosperity.
              </div>
              <div className='flex justify-center md:justify-start'>
              <Link
                className='text-white rounded-md font-semibold md:text-2xl bg-primary p-3'
                key={'/what-we-do/supporting-orphanages'}
                to={'/what-we-do/supporting-orphanages'}
              >
                Help an orphanage today!
              </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col-reverse flex-col my-4 md:flex-row  md:gap-10 justify-between md:my-8'>
            <div className='w-11/12 mx-auto mt-[15px] md:mt-[15px] lg:my-auto'>
              <div className='flex justify-center font-semibold text-lg md:text-xl lg:text-2xl md:justify-start'>
                Leaders are made
              </div>
              <div className='mb-5 md:text-lg xl:text-xl md:leading-5 lg:leading-7 xl:leading-10 md:mt-[6px] md:mb-[25px]'>
                At The Compass Society, we firmly believe that education is 
                the foundation upon which a brighter future is built. By adopting 
                students' tuition, we are investing in the potential of the next 
                generation, fostering a society that values knowledge, compassion, 
                and opportunity for all. Join us in this transformative journey as 
                we unlock potentials and change lives, one student at a time. Together, 
                let's build a society where education is a right, not a privilege, and 
                where every individual can thrive and contribute their unique gifts to the world.
              </div>
              <div className='flex justify-center md:justify-start'>
                <Link
                  className='text-white rounded-md font-semibold md:text-2xl bg-primary p-3'
                  key={'/what-we-do/adopt-a-student'}
                  to={'/what-we-do/adopt-a-student'}
                >
                  Adopt a student's tuition
                </Link>
              </div>
            </div>
            <img alt='' src={hp2} className='object-contain w-11/12 mx-auto md:w-1/2 xl:w-full' />
          </div>
        </div>
      </div>
      <div className='my-5 md:mx-5 md:my-[51px]'>
        <div className='flex justify-center md:mb-5'>
          <img alt='' src={leftArrow} className='object-contain  w-1/12 md:w-1/6'/>
          <span className='text-xl md:text-[30px] lg:text-[40px] text-primary px-4'>Our Impact through the years </span>
          <img alt='' src={rightArrow} className='object-contain  w-1/12 md:w-1/6' />
        </div>
        <div className="flex w-11/12 md:w-full mx-auto items-center justify-center">
          <AnimatedDiv numbers={numbers} />
        </div>
      </div>
      {/* Footer Area */}
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default HomePage