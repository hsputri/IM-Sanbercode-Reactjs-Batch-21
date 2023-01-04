import React, { useContext } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {Route, BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';
import Home from "../Pages/Home"
import Movies from "../Pages/Movies"
import Games from "../Pages/Games"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import MovieDetail from "../Pages/MovieDetail"
import SettingMovie from "../Pages/SettingMovie"
import SettingGame from "../Pages/SettingGame"

import { UserContext } from "../Context/UserContext";


const Body =()=>{

  const [user] = useContext(UserContext)

  const LoginRoute = ({...props}) =>{
    if (user === null){
      return <Route {...props} />
    }else{
      return<Redirect to="/" />
    }
  }
  const PrivateRoute = ({user, ...props}) =>{
    if (user){
      return <Route {...props} />
    }else{
      return<Redirect to="/login" />
    }
  }

  return(
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/games" component={Games} />
          <LoginRoute exact path="/register" component={Register} />
          <LoginRoute exact path="/login" component={Login} />
          <Route exact path="/movie-detail" component={MovieDetail}/>
          <PrivateRoute user={user} exact path="/set-movie" component={SettingMovie}/>
          <PrivateRoute user={user} exact path="/set-game" component={SettingGame}/>

        </Switch>
  )
}
export default Body