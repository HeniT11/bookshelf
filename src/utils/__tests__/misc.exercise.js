import {formatDate} from '../misc'

test('formatDate formats the date to look nice', () => {
  expect(formatDate(new Date('March 30, 1998'))).toBe('Mar 98')
})
