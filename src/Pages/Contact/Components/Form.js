import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <h1 className="heading-1">Contact-us</h1>
      <section className="form">
        <form action="">
          <div className="field">
            <p><label htmlFor="name">Name</label></p>
            <input type="text" id="name" required/>
          </div>
          <div className="field">
            <p><label htmlFor="email">Email</label></p>
            <input type="email" id="email" required />
          </div>
          <div className="field">
            <p><label htmlFor="phone">Phone</label></p>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-button">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
