import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoListItem from '../components/PhotoListItem';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  console.log("hello", props.photo);
  useEffect(() => {
  }, [props.photo]);

  const arrayOfSimilarPhotos = [];
  for (let similarPhoto in props.photo.similar_photos) {
    arrayOfSimilarPhotos.push(props.photo.similar_photos[similarPhoto]);
    console.log(arrayOfSimilarPhotos);
  }

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'
        onClick={() => props.setClickedPhoto(false)}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal__images">
        {props.photo && (
          <PhotoListItem
            imageSource={props.photo.urls.regular}
            size='full'
            setFavourite={props.setFavourite}
            isFavourite={props.isFavourite}
            toggleFav={props.toggleFav}
            setClickedPhoto={props.setClickedPhoto}
            setClickedPhotoId={props.setClickedPhotoId}
            id={props.photo.id}
            favPhoto={props.favPhoto}
            username={props.photo.user.username}
            profile={props.photo.user.profile} />
        )}
      </div>
      <div className='photo-details-modal--header'>
        <h5>Similar Photos</h5>
      </div>
      <div>
        <div className="photo-details-modal__similarPhotos">
          {arrayOfSimilarPhotos.length > 0 && <PhotoList
            toggleFav={props.toggleFav}
            favPhoto={props.favPhoto}
            photos={props.photo.similar_photos}
            setClickedPhoto={props.setClickedPhoto}
            setClickedPhotoId={props.setClickedPhotoId}
          />}
        </div>
      </div>

    </div>
  );
};

export default PhotoDetailsModal;