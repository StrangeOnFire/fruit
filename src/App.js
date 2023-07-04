import './App.css';
import logo from './images/Content@1x.png';
import apple from './images/apple-with-leaf-orange-table_185193-2328.jpg';
import watermelon from './images/watermelon-plain-blue-background-140375653.webp'
import mango from './images/mango.jpg'
import pineapple from './images/pineapple-fruit.jpg'
import cherry from './images/cherry.jpeg'
import papaya from './images/papaya.jpeg'
import { Link } from 'react-router-dom';

<Link to={''} > </Link>

function App() {
  return (
    <>
      <div className='homepage'>
        <div className='homepage-div-1'>
          <img src={logo} alt='logo' />
          <Link to={'/Apple'} > <img src={apple} alt='img' /> </Link>
          <Link to={'/Cherry'} > <img src={cherry} alt='img' /></Link>
          <Link to={'/Mangoes'} >  <img src={mango} alt='img' /></Link>
        </div>
        <div className='homepage-div-2'>
        <Link to={'/Papaya'} > <img src={papaya} alt='img' /></Link>
        <Link to={'/Pineapple'} >  <img src={pineapple} alt='img' /></Link>
        <Link to={'/Watermelon'} > <img src={watermelon} alt='img' /></Link>
        </div>
      </div>
    </>
  );
}

export default App;
