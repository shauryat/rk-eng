import React, { Component } from 'react';
import STACK_DATA from '../Data/TechData.js';
import ProjectCards from '../Cards/Projects';
import { PreviewContainer, MobileOnly  } from '../portfolio.styles';
import Blob2 from '../images/decorations/blob2';
import Fade from 'react-reveal/Fade';
import StackImage from '../images/folios/techstackimage';

import SwipeableViews from 'react-swipeable-views';




class TechnoPortfolio extends Component {
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
    <Fade bottom> <div className='text-indigo-400 text-bold text-center text-6xl font-mono'> Tech-Stack </div> </Fade>
       <div className='-my-8 mx-auto w-2/3 md:w-1/3'> <StackImage/>  </div>

      <MobileOnly>
           <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
             {tech.map(({id, title, description, imageUrl})=> (
                      <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>
                  ))}
              </SwipeableViews>
        </MobileOnly>

            <PreviewContainer>
                {tech.map(({id, title, description, imageUrl})=> (
                          <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>  ))}
            </PreviewContainer>
        <div className='-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12'> <Blob2/> </div>      
   </div>
        )
    }
}


export default TechnoPortfolio;