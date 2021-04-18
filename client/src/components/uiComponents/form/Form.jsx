import React from 'react'
import "./Form.css"
import axios from 'axios'

export default function Form({ setRefresh }) {
  const addbook = (e) => {
    e.preventDefault();
    const book = {
     title:e.target[0].value,
     author:e.target[1].value,
     pages:e.target[2].value,
     year:e.target[3].value,
     country:e.target[4].value,
     language:e.target[5].value,
     link:e.target[6].value,
  }
    axios.post(`${process.env.REACT_APP_URL}add/`, {book:book})
      .then((res) => {
        document.querySelector(".addConfirm").style.display="block"
        setTimeout(()=>{
          document.querySelector(".addConfirm").style.display="none"
        },2000)
        e.target.reset()
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
          <input id="title" type="text" required />
        </span>
        <span className="input">
          <label htmlFor="author">Book Author</label>
          <input id="author" type="text" required />
        </span>
        <span className="input">
          <label htmlFor="pages">Book Pages</label>
          <input id="pages" type="number" required />
        </span>
        <span className="input">
          <label htmlFor="year">Book Year</label>
          <input id="year" type="number" required />
        </span>
        <span className="input">
          <label htmlFor="country">Book Country</label>
          <input id="country" type="text" required />
        </span>
        <span className="input">
          <label htmlFor="language">Book Language</label>
          <input id="language" type="text" required />
        </span>
        <span className="input">
          <label htmlFor="link">Book Link</label>
          <input id="link" type="text" required />
        </span>
        <button class="submitBtn" type="submit">Add Book</button>
        <p className="addConfirm">book added 👍</p>
      </form>
    </React.Fragment>
  )
}
