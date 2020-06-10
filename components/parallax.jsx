import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import { GradientBackground } from './portfolio.styles';
import { Grid } from '@material-ui/core';



 
const Iarallax = () => (
    <div>
        {/* -----basic config-----*/}
        {/* <Parallax blur={5} bgImage={require('../public/homee2.jpeg')} strength={500}> */}
        <GradientBackground>
      <div style={{ height: '400' }} >
        <br/>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9}>  
           <div className="ml-4">
           <p className='md:-mb-4 mt-8 md:mt-8 text-gray-200 text-4xl md:text-7xl'>Welcome To </p>
    <Fade bottom delay={1000}>  <p className='text-white text-6xl md:text-7xl font-bold mb-4 '>RK ENGINEERING CORPORATION</p>     </Fade>       
          <p className='mx-2 mb-8 text-white md:text-lg'>
            RK engineering Corporation is a leading bright bar manufacturing company catering to the needs of innumerable automotive ancillary units in Northern India for nearly five decades , the company’s name is synonymous with quality and prompt delivery of goods  
           </p>  
           <br/> 
           </div>
           </Grid>
           </Grid>
      </div>
      </GradientBackground>
    {/* </Parallax> */}
     </div>
        )
        
export default Iarallax        