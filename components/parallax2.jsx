import { Parallax } from 'react-parallax';
import { FontRoboto } from './portfolio.styles';

 
const Iarallax2 = ({imageUrl}) => (
    <div className='mb-8'>
        {/* -----basic config-----*/}
        <Parallax blur={2} bgImage={imageUrl} strength={500}>
      <div style={{ height: '100%' }} >
           <div className="text-center">
          <p className='mt-8 text-white text-6xl md:text-7xl font-bold'>OUR ANCILLARIES</p>            
          <p className='mx-4 mb-4 md:mx-64 text-white text-lg '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita saepe necessitatibus aliquam corrupti odio eos in nobis praesentium blanditiis molestiae totam sint itaque, iure a dolor? Vel fugiat velit molestiae.
            </p>   
           </div>
      </div>
    </Parallax>
     </div>
        )
        
export default Iarallax2        