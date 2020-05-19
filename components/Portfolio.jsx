import React, { Component } from 'react';
import PORTFOLIO_DATA from './Data/Data.js';
import ProjectCards from './Cards/Projects';
import { PreviewContainer } from './portfolio.styles';
import  { Breakpoint , BreakpointProvider } from 'react-socks';
import SwipeableViews from 'react-swipeable-views';
import Blob from './images/decorations/blob1';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';


class Portfolio extends Component {
constructor(props){
    super(props);

    this.state = {
       projects : PORTFOLIO_DATA

    }
}

    render() {
        const {projects} = this.state;
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
     <div className='text-teal-400 text-bold text-center text-6xl font-mono'> Projects 
     </div> </Fade> <br/>
  
         
            <PreviewContainer>
                {projects.map(({id, title, description,imageUrl})=> (
                          <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>
                ))}
            </PreviewContainer>
 
        <div className='-ml-32 md:-ml-48 md:w-1/4 w-1/2 md:-mt-24 -mt-12'>
        <Blob/>
        </div>      
    </div>

        )
    }
}


export default Portfolio;