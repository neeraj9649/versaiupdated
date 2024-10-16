import { useState } from "react";  
import side from "./images/side.jpg";

const CareerPage = () => {
  const [showOtherSkill, setShowOtherSkill] = useState(false);

  const handleSkillChange = (e) => {
    if (e.target.value === "Other") {
      setShowOtherSkill(true);
    } else {
      setShowOtherSkill(false);
    }
  };

  return (
    <div>
      {/* Breadcrumb Area */}
      <section
        className="relative overflow-hidden text-center py-24 md:py-36 banner-6 bg-cover bg-center"
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
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="fadeInUp">
                  <h2 className="text-1xl font-semibold leading-relaxed">
                    Join Versai Tech Solutions
                    <br />
                    Submit your details to apply for open positions.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Form */}
      <section className="career-page px-3 md:px-11 py-8 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Form */}
            <div className="w-full md:w-1/2 max-w-lg">
              <div className="text-left mb-8">
                <span className="text-sky-600 text-lg uppercase">
                  Apply Now
                </span>
                <h2 className="text-3xl font-bold mt-4">
                  Start Your Career With Us
                </h2>
                <p className="mt-6 mb-8">
                  Fill out the form below and attach the required documents to
                  apply for a position at Versai Tech Solutions.
                </p>
              </div>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="f3aa6447-7574-49a7-a3b3-b3c3522b40b9"
                />

                {/* Apply grid for inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                    required
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Enter contact number"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                    required
                  />
                  <input
                    type="text"
                    name="course"
                    placeholder="Enter course"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                    required
                  />
                  <input
                    type="text"
                    name="year_of_passing"
                    placeholder="Enter year of passing"
                    className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                    required
                  />
                </div>

                {/* Grid for Passport Size Photo, Resume, and Major Skill */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Passport Size Photo
                    </label>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      className="py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Resume (PDF only)
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf"
                      className="py-2"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Major Skill
                    </label>
                    <select
                      name="major_skill"
                      className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full"
                      onChange={handleSkillChange}
                      required
                    >
                      <option value="">Select a skill</option>
                      <option value="Front End">Front End</option>
                      <option value="Back End">Back End</option>
                      <option value="Flutter">Flutter</option>
                      <option value="React Native">React Native</option>
                      <option value="Web">Web</option>
                      <option value="Android">Android</option>
                      <option value="Management">Management</option>
                      <option value="Sales and Marketing">Sales and Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                    {showOtherSkill && (
                      <input
                        type="text"
                        name="other_skill"
                        placeholder="Enter your skill"
                        className="border-b-2 border-gray-300 focus:border-sky-600 py-2 px-4 w-full mt-2"
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                >
                  Submit Application
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
                      Our HR team will get back to you within 48 hours.
                    </p>
                    <a
                      href="mailto:hr@versai.in"
                      className="text-sky-600 hover:underline"
                    >
                      hr@versai.in
                    </a>
                  </div>
                </div>
              </div>
              <img className="mt-8 md:mt-36" src={side} alt="Side" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
