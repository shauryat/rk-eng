import React, { Component } from 'react';
import PORTFOLIO_DATA from '../Data/Data.js';
import ProjectCards from '../Cards/Projects';
import ProjectCardsM from '../Cards/CustomerMCards';
import { PreviewContainer, MobileOnly , FontChelsea } from '../portfolio.styles';
import BusinessIcon from '@material-ui/icons/Business';
import SwipeableViews from 'react-swipeable-views';
import CircleIcon from '../iconcircele.jsx';


class Customers extends Component {
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
              marginLeft:'-0.4rem',
              
            }, 
          
          };
          
        return (
     <div className='m-4 md:m-12 md:ml-4'>
       <div className='mb-4 md:mb-4 text-indigo-500 text-bold text-4xl md:text-6xl font-medium'> 
               <CircleIcon>  <BusinessIcon/> </CircleIcon>
                  Our Customers  
        </div>

      <MobileOnly>
      <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
             {projects.map(({id, title, imageUrl})=> (
                      <ProjectCardsM key={id} title={title}  imageUrl={imageUrl}/>
                  ))}
              </SwipeableViews>
      </MobileOnly>

            <PreviewContainer>
                {projects.map(({id, title, imageUrl})=> (
                          <ProjectCards key={id} title={title}  imageUrl={imageUrl}/> ))}
            </PreviewContainer>    

    </div>
        )
    }
}


export default Customers;