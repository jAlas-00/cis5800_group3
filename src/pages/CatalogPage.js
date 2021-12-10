import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { Button, Form } from 'react-bootstrap'
import { collection, getDocs, doc, updateDoc, addDoc} from 'firebase/firestore'


function CatalogPage () {
    const [stateVariable, setStateVariable] = useState([])
    const firestoreCollectionRef = collection(db, "Books")
    const checkedBooksRef = collection(db, 'CheckoutBooks')

    const [showBtn,setShowBtn] = useState(false)

    let booknumber = 0;
    let authorArray = []
    let isbnArray = []
    let titleArray = []
    let dueDate = Math.floor((Math.random() * 10) + 1) + ' Days'

    const updateQuantity = async (id, quantity) => {
        const userDoc = doc(db, "Books", id);
        const newFields = { quantity: quantity - 1 };
        await updateDoc(userDoc, newFields);
        window.location.reload()
    };
    //start here
    const createCheckedBook = async (clicked) => {
        let tempnum = (clicked.target.id) - 1
        authorArray = (authorArray[tempnum])
        isbnArray = (isbnArray[tempnum])
        titleArray = (titleArray[tempnum])
        console.log(authorArray, isbnArray, titleArray, dueDate)
        await addDoc(checkedBooksRef, {
            Author: authorArray, 
            ISBN: isbnArray,
            Title: titleArray,
            dueDate: dueDate,
        })
        setShowBtn(true)
    }

   useEffect(() => {
    const getDataFromCollection = async () => { 

      const documentData = await getDocs(firestoreCollectionRef); //get Documents in Firestore
      setStateVariable(documentData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(stateVariable)

    getDataFromCollection();
  }, []);

    return (
        <div className='container'>
            <h1 style={{textAlign: 'center'}}>Catalog Page</h1>
            <Form.Control placeholder="Search Catalog" style={{margin: '25px'}}/>
            {stateVariable.map((parameter) => { //runs through an array with the imported data and prints the data
                        return (
                            authorArray.push(parameter.Author),
                            isbnArray.push(parameter.ISBN),
                            titleArray.push(parameter.Title),
                            parameter.booknumber = booknumber++,
                            <div>
                                <h4>Title: {parameter.Title}</h4>
                                <h4>Authors: {parameter.Author}</h4>
                                <h4>ISBN: {parameter.ISBN}</h4>
                                <h4>Quantity: {Number(parameter.quantity)}</h4>
                                <Button style={{ backgroundColor: '#668fbf'}} id={booknumber} onClick={createCheckedBook}>Select This Book</Button>
                                {showBtn === true?
                                <Button style={{ backgroundColor: '#668fbf', marginLeft: '.5em'}} onClick={() => {updateQuantity(parameter.id,parameter.quantity)}}>Confirm</Button>:null}
                                
                            </div>
                        );
                    })}
        </div>
    )
}

export default CatalogPage
