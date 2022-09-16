import React from 'react';
import '../Styles/Books.css';
import Book from './Book';
import Form from './Form';

const Books = () => (
  <section className="book-list-container">
    <section className="book-list">
      <Book title="Hunger Games" author="Susana Collins" categories="Action" />
      <Book title="Dune" author="Frank Herbelt" categories="Science Fiction" />
      <Book
        title="Capital In The Tweenty Century"
        author="Susana Collin"
        categories="Economy"
      />
    </section>
    <Form />
  </section>
);

export default Books;
