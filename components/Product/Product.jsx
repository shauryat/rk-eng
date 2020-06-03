import { Paper, Typography } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShippingOutlined';
import MachineList from '../Machine/machinelist';
import CircleIcon from '../iconcircele';
import { FontChelsea } from '../portfolio.styles';
import SimpleTable from './Table';
import ProductList from './ProductList';
import FacilitiesExtendedIcon from './Facilitiesbutton';
import DropDown from '../Future/DropDown';

const image1 = 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fannatobin%2Ffiles%2F2019%2F02%2F5G-factory-UK-1200x675.jpg';

const ProductDetail = () => (

<div className='mt-8 mb-8 md:mx-12 bg-gray-100 md:bg-white shadow-md rounded-md md:border-indigo-200 md:border-2'>
        <br/>
        <div className='ml-4 text-indigo-500 text-bold text-4xl md:text-5xl font-medium'> 
      <CircleIcon>
      <LocalShippingIcon/></CircleIcon> Products </div>
    {/* <img src={image1} className='h-64 -mt-4 md:ml-4'/> */}
    <div className='mx-8 md:mx-4'>
    <Typography variant='subtitle1' color='textSecondary'>
    We manufacture a wide range of grades and sizes to cater to the wide variety of requirements in the industry. An optimum raw material stock is also maintained to provide timely delivery of goods to our customers. The raw material is sourced from the most reputed steel rolling producers in our country. We process free cutting, semi free cutting, carbon steel and other alloy grades conforming to British and American standard specification.
    <br/><br/>
    The grade of steel processed at our plant are as follows:
    </Typography>
    <br/>
    <SimpleTable/>
    <br/>
    <Typography variant='subtitle1' color='textSecondary'>
    We supply the material in the following forms:
    </Typography>
    <br/>
    <ProductList/>
<div className='m-4 mb-2'>
    <Typography variant='subtitle2'color="textPrimary">
    Check out the Facilities provide by us! <br/> (by clicking the button down below)
    </Typography>
    </div>
    <FacilitiesExtendedIcon/>
    <br/>
    </div>
</div>
)

export default ProductDetail;