import React from 'react';
import Oval from '../svgComponents/Oval';
import {ppBaseColors} from '../../lib/colors';
const OvalDefault = () => {
  return (
    <React.Fragment>
      <Oval color={ppBaseColors.PP_LIGHT_BLUE} bottom={600} right={300} />
      <Oval color={ppBaseColors.PP_PINK} top={400} left={350} />
    </React.Fragment>
  );
};

export default OvalDefault;
