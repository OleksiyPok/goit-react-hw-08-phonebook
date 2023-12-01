import React from 'react';
import { createPortal } from 'react-dom';
import { ProgressBar } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="darkblue"
        barColor="darkblue"
      />
    </Overlay>,
    loaderRoot
  );
};
