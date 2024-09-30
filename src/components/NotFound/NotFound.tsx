import Footer from "../Footer/Footer";
import banner from '../../assets/notFound.svg'

const NotFound = () => {
  return (
    <div className=''>
      <div className='flex w-[630px] h-[459px] place-self-center'>
        <img alt='' src={banner} className='w-full h-full object-cover ' /> 
      </div>
      <Footer />
    </div>
  )
}

export default NotFound;