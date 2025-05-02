import React from "react";
import { useState } from "react";


function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca199daf-1a7c-45f0-9adf-b3fda752eb10");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="App ">

<section className='bg-cover bg-[url(/backfixedimg.png)]  md:bg-fixed bg-center '  >

<div className='py-8 px-6  overlay relative w-full h-full backdrop-brightness-50 flex justify-center items-center flex-col'>
             

<form className=" flex flex-col justify-center md:w-auto w-full  px-6 md:px-20  bg-opacity-50 rounded-2xl bg-darkBlue shadow-lg " onSubmit={onSubmit}>

{/* Name form */}
<div className="email-send flex justify-beween flex-col ">

  <label className="pt-3 pb-2   text-white text-lg font-medium " for="text">Name<sup className="text-red-500">*</sup></label>

  <div className="email-send flex  flex-col md:flex-row ">
<div className="flex flex-col">
<input type="text" name="name"
      className="ps-5  border border-b-darkGreen shadow-md border-double py-2 mt-2 w-full text-base  "
      required placeholder="John" />

    <p className="text-white pt-3 ">first</p>
</div>
    

<div className="flex  md:pl-3 flex-col">
<input type="text" name="name"
      className="ps-5  border border-b-darkGreen shadow-md border-double py-2 mt-2 w-full text-base  "
      required placeholder="Doe" />
    <p className="text-white pt-3 ">Last</p>

</div>
    

  </div>


</div>


{/* email form */}
<div className="email-send flex  flex-col ">

  <label className="pt-3 pb-2 text-white text-lg font-medium  " for="text">Email<sup className="text-red-600">*</sup></label>

  <input type="email" name="email"
    className="ps-5  border border-b-darkGreen shadow-md border-double py-2 mt-2 w-full text-base  "
    required placeholder="doe@company.com" />


</div>


{/* phone form */}

<div className="email-send flex  flex-col ">

  <label className="pt-3 pb-2  text-white text-lg font-medium " for="text">Phone Number<sup className="text-red-600">*</sup></label>

  <input type="number" name="phone"
    className="ps-5  border border-b-darkGreen shadow-md border-double py-2 mt-2 w-full text-base "
    required placeholder="09031821590" />


</div>

{/* message form */}

<div className="email-send flex  flex-col ">

  <label className="pt-3 pb-2  text-white text-lg font-medium " for="text">Comment or Message<sup className="text-red-600">*</sup></label>

  <textarea className="w-full h-[200px]   text-gray-400 ps-5 py-5  border border-b-darkGreen shadow-md border-double text-base"
    name="message"
    placeholder="Type your message here" cols="6"
    rows="3"></textarea>


</div>


<div className="submit flex  flex-col justify-start ">
<input type="submit" className="text-lg text-white flex place-self-start rounded-md px-16 py-2  my-3 bg-blue-600" value="Submit"/>

</div>



</form>
                
              </div>
</section>



      <p className=" text-base text-green-500 ps-5 py-2">{result} </p>

    </div>
  );
}

export default Contact;

