import { useState } from 'react';
import donation from '../../assets/banners/donation.svg'

import Footer from "../../components/Footer/Footer";
import InputComponent from '../../components/InputComponent/InputComponent';

import { PaystackButton } from 'react-paystack'

const Donation = () => {
  const inputClass = 'rounded w-[65%] xl:w-[55%] 2xl:w-[65%] h-[5vh] pl-3 border border-secondary border-opacity-57'
  const labelClass = 'w-[45%] md:w-[35%] xl:w-[35%] 2xl:w-[25%] text-right'
  const containerClass = 'flex gap-4 items-center'

  const [isOneTypeDonation, setIsOneTypeDonation] = useState<boolean>(true)
  const [tmpDonation, setTmpDonation] = useState<50 | 100 | 150 | 200>(50)
  
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',

    other: '',
    phone: '',
    country: '',
    address: '',
    city: '',
    state: '',
    ccNumber: '',
    ccExpiration: '',
    cvvNumber: ''
  });

  let amount = (formData.other!=='') ? Number(formData.other)*100 : tmpDonation*100

  const paystackProps = {
    email: formData.email,
    amount,
    metadata: {
      name: formData.lname + ' ' + formData.fname,
      phone: formData.phone,
      custom_fields: [
        {
          "display_name": "Invoice ID",
          "variable_name": "Invoice ID",
          "value": 209
        },
      ]
    },
    publicKey: 'pk_test_1fe8989f1b2bfba008834b288684fa66601634dd',
    text: "Donate Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Access the values from formData for processing
    const { fname, lname, email,  } = formData;

    // Now you can do something with email and username
    console.log('Email:', email);
    console.log('FirstName:', fname);
  };
  // check value of text
  const textChange = () => {
    //
  }
  return (
    <div className=''>
      <div className='relative h-[300px] lg:h-[446px]'>
        <img alt='' src={donation} className='absolute inset-0 w-full h-full object-cover ' />
      </div>
      {/** Step 1: Your Donation */}
      <div className='flex flex-col mx-auto text-primary w-[90vw] mt-5 mb-3 lg:mt-10 lg:mb-4  md:w-[70vw] lg:w-[45vw] text-[20px] md:text-[30px] lg:text-[40px] md:leading-[50px] text-center'>
        <p className=''>
          Step 1: Your Donation
        </p>
      </div>
      <div className='flex flex-col bg-gray mx-auto py-6 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] sm:text-xs md:text-lg 2xl:text-2xl text-center'>
        <div className='flex w-[100%] mx-auto justify-between my-1 md:my-2'>
          <input
            type='button'
            value='Make a one-time donation'
            onClick={() => setIsOneTypeDonation(true)}
            className={`flex w-[48%] justify-center self-center rounded-md p-3 ${
              isOneTypeDonation ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
          <input
            type='button'
            value='Make a Monthly Donation'
            onClick={() => setIsOneTypeDonation(false)}
            className={`flex w-[48%] justify-center self-center rounded-md p-3 ${
              !isOneTypeDonation ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
        </div>
        <div className='flex w-[90%] mx-auto justify-between my-1 md:my-2'>
          <input
            type='button'
            value='50'
            onClick={() => setTmpDonation(50)}
            className={`flex w-[20%] justify-center self-center rounded-md p-3 ${
              tmpDonation===50 ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
          <input
            type='button'
            value='100'
            onClick={() => setTmpDonation(100)}
            className={`flex w-[20%] justify-center self-center rounded-md p-3 ${
              tmpDonation===100 ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
          <input
            type='button'
            value='150'
            onClick={() => setTmpDonation(150)}
            className={`flex w-[20%] justify-center self-center rounded-md p-3 ${
              tmpDonation===150 ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
          <input
            type='button'
            value='200'
            onClick={() => setTmpDonation(200)}
            className={`flex w-[20%] justify-center self-center rounded-md p-3 ${
              tmpDonation===200 ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
          
        </div>
        <InputComponent
            label='Other'
            type='number'
            labelClass={`${labelClass} w-[10%] md:w-[10%] xl:w-[10%] 2xl:w-[10%]`}
            inputClass={`${inputClass} w-[90%] md:w-[90%] xl:w-[90%] 2xl:w-[90%]`}
            containerClass={containerClass}
            value={formData.other}
            setText={(text) => handleInputChange('other', text)}
          />
      </div>
      {/** Step 2: Billing Information */}
      <div className='flex flex-col mx-auto text-primary w-[90vw] mb-3 lg:mb-4  md:w-[70vw] lg:w-[45vw] text-[20px] md:text-[30px] lg:text-[40px] md:leading-[50px] text-center'>
        <p className=''>
          Step 2: Billing Information
        </p>
      </div>
      <div className='flex flex-col bg-gray mx-auto py-6 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] md:text-lg xl:text-xl text-center'>
        <div className='flex flex-col gap-4 w-full gap-4 md:pr-16 lg:pr-5 '>
          <p className='text-left font-semibold mb-2 md:text-xl xl:text-2xl'>Your Information</p>
          <InputComponent
            required
            label='First Name'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.fname}
            setText={(text) => handleInputChange('fname', text)}
          />
          <InputComponent
            required
            label='Last Name'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.lname}
            setText={(text) => handleInputChange('lname', text)}
          />
          <InputComponent
            required
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
            type='number'
            label='Phone Number'
            labelClass={labelClass}
            inputClass={inputClass}
            containerClass={containerClass}
            value={formData.phone}
            setText={(text) => handleInputChange('phone', text)}
          />
        </div>
        <div className='flex w-[48%] space-between self-center my-2 md:text-2xl bg-white border border-secondary border-opacity-57 p-3'>
          <div className='flex items-center gap-2'>
            <input type='' className='w-7 h-7 bg-white border border-secondary border-opacity-57 p-1' value='' />
            <p>I’m not a robot</p>
          </div>
        </div>
        <div className='flex w-[100%] mx-auto justify-between my-1 md:my-2'>
          <PaystackButton {...paystackProps} className='flex w-[48%] justify-center self-center text-white rounded-md md:text-2xl bg-primary p-3' />
          <input type='button' value='Donate with PayPal' className='flex w-[48%] justify-center self-center text-white rounded-md md:text-2xl bg-blue p-3' />
        </div>
      </div>
      <Footer hideTopFooter />
    </div>
  )
}

export default Donation;