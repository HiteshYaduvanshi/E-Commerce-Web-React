import React from "react";

function Contact() {
  return (
    <>
      <div className="md:flex justify-center items-start max-w-[1080px] mx-auto py-28">
        <div className="basis-1/2 px-4 pt-7">
          <h2 className="text-3xl font-bold">Showroom Information</h2>
          <p className="pb-4 pt-7">
            Business subject long poetic reclined catch bits generality
            involved.
          </p>
          <h4 className="text-[#ff523b] italic">Address</h4>
          <p className="py-4 leading-10">
            3705 Clement Street <br />
            City: Atlanta <br />
            State: Georgia <br />
            Zip : 30303 USA
          </p>
          <h4 className="text-[#ff523b] italic">Phone</h4>
          <p className="py-4 leading-10">
            202-555-0199
            <br />
            mo – fri: 09:00 – 17:00
          </p>
          <h4 className="text-[#ff523b] italic">Email</h4>
          <p className="pt-4 leading-10">
            example@gmail.com <br />
            hello@exapmle.com
          </p>
        </div>
        <div className="basis-1/2 px-4 pt-7">
          <h2 className="text-3xl font-bold">Send us a Message</h2>
          <p className="pb-4 pt-7">
            Whether you’ve got product suggestions, pre-sale questions or even a
            good joke to start chatting, drop us a line via this contact form
            below.
          </p>
          <form action="">
            <label className="" htmlFor="name">
              Your Name
            </label>
            <input
              className="block my-2 w-full bg-[#ff523b9f] p-3 rounded placeholder:text-white border-2 border-[#ff523b]"
              id="name"
              type="text"
              placeholder="Ex: John Doe"
            />
            <label className="mt-4 block" htmlFor="email">
              Your Email
            </label>
            <input
              className="block my-2 w-full bg-[#ff523b9f] p-3 rounded placeholder:text-white border-2 border-[#ff523b]"
              id="email"
              type="text"
              placeholder="Ex: John_Doe@example.com"
            />
            <label className=" block mt-4" htmlFor="subject">
              Subject
            </label>
            <input
              className="block my-2 w-full bg-[#ff523b9f] p-3 rounded placeholder:text-white border-2 border-[#ff523b]"
              id="subject"
              type="text"
              placeholder="Type your message subject"
            />
            <label className=" block mt-4" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="block my-2 w-full bg-[#ff523b9f] p-3 rounded placeholder:text-white border-2 border-[#ff523b]"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter message here..."
            ></textarea>
            <button
              type="submit"
              className="w-full mt-5 bg-[#ff523b] text-white py-2 rounded hover:bg-[#563434]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
