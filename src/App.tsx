import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = useState('tab-1');

  const tabContent = tabs.find((tab: Tab) => tab.id === tabId);

  const onTabClick = (id: string) => {
    setTabId(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {
          tabContent
            ? `Selected tab is ${tabContent?.title}`
            : 'Tab is not selected'
        }
      </h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          tabId={tabId}
          tabContent={tabContent}
          onTabClick={onTabClick}
        />
      </div>
    </div>
  );
};
