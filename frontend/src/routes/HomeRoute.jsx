import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <h1>
        <TopNavigationBar className="top-nav-bar"
          topics={props.topics}
          favPhoto={props.favPhoto}
          photos={props.photos}
          fetchPhotosAndTopic={props.fetchPhotosAndTopic}/>
        <PhotoList className="photo-list"
          photos={props.photos}
          toggleFav={props.toggleFav}
          setClickedPhoto={props.setClickedPhoto}
          setClickedPhotoId={props.setClickedPhotoId}
          favPhoto={props.favPhoto}/>
      </h1>
    </div>
  );
};

export default HomeRoute;