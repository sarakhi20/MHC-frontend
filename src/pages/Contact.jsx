import React from 'react'
import { assets } from '../assets/assets'
import {toast} from 'react-toastify'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b0821563-a2de-4e9e-82fe-4ed80f6fefcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sending....");
      toast.success("Message send Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <div  className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
         <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a move? Let's Build Your Future Together</p>

    <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div  className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
            </div>
        </div>
        <div  className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Mobile-number
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="number" name='Mobile' placeholder='Mobile-number' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Country
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="Country" name='Country' placeholder='Country' required />
            </div>
        </div>
        <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name=" Message" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result :"Send Message"}</button>
    </form>

    </div>

    </div>
  )
}

export default Contact
