import React, {Component} from "react"

class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        time: 100,
        date: new Date(),
        showTimer: true
      }
      this.hideTimer = this.hideTimer.bind(this)
    }
    render(){
      if(this.state.showTimer === true){
        return(
          <>
            {this.state.showTimer &&
              (
                <>
                  <h1 style={{float: "right", marginRight: "40px"}}>
                    Hitung Mundur: {this.state.time}
                  </h1>
                  <h1 style={{float: "left", marginLeft: "40px"}}>It is {this.state.date.toLocaleTimeString()}.</h1>
                </>
              )
            }
          </>
        )
      }else{
        return(<></>)
      }
      
    }
    componentDidMount(){
      if (this.props.start !== undefined){
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount(){
      clearInterval(this.timerID);
    }

    componentDidUpdate(){
      if(this.state.time===0 && this.state.showTimer===true){
        this.componentWillUnmount()
        this.hideTimer()
      }
    }
  
    tick() {
      this.setState({
        time: this.state.time - 1,
        date: new Date()
      });
    }
    hideTimer(){
      this.setState({showTimer: !this.state.showTimer})
    }  
}


export default Timer