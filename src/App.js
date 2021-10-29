import { Component } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import About from './components/pages/About';
class App extends Component {
  state={
    users:[],
    user:{},
    loading:false,
    showbutton:false,
    alert:null
  }
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   // console.log(process.env.REACT_APP_GITHUB_CLINT_SECRET);
  //  const res=await axios.get(`https://api.github.com/users?client_id=
  //  ${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=
  //  ${process.env.REACT_APP_GITHUB_CLINT_SECRET}`);
   
  //  this.setState({users:res.data, loading: false});
   
  // }
  // serch github users after getting request from serach
  Searchusers=async text=>{
  this.setState({loading:true})
   const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`);
   
   this.setState({users:res.data.items, loading: false});
   
  }
  // get a single github user
  getUser=async(username)=>{
    this.setState({loading:true})
   const res=await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`);
   
   this.setState({user:res.data, loading: false});
  }
  // used to clear field of contact being shown 
  clearUsers=()=>{
    this.setState({users:[],loading:false});
    
  }
  // alert for empty search field
  setAlert=(msg,type)=>{
    
    this.setState({alert:{msg,type}});
    setTimeout(()=>this.setState({alert:null}),3000)
  }
  render(){
  return (
    <Router>
    
          <div className="App">
          <Navbar />
          
          <div className="container">
            <Alert alert={this.state.alert}/>
            {/* from here we are starting the routing part */}
            <Switch>
                     {/* route 1:for home page  */}
                    <Route exact path='/' render={props=>(
                      <>
                      <Search Searchusers={this.Searchusers} clearUsers={this.clearUsers} showclear={this.state.users.length>0?true:false} setAlert={this.setAlert} />
                      <Users loading={this.state.loading} users={this.state.users} />
                      </>
                    )}/>
                    {/* routing 2:for about page */}
                    <Route exact path='/about' component={About}/>
                    <Route exact path="/user/:login" render={props=>{
                      <Users {...props} getUser={this.getUser} user={this.user} loading={this.loading} />
                    }}/>
            </Switch>
            
             

          </div>
          </div>
   </Router>
  );
}
}
export default App;
