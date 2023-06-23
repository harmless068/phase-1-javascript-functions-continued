function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = '*') {
  return function (adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
const foo = () => {
  return 'bar';
};

const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};

sum(1, 2); //=> 3

const squares = nums.map(x => x ** 2);
console.log(squares); //=> [1, 4, 9]
console.log(nums); //=> [1, 2, 3]

finishedItems = overdueTodoItems.map(item => (item.className = 'complete'));
header.innerText = `You finished ${finishedItems.length} items!`;

lapsedUserAccounts.map(u => sendBillTo(u.address));

