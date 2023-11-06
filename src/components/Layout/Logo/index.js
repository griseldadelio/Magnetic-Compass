import { Image } from 'react-bootstrap';
import logo from '../../../assets/UnexTR.png';

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Unex Talent consultora de RRHH"
      width="250"
      height="70"
    />
  );
};
