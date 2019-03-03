const SHA256 = require('crypto-js/sha256')

module.exports = class Block {
  constructor(index, timestamp, data, prevHash = '') {
    this.index = index
    this.prevHash = prevHash
    this.timestamp = timestamp
    this.data = data
    this.hash = this.calcHash()
  }

  calcHash() {
    // index, prevHash, timestamp, dataのうち1つでも変更があるとハッシュ値が変化するため改ざん検知できる
    return SHA256(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString()
  }
}
