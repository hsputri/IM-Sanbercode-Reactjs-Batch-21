import React, {useState, useEffect} from "react"
import axios from "axios"
import { Layout } from 'antd';
import '../Pages/Page.css'
import SideMenu from '../Layouts/SideMenu'
import './Page.css'

const { Content} = Layout;


const SettingGame =() => {
    const [games, setGames] =  useState(null)
    const [input, setInput]  =  useState({
      name: "",
      singlePlayer: "",
      multiPlayer: "",
      platform: "",
      release: "",
      genre: "",
      image_url: ""
    })

    useEffect( () => {
        if (games === null){
          axios.get(`https://www.backendexample.sanbersy.com/api/data-game`)
          .then(res => {
              setGames(res.data.map(el=>{ return {
                id: el.id, 
                name: el.name, 
                singlePlayer: el.singlePlayer,
                multiPlayer: el.multiPlayer,
                platform: el.platform,
                release: el.release,
                image_url: el.image_url,
                genre: el.genre
              }
            }))
          })
        }
      }, [games])

    return(
        <>
        <Layout style={{ padding: '24px 0' }}>
            <SideMenu/>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <table className="site-layout-background">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Single Player</th>
                    <th>Multi Player</th>
                    <th>Platform</th>
                    <th>Release</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                
                    {
                      games !== null && games.map((item, index)=>{
                        return(                    
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td><img src={item.image_url} style={{width: 80}} /></td>
                            <td>{item.name}</td>
                            <td>{item.genre}</td>
                            <td>{item.singlePlayer}</td>
                            <td>{item.multiPlayer}</td>
                            <td>{item.platform}</td>
                            <td>{item.release}</td>
                          </tr>
                        )
                      })
                    }
                </tbody>
        </table>

        </Content>
        </Layout>
        </>
    )
}

export default SettingGame
