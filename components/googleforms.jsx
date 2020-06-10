import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';

const GoogleForm = () => (
    <div>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScQqZCHMp0Cw6xv3CvAAlQZf7bMmfnKz4qAXSh2_eRaInSjgw/formResponse" method="post">
        <div className='md:mx-12 mt-4 text-bluey text-center text-bold text-4xl font-medium'> 
     Message Us</div>
     <p className='mx-4 mb-4 md:mx-24 text-center text-gray-600 text-lg md:text-base font-thin'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam omnis distinctio beatae sunt aliquam explicabo, asperiores perspiciatis quos deleniti reiciendis sit molestias architecto maiores vitae accusamus. Illum, quod voluptatem.</p>     
           <Container component="main" maxWidth="xs">          
            <div className='mb-4'><TextField name="entry.1204567259" label="E-Mail" type='email' required fullWidth variant="outlined"/></div>
          <div className='mb-4'><TextField type='text' name="entry.570675750" label='Name' required fullWidth variant="outlined"/></div>
          <div className='mb-4'><TextField name="entry.1753231462" label='Message' multiline rows={4} required fullWidth variant="outlined"/></div> 
          <div><Button variant="outlined" color="primary" type="submit" fullWidth>Submit</Button></div>
        </Container>
        </form>
    </div>
)

export default GoogleForm;