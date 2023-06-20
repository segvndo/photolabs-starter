import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import TopicList from './components/TopicList';
import useApplicationData from './components/hooks/useApplicationData';


const App = () => {

  const { clickedPhoto, clickedPhotoId, isFavourite, favPhoto, toggleFav, setClickedPhoto, setClickedPhotoId, setFavourite } = useApplicationData();
  console.log({ toggleFav });

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  
  // Makes a GET request to update photos and topics.
  const fetchPhotosAndTopics = () => {
    console.log("fetching photos and topics");
    fetch("/api/photos")
      .then((photosResponse) => photosResponse.json())
      .then((photosData) => {
        console.log("photosData here:", photosData);
        setPhotos(photosData);
      })
      .catch((error) => {
        console.log("Error fetching photos:", error);
      });

    fetch("/api/topics")
      .then((topicsResponse) => topicsResponse.json())
      .then((topicsData) => {
        console.log("topicsData here:", topicsData);
        setTopics(topicsData);
      })
      .catch((error) => {
        console.log("Error fetching topics:", error);
      });
  };
  useEffect(() => {
    fetchPhotosAndTopics();
  }, []);

  // Backend request to fetch photos for specific topic
  const fetchPhotosAndTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log("Error fetching photos by topic:", error));
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        setPhotos={setPhotos}
        topics={topics}
        setTopics={setTopics}
        setClickedPhoto={setClickedPhoto}
        setClickedPhotoId={setClickedPhotoId}
        toggleFav={toggleFav}
        favPhoto={favPhoto}
        fetchPhotosAndTopic={fetchPhotosAndTopic} />
      {clickedPhoto && (<PhotoDetailsModal
        toggleFav={toggleFav}
        isFavourite={isFavourite}
        setFavourite={setFavourite}
        setClickedPhoto={setClickedPhoto}
        setClickedPhotoId={setClickedPhotoId}
        photo={photos.find((photo) => photo.id === clickedPhotoId)}
        favPhoto={favPhoto} />)}
      <TopicList
        topics={topics}
        fetchPhotosAndTopic={fetchPhotosAndTopic} />
    </div>
  );
};

export default App;