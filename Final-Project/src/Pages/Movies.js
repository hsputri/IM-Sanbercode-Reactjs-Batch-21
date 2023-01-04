import React, {Component} from "react"
import { Carousel, Card, Row, Col} from 'antd';
import axios from "axios"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;

class Movies extends Component{
  constructor(props){
    super(props)
    this.state = {
      movies: []
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
        duration: el.duration
      }})
      this.setState({movies})
    })
  }

  render(){
      return(
      <>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Row gutter={[16, 16]}>
          {
            this.state.movies.map((item)=>{
              return(
                <>
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 240}}
                      cover={<img alt="example" src= {item.image_url} style={{height:350}} />}
                    >
                      <Meta title= {item.title} description={item.genre} />
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

export default Movies