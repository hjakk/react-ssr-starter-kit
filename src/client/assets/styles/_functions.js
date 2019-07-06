const vars = require('./_variables')


function fixed(n, len = 4) {
  return +n.toFixed(len)
}

function unit(value, context, unit) {
  return value.split(' ').reduce((str, x) => {
    if (str) str += ' '
    str += +x ? `${ fixed(x / (context || vars.fontSize)) }${ unit }` : x
    return str
  }, '')
}

function rem(fontSize, context) {
  return unit(fontSize, context, 'rem')
}

function em(fontSize, context) {
  return unit(fontSize, context, 'em')
}

module.exports = {
  rem,
  em,
  fixed,
}
