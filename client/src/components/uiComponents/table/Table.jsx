import React from 'react'
import "./Table.css"

export default function Table({ books }) {
  console.log(books)
  return (
    <React.Fragment>
      <table>
        <tr>
          <th>Name</th>
          <th>Pages</th>
        </tr>
        {
          books &&
            books.map(bookItem => (
              <tr>
                <td>{bookItem?.name}</td>
                <td>{bookItem?.pages}</td>
              </tr>
            ))
        }
      </table>

    </React.Fragment>
  )
}
