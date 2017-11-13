function slice(item, index) {
  if (item.goodsFashion.length > 12) {
    item.goodsFashion = item.goodsFashion.slice(0, 12) + '...';
  }
}
module.exports={
  slice:slice
}