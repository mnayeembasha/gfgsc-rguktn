import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    const formElements = form.current.elements;

    if (!formElements.name.value.trim()) {
      errors.name = 'Name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formElements.from_email.value.trim()) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formElements.from_email.value.trim())) {
      errors.email = 'Invalid email address';
    }

    if (!formElements.subject.value.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formElements.message.value.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            toast.success('Message sent successfully!', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setIsSubmitting(false);
            form.current.reset();
          },
          () => {
            toast.error(`Failed to send message`, {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setIsSubmitting(false);
          },
        );
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="w-full py-10 md:py-6 lg:py-24 flex justify-center align-center text-white"
      style={{boxSizing:'border-box'}}
    >
      {/* <ToastContainer className="Toastify__toast-container"/> */}
      <div
        data-aos="fade-up"
        className="contact-card md:shadow-lg bg-[#f0f8f0] dark:bg-card-dark grid grid-cols-1 gap-8 px-4 md:px-4 py-8 md:py-12 md:grid-cols-2 md:gap-0  soc-gpar"
      >
        <div className="space-y-6 px-8 md:px-24 flex flex-col justify-center align-center soc-par">
          <div data-aos="fade-up" className="space-y-2 px-4 md:px-6">
            <h1 className="text-4xl font-bold text-green-900 dark:text-green-300">Get in Touch</h1>
            <p className="text-green-700 dark:text-green-200">
              Have a question or want to contribute? Reach out!
            </p>
          </div>
          <div className="space-y-4 px-4 md:px-8">
            {/* Contact Info */}
            <div data-aos="fade-up" className="address-section flex items-center gap-2 mb-8 flex-wrap w-full">
  <div className="address-icon bg-[#308D46] dark:bg-green-300 icon-par rounded-full w-8 h-8 flex items-center justify-center icon-container flex-shrink-0">
  {/* bi-telephone-fill */}
    <i className="bi bi-geo-alt-fill text-white dark:text-gray-800"></i>
  </div>
  <span

    className="address-content text-green-700 dark:text-gray-200"
  >
    RGUKT Nuzvid, Andhra Pradesh
  </span>
</div>

<div className="flex items-center email-section gap-2 flex-wrap w-full">
  <div className="bg-[#308D46] email-icon dark:bg-green-300 icon-par rounded-full w-8 h-8 flex items-center justify-center icon-container flex-shrink-0">
    <i className="bi bi-envelope-fill text-white dark:text-gray-800"></i>
  </div>
  <a
    href="mailto:geeksforgeeksrguktnuzvid@gmail.com"
    className="email-content text-green-700 dark:text-gray-200 hover:underline hover:underline-offset-2 break-all"
  >
    geeksforgeeksrguktnuzvid@gmail.com
  </a>
</div>

            <div
              data-aos="fade-up"
              className="icons-section flex items-center gap-4 py-2 md:py-4"
            >
              <a
                href="https://chat.whatsapp.com/LbP4VJ7V0E1ERD0YwGJuv3"
                className="text-[#a3d9a5]  hover:text-[#32a852] transition-colors mr-4"
                target="_blank"
              >
                <div className="bg-[#308D46] dark:bg-green-300 icon-par rounded-full w-8 h-8 flex items-center justify-center icon-container">
                  <i className="bi bi-whatsapp text-white dark:text-gray-900"></i>
                </div>
              </a>
              <a
                href="https://www.instagram.com/gfgsc_rguktn"
                className="text-[#a3d9a5] hover:text-[#32a852] transition-colors mr-4"
                target="_blank"
              >
                <div className="bg-[#308D46] dark:bg-green-300 icon-par rounded-full w-8 h-8 flex items-center justify-center icon-container">
                  <i className="bi bi-instagram text-white dark:text-gray-900"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/geeksforgeeks-rgukt-nuzvid-854270325/"
                className="text-[#a3d9a5] hover:text-[#32a852] transition-colors mr-4"
                target="_blank"
              >
                <div className="bg-[#308D46] dark:bg-green-300 icon-par rounded-full w-8 h-8 flex items-center justify-center icon-container">
                  <i className="bi bi-linkedin text-white dark:text-gray-800"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          className="contact-form space-y-4 px-4 md:px-8"
          noValidate
        >
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2 md:space-y-0">
            <div data-aos="fade-up" className="space-y-2">
              <label htmlFor="name" className="text-green-800 dark:text-green-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-[#f0f8f0] dark:bg-[#121212] dark:text-gray-200 text-gray-800 ${
                  formErrors.name ? 'ring-2 ring-red-500' : 'focus:ring-[#32a852]'
                }`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div data-aos="fade-up" className="space-y-2">
              <label htmlFor="email" className="text-green-800 dark:text-green-200 ">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="from_email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-[#f0f8f0] dark:bg-[#121212] dark:focus:bg-[#121212] dark:text-gray-200 text-gray-800 ${
                  formErrors.email ? 'ring-2 ring-red-500' : 'focus:ring-[#32a852]'
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <label htmlFor="subject" className="text-green-800 dark:text-green-200 ">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-[#f0f8f0] dark:bg-[#121212] dark:text-gray-200 text-gray-800 ${
                formErrors.subject ? 'ring-2 ring-red-500' : 'focus:ring-[#32a852]'
              }`}
            />
            {formErrors.subject && (
              <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
            )}
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <label htmlFor="message" className="text-green-800 dark:text-green-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className={`w-full px-4 py-2 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 bg-[#f0f8f0]  dark:bg-[#121212] dark:text-gray-200 text-gray-800 ${
                formErrors.message ? 'ring-2 ring-red-500' : 'focus:ring-[#32a852]'
              }`}
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded text-white ${
              isSubmitting ? 'bg-gray-500' : 'bg-green-700 hover:bg-green-900 transition-colors'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



  /* Subscribe to Newsletter section */
    /* <section data-aos="fade-up" className="bg-[#1a5a1a] py-12 md:py-24">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-white md:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Subscribe to our Newsletter
            </h2>
            <form className="w-full max-w-md">
              <div className="flex items-center rounded-lg bg-white p-1">
                <input className="flex h-10 w-full rounded-md text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-none hover:border-none border-none bg-transparent px-4 py-2 text-[#1a5a1a] disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="enter your email"
                />

                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-lg bg-[#1a5a1a] px-4 py-2 text-white transition-colors hover:bg-[#1a5a1a]/80"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
        */
