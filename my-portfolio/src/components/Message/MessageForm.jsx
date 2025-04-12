import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const clickMessages = [
  "Click to send?!",
  "One more time...",
  "Sorry, last time!",
  "Okay okay, sending 💌"
];

const buttonTranslate = [
  "-translate-x-1/2",         // center
  "-translate-x-[10rem]",     // left
  "translate-x-[10rem]",      // right
  "-translate-x-1/2"          // back to center
];

const MessageForm = ({ clickCount, onMoveButton, onSent }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (clickCount < 3) {
      onMoveButton();
      return;
    }

    const form = formRef.current;
    const name = form['name'].value;
    const email = form['user_email'].value;
    const message = form['message'].value;

    if (!name || !email || !message) {
      alert("Please fill in all fields 🤓");
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        'service_b96ba8k',
        'template_1t5qh2d',
        form,
        'EpYSUA4akOcoNRNWZ'
      );
      onSent(); // update parent
    } catch (error) {
      alert("Sending failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 text-sm text-[#1A1A7A] relative"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-5 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-5 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full px-5 py-3 rounded-2xl shadow resize-none focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
      />
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      {/* Animated Button */}
      <div className="relative mt-10 h-12 overflow-hidden">
        <button
          type="submit"
          disabled={loading}
          className={`absolute left-1/2 ${buttonTranslate[clickCount % 4]} 
            transition-transform duration-500 ease-in-out
            bg-white px-6 py-3 rounded-full shadow font-semibold text-[#1A1A7A] hover:scale-105
            ${loading ? 'opacity-50 pointer-events-none' : ''}
          `}
        >
          {loading ? "Sending..." : clickMessages[clickCount]}
        </button>
      </div>
    </form>
  );
};

export default MessageForm;