import { createPortal } from 'react-dom';
import { Circles } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay.styled';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <Circles
        color="grey"
        height={300}
        width={300}
        ariaLabel="loading-indicator"
      />
    </Overlay>,
    loaderRoot
  );
};