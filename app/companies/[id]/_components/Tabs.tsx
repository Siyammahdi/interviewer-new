"use client"

import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Interview');

  return (
    <div className="mt-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-y px-8 bg-gray-50 py-2">
        {['Interview', 'Experience', 'Education', 'Projects'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab
                ? ' text-gray-600 bg-gray-200'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 px-8">
        {activeTab === 'Interview' && <p>AI Interview content will appear here.</p>}
        {activeTab === 'Experience' && <p>Experience content will appear here.</p>}
        {activeTab === 'Education' && <p>Education content will appear here.</p>}
        {activeTab === 'Projects' && <p>Projects content will appear here.</p>}
      </div>
    </div>
  );
};

export default Tabs;