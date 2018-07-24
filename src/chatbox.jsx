
import React, { Component } from 'react'

export default class chatbox extends Component {
constructor(props) {
  super(props)

  this.state = {
    username: '',
    message: '',
    messages: []
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
                    </div>
                    <div className="card-footer">
                        <input type="text" placeholder="Username" value={this.state.username} onChange={(e)=>this.setusername(e.target.value)} className="form-control"/>
                        <br/>
                        <input type="text" placeholder="Message" value={this.state.message} onChange={(e)=>this.setmessage(e.target.value)} className="form-control" />
                        <br/>
                        <button className="btn btn-primary form-control" onClick={this.addmessage()}>Send</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

