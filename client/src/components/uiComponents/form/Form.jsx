import React from 'react'
import "./Form.css"
import axios from 'axios'

export default function Form({ setRefresh }) {
  const addbook = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const pages = e.target[1].value;
    axios.post('http://localhost:4001/books/add', { book: { name, pages } })
      .then((res) => {
        console.log(res)
        setRefresh(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <React.Fragment>
      <form class="books-form" onSubmit={addbook}>
        <div className="input">
          <label htmlFor="name">Book Name</label>
          <input id="name" type="text" />
        </div>
        <div className="input">
          <label htmlFor="pages">Book Pages</label>
          <input id="pages" type="number" />
        </div>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  )
}
