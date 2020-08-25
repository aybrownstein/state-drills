import React from 'react';

class RouletteGun extends React.Component {
static defaultProps = {
    bulletInChamber: 8
};
state = {
    chamber:null,
    spinningTheChamber: false
};

componentWillUnmount() {
    clearTimeout(this.timeout)
}

handleButtonClick = () => {
    this.setState({
        spinnigTheChamber: true,

    })
    this.timeout = setTimeout(() => {
        const randomChamber = Math.ceil(Math.random()*8)
        this.setState({
            chamber: randomChamber,
            spinnigTheChamber:false
        })  
    },2000)    
}

renderDisplay(){
    const {chamber,spinnigTheChamber} = this.state
    const {bulletInChamber} = this.props
    if (spinnigTheChamber) {
        return 'spinning the chamber, and pulling the trigger!'
    } else if (chamber === bulletInChamber) {
        return 'BANG'
    } else {
        return 'You\'re safe!'
    }
}
    render() {
        return(
            <div className="Roulette">
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>Pull The Trigger</button>
            </div>
        )
    }
}
export default RouletteGun