import React, { Component } from 'react';
import AddressCard from '../Cards/AddressCard';
import PARTNER_DATA from '../Data/PartnerData';
import Typography from '@material-ui/core/Typography'
import ApartmentIcon from '@material-ui/icons/Apartment';
import CircleIcon from '../iconcircele';
import { FontChelsea } from '../portfolio.styles';
import LeaderCard from '../Cards/LeaderCard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



class AddressList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leaders : PARTNER_DATA
        }
    }
    render() {
        const { leaders } = this.state;
        return (
            <div>
            <div className='mx-4 mb-2 md:mb-4 text-indigo-400 md:ml-4 text-4xl font-medium'> 
                 <CircleIcon><AccountCircleIcon/></CircleIcon> Leadership</div>
    <div className='md:flex md:pl-4 mr-4 md:mx-0'>
               {leaders.map(({name,description,imageUrl,id}) => (
                   <div className='ml-4 md:ml-0 md:mr-4 mb-4'>
                   <LeaderCard key={id} description={description} name={name} imageUrl={imageUrl}/>
                   </div>
                   
               ))
               }
            </div>
            </div>
        )
    }
}

export default AddressList;