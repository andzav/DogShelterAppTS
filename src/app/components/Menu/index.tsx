import * as React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

interface IAppProps{
  isMobile: boolean;
  logo: string;
}

function menu(props: IAppProps) {
  const selectedClass = props.isMobile ? 'menu_mobile' : 'menu';
  return (
    <div className={selectedClass}>
      <Link to="/home">
        <img className="logoImg" src={props.logo} alt=""/>
      </Link>
      <ul>
        <li><Link to="/">First page</Link></li>
        <li><Link to="/home">Home</Link></li>
      </ul>
    </div>
  );
}

export default menu;
