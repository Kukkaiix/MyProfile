import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const MusicToggle = ({ muted, toggleMute }) => (
  <button
    onClick={toggleMute}
    className="fixed bottom-6 right-6 z-50 bg-[#2d2d2d] text-[#4FC1FF] p-3 rounded-full shadow hover:bg-[#3c3c3c] transition"
    aria-label="Toggle music"
  >
    {muted ? <HiVolumeOff size={22} /> : <HiVolumeUp size={22} />}
  </button>
);

export default MusicToggle;