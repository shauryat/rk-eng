import Typography from '@material-ui/core/Typography'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
      
          RK Engineering Corporation{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => (
    <div className="bg-gray-100 h-32">
      <br/>
      <div className='mt-8'>
      <Copyright/>
      </div>
            </div>
)

export default Footer;