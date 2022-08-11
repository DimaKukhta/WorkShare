import MulishBold from '../assets/fonts/Mulish-Bold.ttf';
import MulishMedium from '../assets/fonts/Mulish-Medium.ttf';
import MulishRegular from '../assets/fonts/Mulish-Regular.ttf';

export default `
 @font-face {
  font-family: 'Mulish';
  font-weight: 400;
  font-style: normal;
  src: url(${MulishRegular});
}
 @font-face {
  font-family: 'Mulish';
  font-weight: 500;
  font-style: normal;
  src: url(${MulishMedium});
}
 @font-face {
  font-family: 'Mulish';
  font-weight: 700;
  font-style: normal;
  src: url(${MulishBold});
}

`;
