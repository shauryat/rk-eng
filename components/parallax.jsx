import { Parallax } from 'react-parallax';
import { FontRoboto } from './portfolio.styles';

 
const Iarallax = ({imageUrl}) => (
    <div>
        {/* -----basic config-----*/}
        <Parallax blur={{ min: -15, max: 15 }} bgImage={imageUrl} strength={500}>
      <div style={{ height: '370' }} className='border-4  border-white' >
           <div className="text-center">
           <p className='md:-mb-4 mt-8 md:mt-16 text-white text-4xl md:text-7xl'>Welcome To </p>
       <p className='text-white text-6xl md:text-7xl font-bold mb-4 '>RK Engineering Corporation</p>            
          <p className='mx-4 mb-4 md:mx-64 text-white md:text-lg font-thin'>
            RK engineering Corporation is a leading bright bar manufacturing company catering to the needs of innumerable automotive ancillary units in Northern India for nearly five decades , the company’s name is synonymous with quality and prompt delivery of goods  
           </p>   
           </div>
      </div>
    </Parallax>
     </div>
        )
        
export default Iarallax        