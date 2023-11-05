export function sum(numbers){
    let sum = 0;
    numbers.map(element => {
        sum+=element
    });
    return sum;
}

export const getNewArray = function(arr) {
    return arr.filter(str => str.length >= 5 && str.includes('a'));
}

  
export const concat = (...args) => args.reduce((acc, val) => acc.concat(val), []);
  