import React, {useState} from 'react';
import FavIcon  from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {

  const [isClicked, setClick] = useState(false);
  console.log(props);

  const handleClick = () => {
    props.toggleFav(props.id);
    props.setFavourite(!props.isFavourite);
    console.log('FavIcon clicked');
    setClick(!isClicked);
    console.log(setClick);
  };

  return (
    <div className="photo-list__fav-icon">
      {props.isFavourite ? <FavBadge handleClick={handleClick}/> : <FavIcon handleClick={handleClick}/>}
      <div className="photo-list__fav-icon-svg">
      </div>
    </div>
  );
};

export default PhotoFavButton;