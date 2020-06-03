import React, { Component } from 'react';
import PartnerCard from './partnercard';
import PARTNER_DATA from '../Data/PartnerData';
import Typography from '@material-ui/core/Typography'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import CircleIcon from '../iconcircele';

class LeaderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners : PARTNER_DATA
        }
    }
    render() {
        const { partners } = this.state;
        return (
            <div>
                <div className='md:ml-12 mt-4 text-indigo-400 text-center text-bold text-4xl font-medium'> 
     Partners</div>
     <p className='mx-4 md:mx-24 text-center text-gray-600 text-lg md:text-base font-thin'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam omnis distinctio beatae sunt aliquam explicabo, asperiores perspiciatis quos deleniti reiciendis sit molestias architecto maiores vitae accusamus. Illum, quod voluptatem.</p>
            <div className='md:flex md:mx-32 md:pl-auto'>
               {partners.map(({name,number,id,imageUrl}) => (
                   <PartnerCard key={id} number={number} name={name} imageUrl={imageUrl}/>
               ))
               }
            </div>
            <div className='md:mx-2'>
               
          <Typography variant="h5" color="primary" align='center'>
       <MailOutlineOutlinedIcon fontSize="large"/> : rkec@airtelmail.in</Typography>
          </div>
            </div>
        )
    }
}

export default LeaderList;