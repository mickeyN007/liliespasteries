import { useState } from 'react';


import Footer from "../../components/Footer/Footer";
import InputComponent from '../../components/InputComponent/InputComponent';

const Contact = () => {
  const inputClass = 'rounded w-full h-[6vh] pl-3 border-0'
  const containerClass = 'flex flex-col gap-4 items-center  w-[45%]'
  // check value of text
  const textChange = () => {
    //
  }
  const [formData, setFormData] = useState({
    fname: '',
    lname:'',
    phone: '',
    email: '',
    question:''
  });
  const handleInputChange = (field: string, value: string) => {
    console.log(field, value)
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = () => {
    alert(Object.values(formData))
  }
  return (
    <div className=''>
      <div className='flex items-center justify-center relative h-[300px] lg:h-[307px] bg-[#B66A6A]'>
        {
          //<img alt='' src={contact} className='absolute inset-0 w-full h-full object-cover ' />
        }
        <p className='font-bold text-[25px] md:text-[50px] text-center'>Contact Us</p>

      </div>
      <div className='flex flex-col mx-auto w-[90vw] py-16  gap-5 md:w-[70vw] lg:w-[73vw] xl:w-[57vw] 2xl:w-[55vw] text-[20px] md:text-[30px] lg:text-[20px] text-center'>
        <p className='font-bold text-[35px]'>
          Need more help?
        </p>
        <div>
          <p className=''>
            We’re here to answer any questions you have along your journey to find the right cake or snack.
            You can send a message here, and we’ll do our best to get back to you shortly.
          </p>
          <p className=''>
            If it’s more urgent, you can also contact us at 
            <a className=' font-bold text-[14px] md:text-[23px]' href="tel:+2348138112874">+234 813 811 2874</a>
          </p>
          <p>
            We look forward to helping you! 
          </p>
        </div>
      </div>
      <div className='bg-[#F2F2F2] flex flex-col mx-auto text-primary w-[90vw] mb-16 gap-4 md:text-lg xl:text-xl text-center p-10'>
        <div className='flex justify-between'>
          <InputComponent
            required
            key='fname'
            inputClass={inputClass}
            placeholder='Enter First Name'
            containerClass={containerClass}
            value={formData.fname}
            setText={(text) => handleInputChange('fname', text)}
          />
          <InputComponent
            required
            key='lname'
            inputClass={inputClass}
            placeholder='Enter Last Name'
            containerClass={containerClass}
            value={formData.lname}
            setText={(text) => handleInputChange('lname', text)}
          />
        </div>
        <div className='flex justify-between'>
          <InputComponent
            required
            key='email'
            type='email'
            inputClass={inputClass}
            placeholder='Enter Email Address'
            containerClass={containerClass}
            value={formData.email}
            setText={(text) => handleInputChange('email', text)}
          />
          <InputComponent
            required
            key='phone'
            type='number'
            inputClass={inputClass}
            placeholder='Enter Phone Number'
            containerClass={containerClass}
            value={formData.phone}
            setText={(text) => handleInputChange('phone', text)}
          />
        </div>
        <div className='flex'>
          <textarea className='rounded w-full h-[30vh] px-3 py-3 border-0' onChange={(e) => handleInputChange('question', e.target.value)} />
        </div>
        <input type='button' value='SEND' onClick={handleSubmit} className='flex w-[25%] justify-center text-white rounded-md md:text-2xl bg-activeLink p-2 mt-4 md:mt-10' />
      </div>
      <div className='flex flex-col mx-auto w-[90vw] gap-5 md:w-[70vw] lg:w-[73vw] xl:w-[57vw] 2xl:w-[55vw] text-[20px] md:text-[30px] lg:text-[20px] text-center'>
        <p className='font-bold text-[35px]'>
          Find Us
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
