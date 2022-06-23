import { shortingByVote } from '../utils';
let students = [
  {
    fname: 'Rohan',
    lname: 'Dalal',
    rate: 32,
  },
  {
    fname: 'Zain',
    lname: 'Ahmed',
    rate: 7,
  },
  {
    fname: 'Anadi',
    lname: 'Malhotra',
    rate: 1,
  },
];

describe('[helpers]', () => {
  it('Should work shortingByVote method', () => {
    students.sort(shortingByVote);

    expect(students[0].rate).toBe(1);
    expect(students[1].rate).toBe(7);
    expect(students[2].rate).toBe(32);
  });
});
