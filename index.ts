const gettingMad = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
    }
  }
  return arr;
};

gettingMad([-10, 0, -3, 1]);
