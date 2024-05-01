import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("xoqgrvwq");

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.location)) {
      newErrors.location = "Location must contain only letters";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.message)) {
      newErrors.message = "Message must contain only letters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div
      className="contact2"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
      id="contact"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.9495847478!2d75.699033217425!3d22.72420499950336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714473149628!5m2!1sen!2sin"
        width="100%"
        height="60%"
        style={{ position: "absolute", top: 0, left: 0, border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact2" id="contact">
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div
                className="card card-shadow border-0 mb-4"
                style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
              >
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      {state.succeeded ? (
                        <p>Thanks for contacting us!</p>
                      ) : (
                        <form onSubmit={handleFormSubmit}>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  name="name"
                                  type="text"
                                  placeholder="Name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                                {errors.name && (
                                  <span className="error">{errors.name}</span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                {errors.email && (
                                  <span className="error">{errors.email}</span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  name="phone"
                                  type="text"
                                  placeholder="Phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                                {errors.phone && (
                                  <span className="error">{errors.phone}</span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mt-3">
                                <input
                                  className="form-control"
                                  name="location"
                                  type="text"
                                  placeholder="Location"
                                  value={formData.location}
                                  onChange={handleChange}
                                />
                                {errors.location && (
                                  <span className="error">
                                    {errors.location}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group mt-3">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Message"
                                  value={formData.message}
                                  onChange={handleChange}
                                />
                                {errors.message && (
                                  <span className="error">
                                    {errors.message}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                                disabled={state.submitting}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  SUBMIT NOW <i className="ti-arrow-right"></i>{" "}
                                </span>{" "}
                              </button>
                            </div>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image"
                    style={{
                      backgroundImage:
                        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                    }}
                  >
                    <div
                      className="detail-box p-4"
                      style={{ marginLeft: "20%" }}
                    >
                      <h5 className="text-white font-weight-light mb-3 ml-3">
                        {" "}
                        ADDRESS{" "}
                      </h5>
                      <p className="text-white op-7">
                        {" "}
                        601 Shivdham, Limbodi <br /> Khandwa Road Indore{" "}
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        {" "}
                        CALL US{" "}
                      </h5>
                      <p
                        className="text-white op-7"
                        style={{ fontFamily: "sans-serif", fontSize: 20 }}
                      >
                        {" "}
                        9111118326 <br /> 9993596716{" "}
                      </p>
                      <div className="round-social light">
                        <a
                          href="#"
                          className="ml-0 text-decoration-none text-white border border-white rounded-circle"
                        >
                          {" "}
                          <i className="icon-social-facebook"></i>{" "}
                        </a>
                        <a
                          href="#"
                          className="text-decoration-none text-white border border-white rounded-circle"
                        >
                          {" "}
                          <i className="icon-social-twitter"></i>{" "}
                        </a>
                        <a
                          href="#"
                          className="text-decoration-none text-white border border-white rounded-circle"
                        >
                          {" "}
                          <i className="icon-social-youtube"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
