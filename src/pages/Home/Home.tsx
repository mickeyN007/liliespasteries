import { Link } from 'react-router-dom';
import cn from 'classnames'
import {
  CTAButton,
  Footer,
  HomeHero,
  DisplayProducts
} from '../../components';
import ScrollToTopButton from '../../components/Footer/ScrollToTopButton'

import { 
  StarIcon
} from '@heroicons/react/24/solid';

import ChinChin from '../../assets/products/chin-chin.png'
import Cakes from '../../assets/products/cakes.png'
import Chinchin from '../../assets/products/chinchin.png'
import Cupcakes from '../../assets/products/cupcakes.png'
import Scones from '../../assets/products/scones.png'
import Teatime from '../../assets/products/teatime.png'
import Richfruit from '../../assets/products/richfruit.png'
import Buttercake from '../../assets/products/buttercake.png'

import BakingSchoolPng from '../../assets/banners/bakingSchool.png'
import StudentWCert from '../../assets/studentWCert.png'
import { ProductType } from '../../../global';



const DisplayStars = (x: number) => {
  return Array.from({ length: x }, (_, index) => 
    <StarIcon key={index} className='w-[36px] text-[#FFDF00]' />
  );
};


const Home = () => {
  const products: ProductType[] = [
    {
      name: "Cakes",
      productImg: Cakes,
      to: '/products/cakes'
    },
    {
      name: "Chin-Chin",
      productImg: ChinChin,
      to: '/products/chinchin'
    },
    {
      name: "Cupcakes",
      productImg: Cupcakes,
      to: '/products/cupcakes'
    },
    {
      name: "Scones",
      productImg: Scones,
      to: '/products/scones'
    }
  ]
  const favorites: ProductType[] = [
    {
      name: "Teatime Cake",
      productImg: Teatime,
      to: '/products/cakes',
      price: '3,500'
    },
    {
      name: "Butter Birthday Cake",
      productImg: Buttercake,
      to: '/products/chinchin',
      price: '25,500'
    },
    {
      name: "Rich Fruit Cake-8’’",
      productImg: Richfruit,
      to: '/products/cupcakes',
      price: '40,500'
    },
    {
      name: "Chinchin - 400 GMS.",
      productImg: Chinchin,
      to: '/products/scones',
      price: '10,500'
    }
  ]
  return (
    <div>
      {/* Footer Area */}
      <ScrollToTopButton />
      <div className='w-[100%] h-[70vh] '>
        <HomeHero />
      </div>
      <div className='my-10 text-center'>
        <p className='font-bold text-[40px]'>
          Our Products
        </p>
        <p className='w-[90%] xl:w-[83%] 2xl:w-[63%] text-[24px] mx-auto'>
          For more than 30 years, Lilies Pastries has been spreading the good taste across Nigerian homes, using the old-fashioned Grandma’s recipes. For decades we have catered to customers’ special occasions, from their weddings to their children’s 10th birthday celebrations. 
        </p>
      </div>
      <div className='my-10 w-[90%] mx-auto '>
        <DisplayProducts products={products} />
        <div
          className='flex flex-col bg-gray items-center text-center py-10 my-10 gap-5'
        >
          <div className='flex gap-3'>
            {DisplayStars(4)}
          </div>
          <p className='w-[41%] xl:w-[54%] 2xl:w-[41%]'>
            I needed a last-minute cake for my husband’s birthday, and Lilies Pastries didn’t disappoint! From consultation to taste and the final decoration! They have baked all of my children’s birthday cakes since then.  
          </p>
          <div>
            <p className=''>
              Mrs. Valerie Okonkwo
            </p>
            <p className=''>
              Customer since 2009
            </p>
          </div>
          
        </div>
        <div 
          className='flex flex-col items-center text-center py-10 my-10 gap-5'
        >
          <p className='font-bold text-[40px]'>
            Customer Favorites
          </p>
          <DisplayProducts products={favorites} />

        </div>
        
      </div>
      <div
        className="w-[100vw] h-[63vh] 2xl:h-[80vh] bg-cover flex justify-between items-center"
        style={{ backgroundImage: `url(${BakingSchoolPng})` }}
      >
        <div
          className='lg:ml-10 w-[90%] xl:w-[50%] 2xl:w-[40%] h-[80%] 2xl:h-[70%] flex flex-col items-center justify-between'
        >
          <p className='font-bold text-[40px] text-center'>
            Interested in Baking?
          </p>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              We have developed a series of hands-on instructional materials to prepare you to become an exceptional baker.
            </p>
            <p className=''>
              Whether you’re looking for a new hobby, or how to keep your kids busy during the long holiday, we have the right fit for you.
            </p>
          </div>
          <div className='flex'>
            <CTAButton
              text='REGISTER NOW'
              textColor='text-white'
              link='/register'
            />
          </div>
        </div>
        <img
          src={StudentWCert}
          className='w-[60%]  justify-end'
        />
      </div>
      <Footer />
    </div>
  )
}

export default Home;