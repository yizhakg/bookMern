import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { Form, Table } from '../../uiComponents'

export default function Home() {
  const [books, setBooks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const PORT = process.env.PORT ;
    axios.get(`http://localhost:${PORT}/books/`).then((res) => {
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
