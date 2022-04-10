import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CardDisplay from './components/movieCard';
import ReviewForm from './components/review';
import RatingStars from './components/RatingPage';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <CardDisplay />
    <ReviewForm />
    <RatingStars />
  </React.StrictMode>,
  document.getElementById('root')
);