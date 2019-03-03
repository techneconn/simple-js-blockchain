const Block = require('./block')
const Blockchain = require('./blockchain')

// 作成テスト
let coin = new Blockchain()
coin.addBlock(new Block(1, '01/02/2019', { amount: 4 }))
coin.addBlock(new Block(2, '01/02/2019', { amount: 50 }))
coin.addBlock(new Block(3, '01/02/2019', { amount: 90 }))

console.log(JSON.stringify(coin, null, 4))

// 改ざん検知テスト
console.log('Blockchain valid? ' + coin.isChainValid())
coin.chain[1].data = { amount: 100 }
console.log('Blockchain valid? ' + coin.isChainValid())
