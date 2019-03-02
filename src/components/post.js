import React from 'react';

import Coments from './coments'

export default class post extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            coments:[],
            newComentText: ''
                           
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    };

    handleSubmit(e){
        this.setState({
            coments:[
                ...this.state.coments,
                {text: this.state.newComentText}
            ]
        });

        this.setState({newComentText: ''});

        e.preventDefault();
    }

    handleTextChange(e){
        this.setState({newComentText: e.target.value})
    }
    
    
    
    render(){
       return <div>
           <h2>{this.props.title}</h2>
           <form onSubmit={this.handleSubmit}>
               <textarea value={this.state.newComentText} onChange={this.handleTextChange}/>
               <button type="submit">Comentar</button>
           </form>
           {this.state.coments.map((coments,index)=>{
               return <Coments key={index} text={coments.text}/>
           })}
       </div> 
    }
}