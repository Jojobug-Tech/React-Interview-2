const testVar = ["P>E", "E>R", "R>U"];

const test = (arr) => {
  let firstletter = [];
  let secondletter = [];
  let res = [];
  let sorted = [];
  arr.forEach((item) => res.push(item.split(">")));
  res.forEach((item) => {
    firstletter.push(item[0]);
    secondletter.push(item[1]);
  });

  firstletter.forEach((letter) => {
    secondletter.forEach((secondletter) => {
      if (letter) {
      }
    });
  });

  return firstletter.concat(secondletter);
  //   arr.forEach((item) => res.push(item.split(">")));
  //   res.sort(function (a, b) {
  //     if (a[0] < b[0]) {
  //       return -1;
  //     }
  //     if (a[0] > b[0]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   res.forEach((item) => {
  //     for (let i; i <= res.length; i++) {
  //       if (item[0] === res[i][1]) {
  //         sorted.push(res[i]);
  //       }
  //     }
  //   });
  //   return sorted;
};

console.log(test(testVar));
