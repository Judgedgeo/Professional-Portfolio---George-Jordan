import React from "react";
import { useForm, ValidationError } from "@formspree/react";


function ContactForm() {
  const [state, handleSubmit] = useForm("xayzvbgb");
  if (state.succeeded) {
    return <p>Please allow 24-48 hours for a response.</p>;
  }
  return (

    <section class="contactimage" id="home">
<h1 id = "contact-header">Contact</h1>

      <form className="form" onSubmit={handleSubmit}>

      <input id="name" type="name" name="name" placeholder="Name"/>
        <input id="email" type="email" name="email" placeholder="Email Address" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Enter your message here."/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button id = "contact-btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}
<input type="text" name="email" placeholder="gjordan1973@icloud.com" />;
function App() {
  return <ContactForm />;
}

export default App;
