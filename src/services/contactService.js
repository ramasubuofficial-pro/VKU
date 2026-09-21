/**
 * Contact Service
 * This is a mocked API abstraction for the Contact Form.
 * When the backend is ready, replace this mock with a real fetch/axios call.
 */
export const submitContactForm = async (formData) => {
  return new Promise((resolve, reject) => {
    // Simulate network latency
    setTimeout(() => {
      // Basic mock validation: Ensure email is provided and valid format
      if (!formData.email || !formData.email.includes('@')) {
        reject(new Error("Please provide a valid email address."));
        return;
      }

      // Simulate a successful API response
      resolve({
        success: true,
        message: "Thank you. Your message has been received. Our team will get back to you soon."
      });
      
    }, 1200); // 1.2s simulated delay
  });
};
