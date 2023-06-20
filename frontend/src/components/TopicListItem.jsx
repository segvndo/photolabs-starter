import React from 'react';
import '../styles/TopicListItem.scss';


const TopicListItem = (props) => {

  return (
    <div className="topic-list__item">
      <span href="#topics" onClick={()=>props.topicClick(props.id)}>
        <span>
          {props.title}
        </span>
      </span>
    </div>
  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
};

export default TopicListItem;