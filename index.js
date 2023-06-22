// Implementing saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Implementing mondayWork function expression
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Implementing wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
  };
  