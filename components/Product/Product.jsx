import { Paper, Typography } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShippingOutlined';
import MachineList from '../Machine/machinelist';
import CircleIcon from '../iconcircele';
import { FontChelsea } from '../portfolio.styles';
const image1 = 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fannatobin%2Ffiles%2F2019%2F02%2F5G-factory-UK-1200x675.jpg';

const ProductDetail = () => (

<div className='-mt-4 mb-8 md:mx-12 bg-gray-100 md:bg-white shadow-md rounded-md'>
        <br/>
        <div className='ml-4 text-indigo-500 text-bold text-4xl md:text-5xl font-medium'> 
      <CircleIcon>
      <LocalShippingIcon/></CircleIcon> <FontChelsea> Products </FontChelsea> </div>
    <br/>
    <img src={image1} className='h-64 -mt-4 md:ml-4'/>
    <div className='ml-8 md:mx-4 mt-4'>
    <Typography variant='subtitle1'>
   "We manufacture a wide range of grades & sizes. An optimum low material stock is also maintained to provided timely delivery of goods to regulate our customers" 
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eum distinctio earum quo! Reiciendis laudantium dolore cum possimus, corrupti quisquam in, illo cupiditate minima molestiae sequi quam ea nostrum recusandae?
   <br/><br/>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione nisi illum ducimus culpa delectus fugit omnis officia possimus perspiciatis, reprehenderit quae consequuntur vero facere, numquam minus, laboriosam incidunt error?
    </Typography>
    <br/>
    <MachineList/>
    </div>
</div>
)

export default ProductDetail;