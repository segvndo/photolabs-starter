import { useReducer } from 'react';

const initialState = {
  clickedPhoto: false,
  clickedPhotoId: null,
  isFavourite: false,
  favPhoto: [],
};

const reducer = (state, action) => {
  const { photoId } = action.payload; // Declare photoId here

  switch (action.type) {
  case 'SET_CLICKED_PHOTO':
    return { ...state, clickedPhoto: action.payload };
  case 'SET_CLICKED_PHOTO_ID':
    return { ...state, clickedPhotoId: action.payload };
  case 'SET_FAVOURITE':
    return { ...state, isFavourite: action.payload };
  case 'TOGGLE_FAV':
    if (state.favPhoto.includes(photoId)) {
      return { ...state, favPhoto: state.favPhoto.filter((id) => id !== photoId) };
    } else {
      return { ...state, favPhoto: [...state.favPhoto, photoId] };
    }
  default:
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (photoId) => {
    dispatch({ type: 'TOGGLE_FAV', payload: { photoId } });
  };

  const setClickedPhoto = (value) => dispatch({ type: 'SET_CLICKED_PHOTO', payload: value });

  const setClickedPhotoId = (value) => dispatch({ type: 'SET_CLICKED_PHOTO_ID', payload: value });

  const setFavourite = (value) => dispatch({ type: 'SET_FAVOURITE', payload: value });

  return {
    ...state,
    toggleFav,
    setClickedPhoto,
    setClickedPhotoId,
    setFavourite
  };
};

export default useApplicationData;