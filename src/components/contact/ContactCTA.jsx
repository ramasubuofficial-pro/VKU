import React, { useState } from 'react';
import Container from '../common/Container';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic frontend validation is handled by 'required' attributes on inputs,
    // but we can add an extra check here if needed.
    
    // Simulate form submission
    setStatus({ type: 'success', message: 'Thank you for your inquiry. Our team will contact you shortly.' });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFC]">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h4 className="text-[14px] md:text-[15px] font-bold tracking-[0.16em] text-[#F47920] uppercase mb-5">
              GET IN TOUCH
            </h4>
            <h2 className="text-[34px] md:text-[42px] lg:text-[52px] xl:text-[60px] font-bold text-[#175888] leading-[1.15] mb-8">
              Let's talk about your business requirements.
            </h2>
            <p className="text-[17px] lg:text-[19px] text-[#667785] leading-[1.7] max-w-[600px]">
              Whether you are looking for audit support, tax and compliance services, business advisory or finance operations support, we invite you to connect with our team.
              <br /><br />
              Tell us about your requirements. We will help you understand the relevant professional service areas and next steps.
            </p>
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:w-[55%] bg-white border border-[#DCE4E9] rounded-[12px] p-8 md:p-10 lg:p-11 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="mb-8">
              <h3 className="text-[28px] lg:text-[32px] font-bold text-[#175888] mb-2">
                Start a conversation
              </h3>
              <p className="text-[15px] lg:text-[16px] text-[#667785]">
                Share your requirements with VKU.
              </p>
            </div>

            {status.message && (
              <div className="mb-6 p-4 rounded-md bg-[#52B947]/10 text-[#52B947] font-medium text-[15px]">
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-[14px] font-semibold text-[#172B3A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full h-[48px] lg:h-[52px] px-[14px] border border-[#DCE4E9] rounded-[8px] bg-white text-[#172B3A] placeholder-[#8A98A5] focus:outline-none focus:border-[#175888] focus:ring-1 focus:ring-[#175888] transition-colors"
                />
              </div>

              {/* Business Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[14px] font-semibold text-[#172B3A] mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your business email"
                  className="w-full h-[48px] lg:h-[52px] px-[14px] border border-[#DCE4E9] rounded-[8px] bg-white text-[#172B3A] placeholder-[#8A98A5] focus:outline-none focus:border-[#175888] focus:ring-1 focus:ring-[#175888] transition-colors"
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col">
                <label htmlFor="company" className="text-[14px] font-semibold text-[#172B3A] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full h-[48px] lg:h-[52px] px-[14px] border border-[#DCE4E9] rounded-[8px] bg-white text-[#172B3A] placeholder-[#8A98A5] focus:outline-none focus:border-[#175888] focus:ring-1 focus:ring-[#175888] transition-colors"
                />
              </div>

              {/* Service Required */}
              <div className="flex flex-col">
                <label htmlFor="service" className="text-[14px] font-semibold text-[#172B3A] mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-[48px] lg:h-[52px] px-[14px] border border-[#DCE4E9] rounded-[8px] bg-white text-[#172B3A] focus:outline-none focus:border-[#175888] focus:ring-1 focus:ring-[#175888] transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238A98A5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Audit & Assurance">Audit & Assurance</option>
                  <option value="Tax & Compliance">Tax & Compliance</option>
                  <option value="Business Advisory">Business Advisory</option>
                  <option value="Finance Operations Support">Finance Operations Support</option>
                </select>
              </div>

              {/* How can we help? */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[14px] font-semibold text-[#172B3A] mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  className="w-full min-h-[120px] px-[14px] py-[12px] border border-[#DCE4E9] rounded-[8px] bg-white text-[#172B3A] placeholder-[#8A98A5] focus:outline-none focus:border-[#175888] focus:ring-1 focus:ring-[#175888] transition-colors resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full h-[50px] lg:h-[52px] bg-[#175888] text-white font-semibold rounded-[8px] hover:bg-[#0D3B5C] transition-colors duration-300 flex items-center justify-center"
              >
                Request a consultation
              </button>
            </form>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
