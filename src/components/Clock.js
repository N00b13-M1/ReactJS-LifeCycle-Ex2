import React, { Component } from 'react';

class Clock extends Component {
    state = {
        currentTime : new Date()
    }


    componentDidMount(){
        this.timer()
        console.log('Mount')
    }
    
    timer = () => {
        setInterval(() => {
            this.setState({
                currentTime: new Date()
            })
            
        }, 1000);
    }

    // componentDidUpdate(){
    //     this.timer()
    // }

    componentWillUnmount(){
        clearTimeout(this.timer())
        console.log('Unmount')
    }

    render() {
        return (
            <>
                <p>Current time: {this.state.currentTime.getHours()}:{this.state.currentTime.getMinutes()}:{this.state.currentTime.getSeconds()}</p>
            </>
        );
    }
}

export default Clock;