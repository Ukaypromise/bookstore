import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Book.css';
import progress from '../images/progress.png';

const Book = (props) => {
  const { title, author, categories } = props;
  return (
    <div className="book-container">
      <div className="block-left">
        <div className="info">
          <span className="categories">{categories}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="btns">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="block-row">
        <div className="stats">
          <figure>
            <img
              className="progress-circle"
              alt="progress-circle"
              src={progress}
            />
          </figure>
          <div className="progress-text">
            <span className="stat-number">64%</span>
            <span className="stat-text">Completed</span>
          </div>
        </div>
        <div className="progress-info">
          <span className="chapter-title">Current chapter</span>
          <span className="chapter-number">Chapter 3</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};
export default Book;
