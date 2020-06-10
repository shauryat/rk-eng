import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const Template = ({description,imageUrl,title}) => (
    <React.Fragment>
    <Grid container spacing={1}>
      <Grid item xs={12} md={9}>
        
<div className=' ml-4 md:ml-32 text-bluey text-4xl font-medium'>{title}</div> 
<div className=' mx-4 md:ml-32 text-lg text-gray-500'>{description}
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, repellat autem numquam atque sint eligendi esse aspernatur fuga ratione vel pariatur aperiam rem veritatis non eos ipsam cumque, alias nam?</div>
      </Grid>    
     <Grid item xs={12} md={3}>
         <div className='mr-16 my-4 md:my-8 mx-4'>        
          <img src={imageUrl}/>
          </div>
     </Grid>
     </Grid>
     <Divider color='' variant='middle'/>
     </React.Fragment>
    
)

export default Template