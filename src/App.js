
import './App.css';
import React, {useState,useEffect} from 'react';
import NavbarComponent from './components/NavbarComponent';

import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import APODCard from './components/APODCard';
import Spinner from './components/Spinner';
function App() {

  const [data,setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  useEffect( ()=>{
   
    async function loadData(){

    
      let arr = [];
    
      
      const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
      arr.push(result.data);
      console.log(arr);
      setData(arr);
    }
      
    
    loadData()


  },[])

 
  return (
    <div>
      
      <NavbarComponent title="Spacestagram"  message="Brought to you by NASA's Astronomy Photo of the Day (APOD) API"/>
  
      <div  style={{textAlign:'center'}}>
        <DatePicker selected={startDate} onChange={async (date)=>{
          setLoading(true);
          setStartDate(date)
          let day  = new Date(date)
          
          let dd = day.getDate();
          let mm = day.getMonth()+1; 
          let yyyy = day.getFullYear();
          if(dd<10) 
          {
              dd='0'+dd;
          } 

          if(mm<10) 
          {
              mm='0'+mm;
          } 
          let dateSelected = yyyy+'-'+mm+'-'+dd;
          
          let arr = []; 
          const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${dateSelected}`);
          console.log(result.data);
          for(let i =0;i < result.data.length;i++){
            arr.push(result.data[i])
          }
    
          setData(arr);
          setLoading(false)
    }

        } />
      </div>
      {
        loading ? <Spinner /> :
        data.map((element,index) =>(
          <div>
              <APODCard key={element} data={element} />
              <br />
          </div>
     ))
      }
     
    </div>
  );
}

export default App;
