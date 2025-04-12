import React from 'react';

const StatusBar = () => {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center px-4 text-sm">
      <span>Git: main</span>
      <span className="ml-auto">Ln 1, Col 1</span>
    </div>
  );
};

export default StatusBar;