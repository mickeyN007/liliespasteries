import { Link } from "react-router-dom";

import whoweare from '../../assets/banners/whoweare.svg'
import ceoImage from '../../assets/ceoImage.svg'
import Footer from "../../components/Footer/Footer";
import TeamMembersDisplay from "../../components/TeamMembersDisplay/TeamMembersDisplay";

const WhoWeAre = () => {
  const teamMembersData = [
    {
      name: 'Babatunde Adesoye',
      title: 'CEO/Founder',
      imageUrl: ceoImage, // Replace with the actual image URL
    },
    {
      name: 'Babatund Adesoye',
      title: 'CEO/Founder',
      imageUrl: ceoImage, // Replace with the actual image URL
    },
    {
      name: 'Babatunde Adesoye',
      title: 'CEO/Founder',
      imageUrl: ceoImage, // Replace with the actual image URL
    },
    {
      name: 'Babatunde Adesoye',
      title: 'CEO/Founder',
      imageUrl: ceoImage, // Replace with the actual image URL
    },
    {
      name: 'Babatunde Adesoye',
      title: 'CEO/Founder',
      imageUrl: ceoImage, // Replace with the actual image URL
    },
    {
      name: 'Babatunde Adesoye',
      title: 'CEO/Founder',
      imageUrl: ceoImage, // Replace with the actual image URL
    },
  ];
  return (
    <div className=''>
      <div className='relative h-[300px] lg:h-[446px]'>
        <img alt='' src={whoweare} className='absolute inset-0 w-full h-full object-cover ' />
        <div className='absolute bottom-[63px] left-1/2 transform -translate-x-1/2'>
          <div className='mb-3 font-bold text-white text-[25px] md:text-[40px] text-center'>Who we are</div>
          <Link
            className='mt-3 bg-red text-white rounded-md font-semibold md:text-2xl px-8 md:px-14 py-3'
            key={'/partner'}
            to={'/partner'}
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className='md:mx-10 md:my-[60px]'>
        <div className='flex flex-col md:flex-row md:gap-5 md:mb-[60px]'>
          <div className='flex h-[250px] md:h-[400px] flex-col gradient-box w-full md:w-1/2 text-center gap-5 md:gap-10'>
            <p className='font-semibold text-lg md:text-xl xl:text-2xl mt-5 md:mt-14'>Our mission</p>
            <p className='text-white font-semibold md:text-lg xl:text-xl md:leading-5 lg:leading-7 xl:leading-10 px-2'>
              To positively impact communities by supporting orphanages, providing tuition assistance and
              mentoring, offering medical bill assistance, conducting community outreach, and fostering
              partnerships for social change
            </p>
          </div>
          <div className='flex h-[250px] md:h-[400px] flex-col gradient-box w-full md:w-1/2 text-center gap-5 md:gap-10'>
            <p className='font-semibold text-lg md:text-xl xl:text-2xl mt-5 md:mt-14'>Our vision</p>
            <p className='text-white font-semibold md:text-lg xl:text-xl md:leading-5 lg:leading-7 xl:leading-10 px-2'>
              Empower as many people as we can by providing assistance and support to those in need.
            </p>
          </div>
        </div>
        <div className='flex flex-col my-4 md:flex-row lg:mx-16 md:gap-10 justify-between md:my-8 md:gap-16 lg:gap-32'>
          <div className='flex flex-col w-11/12 mx-auto md:w-[40%] lg:w-[32%] justify-center text-center gap-3'>
            <img alt='' src={ceoImage} className='object-cover w-full' />
            <div>
              <p className='font-semibold text-lg md:text-xl xl:text-2xl'>Babatunde Adesoye</p>
              <p className='md:text-lg xl:text-xl'>CEO/Founder</p>
            </div>
          </div>
          <div className='w-11/12 mx-auto mt-[15px] md:w-[60%] lg:w-[58%]'>
            <div className='mb-5 md:text-lg xl:text-xl md:leading-5 lg:leading-7 xl:leading-10 md:mt-[6px] md:mb-[25px]'>
              In the heart of Nigeria, a small charity organization was born with a vision to change lives and create opportunities where
              there were none. Inspired by my personal journey, our mission began with providing scholarships for talented students who
              lacked means but had dreams as big as their hearts. As word spread, more hearts and hands joined in support, enabling us to
              extend our efforts beyond education to address pressing needs in orphanages and marginalized families. Today, our charity
              organization stands as a beacon of hope, empowering dreams and transforming lives. Together, we create a world where dreams 
              know no boundaries, and hope reigns supreme. Join us on this incredible journey of empowerment and transformation, as we work 
              to build a brighter future for those in need.
            </div>
          </div>
        </div>
        <TeamMembersDisplay teamMembers={teamMembersData} />
      </div>
      <Footer />
    </div>
  )
}

export default WhoWeAre;