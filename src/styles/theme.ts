const spacing = (number: number): string => {
  return (number * 4).toString() + "px";
};

const typography = {
  fontFamily: `'Oxygen', 'Helvetica Neue', sans-serif`,
}

const color = {
  black: 'black',
  white: 'white',
  grey: '#eee',
  primary: '#ffbc05',
  primaryTransparant: 'rgba(255, 188, 5, 0.265)',
};

const theme = {
  color,
  spacing,
  typography,
};

export default theme;
