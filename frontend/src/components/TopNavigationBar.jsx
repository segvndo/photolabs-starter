import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigation = (props) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        fetchPhotosAndTopic={props.fetchPhotosAndTopic} />
      <span className="top-nav-bar__likeCount"> <FavIcon favPhoto={props.favPhoto} displayAlert={props.favPhoto.length > 0} fill={props.favPhoto.length > 0 ? '#ff0000' : '#ffffff'} /></span>
    </div>
  );
};

export default TopNavigation;