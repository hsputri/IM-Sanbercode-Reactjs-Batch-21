import React, {useState, useEffect} from "react"
import axios from "axios"
import { Layout } from 'antd';
import '../Pages/Page.css'
import SideMenu from '../Layouts/SideMenu'
import './Page.css'

const { Content} = Layout;


const SettingMovie =() => {
    const [movies, setMovies] =  useState(null)
    const [input, setInput]  =  useState({
      title: "",
      description: "",
      review: "",
      year: 0,
      duration: 0,
      genre: "",
      rating: 0,
      image_url: ""
    })

    useEffect( () => {
        if (movies === null){
          axios.get(`https://www.backendexample.sanbersy.com/api/data-movie`)
          .then(res => {
              setMovies(res.data.map(el=>{ return {
                id: el.id, 
                title: el.title, 
                description: el.description,
                review: el.review,
                year: el.year,
                image_url: el.image_url,
                genre: el.genre,
                rating: el.rating,
                duration: el.duration
              }
            }))
          })
        }
      }, [movies])

      const handleDelete = (event) => {
        let idDataMovie = parseInt(event.target.value)
    
        let newLists = movies.lists.filter(el => el.id !== idDataMovie)
    
        axios.delete(`http://backendexample.sanbercloud.com/api/data-movie/${idDataMovie}`)
        .then(res => {
          console.log(res)
        })
              
        setMovies({...movies, lists: [...newLists]})
        
      }
      

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
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Duration</th>
                    <th>Review</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                
                    {
                      movies !== null && movies.map((item, index)=>{
                        return(                    
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td><img src={item.image_url} style={{width: 80}} /></td>
                            <td>{item.title}</td>
                            <td>{item.year}</td>
                            <td>{item.genre}</td>
                            <td>{item.rating}</td>
                            <td>{item.duration}</td>
                            <td>{item.review}</td>
                            <td>
                              <button value={item.id}>Detail</button>
                              <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
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

export default SettingMovie
