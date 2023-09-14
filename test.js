{
  function sum(...arr) {
    let sum = 0;
    for (const ele of arr) {
      sum += ele;
    }
    return sum;
  }
  const result = sum(1, 2, 3, 4);
  console.log(`result=${result}`);
}
//즉시실행함수  (function(){})() or (function(){}())
{
  const result = (function sum(...arr) {
    let sum = 0;
    for (const ele of arr) {
      sum += ele;
    }
    return sum;
  })(1, 2, 3, 4);

  console.log(`result=${result}`);
}
{
  const result = (function (...arr) {
    let sum = 0;
    for (const ele of arr) {
      sum += ele;
    }
    return sum;
  })(1, 2, 3, 4);

  console.log(`result=${result}`);
}
{
  const result = ((...arr) => {
    let sum = 0;
    for (const ele of arr) {
      sum += ele;
    }
    return sum;
  })(1, 2, 3, 4);

  console.log(`result=${result}`);
}
{
  const result = ((x, y) => x + y)(1, 2);
  console.log(result);
}
{
  (() => console.log('hi'))();
}
{
  () => console.log('hi')();
}
