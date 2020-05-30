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
              marginLeft:'-0.2rem',
              
            }, 
          
          };
          
        return (
     <div className='m-12 md:ml-16'>
       <div className='mb-4 md:mb-4 text-indigo-500 text-bold text-4xl md:text-6xl font-medium'> 
               <CircleIcon>  <BusinessIcon/> </CircleIcon>
                <FontChelsea>  Our Customers </FontChelsea> 
        </div>

      <MobileOnly>
      <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
             {projects.map(({id, title, description, imageUrl})=> (
                      <ProjectCardsM key={id} title={title} description={description} imageUrl={imageUrl}/>
                  ))}
              </SwipeableViews>
      </MobileOnly>

            <PreviewContainer>
                {projects.map(({id, title, description,imageUrl})=> (
                          <ProjectCards key={id} title={title} description={description} imageUrl={imageUrl}/> ))}
            </PreviewContainer>    

    </div>
        )
    }
}


export default Customers;