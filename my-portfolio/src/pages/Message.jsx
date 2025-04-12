import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { useState } from 'react';

const Message = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚀 Here you can connect to EmailJS, Formspree, Firebase etc.
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F6F4FD] text-[#1A1A7A]">
      <Header />

      <main className="flex-1 px-6 md:px-10 lg:px-28 py-20 max-w-3xl mx-auto">
        <section
          className="bg-gradient-to-r from-[#D8D4F3] to-[#F6F4FD] p-10 rounded-3xl shadow-xl text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold mb-3">Leave a Message 💬</h1>
          <p className="text-sm text-gray-700 mb-8">
            Got something on your mind? I'd love to hear from you!
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
              />
              <textarea
                required
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-xl shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
              />
              <button
                type="submit"
                className="bg-[#1A1A7A] hover:bg-[#15156a] text-white font-semibold px-6 py-3 rounded-full transition shadow"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center text-[#1A1A7A]">
              <h2 className="text-xl font-bold mb-2">Thank you! 💌</h2>
              <p className="text-sm text-gray-700">I'll get back to you as soon as I can.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Message;