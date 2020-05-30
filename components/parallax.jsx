import { Parallax } from 'react-parallax';
 
const Iarallax = ({imageUrl}) => (
    <div>
        {/* -----basic config-----*/}
        <Parallax bgImage={imageUrl} strength={500}>
      <div style={{ height: 300 }}>
      </div>
    </Parallax>
     </div>
        )
        
export default Iarallax        