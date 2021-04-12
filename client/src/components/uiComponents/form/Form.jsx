import React from 'react'
import "./Form.css"
import axios from 'axios'

export default function Form({ setRefresh }) {
  const addbook = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const pages = e.target[1].value;
    const PORT = process.env.PORT || 4001;
    axios.post(`http://localhost:${PORT}/books/add/`, { book: { name, pages } })
      .then((res) => {
        setRefresh(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <React.Fragment>
      <form class="books-form" onSubmit={addbook}>
        <span className="input">
          <label htmlFor="title">Book Title</label>
          <input id="title" type="text" />
        </span>
        <span className="input">
          <label htmlFor="author">Book Author</label>
          <input id="author" type="text" />
        </span>
        <span className="input">
          <label htmlFor="pages">Book Pages</label>
          <input id="pages" type="number" />
        </span>
        <span className="input">
          <label htmlFor="year">Book Year</label>
          <input id="year" type="number" />
        </span>
        <span className="input">
          <label htmlFor="country">Book Country</label>
          <input id="country" type="text" />
        </span>
        <span className="input">
          <label htmlFor="language">Book Language</label>
          <input id="language" type="text" />
        </span>
        <span className="input">
          <label htmlFor="link">Book Link</label>
          <input id="link" type="text" />
        </span>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  )
}
