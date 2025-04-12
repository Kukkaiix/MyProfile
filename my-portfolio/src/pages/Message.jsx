import { useState, useRef, useEffect } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const clickMessages = [
  "Click to send?!",
  "One more time...",
  "Sorry, last time!",
  "Okay okay, sending 💌"
];

const buttonTranslate = [
  "-translate-x-1/2",          // Center
  "-translate-x-[10rem]",      // Left
  "translate-x-[10rem]",       // Right
  "-translate-x-1/2"           // Back to center
];

const Message = () => {
  const [sent, setSent] = useState(false);
  const [muted, setMuted] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const audioRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleMoveButton = () => {
    if (clickCount < clickMessages.length - 1) {
      setClickCount(prev => prev + 1);
    } else {
      setSent(true);
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !muted) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(err => {
          console.warn("Autoplay may be blocked by browser settings:", err);
        });
      }
    };
    // 👇 เปิดเสียงทันทีตอนเข้าเพจ (หลัง user interaction ครั้งแรก)
    window.addEventListener('click', playAudio, { once: true });
    return () => window.removeEventListener('click', playAudio);
  }, [muted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      if (!muted) audioRef.current.play();
    }
    setMuted(!muted);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F6F4FD] text-[#1A1A7A] relative">
      {/* 🎵 Music */}
      <audio
        ref={audioRef}
        src="/audio/coffee.mp3" // ✅ วางไฟล์ไว้ใน /public/audio/
        loop
        preload="auto"
        autoPlay
      />

      {/* 🔊 Volume Toggle */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-3 text-[#4B4BE1] hover:bg-[#eae6ff] transition-all"
        aria-label="Toggle music"
      >
        {muted ? <HiVolumeOff size={22} /> : <HiVolumeUp size={22} />}
      </button>

      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-[#CFC3F3] max-w-xl w-full rounded-[30px] p-8 shadow-xl relative" data-aos="fade-up">
          <h1 className="text-center text-2xl font-extrabold text-[#1A1A7A] mb-6">
            Leave a Message 💬
          </h1>

          {!sent ? (
            <>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5 text-sm text-[#1A1A7A]">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-5 py-3 rounded-2xl shadow resize-none focus:outline-none focus:ring-2 focus:ring-[#4B4BE1]"
                />
              </form>

              {/* 💃 Dancing Button */}
              <div className="relative mt-10 h-12 overflow-hidden">
                <button
                  onClick={handleMoveButton}
                  className={`absolute left-1/2 ${buttonTranslate[clickCount % 4]} 
                    transition-transform duration-500 ease-in-out
                    bg-white px-6 py-3 rounded-full shadow font-semibold text-[#1A1A7A] hover:scale-105`}
                >
                  {clickMessages[clickCount]}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-[#1A1A7A] mt-6">
              <h2 className="text-xl font-bold mb-2">Thank you! 💌</h2>
              <p className="text-sm">Your message has been sent successfully.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Message;