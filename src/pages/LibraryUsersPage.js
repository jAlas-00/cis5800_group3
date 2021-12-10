import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { Form, Button } from 'react-bootstrap'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, } from 'firebase/firestore'

function LibraryUsersPage() {

    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState(0)
    const [showBtn,setShowBtn] = useState(false)

    //Report Capability
    const [stateVariable, setStateVariable] = useState([]) //state variable as an empty array
    const firestoreCollectionRef = collection(db, "users") // db & name of the collection in firestore, reference

    const buttonSwitch = () => {
    setShowBtn(true)
    }

    //Create Capability
    const createUser = async () => {
        await addDoc(firestoreCollectionRef, {name: newName, age: Number(newAge)})
        window.location.reload()
    };

    //Update
    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id); //create isnstance of a doc
        const newFields = { age: age + 1 }; //you can just put this logic inside updateDoc but it helps to see it like this
        await updateDoc(userDoc, newFields);
    };

    //Delete
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id); //grab the ref to that specific doc
        await deleteDoc(userDoc);
        window.location.reload()
    };

  useEffect(() => {//auto querry the data on load without presssing buttons
    const getDataFromCollection = async () => { //Function that Reports data

      const data = await getDocs(firestoreCollectionRef); //get Documents in Firestore, create varialbe to rep the data you're getting

      setStateVariable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //map through each doc and get specific data, doc.data() returns object but not id,
    };

    getDataFromCollection();
  }, []);

    return (
        <div className='container'>
            <Form>
                <h1>This is the Library Users Page</h1>
                <Form.Control placeholder="Enter Name" onChange={(event) => {setNewName(event.target.value)}}/>
                <Form.Control placeholder="Enter Age" onChange={(event) => {setNewAge(event.target.value)}}/>
                <Button style={{ marginTop: '15px', marginBottom: '15px'}}variant="secondary" onClick={createUser}>Submit Info</Button>
                
                <h2>Users</h2>
                <div>
                    {stateVariable.map((parameter) => { //runs through an array with the imported data and prints the data
                        return (
                            <div>
                                <h4>Name: {parameter.name}</h4>
                                <h4>Age: {parameter.age}</h4>
                                <Button style={{ backgroundColor: '#668fbf'}} onClick={buttonSwitch}>Select</Button>
                                {/* <Button onClick={() => {updateUser(parameter.id,parameter.age)}}>Increase</Button> */}
                                {showBtn === true?
                                <Button style={{ backgroundColor: '#668fbf', marginLeft: '15px'}} onClick={() => {deleteUser(parameter.id)}}>Delete</Button>:null}
                                
                            </div>
                        );
                    })}
                </div>
                
                
            </Form>   
        </div>
    )
}

export default LibraryUsersPage
