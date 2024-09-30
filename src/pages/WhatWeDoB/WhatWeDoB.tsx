import { useState } from 'react';
import banner from '../../assets/banners/contact.svg'
import Footer from "../../components/Footer/Footer";
import CustomCarousel from '../../components/ImageSliders/CustomCarousel';
import InputComponent from '../../components/InputComponent/InputComponent';

import slideA from '../../assets/slideA.png'
import slideB from '../../assets/slideB.png'
import slideC from '../../assets/slideC.png'
import SearchBox from '../../components/SearchBox/SearchBox';

const WhatWeDoB = () => {
  const inputClass = 'rounded w-[65%] xl:w-[55%] 2xl:w-[65%] h-[5vh] pl-3 border border-secondary border-opacity-57'
  const labelClass = 'w-[45%] md:w-[35%] xl:w-[35%] 2xl:w-[25%] text-right'
  const containerClass = 'flex gap-4 items-center'

  const [section, setSection] = useState<"a" | "b">("a")
  const [showForm, toggleForm] = useState<boolean>(false)
  
  let path = window.location.pathname.split('/')[2];
  path = path.replace(/^[a-z]/, (match) => match.toUpperCase())
  .replace(/-/g, ' ');

  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address:''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address:''
  });
  const [formQuestion, setFormQuestion] = useState<string>('')
  const handleUserInputChange = (field: string, value: string) => {
    setUserFormData({ ...userFormData, [field]: value });
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Access the values from formData for processing
    const { name, email, phone,  } = userFormData;

    // Now you can do something with email and username
    //console.log('Email:', email);
    //console.log('FirstName:', name);
    console.log(userFormData, formData, formQuestion)
  };
  // Event handler for textarea change
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Get the new value from the textarea
    const newValue = event.target.value;

    // Update the state with the new value
    setFormQuestion(newValue);
  };

  const whatWeDoData = {
    "Helping marginalized families":
    {
      text: "In the heart of Nigeria's remote corners, marginalized families face a relentless struggle for survival, burdened by poverty's weight and limited access to basic necessities. By supporting us, you become the lifeline these families desperately need, transforming their lives with love and compassion, and sowing seeds of hope that blossom into a future of possibility and dignity for generations to come. Together, we can bridge the gap between despair and opportunity, uniting hearts across continents to create a brighter, more equitable world.",
      group: 'Family',
      btnText: 'Helped families',
      btnBText: 'Nominate a family',
      images: []
    },
    "Supporting orphanages":
    {
      text: 'Supporting an orphanage means providing love and shelter to innocent souls who have faced unimaginable loss. Your generous support ensures these precious children are embraced with warmth, security, and a chance to dream again, reminding them that they are not alone in this world and that they are cherished beyond measure.',
      group: 'Orphanage',
      btnText: 'Supported orphanages',
      btnBText: 'Nominate an orphanage',
      images: [slideA, slideB, slideC, slideB, slideC]
    },
    "Adopt a student":
    {
      text: 'In a world teeming with challenges, there is one cause that unites us all - the welfare of our most vulnerable: orphaned children. At The Compass Society, we are on a mission to create a brighter future for these little souls who have faced early hardships no child should endure. Our collective effort stems from an unwavering belief in the power of compassion and the profound impact it can have on shaping lives. Join us on this transformative journey as we stand by orphanages and the children they care for, for a future of hope and prosperity.',
      group: 'Student',
      btnText: 'Adopted students',
      btnBText: 'Nominate a student',
      images: []
    },
    "Developing communities":
    {
      text: 'In a world teeming with challenges, there is one cause that unites us all - the welfare of our most vulnerable: orphaned children. At The Compass Society, we are on a mission to create a brighter future for these little souls who have faced early hardships no child should endure. Our collective effort stems from an unwavering belief in the power of compassion and the profound impact it can have on shaping lives. Join us on this transformative journey as we stand by orphanages and the children they care for, for a future of hope and prosperity.',
      group: 'Community',
      btnText: 'Developed communities',
      btnBText: 'Nominate a community',
      images: []
    },
  }

  //const content = whatWeDoData[path]
  const content = whatWeDoData[path as keyof typeof whatWeDoData];

  return (
    <div>
      <div className='relative h-[300px] lg:h-[446px]'>
        <img alt='' src={banner} className='absolute inset-0 w-full h-full object-cover ' />
        <div className='absolute w-[100vw] lg:w-auto bottom-[8vh] lg:bottom-[20vh] xl:bottom-[30vh] 2xl:bottom-[10vh] left-1/2 transform -translate-x-1/2 text-center'>
          <p className='mb-3 font-bold text-white text-[25px] md:text-[40px] text-center'>{path}</p>
        </div>
      </div>
      <div className='flex justify-between mx-auto w-[98%] md:w-[90%] mt-5'>
        <div className='flex w-[2%] md:w-[30%] text-xs md:text-lg gap-4'>
          <input
            type='button'
            value='Nominated'
            onClick={() => setSection("a")}
            className={`flex w-[40vw] md:w-[10vw] justify-center self-center rounded-md p-3 ${
              section==="a" ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
          <input
            type='button'
            value={content.btnText}
            onClick={() => setSection("b")}
            className={`flex w-auto justify-center self-center rounded-md p-3 ${
              section==="b" ? 
                'text-white bg-secondary bg-opacity-57' : 
                'text-black bg-white bg-opacity-100 border border-secondary border-opacity-57'}`
            }
          />
        </div>
        <SearchBox />
      </div>
      <p className='mb-5 mx-auto py-6 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] md:text-lg xl:text-xl md:leading-5 lg:leading-7 xl:leading-10 md:mt-[6px] md:mb-[25px]'>
        {content.text}
      </p>
      {
        section==="a" && 
        <input 
          type='button' 
          value={content.btnBText} 
          onClick={() => toggleForm(!showForm)}
          className='flex w-[40%] md:w-[30%] lg:w-[20%] justify-center self-center text-white rounded-md text-sm md:text-2xl bg-primary p-2 mx-auto mt-4 mb-8'
        />
      }
      {
        (showForm&&section==="a") &&
        <div>
          <div className='flex flex-col bg-gray mx-auto py-16 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] md:text-lg xl:text-xl text-center'>
            <div className='flex flex-col gap-4 w-full gap-4 md:pr-16 lg:pr-5 '>
              <p className='text-left text-primary text-opacity-60 font-semibold mb-2 md:text-xl xl:text-2xl'>{`${content.group} Details`}</p>
              <InputComponent
                required
                label='Name'
                labelClass={labelClass}
                inputClass={inputClass}
                containerClass={containerClass}
                value={formData.name}
                setText={(text) => handleInputChange('name', text)}
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
              <InputComponent
                required
                label='Address'
                labelClass={labelClass}
                inputClass={inputClass}
                containerClass={containerClass}
                value={formData.address}
                setText={(text) => handleInputChange('address', text)}
              />
            </div>
          </div>

          <div className='flex flex-col bg-gray mx-auto py-16 px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] md:text-lg xl:text-xl text-center'>
            <div className='flex flex-col gap-4 w-full gap-4 md:pr-16 lg:pr-5 '>
              <p className='text-left text-primary text-opacity-60 font-semibold mb-2 md:text-xl xl:text-2xl'>Your Contact Details:</p>
              <InputComponent
                required
                label='Name'
                labelClass={labelClass}
                inputClass={inputClass}
                containerClass={containerClass}
                value={userFormData.name}
                setText={(text) => handleUserInputChange('name', text)}
              />
              <InputComponent
                required
                type='email'
                label='Email Address'
                labelClass={labelClass}
                inputClass={inputClass}
                containerClass={containerClass}
                value={userFormData.email}
                setText={(text) => handleUserInputChange('email', text)}
              />
              <InputComponent
                required
                type='number'
                label='Phone Number'
                labelClass={labelClass}
                inputClass={inputClass}
                containerClass={containerClass}
                value={userFormData.phone}
                setText={(text) => handleUserInputChange('phone', text)}
              />
              <InputComponent
                required
                label='Address'
                labelClass={labelClass}
                inputClass={inputClass}
                containerClass={containerClass}
                value={userFormData.address}
                setText={(text) => handleUserInputChange('address', text)}
              />
            </div>
          </div>

          <div className='flex flex-col mx-auto px-2 md:px-5 text-primary w-[100vw] mb-16 gap-4 md:w-[75vw] lg:w-[45vw] md:text-lg xl:text-xl items-center'>
            <p>Reason for nomination</p>
            <textarea
              className='rounded w-[85vw] md:w-[55vw] lg:w-[31vw] h-[30vh] px-3 py-3 border border-primary'
              onChange={handleTextareaChange}
              value={formQuestion}
            />
            <input type='button' value='Submit' onClick={handleSubmit} className='flex w-[55%] justify-center self-center text-white rounded-md md:text-2xl bg-primary p-3 my-4 md:my-10' />
          </div>
        </div>
      }
      {
        content.images.length>0 &&
        <div className='w-[100vw] flex items-center justify-center mb-16'>
          <CustomCarousel images={content.images} />
        </div>
      }
      <Footer hideTopFooter />
    </div>
  )
}

export default WhatWeDoB;