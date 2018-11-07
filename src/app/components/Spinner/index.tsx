import * as React from 'react';

import logoSvg from '../../../logo.svg';
import './index.css';

export default function spinner() {
  return (
    <div className="spinner">
      <img src={logoSvg} alt="logo"/>
    </div>
  );
}
