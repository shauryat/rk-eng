import React, { Component } from 'react';
import AddressCard from '../Cards/AddressCard';
import ADDRESS_DATA from '../Data/AddressData';
import Typography from '@material-ui/core/Typography'
import ApartmentIcon from '@material-ui/icons/Apartment';
import CircleIcon from '../iconcircele';
import { FontChelsea } from '../portfolio.styles';
import LandlineExtendedIcon from '../FabIcons/Landline';
import MailExtendedIcon from '../FabIcons/Mail';
import PhoneExtendedIcon from '../FabIcons/Phone';


class AddressList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addresses : ADDRESS_DATA
        }
    }
    render() {
        const { addresses } = this.state;
        return (
            <div>
            <div className='mx-4 mb-2 md:mb-4 text-indigo-400 md:ml-4 text-4xl font-medium'> 
                 <CircleIcon><ApartmentIcon/></CircleIcon> Our Offices  </div>
    <div className='md:flex md:pl-4 mr-4 md:mx-0'>
               {addresses.map(({name,address,imageUrl,id}) => (
                   <div className='ml-4 md:ml-0 md:mr-4 mb-4'>
                   <AddressCard key={id} address={address} name={name} imageUrl={imageUrl}/>
                   </div>
               ))
               }
            </div>
            <div className="ml-2 md:ml-4">
            <MailExtendedIcon/>
          <div className="flex">
          <PhoneExtendedIcon/>
          <LandlineExtendedIcon/>
          </div>
          </div>
            </div>
        )
    }
}

export default AddressList;