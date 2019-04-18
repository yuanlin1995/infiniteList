export default class Scroll {
  constructor ({ list, cacheNum, cellHeight, boxHeight, cellNum }) {
    this.list = list
    this.cacheNum = cacheNum
    this.cellHeight = cellHeight
    this.boxHeight = boxHeight
    this.renderList = []
    this.totalHeight = 0
    this.paddingTop = 0
    this.paddingBottom = 0
    this.passedCell = 0
    this.cacheHeight = []
    this.cellNum = cellNum || 8
    this.initScroll()
  }

  initScroll () {
    if (this.cellHeight) {
      this.totalHeight = this.list.length * this.cellHeight
      const renderHeight = (this.cellNum + 2 * this.cacheNum) * this.cellHeight
      this.paddingBottom = this.totalHeight - renderHeight
      this.renderList = this.list.slice(0, this.cellNum + 2 * this.cacheNum)
    } else {
      this.renderList = this.list.slice(0, this.cellNum)
      this.renderHeight = this.renderList.reduce(function (sum, value) {
        return (sum += value.style.height)
      }, 0)
      this.totalHeight = this.list.reduce(function (sum, value) {
        return (sum += value.style.height)
      }, 0)
      this.paddingBottom = this.totalHeight - this.renderHeight
    }
  }

  doScroll (scrollTop) {
    if (this.cellHeight) {
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
    } else {
      let passedCellHeight = 0
      for (let i = 0; i < this.list.length; i++) {
        if (passedCellHeight >= scrollTop) {
          this.passedCell = i
          break
        }
        passedCellHeight += this.list[i].style.height
      }
      this.passedCell =
        this.passedCell > this.cacheNum ? this.passedCell - this.cacheNum : 0
      this.paddingTop = this.list
        .slice(0, this.passedCell)
        .reduce(function (sum, value) {
          return (sum += value.style.height)
        }, 0)
      this.renderList = this.list.slice(
        this.passedCell,
        this.cellNum + 2 * this.cacheNum + this.passedCell
      )
      this.renderHeight = this.renderList.reduce(function (sum, value) {
        return (sum += value.style.height)
      }, 0)
      this.paddingBottom =
        this.totalHeight - this.paddingTop - this.renderHeight
    }
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
