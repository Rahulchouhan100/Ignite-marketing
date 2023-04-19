import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqzyjvj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="border" />
      <ValidationError prefix="text" field="text" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" className="border" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" className="border" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" className="border" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default Contact;
