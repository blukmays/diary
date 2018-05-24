import React, { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props);
    //state
      this.state= {
        title: '',
          body:''
      };
      //bind
      this.handleChange= this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
//handle change
  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });
  }
//handle submit
  handleSubmit(e){
    e.preventDefault();
    console.log('submit');
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                    onChange={this.handleChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    className="form-control no-border"
                    placeholder="Title..."
                    required
                />
              </div>

                <div className="form-group">
                    <input
                        onChange={this.handleChange}
                        value={this.state.body}
                        type="text"
                        name="body"
                        className="form-control no-border"
                        placeholder="Body"
                        required
                    />
                </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12 ">Save</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
