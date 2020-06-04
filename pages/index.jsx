import HomeImage from '../components/images/home/homeimage';
import Customers from '../components/Customers/Customers';
import ProductDetail from '../components/Product/Product';
import GoogleForm from '../components/googleforms';
import AddressList from '../components/Address/AddressLayout';
import Footer from '../components/footer/Footer';
import Header from '../components/Future/Header';
import LeaderList from '../components/Leaders/LeaderLayout';
import ProductList from '../components/Product/ProductList';

import { FontChelsea } from '../components/portfolio.styles';
import Iarallax from '../components/parallax';
import Counter from '../components/Counter/counter';

const Index = () => (

  <div>    
     <Header/>
     {/* <div className='md:flex bg-gray-100'>
        <div className='md:mx-4 md:mt-16 lg:mt-24 text-center md:w-1/2'>
          <br/>
            <p className='text-indigo-300 text-4xl md:text-6xl font-medium'>Welcome To </p>
       <FontChelsea> <p className='text-indigo-500 text-5xl font-medium mb-4 '>RK Engineering Corporation</p> </FontChelsea>
            <p className='mb-4 mx-4 text-gray-600 text-lg md:text-base font-thin'>
            RK engineering Corporation is a leading bright bar manufacturing company catering to the needs of innumerable automotive ancillary units in Northern India for nearly five decades , the company’s name is synonymous with quality and prompt delivery of goods  
           </p>   
             </div>    
                {/* photo opimization */}
         {/* <div className='-mb-4 md:mb-24 mx-auto md:mx-12 mt-8 md:w-2/5 md:mt-16'>
           <HomeImage/>
         </div>  
         </div> */}

         <Iarallax imageUrl="https://www.brotherearth.com/en/tech/images/pic-sub-ecofactory.jpg"/>
       <div>
          <ProductDetail/>
           <Customers/>
           <div className='mb-4 mx-4 md:mx-12 rounded-md bg-white shadow-md'>
            <GoogleForm/>
               <br/>
         </div>
         <br/>
           <AddressList/>
           <Footer/>
        </div>
      </div>
 
)

export default Index;