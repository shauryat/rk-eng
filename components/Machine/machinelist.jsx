import React, { Component } from 'react';
import MachineCard from '../Cards/MachineCard';
import MACHINE_DATA from '../Data/MachineData';
import { PreviewContainer, MobileOnly } from '../portfolio.styles';
import SwipeableViews from 'react-swipeable-views';


class MachineList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            machines : MACHINE_DATA
        }
    }
    render() {
        const { machines } = this.state;
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
                <PreviewContainer>
                               {machines.map(({name,description,id,imageUrl}) => (
                   <MachineCard key={id} description={description} name={name} imageUrl={imageUrl}/>
               ))
               }
               </PreviewContainer>

            <MobileOnly>
               <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
                    {machines.map(({name,description,id,imageUrl}) => (
                   <MachineCard key={id} description={description} name={name} imageUrl={imageUrl}/>
               ))
               }
          </SwipeableViews>
      </MobileOnly>

            </div>
        )
    }
}

export default MachineList;