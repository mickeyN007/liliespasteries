import { useState } from 'react';


import Footer from "../../components/Footer/Footer";
import InputComponent from '../../components/InputComponent/InputComponent';

const About = () => {
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
        <p className='font-bold text-[25px] md:text-[50px] text-center'>About Us</p>
      </div>
      <Footer />
    </div>
  )
}

export default About;
