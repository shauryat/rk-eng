import React, { Component } from 'react';
import STACK_DATA from './Data/TechData.js';
import ProjectCards from './Cards/Projects';
import { PreviewContainer } from './portfolio.styles';
import  { Breakpoint , BreakpointProvider } from 'react-socks';
import SwipeableViews from 'react-swipeable-views';
import Blob2 from './images/decorations/blob2';
import Fade from 'react-reveal/Fade';


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
     <Fade bottom>
       
     <div className='text-indigo-400 text-bold text-center text-6xl font-mono'> Tech-Stack 
     </div> </Fade> <br/>   
     
         <Breakpoint medium down>
            <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
             {tech.map(({id, title, description, imageUrl})=> (
                          <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>
                        ))}
            </SwipeableViews>
            <br/>
            </Breakpoint>

       <Breakpoint large up>
            <PreviewContainer>
                {tech.map(({id, title, description, imageUrl})=> (
                          <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>
                ))}
            </PreviewContainer>
        </Breakpoint>

        <div className='-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12'>
        <Blob2/>
        </div>      
    
    </div>

        )
    }
}


export default TechnoPortfolio;