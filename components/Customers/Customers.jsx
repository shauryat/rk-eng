import React, { Component } from 'react';
import PORTFOLIO_DATA from '../Data/Data.js';
import ProjectCards from '../Cards/Projects';
import ProjectCardsM from '../Cards/CustomerMCards';
import { PreviewContainer, MobileOnly , HorizontalList } from '../portfolio.styles';
import Iarallax2 from '../parallax2.jsx';


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
              marginLeft : '-0.11rem'
            },
            slideContainer: {
              marginLeft:'-0.2rem',
              
            }, 
          
          };
          
        return (
     <div className='m-4 md:mx-24 md:mt-4'>
       {/* <div className='text-center mb-4 md:mb-4 text-indigo-500 text-bold text-4xl md:text-6xl font-medium'> 
              
                  OUR ANCILLARIES  
        </div> */}
        <div className='-m-4 md:-mx-24'>
          
        <Iarallax2 />
        
        </div>

      <MobileOnly>
        <HorizontalList>
             {projects.map(({id, title, imageUrl})=> (
                      <ProjectCardsM key={id} title={title}  imageUrl={imageUrl}/>
                  ))}
            </HorizontalList>  
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