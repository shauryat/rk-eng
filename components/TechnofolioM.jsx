import React, { Component } from 'react';
import STACK_DATA from './Data/TechData.js';
import ProjectCards from './Cards/Projects';
import { PreviewContainer } from './portfolio.styles';
import  { Breakpoint , BreakpointProvider } from 'react-socks';
import SwipeableViews from 'react-swipeable-views';
import Blob2 from './images/decorations/blob2';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive'



class TechnoPortfolioM extends Component {
constructor(props){
    super(props);

    this.state = {
       tech : STACK_DATA

    }
}

    render() {
      const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
      }
      const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
      }
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
      const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
      }
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
     </div> </Fade>
     
            <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
             {tech.map(({id, title, description, imageUrl})=> (
                 <div>
                          <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/>
                          </div>
                        ))}
              </SwipeableViews> 
          
        <div className='-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12'>
        <Blob2/>
        </div>      
</div>


        )
    }
}


export default TechnoPortfolioM;