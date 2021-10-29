// 全局的日期转换函数
function myDateFormat (msg) {
  if (!msg) return ''
  return new Date(+new Date(msg) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}
function formatZero (num, len) {
  if (String(num).length > len) return num
  return (Array(len).join(0) + num).slice(-len)
}
export default {
  myDateFormat, formatZero
}
