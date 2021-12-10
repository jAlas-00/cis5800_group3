import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Modal } from 'react-bootstrap'
import { db } from '../firebase'
import { collection, addDoc, doc} from 'firebase/firestore'

const ApiPage = () => {

    const firestoreCollectionRef = collection(db, "Books")

    let booknumber = 0;
    let authorArray = []
    let isbnArray = []
    let titleArray = []

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [bookQuantity, setbookQuantity] = useState(0)
    const [book, setBook] = useState('')
    const [result, setResult] = useState([])
    const apiKey = 'AIzaSyBdq_9HmKocPLH88Uy4Gc_D1XHbdzgpGTI'

    function handleChange(event){
        const book = event.target.value;
        setBook(book);
    }

    const addBook = async (clicked) => {
        let authorInfo= []
        let isbnInfo = []
        let titleInfo = []
        let tempnub = (clicked.target.id)-1

        authorInfo = (authorArray[tempnub]);
        isbnInfo = (isbnArray[tempnub]);
        titleInfo = (titleArray[tempnub]);

        console.log(authorInfo, isbnInfo, titleInfo,bookQuantity)
        
        await addDoc(firestoreCollectionRef, {Author: authorInfo, ISBN: isbnInfo, Title: titleInfo, quantity: Number(bookQuantity)})
        handleShow()
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key='+apiKey+'&maxResults=10')
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);
        })
    }

    return (
        <div className='container'>
            <h1 style={{textAlign: 'center'}}>Search for Books</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Control onChange={handleChange} placeholder="Search for Books" />
            <Button style={{ backgroundColor: '#668fbf', marginTop: '15px'}} variant="secondary" type='submit' >Submit</Button>
            </Form>

            {result.map(book =>
            (
                book.booknumber = booknumber++,
                authorArray.push(book.volumeInfo.authors),
                isbnArray.push(book.volumeInfo.industryIdentifiers[0].identifier),
                titleArray.push(book.volumeInfo.title),
                <>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}
                style={{
                    marginTop: '15px'
                }}/>
                <Button style={{ backgroundColor: '#668fbf'}} id={booknumber} onClick={addBook}>{booknumber}. Add to Catalog</Button>
                <Form.Control type='number' onChange={(event) => {setbookQuantity(event.target.value)}} placeholder="Enter Quantity"
                style={{
                    marginTop: '15px',
                    width: '280px'
                }} />
                </>
            ))}
            <div style={{ marginBottom: '250px'}}></div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The Book has been added to the Library Catalog
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Return to Page
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ApiPage
