import React, {Component} from "react"
import { Carousel, Card, Row, Col, Layout} from 'antd';

import axios from "axios"
import SideMenu from '../Layouts/SideMenu'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;
const { Content} = Layout;

class Games extends Component{
  constructor(props){
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
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
        genre: el.genre

      }})
      this.setState({games})
    })
  }

  render(){
    return(
    <>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Row gutter={[16, 16]}>
          {
            this.state.games.map((item)=>{
              return(
                <>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src= {item.image_url} style={{height:350}}/>}
                    >
                      <Meta title= {item.name} description={item.genre} />
                    </Card>
                  </Col>
                </>
              )
            })
          }
          </Row>  
        </Content>
      </Layout>
        
       
      </>
    )
  }
}

export default Games