import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
state = {currentSectionIndex: null}

handleButtonClick(index) {
    this.setState({currentSectionIndex: index})
}

renderButtons(section, index, currentSectionIndex) {
    return <li className='Accordion-button' key={index}><button type='button' 
    onClick= {() => this.handleButtonClick(index)}>{section.title}</button>
    {(currentSectionIndex === index) &&& <p>{section.content}</p> } 
    </li>
    }


    render() {
        const {currentSectionIndex} = this.state
       const {sections} = this.props
        return(
            <ul className='Accordion'>
                {sections.map((section, index) => this.renderButtons(section, index, currentSectionIndex))}
                
                
            </ul>
        ) 
    }
}
export default Accordion