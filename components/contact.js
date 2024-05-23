import React from "react";

export default function Contact() {
  return (
    <div className="container" style={{ maxWidth: 1000, marginTop: 30 }}>
      <div style={{ marginTop: 40 }}>
        <h3>Contactez nous</h3>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          style={{ width: "100%" }}
          className="btn btn-primary mb-3"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
