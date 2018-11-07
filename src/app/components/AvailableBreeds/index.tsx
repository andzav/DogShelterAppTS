import * as React from 'react';

import { LoadImages } from '../../store/domains/breeds/actions';
import Gallery from '../Gallery';
import './index.css';

interface IAppProps{
  count: number;
  imgAvailable: string[];
  minDisplayAmount: number;
  title: string;
  onClick: LoadImages;
}

function availableBreeds(props: IAppProps) {
  const {
    imgAvailable,
    onClick,
    minDisplayAmount,
    count,
  } = props;
  return (
    <div className="availableBreeds">
      <h1>{props.title}</h1>
      <Gallery
        imgAvailable={imgAvailable}
        onClick={onClick}
        count={count}
        minDisplayAmount={minDisplayAmount}/>
    </div>
  );
}

export default availableBreeds;
