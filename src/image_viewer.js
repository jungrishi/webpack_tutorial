// import big from '../assets/big.jpg';
import small from '../assets/small.png';
 
import './style/image_viewer.css'

//function to show modules with data
export default () => {
const image =  document.createElement('img');
image.src = small;

document.body.appendChild(image);
};
// const big_image =  document.createElement('img');
// big_image.src = big;

// document.body.appendChild(big_image);