import React, {Component} from "react"

class Bands extends Component {

    bandCards = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

    render(){
        return <ol>
            {this.bandCards()}
        </ol>
    }
}

export default Bands