const spacing = (number: number): string => {
  return (number * 4).toString() + "px";
}

const theme = {
  color: {
    black: 'black',
  },
  spacing,
};

export default theme;
