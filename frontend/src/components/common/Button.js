// E:\programming\Project\ph-predictor\frontend\src\components\common\Button.js

import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

function Button(props) {
  return (
    <BootstrapButton variant={props.variant || "primary"} onClick={props.onClick}>
      {props.children}
    </BootstrapButton>
  );
}

export default Button;
