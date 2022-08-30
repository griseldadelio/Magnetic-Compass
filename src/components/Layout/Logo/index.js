import { Image } from 'react-bootstrap';
import logo from '../../../assets/logoTRBlanco.png';

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Magnetic Compass logo - comercio exterior"
      width="210"
      height="80"
    />
  );
};
