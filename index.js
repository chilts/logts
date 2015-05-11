// --------------------------------------------------------------------------------------------------------------------

function logts() {
  var args = Array.prototype.slice.call(arguments)
  if ( typeof args[0] === 'string' ) {
    args[0] = iso() + ' - ' + args[0]
  }
  console.log.apply(console.log, args)
}

// --------------------------------------------------------------------------------------------------------------------

logts.log = function log() {
  var args = Array.prototype.slice.call(arguments)
  if ( typeof args[0] === 'string' ) {
    args[0] = iso() + ' - ' + args[0]
  }
  console.log.apply(console.log, args)
}

logts.info = function info() {
  var args = Array.prototype.slice.call(arguments)
  if ( typeof args[0] === 'string' ) {
    args[0] = iso() + ' - ' + args[0]
  }
  console.info.apply(console.info, args)
}

logts.error = function error() {
  var args = Array.prototype.slice.call(arguments)
  if ( typeof args[0] === 'string' ) {
    args[0] = iso() + ' - ' + args[0]
  }
  console.error.apply(console.error, args)
}

logts.warn = function warn() {
  var args = Array.prototype.slice.call(arguments)
  if ( typeof args[0] === 'string' ) {
    args[0] = iso() + ' - ' + args[0]
  }
  console.warn.apply(console.warn, args)
}

logts.trace = function trace() {
  var args = Array.prototype.slice.call(arguments)
  if ( typeof args[0] === 'string' ) {
    args[0] = iso() + ' - ' + args[0]
  }
  console.trace.apply(console.trace, args)
}

function iso() {
  return (new Date()).toISOString()
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = logts

// --------------------------------------------------------------------------------------------------------------------
