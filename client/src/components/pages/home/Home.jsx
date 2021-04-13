import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { Form, Table } from '../../uiComponents'

export default function Home() {
  const [books, setBooks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get(`https://books-lists.herokuapp.com/books`).then((res) => {
      setBooks(res.data.data);
      console.log(res.data.data);
    })
    setRefresh(false)
  }, [refresh])

  return (
    <div>
      <h1>Books</h1>
      <Form setRefresh={setRefresh} />
      <Table books={books} />
    </div>
  )
}
