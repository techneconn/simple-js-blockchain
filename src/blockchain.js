const Block = require('./block')

module.exports = class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  // 最初のブロック→prevHashが0000として定義されている特別なブロック
  createGenesisBlock() {
    return new Block(0, '01/01/2019', 'Genesis block', '0')
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calcHash()
    this.chain.push(newBlock)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const prevBlock = this.chain[i - 1]
      const block = this.chain[i]

      if (block.hash !== block.calcHash()) return false
      if (block.prevHash !== prevBlock.hash) return false

      return true
    }
  }
}
