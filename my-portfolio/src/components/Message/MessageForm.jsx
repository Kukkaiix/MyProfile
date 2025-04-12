import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const clickMessages = [
  "Click to send?!",
  "One more time...",
  "Sorry, last time!",
  "Okay okay, sending 💌"
];

const buttonTranslate = [
  "-translate-x-1/2",
  "-translate-x-[10rem]",
  "translate-x-[10rem]",
  "-translate-x-1/2"
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
      onSent();
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
  className="space-y-5 text-sm text-[#d4d4d4] bg-[#1e1e1e] p-6 rounded-b-lg"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 rounded-md border border-[#3c3c3c] bg-[#2d2d2d] text-[#d4d4d4] placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#4FC1FF] focus:border-transparent transition"
  />
  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 rounded-md border border-[#3c3c3c] bg-[#2d2d2d] text-[#d4d4d4] placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#4FC1FF] focus:border-transparent transition"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows="4"
    required
    className="w-full px-4 py-2 rounded-md border border-[#3c3c3c] bg-[#2d2d2d] text-[#d4d4d4] resize-none placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#4FC1FF] focus:border-transparent transition"
  />
  <input type="hidden" name="time" value={new Date().toLocaleString()} />

  <div className="relative mt-10 h-12 overflow-hidden">
    <button
      type="submit"
      disabled={loading}
      className={`absolute left-1/2 ${buttonTranslate[clickCount % 4]} 
        transition-transform duration-500 ease-in-out
        bg-[#2d2d2d] px-6 py-2 rounded-md text-[#98c379] border border-[#3c3c3c] font-semibold
        hover:bg-[#353535] hover:text-white
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