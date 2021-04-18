import React from 'react'
import "./Table.css"
import axios from 'axios'

export default function Table({ books,setRefresh }) {
  const deleteBook = (id) => {
    let deletePassword = prompt("enter password")
    if (deletePassword === "123123") {
      axios.delete(`${process.env.REACT_APP_URL}delete/${id}`)
        .then(res => {
          setRefresh(true)
        }).catch(err => { console.log(err); })
    }else{
      alert("wrong password contact site manager")
    }
  }
  return (
    <React.Fragment>
      <table>
        <tr>
          {/* <th>Img</th> */}
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Year</th>
          <th>Country</th>
          <th>Language</th>
          <th>Link</th>
          <th>Delete</th>
        </tr>
        {
          books &&
          books.map(bookItem => (
            <tr>
              {/* <td>{bookItem.imageLink}</td> */}
              <td>{bookItem.title}</td>
              <td>{bookItem.author}</td>
              <td>{bookItem.pages}</td>
              <td>{bookItem.year}</td>
              <td>{bookItem.country}</td>
              <td>{bookItem.language}</td>
              <td className="siteBtn"><a href={bookItem.link}>site</a></td>
              <td className="deleteBtn" onClick={() => deleteBook(bookItem._id)}>X</td>
            </tr>
          ))
        }
      </table>

    </React.Fragment>
  )
}
