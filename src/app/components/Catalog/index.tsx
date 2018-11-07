import * as React from 'react';

import ImageWithTitle from '../ImageWithTitle';
import './index.css';

interface IAppInterface {
  imgCatalog: string[];
}

function catalog(props: IAppInterface) {
  return (
    <div className="catalog">
      <h1>Look at our dogs</h1>
      <div className="catalog_content">
        <div className="form">
          <input type="text"/>
          <input type="submit" value="Find"/>
        </div>
        <div className="catalog_images">
          {props.imgCatalog.map(image => (
            <ImageWithTitle key={image.toString()} image={image}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default catalog;
