import React, {Component} from 'react';

class Login extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron">
                        <h1>Login with your favorite <b>Social Network</b></h1>

                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger btn-lg">Login with Google</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <button className="btn btn-danger btn-lg">Login with Twitter</button>
                </div>
                </div>


        );
    }
}

export default Login