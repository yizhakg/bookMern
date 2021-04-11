import React from 'react'
import "./Table.css"

export default function Table({ books }) {
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
              <td><a href={bookItem.link}>site</a></td>
            </tr>
          ))
        }
      </table>

    </React.Fragment>
  )
}
