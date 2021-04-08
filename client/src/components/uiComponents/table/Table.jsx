import React from 'react'
import "./Table.css"

export default function Table({ books }) {
  console.log(books)
  return (
    <React.Fragment>
      <table>
        <tr>
          <th>Img</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Year</th>
          <th>Country</th>
          <th>Language</th>
          <th>Link</th>
        </tr>
        {
          books &&
          books.map(bookItem => (
            <tr>
              <th>{bookItem.imageLink}</th>
              <th>{bookItem.title}</th>
              <th>{bookItem.author}</th>
              <th>{bookItem.pages}</th>
              <th>{bookItem.year}</th>
              <th>{bookItem.country}</th>
              <th>{bookItem.language}</th>
              <th><a href={bookItem.link}>site</a></th>
            </tr>
          ))
        }
      </table>

    </React.Fragment>
  )
}
