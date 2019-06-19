setTimeout(() =>{
  console.log('2 seconds are up');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = name.filter((name) =>{
  return name.length <= 4;
});
