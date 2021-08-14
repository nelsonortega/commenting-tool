import './Container.css';
import React from 'react';

interface IContainerProps {
  children: React.ReactNode
}

function Container(props: IContainerProps) {
  return (
    <div className="container-component">
      <div className="children-container-component">
        {props.children}
      </div>
    </div>
  );
}

export default Container;