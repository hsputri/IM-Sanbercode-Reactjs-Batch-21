import React from "react"
import { Layout } from 'antd';
import '../Pages/Page.css'

const { Content} = Layout;


const MovieDetail =() => {
    
    return(
        <>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            
           Movie Detail
          
          </div>
        </Content>
        </>
    )
}

export default MovieDetail
