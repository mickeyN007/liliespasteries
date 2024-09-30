import partner from '../../assets/banners/partner.svg'
import volunteerSupport from '../../assets/volunteer.svg'
import partnerSupport from '../../assets/partner.svg'

import developingCommunities from '../../assets/developingCommunities.svg'

import Footer from "../../components/Footer/Footer";
import { useState } from 'react';
import InputComponent from '../../components/InputComponent/InputComponent';

const Partner = () => {
  const inputClass = 'rounded w-[65%] xl:w-[55%] 2xl:w-[65%] h-[5vh] pl-3 border border-secondary border-opacity-57'
  const labelClass = 'w-[45%] md:w-[35%] xl:w-[35%] 2xl:w-[25%] text-right'
  const containerClass = 'flex gap-4 items-center'

  const [isOneTypeDonation, setIsOneTypeDonation] = useState<boolean>(true)
  const [tmpDonation, setTmpDonation] = useState<50 | 100 | 150 | 200>(50)
  const [supportType, setSupportType] = useState<"volunteer"|"partner">()
  const [inputComponentKey, setInputComponentKey] = useState<string>(
    Math.random().toString(36).substring(7)
  );
  const [formData, setFormData] = useState({
    type: supportType,
    name: '',
    phone: '',
    email: ''
  });
  const handleInputChange = (field: string, value: string) => {
    console.log(field, value)
    setFormData({ ...formData, [field]: value });
  };
  // check value of text
  const handleSubmit = () => {
    alert(Object.values(formData))
  }

  const PartnerForm = () => {
    return (
      <div className='flex flex-col bg-gray mx-auto mb-16 py-10 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:text-lg xl:text-xl text-center'>
        <div className='flex flex-col mx-auto text-primary text-opacity-60 w-[90vw]  md:w-[70vw] lg:w-[45vw] text-[20px] md:text-[30px] lg:text-[40px] md:leading-[50px] text-center'>
          <p className='font-semibold mb-6 md:text-xl xl:text-2xl'>Partner Form</p>
        </div>
        <div className='flex flex-col gap-4 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto gap-4 md:pr-16 lg:pr-5 '>
          <InputComponent
            required
            key='name'
            label='Name'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.name}
            setText={(text) => handleInputChange('name', text)}
          />
          <InputComponent
            required
            key='email'
            type='email'
            label='Email Address'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.email}
            setText={(text) => handleInputChange('email', text)}
          />
          <InputComponent
            required
            key='phone'
            type='number'
            label='Phone Number'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.phone}
            setText={(text) => handleInputChange('phone', text)}
          />
        </div>
        <input type='button' value='Submit' onClick={handleSubmit} className='flex w-[40%] md:w-[30%] lg:w-[20%] justify-center self-center text-white rounded-md md:text-2xl bg-primary p-2 mx-auto mt-4' />
      </div>
    )
  }

  const VolunteerForm = () => {
    return (
      <div className='flex flex-col bg-gray mx-auto mb-16 py-10 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:text-lg xl:text-xl text-center'>
        <div className='flex flex-col mx-auto text-primary text-opacity-60 w-[90vw]  md:w-[70vw] lg:w-[45vw] text-[20px] md:text-[30px] lg:text-[40px] md:leading-[50px] text-center'>
          <p className='font-semibold mb-6 md:text-xl xl:text-2xl'>Volunteer Form</p>
        </div>
        <div className='flex flex-col gap-4 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto gap-4 md:pr-16 lg:pr-5 '>
        <InputComponent
            required
            key='v_name'
            label='Name'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.name}
            setText={(text) => handleInputChange('name', text)}
          />
          <InputComponent
            required
            key='v_email'
            type='email'
            label='Email Address'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.email}
            setText={(text) => handleInputChange('email', text)}
          />
          <InputComponent
            required
            key='v_phone'
            type='number'
            label='Phone Number'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.phone}
            setText={(text) => handleInputChange('phone', text)}
          />
        </div>
        <input type='button' value='Submit' onClick={handleSubmit} className='flex w-[40%] md:w-[30%] lg:w-[20%] justify-center self-center text-white rounded-md md:text-2xl bg-primary p-2 mx-auto mt-4' />
      </div>
    )
  }

  let supportTypeDiv = (supportType==="volunteer") ? <VolunteerForm />:<PartnerForm />
  return (
    <div className=''>
      <div className='relative h-[300px] lg:h-[446px]'>
        <img alt='' src={partner} className='absolute inset-0 w-full h-full object-cover ' />
        <div className='absolute bottom-[2vh] lg:bottom-[5vh] left-1/2 transform -translate-x-1/2'>
          <p className='mb-3 font-bold text-white text-[25px] md:text-[40px] text-center'>THANK YOU!</p>
          <p className='w-[78vw] md:w-[42vw] lg:w-[30vw] 2xl:w-[22vw] text-center text-white font-bold md:text-lg xl:text-xl '>
            Your partnership is important to us! We can't do it without you
          </p>
        </div>
      </div>
      <div className='flex flex-col mx-auto text-primary w-[90vw] mt-10 mb-3 lg:mt-16 lg:mb-4  md:w-[70vw] lg:w-[45vw] text-[20px] md:text-[30px] lg:text-[40px] md:leading-[50px] text-center'>
        <p className=''>
          How do you wish to support us?
        </p>
      </div>
      <div className='flex flex-col md:flex-row w-[90%] lg:w-[70%] gap-6 mx-auto text-white font-bold mb-16 md:text-xl xl:text-2xl text-center'>
        <div onClick={() => setSupportType("volunteer")} className="relative h-[300px] lg:h-[410px]">
          <img alt='' src={volunteerSupport} className='rounded-2xl w-full h-full object-cover ' />
          <p className='absolute bottom-4 left-0 right-0 text-center'>
            Volunteer
          </p>
        </div>
        <div onClick={() => setSupportType("partner")} className='relative h-[300px] lg:h-[410px]'>
          <img alt='' src={partnerSupport} className='rounded-2xl w-full h-full object-cover ' />
          <p className='absolute bottom-4 left-0 right-0 text-center'>
            Partner
          </p>
        </div>
      </div>
      {supportType && supportTypeDiv}
      <Footer hideTopFooter />
    </div>
  )
}

export default Partner;
