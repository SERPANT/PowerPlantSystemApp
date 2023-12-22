import React, { useState } from 'react';
import './Accordian.css';

interface AccordianProps {
  defaultState?: boolean;
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Accordian = (props: AccordianProps) => {
  const { content, children, defaultState = false } = props;

  const [isExpanded, setExpandedState] = useState<boolean>(defaultState);

  return (
    <div>
      <div
        className='accordion'
        onClick={(event) => {
          setExpandedState(!isExpanded);

          event.stopPropagation();
        }}
      >
        {content}
        <div className='accordion-indicator'>{isExpanded ? '-' : '+'}</div>
      </div>
      <div className={`panel ${isExpanded ? 'panel-open' : 'panel-closed'}`}>
        {children}
      </div>
    </div>
  );
};
