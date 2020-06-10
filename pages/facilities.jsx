import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import ParallaxCarousel from '../components/SlideShow/Demo';

const Facilities = () => (
    <div>
        <Layout>
            <br/>
            <div className='md:mx-12 mt-4 text-bluey text-center text-bold text-6xl md:text-7xl font-medium'> 
     LANDMARKS</div>
     <p className='mx-4 mb-4 md:mx-24 text-center text-gray-600 text-lg md:text-xl font-thin'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam omnis distinctio beatae sunt aliquam explicabo, asperiores perspiciatis quos deleniti reiciendis sit molestias architecto maiores vitae accusamus. Illum, quod voluptatem.</p>     
       
        <div className=' md:mx-64'>
        <ParallaxCarousel/>
        </div>
        </Layout>
    </div>
)

export default Facilities;