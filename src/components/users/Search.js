import React, { Component } from 'react'

export class Search extends Component {
    state={
        text: ''
    }
    onSubmit=(e)=>{
      e.preventDefault();
      if(this.state.text===''){
            this.props.setAlert('please enter somthing','light');
      }else{
      this.props.Searchusers(this.state.text);
      this.setState({text:''})
      }
    }
    onChange=(e)=>{
        this.setState({text:e.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="search user..." value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showclear&&<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>clear</button>}
                
            </div>
        )
    }
}

export default Search
