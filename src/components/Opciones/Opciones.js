import React,{Component} from 'react';


export default class Opciones extends Component{
    render(){
        return<>
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={() => this.props.handlerClick(this.props.next+"a")}>A </button>
                    <h2>{this.props.opc.a}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={() => this.props.handlerClick(this.props.next+"b")}>B</button>
                    <h2>{this.props.opc.b}</h2>
                </div>
            </div>
            </>
    }

}