// Project.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Project/Sidebar';
import Tabs from '../components/Project/Tabs';
import StatusBar from '../components/Project/StatusBar';
import { files as initialFiles } from '../data/files';

const Project = () => {
  const [files] = useState(initialFiles);
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const handleFileSelect = (file) => {
    if (!openTabs.find((tab) => tab.name === file.name)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveTab(file);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseTab = (tab) => {
    const filteredTabs = openTabs.filter((t) => t.name !== tab.name);
    setOpenTabs(filteredTabs);
    if (activeTab && activeTab.name === tab.name) {
      setActiveTab(filteredTabs[0] || null);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <div className="flex flex-1">
        <Sidebar files={files} onFileSelect={handleFileSelect} selectedFile={activeTab} />
        <div className="flex-1 flex flex-col">
          <Tabs openTabs={openTabs} activeTab={activeTab} onTabClick={handleTabClick} onCloseTab={handleCloseTab} />
          <div className="flex-1 p-6 overflow-auto">
            {activeTab ? (
              <pre className="bg-[#1e1e1e] p-4 rounded border border-[#3c3c3c] overflow-auto">
                {activeTab.content}
              </pre>
            ) : (
              <div className="text-center text-gray-500">Select a file to view its content</div>
            )}
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default Project;