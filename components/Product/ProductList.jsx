import React, { Component } from 'react';
import MachineCard from '../Cards/MachineCard';
import PRODUCTLIST_DATA from '../Data/ProductList';
import { PreviewContainer, MobileOnly } from '../portfolio.styles';
import SwipeableViews from 'react-swipeable-views';


class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products : PRODUCTLIST_DATA
        }
    }
    render() {
        const { products } = this.state;
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
                               {products.map(({name,description,id,imageUrl}) => (
                   <MachineCard key={id} description={description} name={name} imageUrl={imageUrl}/>
               ))
               }
               </PreviewContainer>
            

            <MobileOnly>
               <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
                    {products.map(({name,description,id,imageUrl}) => (
                   <MachineCard key={id} description={description} name={name} imageUrl={imageUrl}/>
               ))
               }
          </SwipeableViews>
      </MobileOnly>

            </div>
        )
    }
}

export default ProductList;