import React from 'react';
import Historia from "./components/Historia/Historia";
import Opciones from "./components/Opciones/Opciones";
import Recordatorio from "./components/Recordatorio/Recordatorio";
import data from '../src/components/data.json';
import "./index.css";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
        id:"1"
    }
    this.arrayOpc=[];
    this.opcSelect="";
    this.conta = 1;
    this.handlerClick = this.handlerClick.bind(this);
}

componentDidMount() {
  alert("Bienvenido a tu propia historia");
}

componentWillUnmount() {
  alert("Fin de tu historia");
}
handlerClick(opcion){
  if(this.conta<5){
    this.setState({
      id: opcion
  })
  }else{
    this.componentWillUnmount();
  }
    this.conta++;
    this.opcSelect = opcion.substring(1,2).toUpperCase();
    this.arrayOpc.push(this.opcSelect);
}

render(){
    return(
    <div className="App">
      <div className="layout">
        {
          data
          .filter(element => element.id === this.state.id)
          .map((element) =><Historia his={element.historia}/>
          )
        }
        {
          data
          .filter(element => element.id === this.state.id)
          .map((element) =><Opciones handlerClick = {this.handlerClick} opc={element.opciones} next={parseInt(element.id) + 1}/>
          )
        }
        <Recordatorio decision={this.opcSelect} historial={this.arrayOpc}/>

      </div>
    </div>
    )}
}

export default App;
