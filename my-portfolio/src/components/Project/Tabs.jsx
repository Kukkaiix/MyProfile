import React from 'react';

const Tabs = ({ openTabs, activeTab, onTabClick, onCloseTab }) => {
  return (
    <div className="flex bg-[#2d2d2d] border-b border-[#3c3c3c]">
      {openTabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeTab.name === tab.name ? 'bg-[#1e1e1e]' : ''
          }`}
          onClick={() => onTabClick(tab)}
        >
          <span className="mr-2">{tab.name}</span>
          <button onClick={() => onCloseTab(tab)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;