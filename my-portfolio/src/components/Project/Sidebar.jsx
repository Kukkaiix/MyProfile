import React from 'react';
import { FaFolder, FaFileCode, FaChevronDown } from 'react-icons/fa';

const Sidebar = ({ files, onFileSelect, selectedFile }) => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-3rem)] w-64 bg-[#252526] border-r border-[#3c3c3c] overflow-y-auto z-40">
      <div className="flex items-center px-4 py-2 border-b border-[#3c3c3c]">
        <FaFolder className="text-[#d4d4d4] mr-2" />
        <span className="text-sm font-semibold">EXPLORER</span>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-center cursor-pointer">
          <FaChevronDown className="mr-1" />
          <span className="text-sm">projects</span>
        </div>
        <ul className="mt-2">
          {files.map((file) => (
            <li
              key={file.name}
              className={`flex items-center px-2 py-1 rounded cursor-pointer ${
                selectedFile?.name === file.name ? 'bg-[#373737]' : ''
              }`}
              onClick={() => onFileSelect(file)}
            >
              <FaFileCode className="mr-2 text-[#d4d4d4]" />
              <span className="text-sm">{file.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;