import React from 'react';

import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
  tabContent: Tab | undefined;
  onTabClick: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  tabContent,
  onTabClick,
}) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames(
                {
                  'is-active': tabId === tab.id,
                },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent ? tabContent.content : 'content is not found'}
      </div>
    </>
  );
};
