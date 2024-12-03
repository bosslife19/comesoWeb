import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { RxUpload } from 'react-icons/rx'
import { TbDotsVertical, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
import "../../styles/Spinner.css"
import { ClipLoader } from 'react-spinners'; // Example spinner from react-spinners

const Bussiness = ({handleNext}) => {
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const navigate = useNavigate()
  
  const handleSuccess = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      navigate('/Kyc/successful');
      setButtonSpinner(false);
    }, 1000);
  };

  const { getRootProps: getRootPropsFirst, getInputProps: getInputPropsFirst } = useDropzone({
    accept: ".pdf, .jpg, .png", // Define accepted file types
    onDrop: (acceptedFiles) => {
      console.log("First box files:", acceptedFiles);
    },
  });

  const { getRootProps: getRootPropsSecond, getInputProps: getInputPropsSecond } = useDropzone({
    accept: ".pdf, .jpg, .png", // Define accepted file types
    onDrop: (acceptedFiles) => {
      console.log("Second box files:", acceptedFiles);
    },
  });


    // 3rd
    
    const { getRootProps: getRootPropsLast, getInputProps: getInputPropsLast } = useDropzone({
      accept: ".pdf, .jpg, .png", // Define accepted file types
      onDrop: (acceptedFiles) => {
        console.log("First box files:", acceptedFiles);
      },
    });
  return (
    <div className='lg:mr-[30%] '>
    <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#333333]'>
    Business Owner details and proof of Registration
    </span>
    <div className='px-[20px] pb-[20px] border  shadow-md rounded-[10px]'>
         <div  className='mt-2'>
          {/* Pharmacist Profile Section */}
          <div className='flex space-y-4 items-center justify-between text-[#333333] font-[500] font-poppins text-[18px] leading-[27px]'>
            <span className='flex items-center gap-[10px]'>
              <TbUserPlus />
              Owner Profile
            </span>
            <span className='bg-[#F3F3F3] rounded-full p-3 text-sm md:text-3xl'><TbDotsVertical /></span>
          </div>

          {/* Dynamic Profile Form */}
          <div className='flex flex-col space-y-2 mt-2'>
            <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]'>
            Owner’s name
            </label>
            <input
              type='text'
              name='name'
               className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[39px] md:h-[49px]'
              placeholder='Type here'
            /> 
           <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]'>
            Email Address
            </label>
            <input
              type='email'
                className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] border text-[#33333380] rounded-[5px] h-[39px] md:h-[49px]'
              placeholder='Type here'
            />
            
          </div>

          {/* Certificate and compliance */}
          <div className='space-y-3 py-3'>
            <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#333333]'>
            Copy of any Registration Document
            </span>
            <div
        {...getRootPropsFirst()}
        className="flex justify-start gap-[30px] md:py-[20px] px-[20px] items-center border-[#dcdbdb] h-[117px] rounded-[10px] border-dotted border-[2px] cursor-pointer"
      >
        <input {...getInputPropsFirst()} />
        <RxUpload className="text-[#33333399] text-[11px] md:text-[24px]" />
        <div className="m-auto">
          <span className="text-[#33333399] font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px]">
            Drag and drop here or Click to upload
          </span>
          <p className="text-[#33333399] font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px]">
            (PDF/JPG/PNG)
          </p>
        </div>
      </div>
          </div>
        </div>
     </div>

     {/* 2 */}

     <div className='px-[20px] my-[20px] pb-[20px] border  shadow-md rounded-[10px]'>
           {/* Pharmacist Profile Section */}
          <div className='flex space-y-4 py-2 items-center justify-between text-[#333333] font-[500] font-poppins md:text-[18px] leading-[27px]'>
            <span className='flex items-center gap-[10px]'>
               Business Size Information          
                 </span>
           </div>

          {/* Dynamic Profile Form */}
          <div className='py-4 flex flex-col space-y-3 mt-2'>
            <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px]  leading-[10px] md:leading-[24px]'>
            Yearly Revenue
            </label>
            <input
              type='number'
                className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[39px] md:h-[49px]'
              placeholder='Type here'
            />

            <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px]  leading-[10px] md:leading-[24px]'>
             Number of staffs
            </label>
            <input
              type='number'
                className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[39px] md:h-[49px]'
              placeholder='Type here'
            />
          <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px]  leading-[10px] md:leading-[24px]'>
          Number of Patients
            </label>
            <input
              type='number'
                className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px]  leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[49px]'
              placeholder='Type here'
            />
          </div>  
      </div>

      {/* 3 */}

      <div className='px-[20px] pb-[20px] border  shadow-md rounded-[10px]'>
           {/* Pharmacist Profile Section */}
          <div className='flex space-y-4 items-center justify-between text-[#333333] font-[500] font-poppins md:text-[18px] leading-[27px]'>
            <span className='flex items-center gap-[10px] pt-[20px]'>
               Company’s Logo Name & Certification Documents
            </span>
           </div>

          {/* Dynamic Profile Form */}
          <div className='flex flex-col space-y-2 mt-2'>
            <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]'>
            Company’s Name
            </label>
            <input
              type='text'
              name='name'
               className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[39px] md:h-[49px]'
              placeholder='Type here'
            /> 
             <label className='font-[400] text-[#333333] font-poppins text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]'>
            Company’s Logo
            </label>
            <input
              type='text'
              name='name'
               className='pl-6 font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[39px] md:h-[49px]'
              placeholder='Type here'
            /> 
           
          </div>

          {/*2 Certificate and compliance */}
          <div className='md:space-y-3 py-3'>
            <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] text-[#333333] '>
            Company’s Logo
            </span>
            <div
        {...getRootPropsSecond()}
        className="flex justify-start gap-[30px] md:py-[20px] px-[20px] items-center border-[#dcdbdb] h-full rounded-[10px] border-dotted border-[2px] cursor-pointer"
      >
        <input {...getInputPropsSecond()} />
        <RxUpload className="text-[#33333399] text-[11px] md:text-[24px]" />
        <div className="m-auto">
          <span className="text-[#33333399] font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]">
            Drag and drop here or Click to upload
          </span>
          
        </div>
           </div>

           {/*3 Certificate and compliance */}
           <div className='md:space-y-3 py-3'>
            <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#333333]'>
            Copy of any Registration Document
            </span>
            <div
        {...getRootPropsLast()}
        className="flex justify-start gap-[30px] md:py-[20px] px-[20px] items-center border-[#dcdbdb] h-full rounded-[10px] border-dotted border-[2px] cursor-pointer"
      >
        <input {...getInputPropsLast()} />
        <RxUpload className="text-[#33333399] text-[11px] md:text-[24px]" />
        <div className="m-auto">
          <span className="text-[#33333399] font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]">
            Drag and drop here or Click to upload
          </span>
          
        </div>
      </div>
          </div>
        </div>
     </div>

    {/* Next Button */}
    <button
          onClick={handleSuccess}
          className="text-[#fff] w-[139px] md:w-[209px] py-2 md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] md:text-[20px] md:leading-[30px] md:mt-[20%]"
          disabled={buttonSpinner} // Disable button when spinner is active
        >
          {buttonSpinner ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            <span> Continue</span>
          )}
        </button>
    
  </div>
  )
}

export default Bussiness