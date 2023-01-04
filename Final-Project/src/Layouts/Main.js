import React from "react";
import Body from "./Body"
import Bottom from "./Bottom"
import Nav from "./Nav"
import { Layout, Menu, Breadcrumb } from 'antd';
import {Route, BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';


const Main =()=>{
  return(
    <>
      <Router>
      <Layout>
        <Nav/>
        <Body/>
        <Bottom/>
      </Layout>
    </Router>
    </>
  )
}
export default Main