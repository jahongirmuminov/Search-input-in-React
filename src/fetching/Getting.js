import React, { Component } from 'react'

export class Getting extends Component {
    state={
        loading:true
    }
      async  componentDidMount(){
        const url='https://jsonplaceholder.typicode.com/posts'
        const response= await  fetch(url)
        const json =await response.json()
        console.log(json);
    }
    render() {
        return (
            <div>
                {this.state.loading ? <div> Loading... </div>: <div>person</div>}
            </div>
        )
    }
}

export default Getting
