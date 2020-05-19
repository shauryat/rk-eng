import HomeImage from '../components/images/home/homeimage';
import WaveBorder from '../components/WaverBorder';
import { Breakpoint, BreakpointProvider  } from 'react-socks';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Portfolio from '../components/projectfolio/Portfolio';
import TechnoPortfolio from '../components/Techfolio/Technolgyfolio';

import PortfolioM from '../components/PortfolioM';
import TechnoPortfolioM from '../components/TechnofolioM';





const Index = () => (
<BreakpointProvider>
   <div>
     <div className='md:flex bg-gray-200'>
        <div className='md:mx-4 md:mt-32 text-center md:w-1/2'>
          <br/>
            <p className='text-indigo-400 text-6xl md:text-6xl font-medium'>Hello World!</p>
            <p className='text-teal-300 text-2xl md:text-5xl font-medium'>I am Shaurya Tuli a Front-End Dev</p>
            <p className='mb-4 mx-2 text-gray-600 text-lg md:text-base font-thin'>
             a 18 Year Old from New Delhi , India who has passion for web development and making super awesome web apps and much more 
             I use React.js and other libraries along with it to make some beautiful simple and usable </p>
                {/* button position */}
             <div className='flex md:ml-32'>
               <div className='ml-20 mr-2'>
                 <Button 
                  variant="outlined"
                  color="inherit"
                  startIcon={<GitHubIcon />}> Github</Button>
               </div>
              <div>
                <Button
                variant="outlined"
                color="primary"
                startIcon={<LinkedInIcon />}> LinkedIn </Button>
             </div>
          </div>
        </div>   
        {/* photo opimization */}
      <div className=' mx-4 my-8 md:w-1/2 md:mt-16'>
        <HomeImage/>
      </div>  
     {/* render only mobile */}
      <Breakpoint small down>
      <WaveBorder
            upperColor="#EDF2F7"
            lowerColor="#fff"
            animationNegativeDelay={4}/>
    </Breakpoint>
       </div> 
       {/* render only tablet, desktops & laptops */}
         <Breakpoint medium up>
           <WaveBorder
            upperColor="#EDF2F7"
            lowerColor="#fff"
            animationNegativeDelay={4}/>
          </Breakpoint>
       </div>
          <div className='m-12'>
            {/* mobile only */}
             <Breakpoint small down>
                <PortfolioM/>
                <TechnoPortfolioM/>
            </Breakpoint>

             {/* desktop only */}
          <Breakpoint medium up>
             <Portfolio/>
             <TechnoPortfolio/>
           </Breakpoint>
         </div>

   </BreakpointProvider>
)

export default Index;