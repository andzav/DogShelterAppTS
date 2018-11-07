import * as React from 'react';

import ImageWithTitle from '../ImageWithTitle';
import './index.css';

interface IAppProps {
  count: number;
  imgAvailable: string[];
  minDisplayAmount: number;
  onClick(): any;
}

function gallery(props: IAppProps) {
  const {
    minDisplayAmount,
    imgAvailable,
    onClick,
    count,
  } = props;
  const buttonStyle = count ?
    minDisplayAmount < count ? 'visibleButton' : 'hiddenButton'
    : minDisplayAmount <= imgAvailable.length ? 'visibleButton' : 'hiddenButton';
  return (
    <React.Fragment>
      <div className="galleryContainer">
        {imgAvailable.map(image => (
          <ImageWithTitle key={image.toString()} image={image}/>
        ))}
      </div>
      <button onClick={onClick} className={buttonStyle}>
        See more
      </button>
    </React.Fragment>
  );
}

export default gallery;
