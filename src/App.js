import React ,{useState} from 'react';
import logo from './logo.svg';

import Icon from './Components/Icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross , setIsCross] = useState(false);
  const [winMessage , setWinMessage] =useState("");

  const reLoad = () => {
    setIsCross(false)
    setWinMessage("")    
    itemArray.fill("empty",0,9)
  }

  const isWinner = () => {
    //
  }

  //when some body click on button 
  const changeItem = itemNumber => {
    //
    if(winMessage){
      return toast(winMessage,{type:"success"})
    }

    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber] = isCross?"cross" : "circle"
      setIsCross(!isCross)
    }
    else{
      return toast("already filled ", {type:"error"})
    }

    isWinner();
  }
  return (
  <Container className="p-5">
    <ToastContainer position="bottom-center"/>
    <Row>
      <Col md={6} className="offset-md-3">
      <div className="grid">
        {itemArray.map((item , index)=>(
          <Card>
          <CardBody className="box">
          <Icon name={item}/>
          </CardBody>
          </Card>
        ))}
      </div>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
