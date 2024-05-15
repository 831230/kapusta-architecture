import React from 'react';
import { Wrapper, Text } from './ReturnMainPageStyle';


const ReturnMainpage = () => {
  return (
    <Wrapper>
      <svg width="24" height="24">
      <use href="./assets/icons_arrows.svg#keyboard_backspace-24px-1"></use>
      </svg>
      <Text>Main Page</Text>
    </Wrapper>
  );
};

export default ReturnMainpage;