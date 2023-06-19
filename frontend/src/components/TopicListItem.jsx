import React from 'react';
import '../styles/TopicListItem.scss';


const TopicListItem = (props) => {

  return (
    <div className="topic-list__item">
      <a href="#topics" onClick={()=>props.topicClick(props.id)}>
        <span>
          {props.title}
        </span>
      </a>
    </div>
  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
};

export default TopicListItem;