import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import footerArrow from '../../assets/footerArrow.svg'

import footerLogo from '../../assets/logo.png'
import footerLinear from '../../assets/footerLinear.png'

import Phone from '../../assets/phone.svg?react'
import Mail from '../../assets/mail.svg'
import copyrightIcon from '../../assets/copyright.svg'
import upArrow from '../../assets/upArrow.svg'

import instagramIcon from '../../assets/social_icons/instagram.svg'
import facebookIcon from '../../assets/social_icons/facebook.svg'
import twitterIcon from '../../assets/social_icons/twitter.svg'
import youtubeIcon from '../../assets/social_icons/youtube.svg'
import whatsappIcon from '../../assets/social_icons/whatsapp.svg'

import { 
  ChevronUpIcon
} from '@heroicons/react/24/outline';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
	const currentYear = new Date().getFullYear(); // Get the current year
  //const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('jk')
    console.log(window.scrollY)
  };
	return (
		<div className="mt-[20px] md:mt-[50px]">
			{/* Footer Links */}
			<div className='flex  mx-auto flex-col w-[90%] '>
				<Link
					className='relative w-[60px] md:w-[94px] ml-10'
					key={'/'}
					to={'/'}
				>
					<img alt='' src={footerLogo} className='w-full h-full object-cover' />
				</Link>
				<div className='flex w-full justify-between  md:flex-row my-[20px]'>
					
					<div className='hidden lg:flex flex-col'>
						<div
							className={`${styles.footerFont} font-bold text-[24px] md:text-[18px] md:mb-[10px]`}
						>
							Operating Hours:
						</div>
						<div className="flex flex-col text-[23px]">
							<p className="">
								Mondays - Fridays: 8 a.m. - 6 p.m.
							</p>
							<p className="">
								Saturdays: 9 a.m. - 1 p.m.
							</p>
							<p className="">
								Sundays: Closed
							</p>
							<p className="">
								Holiday hours also apply.
							</p>
            </div>
					</div>
					<div className='flex flex-col gap-2'>
						<div
							className={`${styles.footerFont} font-bold text-[24px] md:text-[18px] md:w-[94px] md:mb-[10px]`}
						>
							Support:
						</div>
						<Link
							className={`${styles.footerFont}`}
							key={'/'}
							to={'/'}
						>
							Home
						</Link>
						<Link
							className={`${styles.footerFont}`}
							key={'/#about'}
							to={'/'}
						>
							About Us
						</Link>
						<Link
							className={`${styles.footerFont}`}
							key={'/#services'}
							to={'/'}
            >
							Services
						</Link>
            <Link
							className={`${styles.footerFont}`}
							key={'/#projects'}
							to={'/'}
            >
							Projects
						</Link>
            <Link
							className={`${styles.footerFont}`}
							key={'/#contact'}
							to={'/'}
            >
							Contact
						</Link>
					</div>
					<div className='flex flex-col gap-4'>
						<div
							className={`${styles.footerFont} font-bold text-[16px] md:text-[24px] md:mb-[10px]`}
						>
							Contact Us:
						</div>
						<div className='flex flex-row gap-4'>
							<Link to='https://www.instagram.com/liliespastries/' target="_blank" rel="noopener noreferrer"><img alt='' src={instagramIcon} className={`${styles.socialIconsStyle}`} /></Link>
							<Link to='https://web.facebook.com/liliespastries' target="_blank" rel="noopener noreferrer"><img alt='' src={facebookIcon} className={`${styles.socialIconsStyle}`} /></Link>
							<Link to='/' target="_blank" rel="noopener noreferrer"><img alt='' src={twitterIcon} className={`${styles.socialIconsStyle}`} /></Link>
							<Link to='/' target="_blank" rel="noopener noreferrer"><img alt='' src={youtubeIcon} className={`${styles.socialIconsStyle}`} /></Link>
							<Link to={`https://wa.me/+2348118387204?text=${'Hi there'}`} target="_blank" rel="noopener noreferrer"><img alt='' src={whatsappIcon} className={`${styles.socialIconsStyle}`} /></Link>
						</div>
						<div className='flex md:w-[246px] gap-2 items-center'>
							<Phone className='object-contain w-[16px] h-[16px] md:w-[32px] md:h-[32px]' />
							<a className=' font-bold text-[14px] md:text-[23px]' href="tel:+2348138112874">+234 813 811 2874</a>
						</div>
						<div className='flex md:w-[246px] gap-2 items-center'>
							<img src={Mail} className='text-red object-contain w-[16px] h-[16px] md:w-[32px] md:h-[32px]' />
							<a className='font-bold text-[14px] md:text-[23px]' href="mailto:info@liliespastries.com">info@liliespastries.com</a>
						</div>
					</div>
				</div>
			</div>
			<div
				//className=""
				style={{ backgroundImage: `url(${footerLinear})` }}
				className='flex flex-col flex-col-reverse md:flex-row h-[30px] bg-[#000000] w-full items-center justify-center px-2 md:px-20 md:h-[60px] relative w-full h-full bg-cover'
			>
				<div className='flex flex-row items-center gap-1'>
					<img alt='' src={copyrightIcon} className={`${styles.socialIconsStyle}`} />
					<p className=' items-center leading-0 font-semibold text-[10px] md:text-[20px]'>{currentYear} Lilies Pastries. All rights reserved. Designed by  <a href="https://previsiontechnologies.com/" target="_blank">Previsión Technologies.</a></p>
				</div>
				<div className="flex flex-row items-center md:ml-auto">
					<div className='flex self-end'
            onClick={scrollToTop}
          >
						<ChevronUpIcon className="w-[30px] h-[10px] md:h-[54px]" />
					</div>
				</div>
			</div>
		</div> 
	)
}

const styles = {
  "footerFont": " text-[10px] lg:text-[23px]",
	"socialIconsStyle": 'object-contain w-[10px] h-[10px] md:w-[24px] md:h-[24px]'
}

export default Footer;