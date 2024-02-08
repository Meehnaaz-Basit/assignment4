// 1
function calculateMoney(ticketSale) {
  if (typeof ticketSale == "number" && ticketSale >= 0) {
    const ticketPrice = 120;
    const revenue = ticketSale * ticketPrice;

    const numOfGuard = 1;
    const guardPayment = 500;
    const guardCost = guardPayment * numOfGuard;

    const numOfStuff = 8;
    const lunchPaymentPerStuff = 50;
    const staffLunch = lunchPaymentPerStuff * numOfStuff;

    const expenses = guardCost + staffLunch;

    const profit = revenue - expenses;

    return profit;
  } else {
    return "Invalid Number";
  }
}

//2
function checkName(name) {
  if (typeof name === "string") {
    const nameEnds = ["a", "y", "i", "e", "o", "u", "w"];

    const lowerCasedName = name.toLowerCase();

    const lastAlphabet = lowerCasedName[lowerCasedName.length - 1];

    if (nameEnds.includes(lastAlphabet)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "Invalid";
  }
}

//3
function deleteInvalids(array) {
  if (Array.isArray(array) === true) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if (typeof value === "number" && isNaN(value) !== true) {
        newArray.push(value);
      }
    }
    return newArray;
  } else {
    return `"Invalid Array"`;
  }
}

//5
function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === "number") {
    let totalIncome = 0;
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (value >= 3000) {
        let tax = (3000 * 20) / 100;
        value = value - tax;
      }
      totalIncome = totalIncome + value;
    }
    const saving = totalIncome - livingCost;
    if (saving >= 0) {
      return saving;
    } else {
      return `"Earn More"`;
    }
  } else {
    return "Invalid Input";
  }
}
