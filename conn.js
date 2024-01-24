const {Web3} = require("web3");

const web3 = new Web3("https://sepolia.infura.io/v3/");

// console.log(web3.eth);
// web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
// .once('sending', function(payload){ ... })
// .once('sent', function(payload){ ... })
// .once('transactionHash', function(hash){ ... })
// .once('receipt', function(receipt){ ... })
// .on('confirmation', function(confNumber, receipt, latestBlockHash){ ... })
// .on('error', function(error){ ... })
// .then(function(receipt){
//     // will be fired once the receipt is mined
// });

function mainEnter() {
    web3.eth.getAccounts(function(error, result) {
    web3.eth.sendTransaction(
        {from:web3.eth.accounts[0],
        to:"0xE4F653Fb92ca2C55A309d0EDA4a19884F4a24133",
        value:  "10"
        }, function(err, transactionHash) {
      if (!err)
        console.log(transactionHash + " success"); 
    });
});
}

mainEnter();


// web3.eth.sendTransaction({
//     from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
//     to: "0x086912faa7f6598d28d80c448c8d1e9dae5a4dee", 
//     value: web3.toWei(1, "ether"), 
// }, function(err, transactionHash) {
//     if (err) { 
//         console.log(err); 
//     } else {
//         console.log(transactionHash);
//     }
// });