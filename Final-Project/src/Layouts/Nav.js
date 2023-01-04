import { Layout, Menu } from 'antd';
import { useContext } from 'react';
import { Route, BrowserRoute as Router, Link, Switch } from "react-router-dom";
import { UserContext } from '../Context/UserContext';


const { Header } = Layout;

const Nav = () =>{
  const [user, setUser] = useContext(UserContext)

  const handleLogout= ()=>{
    setUser(null)
    localStorage.removeItem("user")
  }
    return (
      <Header className="header">
        <div className="logo" />
        <Menu style={{float: 'right'}} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to = "/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to = "/movies">Movies</Link></Menu.Item>
          <Menu.Item key="3"><Link to = "/games">Games</Link></Menu.Item>
          {user === null && (
            <>
            <Menu.Item key="4"><Link to = "/login">Login</Link></Menu.Item>
            <Menu.Item key="5"><Link to = "/register">Register</Link></Menu.Item>
            </>
          )}
          {user && (
            <>
            <Menu.Item key="6"><Link to = "/set-movie">Setting Movie</Link></Menu.Item>
            <Menu.Item key="7"><Link to = "/set-game">Setting Games</Link></Menu.Item>
            <Menu.Item key="8">
              <span onClick={handleLogout}>Logout</span>
            </Menu.Item>
            </>
          )}
          
        </Menu>
      </Header>
    )
}

export default Nav