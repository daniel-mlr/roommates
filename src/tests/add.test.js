// add.test.js
// the test.js is necessary for jest to recognise the file as
// a test file
//
const add = (a, b) => a + b
const generateGreeting = (name='Anonymous') => `Hello ${name}`

test('should add two numbers', () => {
  const result = add(3, 4)
  // if (result !== 7) {
  //   throw new Error(
  //     `You added 4 and 3. 
  //     Ther result was ${result}. Expected 7.`
  //   )
  // }
  expect(result).toBe(7)
})

test('should be Hello name', () => {
  const result = generateGreeting('Daniel')
  expect(result).toBe('Hello Daniel')
})
test('should generate greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous')
})
