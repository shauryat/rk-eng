import React, { Component } from 'react';
import STACK_DATA from '../Data/TechData.js';
import ProjectCards from '../Cards/Projects';
import SwipeableViews from 'react-swipeable-views';
import Blob2 from '../images/decorations/blob2';
import Fade from 'react-reveal/Fade';
import StackImage from '../images/folios/techstackimage';

class TechnoPortfolioM extends Component {
constructor(props){
    super(props);

    this.state = {
       tech : STACK_DATA

    }
}

    render() {
        const {tech} = this.state;
        const styles = {
            root: {
              padding: '0 2rem',
              marginLeft : '-0.9rem'
            },
            slideContainer: {
              marginLeft:'-0.2rem',
              
            }, 
          
          };
          
        return (

     
<div>
            <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
             {tech.map(({id, title, description, imageUrl})=> (
                      <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>
                  ))}
              </SwipeableViews> 
        </div>


        )
    }
}


export default TechnoPortfolioM;