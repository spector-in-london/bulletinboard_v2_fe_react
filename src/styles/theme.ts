const spacing = (number: number): string => {
  return (number * 4).toString() + "px";
};

const typography = {
  fontFamily: `'Oxygen', 'Helvetica Neue', sans-serif`,
}

const theme = {
  color: {
    black: 'black',
  },
  typography,
  spacing,
};

export default theme;
