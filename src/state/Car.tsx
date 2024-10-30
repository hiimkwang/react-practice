import { useState } from "react";
import blackCar from '../assets/products/black-car.jpg';
import redCar from '../assets/products/red-car.jpg';
import silverCar from '../assets/products/silver-car.jpg';
import steelCar from '../assets/products/steel-car.jpg';
import iconBlack from '../assets/icons/icon-black.jpg';
import iconSilver from '../assets/icons/icon-silver.jpg';
import iconRed from '../assets/icons/icon-red.jpg';
import iconSteel from '../assets/icons/icon-steel.jpg';

function CarColorChanger() {
  const [carImage, setCarImage] = useState(blackCar); 

  function changeColor(color: string) {
    switch(color) {
      case 'black':
        setCarImage(blackCar);
        break;
      case 'silver':
        setCarImage(silverCar);
        break;
      case 'red':
        setCarImage(redCar);
        break;
      case 'steel':
        setCarImage(steelCar);
        break;
      default:
        setCarImage(blackCar); 
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ margin: '20px auto' }}>
        <img src={carImage} alt="Car" style={{ width: '1000px', height: 'auto' }} />
      </div>
      <div>
        <img src={iconBlack} alt="Black Icon" onClick={() => changeColor('black')} style={{ width: '80px', height: '80px', cursor: 'pointer', margin: '0 10px' }} />
        <img src={iconSilver} alt="Silver Icon" onClick={() => changeColor('silver')} style={{ width: '80px', height: '80px', cursor: 'pointer', margin: '0 10px' }} />
        <img src={iconRed} alt="Red Icon" onClick={() => changeColor('red')} style={{ width: '80px', height: '80px', cursor: 'pointer', margin: '0 10px' }} />
        <img src={iconSteel} alt="Steel Icon" onClick={() => changeColor('steel')} style={{ width: '80px', height: '80px', cursor: 'pointer', margin: '0 10px' }} />
      </div>
    </div>
  );
}

export default CarColorChanger;
