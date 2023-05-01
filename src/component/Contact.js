import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import contactIcon from "../../assest/contact.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqzyjvj");
  if (state.succeeded) {
    return (
      <p className="text-center text-green-600">
        {alert("your Message has been sent !")}
      </p>
    );
  }
  return (
    <div className="mt-20 sm:mt-4">
      <h3 className=" text-center font-bold text-6xl sm:text-3xl">
        Feel Free to Reach
      </h3>
      <div className="flex mb-10 items-center justify-between gap-7 flex-wrap sm:border">
        <div className="basis-3/6">
          <img src={contactIcon} alt="contact" className="w-full sm:w-80" />
          <div className="ml-28  border w-96 flex flex-col gap-3 p-4 text-white bg-blue-400 sm:ml-0 sm:mx-2 sm:w-full">
            <li className="flex gap-2">
              <LocationOnIcon />
              <address>
                Bahria Town Phase 7,
                <br /> Islamabad, Pakistan
              </address>
            </li>
            <li className="flex gap-2">
              <MailIcon /> theignitemarketing.co@gmail.com
            </li>
            <li className="flex gap-2">
              <PhoneInTalkIcon />
              +92 337 3244500
            </li>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="basis-24 border shadow-md mr-28 p-10 sm:p-2 sm:mx-2"
        >
          <ValidationError prefix="text" field="text" errors={state.errors} />
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            className="border w-96 px-2 py-4 shadow-md rounded-sm mb-5 sm:w-72 sm:py-3 sm:mt-3"
            placeholder="Email Address"
          />
          <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="border resize-none w-96 h-32 p-2 mb-5 shadow-md sm:w-72"
            placeholder="Leave Your Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <button
            type="submit"
            className="border w-40 p-3  bg-blue-600 text-white font-semibold rounded-sm"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
