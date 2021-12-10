import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

function BookList() {
  let count = 0
  const checkedBooksRef = collection(db, 'CheckoutBooks')
  const [stateVariable, setStateVariable] = useState([])

  useEffect(() => {
    const getDataFromCollection = async () => { //Function that Reports data

      const data = await getDocs(checkedBooksRef); //get Documents in Firestore, create varialbe to rep the data you're getting

      setStateVariable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //map through each doc and get specific data, doc.data() returns object but not id,
    };

    getDataFromCollection();
  }, []);

    return (
    <div>
      <h1>Checkedout Books</h1>
      <Table striped hover borderless style={{fontFamily: 'Times New Roman'}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Authors</th>
      <th>ISBN</th>
      <th>Title</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
    {stateVariable.map(parameter => (
      count = count + 1,
          <><tr>
              <th>{count}</th>
              <th>{parameter.Author}</th>
              <th>{parameter.ISBN}</th>
              <th>{parameter.Title}</th>
              <th>{parameter.dueDate}</th>
          </tr></>
        ))}
  </tbody>
  </Table>
        
</div>
    )
}

export default BookList
