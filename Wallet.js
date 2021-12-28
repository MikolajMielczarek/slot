class Wallet {
 constructor(money) {
  let _money = money;
  //retrieving the current wallet value
  this.getWalletValue = () => _money;

  //checking whether the user has the right amount of funds

  this.checkCanPlay = value => {
   if (_money >= value) return true;
   return false;
  }

  this.changeWallet = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "+") {
     return _money += value;
    } else if (type === "-") {
     return _money -= value;
    } else {
     throw new Error("wrong type")
    }

   } else {
    console.log(typeof value);
    throw new Error("wrong number")
   }
  }

 }

}