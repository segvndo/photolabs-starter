import React, {useState} from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {

  const handleTopicClick = (topicId) => {
    props.fetchPhotosAndTopic(topicId);
  };

  return (
    <div className="top-nav-bar__topic-list">
      <h3> {props.title} </h3>
      {props.topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          topicClick={handleTopicClick}
        />
      ))}
    </div>
  );
};



TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
};

export default TopicList;