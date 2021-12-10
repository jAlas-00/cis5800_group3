import React, { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Doughnut, Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'; //required

const ReportPage = () => {

  const [stateVariable, setStateVariable] = useState([])
  const firestoreCollectionRef = collection(db, "Books")
  let titleArray= []
  let datasetQuantity = []


  useEffect(() => {
    const getDataFromCollection = async () => { 
    
      const documentData = await getDocs(firestoreCollectionRef); //get Documents in Firestore
      setStateVariable(documentData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

      // {stateVariable.map((parameter) => {
      // return (titleArray.push(parameter.Title));})}
      // {stateVariable.map((parameter) => {
      // return (datasetQuantity.push(parameter.quantity));})}

    getDataFromCollection();
    console.log(titleArray)
    console.log(datasetQuantity)
    
  }, []);

  let data = {
    labels: titleArray,

    datasets: [{
      data: datasetQuantity,
      backgroundColor: ['rgba(0, 140, 255, 0.34)','rgba(0, 50, 255, 0.34)']
}]}

    return (
        <div className='container'>
            <div style={{ width: '400px', margin: '0 auto'}}>
              Book Count:
      {stateVariable.map((parameter) => {
      return (datasetQuantity.push(parameter.quantity),titleArray.push(parameter.Title));})}
      <h2>Quantity of each book in the Library Catalog</h2>         
            <Doughnut data={data}/>
            <Bar data={data}/>
            </div>
        </div>
    )
}

export default ReportPage
