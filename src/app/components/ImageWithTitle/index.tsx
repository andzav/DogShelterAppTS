import * as React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

interface IAppProps {
  image: string;
}

function imageWithTitle(props: IAppProps) {
  const { image } = props;
  const breed = image.split('/')[4].replace('-', ' ');
  const breedLink = `/breed/${breed.split(' ')[0]}`;
  return (
    <Link to={breedLink}>
      <figure className="imageViewStyle">
        <img src={image} alt={breed}/>
        <figcaption>{breed}</figcaption>
      </figure>
    </Link>
  );
}

export default imageWithTitle;
