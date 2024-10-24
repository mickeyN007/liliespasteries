import { useState } from "react";
import { Footer } from "../../components";
import PastStudentOne from "../../assets/learn_today/learn-today_one.png";
import PastStudentTwo from "../../assets/learn_today/learn-today-two.png";
import PastStudentThree from "../../assets/learn_today/learn-today-three.png";
import InputComponent from "../../components/InputComponent/InputComponent";

const LearnToday = () => {
  const inputClass = "rounded w-full h-[6vh] pl-3 border-0";
  const containerClass = "flex flex-col gap-4 items-center  w-[45%]";
  // check value of text
  const textChange = () => {
    //
  };
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    question: "",
    beginner: "",
    intermediate: "",
    advanced: "",
    start: "",
    more: "",
    time: "",
    gender: "",
  });
  const handleInputChange = (field: string, value: string) => {
    console.log(field, value);
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = () => {
    alert(Object.values(formData));
  };
  return (
    <div>
      <div className="flex items-center justify-center relative h-[300px] lg:h-[307px] bg-[#B66A6A]">
        <p className="font-bold text-[25px] md:text-[50px] text-center">
          Lilies Lessons
        </p>
      </div>
      <div className="md:columns-2 p-4">
        <p>
          At Lilies Pastries, we pride ourselves in providing training programs
          of the highest standards. Our hands-on sessions cater to both
          beginners and experienced bakers seeking a refresher course. Our
          lessons go beyond baking classes to offer you all the components you
          need to run a successful
        </p>
        <p>
          business, including bookkeeping and other organizational skills. If
          you’re already certain about taking this step, or mildly interested in
          learning more, fill out the form below and we’ll be in touch!{" "}
        </p>
      </div>
      <div className="past-students md:flex px-4 md:items-center">
        <img
          src={PastStudentOne}
          alt="Female student recieving her certificate"
          className="py-2"
        />
        <img
          src={PastStudentTwo}
          alt="Four students presenting their baked cakes"
          className="py-2"
        />
        <img
          src={PastStudentThree}
          alt="Three students siting, reading and listening to a student read"
          className="py-2"
        />
      </div>
      <div className="flex flex-col mx-auto w-[90vw] py-16  gap-5 md:w-[70vw] lg:w-[73vw] xl:w-[57vw] 2xl:w-[55vw] text-[20px] md:text-[30px] lg:text-[20px]">
        <p className="font-bold text-[35px]">Interest Form</p>
      </div>
      <div className="bg-[#F2F2F2] flex flex-col mx-auto text-primary w-[90vw] mb-16 gap-4 md:text-lg xl:text-xl text-center p-10">
        <div className="flex justify-between">
          <InputComponent
            required
            key="fname"
            inputClass={inputClass}
            placeholder="Enter First Name"
            containerClass={containerClass}
            value={formData.fname}
            setText={(text) => handleInputChange("fname", text)}
          />
          <InputComponent
            required
            key="lname"
            inputClass={inputClass}
            placeholder="Enter Last Name"
            containerClass={containerClass}
            value={formData.lname}
            setText={(text) => handleInputChange("lname", text)}
          />
        </div>
        <div className="flex justify-between">
          <InputComponent
            required
            key="email"
            type="email"
            inputClass={inputClass}
            placeholder="Email Address"
            containerClass={containerClass}
            value={formData.email}
            setText={(text) => handleInputChange("email", text)}
          />
          <InputComponent
            required
            key="phone"
            type="number"
            inputClass={inputClass}
            placeholder="Phone Number"
            containerClass={containerClass}
            value={formData.phone}
            setText={(text) => handleInputChange("phone", text)}
          />
        </div>
        <div className="flex justify-between">
          <InputComponent
            required
            key="time"
            type="date"
            inputClass={inputClass}
            placeholder=""
            containerClass={containerClass}
            value={formData.time}
            setText={(text) => handleInputChange("time", text)}
          />
          <InputComponent
            required
            key="gender"
            type="text"
            inputClass={inputClass}
            placeholder="Gender"
            containerClass={containerClass}
            value={formData.gender}
            setText={(text) => handleInputChange("gender", text)}
          />
        </div>
        <div className="flex gap-5">
          <p>Baking Level:</p>
          <div className="flex w-[70%] justify-between">
            <InputComponent
              key="beginner"
              type="radio"
              label="Beginner"
              labelClass="p-3"
              placeholder="When are you available to start?"
              value={formData.beginner}
              setText={(text) => handleInputChange("beginner", text)}
              name="baking-level"
            />
            <InputComponent
              key="intermediate"
              type="radio"
              label="Intermediate"
              labelClass="p-3"
              placeholder="When are you available to start?"
              value={formData.intermediate}
              setText={(text) => handleInputChange("intermediate", text)}
              name="baking-level"
            />
            <InputComponent
              key="advanced"
              type="radio"
              label="Advanced"
              labelClass="p-3"
              placeholder="When are you available to start?"
              value={formData.advanced}
              setText={(text) => handleInputChange("advanced", text)}
              name="baking-level"
            />
          </div>
        </div>
        <div className="flex">
          <InputComponent
            required
            key="start"
            type="text"
            inputClass={inputClass}
            placeholder="When are you available to start?"
            containerClass="rounded w-full border-0"
            value={formData.start}
            setText={(text) => handleInputChange("start", text)}
          />
        </div>
        <div className="flex">
          <InputComponent
            required
            key="more"
            type="text"
            inputClass={inputClass}
            placeholder="Anything else you’d like us to know?"
            containerClass="rounded w-full border-0"
            value={formData.more}
            setText={(text) => handleInputChange("more", text)}
          />
        </div>
        <div className="flex">
          <textarea
            className="rounded w-full h-[30vh] px-3 py-3 border-0"
            onChange={(e) => handleInputChange("question", e.target.value)}
          />
        </div>
        <input
          type="button"
          value="SEND"
          onClick={handleSubmit}
          className="flex w-[25%] justify-center text-white rounded-md md:text-2xl bg-activeLink p-2 mt-4 md:mt-10"
        />
      </div>
      <Footer />
    </div>
  );
};

export default LearnToday;
