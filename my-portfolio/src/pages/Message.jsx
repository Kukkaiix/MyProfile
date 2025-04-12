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
      setClickCount((prev) => prev + 1);
    } else {
      setSent(true);
    }
  };

  // 🔊 Autoplay Background Music
  useEffect(() => {
    const tryPlay = () => {
      if (!audioRef.current || muted) return;

      audioRef.current.volume = 0.3;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const context = new AudioContext();
          context.resume().then(() => {
            audioRef.current?.play().catch(() => {});
          });
        });
      }
    };

    tryPlay();
    window.addEventListener('click', tryPlay, { once: true });
    return () => window.removeEventListener('click', tryPlay);
  }, [muted]);

  // 🎛️ Mute toggle handler
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      if (!muted) audioRef.current.play();
    }
    setMuted(!muted);
  };

  // ⏱️ Auto Redirect after Success
  useEffect(() => {
    if (sent) {
      setRedirecting(true);
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer);
    }
  }, [sent, navigate]);

  return (
    <div className="flex flex-col min-h-screen font-mono bg-[#1e1e1e] text-[#d4d4d4] relative">
      <audio ref={audioRef} src="/audio/coffee.mp3" loop preload="auto" autoPlay />

      <MusicToggle muted={muted} toggleMute={toggleMute} />
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
  <div className="max-w-xl w-full shadow-xl rounded-lg overflow-hidden border border-[#3c3c3c] bg-[#1e1e1e]">
    
    {/* VS Code Header */}
    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      <span className="ml-4 text-sm text-gray-300 font-mono">Message.jsx</span>
    </div>

    {/* Content inside editor box */}
    <div className="p-6 bg-[#1e1e1e] text-[#d4d4d4]">
      <h1 className="text-center text-2xl font-bold text-[#9cdcfe] mb-6">
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
  </div>
</main>

      <Footer />
    </div>
  );
};

export default Message;