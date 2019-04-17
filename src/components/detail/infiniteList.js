export default class Scroll {
  constructor ({ list, cacheNum, cellHeight, boxHeight }) {
    this.list = list
    this.cacheNum = cacheNum
    this.cellHeight = cellHeight
    this.boxHeight = boxHeight
    this.renderList = []
    this.totalHeight = 0
    this.paddingTop = 0
    this.paddingBottom = 0
    this.passedCell = 0
    this.cellNum = 0
    this.initScroll()
  }

  initScroll () {
    this.totalHeight = this.list.length * this.cellHeight
    this.cellNum = Math.ceil(this.boxHeight / this.cellHeight)
    const renderHeight = (this.cellNum + 2 * this.cacheNum) * this.cellHeight
    this.paddingBottom = this.totalHeight - renderHeight
    this.renderList = this.list.slice(0, this.cellNum + 2 * this.cacheNum)
  }

  doScroll (scrollTop) {
    this.passedCell = Math.floor(scrollTop / this.cellHeight)
    this.passedCell =
      this.passedCell > this.cacheNum ? this.passedCell - this.cacheNum : 0
    this.renderList = this.list.slice(
      this.passedCell,
      this.cellNum + 2 * this.cacheNum + this.passedCell
    )
    this.paddingTop = this.passedCell * this.cellHeight
    this.paddingBottom =
      this.totalHeight -
      this.paddingTop -
      this.renderList.length * this.cellHeight
    if (this.paddingBottom < 0) this.paddingBottom = 0
  }

  getScrollData () {
    return {
      totalHeight: this.totalHeight,
      paddingTop: this.paddingTop,
      renderList: this.renderList,
      paddingBottom: this.paddingBottom
    }
  }
}
