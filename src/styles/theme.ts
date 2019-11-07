const spacing = (number: number): string => {
  return (number * 4).toString() + "px";
};

const typography = {
  fontFamily: `'Oxygen', 'Helvetica Neue', sans-serif`,
}

const theme = {
  color: {
    black: 'black',
    white: 'white',
    grey: '#eee',
    primary: '#ffbc05',
    primaryTransparant: 'rgba(255, 188, 5, 0.265)',
  },
  typography,
  spacing,
};

export default theme;
