
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {

  const [state, handleSubmit] = useForm("xayzvbgb");
  if (state.succeeded) {
      return <p>Please allow 24-48 hours for a response.</p>;
  }
  return (

<section class="contactimage" id="home">
      <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </section>

  );
}
<input type="text" name="email" placeholder="gjordan1973@icloud.com" />
function App() {
  return (

    <ContactForm />
  );
}


export default App;




// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';



// export default function Contact() {const [email, setEmail] = useState('');
// const [name, setName] = useState('');
// const [message, setmessage] = useState('');
// const [errorMessage, setErrorMessage] = useState('');

// const handleInputChange = (e) => {
//   // Getting the value and name of the input which triggered the change
//   const { target } = e;
//   const inputType = target.name;
//   const inputValue = target.value;

//   // Based on the input type, we set the state of either email, name, and message
//   if (inputType === 'email') {
//     setEmail(inputValue);
//   } else if (inputType === 'name') {
//     setName(inputValue);
//   } else {
//     setmessage(inputValue);
//   }
// };

// const handleFormSubmit = (e) => {
//   // Preventing the default behavior of the form submit (which is to refresh the page)
//   e.preventDefault();

//   // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
//   if (!validateEmail(email) || !name) {
//     setErrorMessage('Email or name is invalid');
//     // We want to exit out of this code block if something is wrong so that the user can correct it
//     return;
//     // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
//   }

//   alert(`Hello ${name}`);

//   // If everything goes according to plan, we want to clear out the input after a successful registration.
//   setName('');
//   setmessage('');
//   setEmail('');
// };

// return (
//   <section class="contactimage" id="home">
//   <div>
//     <p>Hello {name}!</p>
//     <form className="form">
//     <input
//         value={name}
//         name="name"
//         onChange={handleInputChange}
//         type="text"
//         placeholder="Name"
//       />
//       <input
//         value={email}
//         name="email"
//         onChange={handleInputChange}
//         type="email"
//         placeholder="Email"
//       />
//       <input id="message"
//         value={message}
//         name="message"
//         onChange={handleInputChange}
//         type="message"
//         placeholder="Message"
//       />
//       <button type="button" onClick={handleFormSubmit}>Submit</button>
//     </form>
//     {errorMessage && (
//       <div>
//         <p className="error-text">{errorMessage}</p>
//       </div>
//     )}
//   </div>
//   </section>
// );
// }