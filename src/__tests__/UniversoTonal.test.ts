import { UniversoTonal } from '../UniversoTonal'
import { Chord } from '../Chord'
import { Tonality } from '../Tonality'

test(`Create default tonal university
it should have 24 tonalityies in dictonary`, () => {
  let u = new UniversoTonal()
  //   console.log(u);
  expect(u.universeDictionary.length).toBe(24)
  expect(u.tonalityMain.name).toBe('CM')
})

test('Should set main tonality with function', () => {
  let u = new UniversoTonal()
  u.changeMainTonality('Am')

  expect(u.getMainTonality().base).toBe(9)
  expect(u.getMainTonality().kind).toBe('m')
})

test('Should set tonality by name', () => {
  let u = new UniversoTonal()

  expect(u.getTonalityByName('CM')).toEqual(u.getTonalityByInfo(0, 'M'))
})

test('Should calculate functions  ', () => {
  let u = new UniversoTonal()

  expect(u.calculateFunctions(new Chord([0, 4, 7]))[0]).toEqual([1, '0M'])
})

test('Should calculate CSV table', () => {
  let u = new UniversoTonal()
  const table = `0M, 1
1M, 0
2M, 0
3M, 0
4M, 0
5M, 5
6M, 0
7M, 4
8M, 0
9M, 0
10M, 0
11M, 0
0m, 0
1m, 0
2m, 7
3m, 0
4m, 6
5m, 5
6m, 0
7m, 4
8m, 0
9m, 3
10m, 0
11m, 0
`
  expect(u.calculateTableCSV(new Chord([0, 4, 7]))).toEqual(table)
})
