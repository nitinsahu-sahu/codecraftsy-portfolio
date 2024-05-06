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
    <>
      {/* <div className="contact2" id="contact">
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
      </div> */}
      <div className="container mx-auto">
        <div class="h-full">
            <div class="px-6 py-12 flex justify-center">
              <div class="w-full xl:w-3/4 lg:w-11/12  md:flex sm:flex-nowrap flex-wrap shadow-contact-shadow">
                <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden p-5 relative">
                  <h3 class="pt-4 pb-2 text-2xl text-center text-gray-800 dark:text-white">CONTACT US</h3>
                  <form class="px-8 pt-2 pb-2 mb-4 bg-white dark:bg-gray-800 rounded">
                    <div class="mb-4 md:flex md:justify-between">
                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                          First Name
                        </label>
                        <input
                          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="md:ml-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                          Last Name
                        </label>
                        <input
                          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                        Email
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                        Message
                      </label>
                      <textarea id="about" name="about" rows="3" class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="mb-6 btn-01 text-center">
                      <button className="btn_common" role="button">
                        <span class="text">
                          Submit
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white md:flex md:flex-col md:ml-auto w-full md:py-8 md:mt-0 bg-no-repeat" style={{
                  backgroundImage:
                    "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                    backgroundSize:'cover'
                }}>
                  <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div class="px-6 py-4">
                      <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                      <p class="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                    </div>
                    <div class="border-t border-gray-200 px-6 py-4">
                      <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                      <p class="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                      <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                      <p class="mt-1 text-gray-600">Sunday: Closed</p>
                    </div>
                    <div class="border-t border-gray-200 px-6 py-4">
                      <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                      <p class="mt-1 text-gray-600">Email: info@example.com</p>
                      <p class="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactUs;

