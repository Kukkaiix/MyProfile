import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import MessageForm from '../components/Message/MessageForm';
import MusicToggle from '../components/Message/MusicToggle';
import SuccessMessage from '../components/Message/SuccessMessage';

const Message = () => {
  const [sent, setSent] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [muted, setMuted] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleMoveButton = () => {
    if (clickCount < 3) {
      setClickCount(prev => prev + 1);
    } else {
      setSent(true);
    }
  };

  // 🎵 Try autoplay
  useEffect(() => {
    const tryPlay = () => {
      if (!audioRef.current || muted) return;

      audioRef.current.volume = 0.3;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(err => {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const context = new AudioContext();
          context.resume().then(() => {
            audioRef.current?.play().catch((err2) => {
              console.warn("Still blocked:", err2);
            });
          });
        });
      }
    };

    tryPlay();
    window.addEventListener('click', tryPlay, { once: true });
    return () => window.removeEventListener('click', tryPlay);
  }, [muted]);

  // 🔄 Mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      if (!muted) audioRef.current.play();
    }
    setMuted(!muted);
  };

  // ⏳ Redirect after send
  useEffect(() => {
    if (sent) {
      setRedirecting(true);
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [sent, navigate]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F6F4FD] text-[#1A1A7A] relative">
      <audio
        ref={audioRef}
        src="/audio/coffee.mp3"
        loop
        preload="auto"
        autoPlay
      />

      <MusicToggle muted={muted} toggleMute={toggleMute} />
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-[#CFC3F3] max-w-xl w-full rounded-[30px] p-8 shadow-xl relative" data-aos="fade-up">
          <h1 className="text-center text-2xl font-extrabold text-[#1A1A7A] mb-6">
            Leave a Message 💬
          </h1>

          {!sent ? (
  <MessageForm
    clickCount={clickCount}
    onMoveButton={handleMoveButton}
    onSent={() => setSent(true)}
  />
) : redirecting ? (
  <SuccessMessage />
) : null}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Message;