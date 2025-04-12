import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const MusicToggle = ({ muted, toggleMute }) => (
  <button
    onClick={toggleMute}
    className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-3 text-[#4B4BE1] hover:bg-[#eae6ff] transition-all"
    aria-label="Toggle music"
  >
    {muted ? <HiVolumeOff size={22} /> : <HiVolumeUp size={22} />}
  </button>
);

export default MusicToggle;