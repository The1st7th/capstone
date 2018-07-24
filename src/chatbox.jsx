
import React, { Component } from 'react'

export default class chatbox extends Component {
constructor(props) {
  super(props)

  this.state = {
    username: '',
    message: '',
    messages: ["hello","hi"]
  }
  this.setusername =  this.setusername.bind(this);
  this.setmessage =  this.setmessage.bind(this);
  this.addmessage =  this.addmessage.bind(this);
}
setusername(value){
  
    this.setState({username:value});
}
setmessage(value){
   
    this.setState({message:value});
}
addmessage(){
 var temp = this.state.messages.slice();
 temp.push(this.state.message);
 console.log(temp);
 this.setState({messages:temp},()=>{console.log(this.state.messages)});
 
}

post(){
    var temp=[];
    for (var i = 0; i < this.state.messages.length;i++){
        temp.push(<div>{this.state.username}    :{this.state.messages[i]}</div>);
    }
    return temp;
//     var messages= [];
//     for(var i =0; i < this.state.messages.length ; i++){
//        console.log(this.state.messages[i]);
//        var temp = <div key={i}>{this.state.messsages[i]}</div>;
//        messages.push(temp);
//     }
//     return messages;
// }
}
  render() {
  

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">ChatBox</div>
                        <hr/>
                        {this.post()}
                    </div>
                    <div className="card-footer">
                        <input type="text" placeholder="Username" value={this.state.username} onChange={(e)=>this.setusername(e.target.value)} className="form-control"/>
                        <br/>
                        <input type="text" placeholder="Message" value={this.state.message} onChange={(e)=>this.setmessage(e.target.value)} className="form-control" />
                        <br/>
                        <button className="btn btn-primary form-control" onClick={(e)=>this.addmessage()}>Send</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

