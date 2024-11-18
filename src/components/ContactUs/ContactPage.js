import dubaiImage from "./images/location/hava.jpg"; // Replace with actual path
import { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  
  const [formData, setFormData] = useState({user: '', email: '', phone: '', message: ''}); // State for form input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4000/api/sendEmail', formData);
      console.log('Response from server:', response.data);
      alert('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error sending data: ' + error.message);
    }
  };
  return (
    <div>
      {" "}
      {/* Apply responsive padding */}
      {/* Breadcrumb Area */}
      <section
        className="relative overflow-hidden text-center py-36 banner-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?fit=crop&w=1920&h=400')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-white opacity-85 z-0"></div>
        <div className="relative z-10 text-gray-700">
          <div className="container mx-auto">
            <div className="flex justify-center items-center">
              <div className="space-y-6">
                <div className="fadeInUp">
                  <ul className="inline-flex space-x-2 text-lg">
                    <li>
                      <a href="#" className=" text-3xl text-gray-700">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="fadeInUp">
                  <h2 className="text-1xl font-semibold leading-relaxed">
                    Want To Contact Versai Tech Solutions?
                    <br />
                    Here are a few ways to get in touch with us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Location Section */}
      <section className="contact-location py-16 px-3 md:px-11 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-sky-600 text-lg uppercase">
              Our Company Locations
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Dubai Location */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-3/4 md:w-1/3 fadeInUp">
              <img src={dubaiImage} alt="Jaipur" className="w-full mb-6" />
              <div className="text-center">
                <h4 className="text-2xl font-bold">Jhunjhunu</h4>
                <p className="text-gray-700 mt-2">
                  <i className="fas fa-map-marker-alt"></i> Ajitgarh
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block mt-4 py-2 px-4 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="contact-page px-3 md:px-11 py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Form */}
            <div className="w-full md:w-1/2 max-w-lg">
              <div className="text-left mb-8">
                <span className="text-sky-600 text-lg uppercase">
                  Contact Now
                </span>
                <h2 className="text-3xl font-bold mt-4">Let's Start With Us</h2>
                <p className="mt-6 mb-8">
                  Let us know about your requirements, and provide the following
                  details. We will get back to you with an idea of a brilliant
                  software.
                </p>
              </div>
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="user"
                    placeholder="Enter name"
                    onChange={handleChange}
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter mobile"
                    onChange={handleChange}
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4"
                    required
                  />
                  <select
                    name="select"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4"
                    required
                  >
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 focus:border-sky-600 py-4 px-4 w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="w-full md:w-1/3">
              <div className="bg-sky-100 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <i className="fas fa-envelope text-sky-600 text-2xl mr-4"></i>
                  <div>
                    <span className="font-bold text-xl">Email:</span>
                    <p className="text-gray-700">
                      Our support team will get back to you within 24 business
                      hours.
                    </p>
                    <a
                      href="mailto:contact@versai.in"
                      className="text-sky-600 hover:underline"
                    >
                      contact@versai.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
