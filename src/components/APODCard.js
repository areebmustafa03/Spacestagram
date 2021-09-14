import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';


import 'font-awesome/css/font-awesome.min.css';
const APODCard = ({data}) => {

    const [isClick , setClick] = useState(false);
    
    const onClick =  () => {

        
     
        setClick(!isClick);
        
        // console.log(res.data);

        
    }
    const changeColor = isClick === true ? "#e2254d" : "black";
    return (
        <div className="col d-flex justify-content-center">
            <Card style={{ width: '50%' }}>
                <Card.Img variant="top" src={data.hdurl} />
                <Card.Body>
                    <Card.Title>{data.title} - {data.date}</Card.Title>
                    <Card.Text>
                        {data.explanation}
                    </Card.Text>
                    <button onClick={onClick} style={{fontSize: "24px",padding:"0",border: "none",background:"none"}}><i style={{color: changeColor}}className="fa fa-heart"></i></button>
                </Card.Body>
                
                
            </Card>

        </div>
    )
}



export default APODCard;
