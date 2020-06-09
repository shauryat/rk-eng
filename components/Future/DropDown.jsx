import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));


function DropDown() {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
   <ClickAwayListener onClickAway={handleClickAway}>
    <div className="relative inline-block text-left">
      <button type="button" onClick={handleClick} className=" text-white inline-flex justify-center w-full rounded-sm  px-4 py-2 bg-bluey leading-5 font-medium hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
      Facilities
        <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>

   { open ? (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:rounded-sm focus:outline-none focus:bg-gray-100 focus:text-gray-900">Flow Chart</a>
        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:rounded-sm focus:outline-none focus:bg-gray-100 focus:text-gray-900">Testing Facilities</a>
        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:rounded-sm focus:outline-none focus:bg-gray-100 focus:text-gray-900">Quality Promise</a>
       
          </div>
        </div> ) : null }

          </div>
    </ClickAwayListener>
  );
}

export default DropDown
        