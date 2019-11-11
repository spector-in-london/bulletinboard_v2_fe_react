const spacing = (number: number): string => {
  return (number * 4).toString() + "px";
};

const typography = {
  fontPrimary: `'Oxygen', 'Helvetica Neue', sans-serif`,
  fontSecondary: 'Pattaya, serif',
}

const color = {
  black: 'black',
  grey: '#eee',
  lightGrey: '#fafafa',
  primary: '#ffbc05',
  primaryTransparent: 'rgba(255, 188, 5, 0.265)',
  white: 'white',
};

const theme = {
  color,
  spacing,
  typography,
};

export default theme;
