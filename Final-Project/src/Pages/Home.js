import React, {Component} from "react"
import {Link} from 'react-router-dom'
import { Carousel, Card, Row, Col, Layout} from 'antd';
import axios from "axios"
import '../Pages/Page.css'

const contentStyle = {
  height: '280px',
  color: '#fff',
  lineHeight: '280px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;
const { Content } = Layout;

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      games: []
    }
  }

  componentDidMount(){
    axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
    .then(res => {
      let movies = res.data.map(el=>{ return {
        id: el.id, 
        title: el.title, 
        description: el.description,
        review: el.review,
        year: el.year,
        image_url: el.image_url,
        genre: el.genre,
        rating: el.rating,
        duration: el.duration,
      }})
      this.setState({movies})
    })
    axios.get(`https://backendexample.sanbersy.com/api/data-game`)
    .then(res => {
      let games = res.data.map(el=>{ return {
        id: el.id, 
        name: el.name, 
        singlePlayer: el.singlePlayer,
        multiPlayer: el.multiPlayer,
        platform: el.platform,
        release: el.release,
        image_url: el.image_url,
        genre: el.genre,

      }})
      this.setState({games})
    })
  }



  render(){
    return(
    <>
      <Carousel autoplay>
          <div >
            <Row>
              {this.state.movies.map((item, index)=>{
                for (var i=index; i<7; i++){
                  return(
                    <img src={item.image_url} style={contentStyle} />
                  )
                }
              })}
            
            {/* <img src="img/game.jpg" style={contentStyle} /> */}
            </Row>
          </div>
          <div>
          <Row>
              {this.state.games.map((item, index)=>{
                for (var i=index; i<6; i++){
                  return(
                    <img src={item.image_url} style={contentStyle} />
                  )
                }
              })}
            
            {/* <img src="img/game.jpg" style={contentStyle} /> */}
            </Row>
          </div>
          {/* <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div> */}
        </Carousel>
        
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 26}}>
          <div className="container">
            <h1>Popular Movie List</h1>
          </div>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, backgroundColor: "rgb(58, 65, 83)"}}>
            <Row gutter={[16, 16]}>
          {
            this.state.movies.map((item,index)=>{
              for (var i=index; i<4; i++){
                return(
                  <>
                    <Col span={6}>
                      <Link to ="/movie-detail">
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src= {item.image_url} style={{height:350}} />}
                      >
                        <Meta title= {item.title} description={item.genre} />
                      </Card>
                      </Link>
                    </Col>
                  </>
                )
              }
            })
          }
          </Row>
       
          </div>
        </Content> 
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 26}}>
          <div className="container">
            <h1>Popular Game List</h1>
          </div>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, backgroundColor: "rgb(58, 65, 83)"}}>
            <Row gutter={[16, 16]}>
          {
            this.state.games.map((item,index)=>{
              for (var i=index; i<4; i++){
                return(
                  <>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src= {item.image_url} style={{height:350}} />}
                      >
                        <Meta title= {item.name} description={item.genre} />
                      </Card>
                    </Col>
                  </>
                )
              }
            })
          }
          </Row>
       
          </div>
        </Content> 

   
      </>
    )
  }
}

export default Home