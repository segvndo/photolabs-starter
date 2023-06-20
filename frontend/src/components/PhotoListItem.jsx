import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return (
    <div className="centered-container">
      <div className='photo-list__item'>
        <div className="photoListImageWrapper">
          <img className={props.size === 'full' ? 'photo-details-modal__image' : 'photo-list__image'}
            src={props.imageSource}
            alt={`Photo ${props.id}`}
            onClick={() => {
              props.setClickedPhoto(true);
              props.setClickedPhotoId(props.id);
            }} />
          <div className="photo-list__user-details">
            <img className='photo-list__user-profile'
              src={props.profile}
              alt={`${props.username}'s profile`} />
            <div className='photo-list__user-info'>
              <span> {props.username}</span>
              <br/>
              <span className='photo-list__user-location'> {props.location.city}, {props.location.country}</span>
            </div>
          </div>
          <PhotoFavButton
            isFavourite={props.favPhoto?.includes(props.id)}
            setFavourite={props.setFavourite}
            toggleFav={props.toggleFav}
            id={props.id} />
        </div>
      </div>
    </div>
  );
};


PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;