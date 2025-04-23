import React, { useState } from 'react';
import Sidebar from '../components/Project/Sidebar';
import Tabs from '../components/Project/Tabs';
import StatusBar from '../components/Project/StatusBar';
import FileViewer from '../components/Project/FileViewer';
import { files as initialFiles } from '../data/files';
import Header from '../components/Home/Header';

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

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleCloseTab = (tab) => {
    const filtered = openTabs.filter((t) => t.name !== tab.name);
    setOpenTabs(filtered);
    if (activeTab?.name === tab.name) setActiveTab(filtered[0] || null);
  };

  return (
    
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono overflow-hidden">
      <Header />
      {/* Sidebar - Fixed */}
      <Sidebar files={files} onFileSelect={handleFileSelect} selectedFile={activeTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl-64 overflow-hidden"> {/* 🛠 use pl-64 */}
        <div className="sticky top-0 z-30 border-b border-[#3c3c3c]">
          <Tabs
            openTabs={openTabs}
            activeTab={activeTab}
            onTabClick={handleTabClick}
            onCloseTab={handleCloseTab}
          />
        </div>

        <div className="flex-1 overflow-auto px-6 pt-6 pb-12">
          <FileViewer file={activeTab} />
        </div>
      </div>

      <StatusBar />
    </div>
  );
};

export default Project;