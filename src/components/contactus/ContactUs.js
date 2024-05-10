import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formBlur, setFormBlur] = useState(false); // State for blur effect
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
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 letters";
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must contain only letters";
      valid = false;
    } else if (formData.lastName.trim().length < 3) {
      newErrors.lastName = "Last name must be at least 3 letters";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setFormBlur(true);
      const submissionResult = await handleSubmit(e);
      console.log(submissionResult);
      if (submissionResult && submissionResult.success) {
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
      setIsSubmitting(false);
      setFormBlur(false); // Remove blur effect when submission completes
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      const timeout = setTimeout(() => {
        setIsSubmitting(false);
      }, 60000);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="container mx-auto">
      <div className="h-full">
        <div className="px-6 py-12 flex justify-center">
          <div className="w-full xl:w-3/4 lg:w-11/12  md:flex sm:flex-nowrap flex-wrap shadow-contact-shadow">
            <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden p-5 relative">
              <h3 className="pt-4 pb-2 text-2xl text-center text-gray-800 dark:text-white">
                CONTACT US
              </h3>

              <form
                onSubmit={handleFormSubmit}
                className={`px-8 pt-2 pb-2 mb-4 bg-white dark:bg-gray-800 rounded ${
                  formBlur ? "blur-effect" : ""
                }`}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="name"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <span className="error">{errors.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>
                <div className="mb-6 btn-01 text-center">
                  <button className="btn_common" role="button">
                    <span className="text">Submit</span>
                  </button>
                </div>
              </form>
              {isSubmitting && !state.succeeded && (
                <div
                  role="status"
                  className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              {state.succeeded && (
                <p className="mt-1 text-lg font-large text-green-600">
                  Thanks for contacting us!
                </p>
              )}
            </div>
            <div
              className="lg:w-1/3 md:w-1/2 bg-white md:flex md:flex-col md:ml-auto w-full md:py-8 md:mt-0 bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                backgroundSize: "cover",
              }}
            >
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-large text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-800">
                    Indore, Madhya pradesh, India
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-large text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-800">
                    Monday - Friday: 9am - 11pm
                  </p>
                  <p className="mt-1 text-gray-800">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-800">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-large text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-800">
                    Email: nitinsahu911111@gmail.com
                  </p>
                  <p className="mt-1 text-gray-800">Phone: +91 8839525733</p>
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