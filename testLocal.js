const {Chord, UniversoTonal} = require('tonality-map')
const c = new Chord([0,4,7])
console.log(c.chordName())

const u = new UniversoTonal()
console.log(u.calculateTableCSV(c))