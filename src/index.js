import './trial';

console.log('heya');
const wait = (t) => new Promise((res) => {
  setTimeout(() => {
    console.log('timer');
    res(3);
  }, 1000 * t);
});

const fun = async () => await wait(3);

fun();