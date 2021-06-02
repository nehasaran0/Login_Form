


/////////////////////-----------------form-------------------////////////////



import React from 'react';
import { Component } from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state= {NAME:" ", 
                     EMAIL: " ", 
                     NUMBER:" ",
                     ABOUTYOU: ""
                    }
    }
// hendlename=(event)=>{
//     this.setState({NAME:event.target.value})
// }
// hendleemail=(event)=>{
//     this.setState({EMAIL:event.target.value})
// }
// hendlenumber=(event)=>{
//     this.setState({NUMBER:event.target.value})
// }
// hendlemessage=(event)=>{
//     this.setState({ABOUTYOU:event.target.value})
// }


hendleChange=(event)=>{
   this.setState({[event.target.name] :event.target.value})
}


hendlesubmit=(event)=>{
    alert(`NAME: ${this.state.NAME}
           EMAIL:${this.state.EMAIL}
           NUMBER:${this.state.NUMBER}
           ABOUT YOU:${this.state.ABOUTYOU}`);
    event.preventDefault();
}

    render(){
        return(

            <div>
              <form  onSubmit={this.hendlesubmit}>
              <label >NAME</label><br/>
              <input type="text" value={this.state.NAME}
              onChange={this.hendleChange} name="NAME"/><br/>

              <label>EMAIL</label><br/>
              <input type="email" value={this.state.EMAIL}
              onChange={this.hendleChange} name="EMAIL"/><br/>
            
              <label>NUMBER</label><br/>
              <input type="number" value={this.state.NUMBER}
              onChange={this.hendleChange} name="NUMBER"/><br/>

              <label>ABOUT YOU</label><br/>
              <textarea value={this.state.ABOUTYOU} 
              onChange={this.hendleChange} name="ABOUTYOU"/><br/>
 
             <input className="submit" type="submit" value="send"/>
             </form>
            </div>
        )
    }
};
export default Form;