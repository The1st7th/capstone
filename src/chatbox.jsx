import React from 'react'


export default () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">ChatBox</div>
                        <hr/>
                       <div>messages here </div>
                       <div>messages here </div>
                       <div>messages here </div>
                       <div>messages here </div>
                    </div>
                    <div className="card-footer">
                        <input type="text" placeholder="Username" value=""  className="form-control"/>
                        <br/>
                        <input type="text" placeholder="Message" className="form-control" value=""/>
                        <br/>
                        <button className="btn btn-primary form-control">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
