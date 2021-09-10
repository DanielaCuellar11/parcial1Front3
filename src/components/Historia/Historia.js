import React,{Component} from 'react';


export default class Historia extends Component{

    render(){
        return<>
            <div className = "historia">
                <h1>{this.props.his}</h1>
            </div>
        </>
    }

}