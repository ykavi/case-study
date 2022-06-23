import { sortByVote, getIndexById, getFullName } from '../utils';
let students = [
  {
    id: 123,
    fname: 'Rohan',
    lname: 'Dalal',
    rate: 32,
  },
  {
    id: 345,
    fname: 'Zain',
    lname: 'Ahmed',
    rate: 7,
  },
  {
    id: 456,
    fname: 'Anadi',
    lname: 'Malhotra',
    rate: 1,
  },
];

describe('[helpers]', () => {
  it('Should work getIndexById method', () => {
    const index = getIndexById(456, students);

    expect(index).toBe(2);
  });

  it('Should work sortByVote method', () => {
    students.sort(sortByVote);

    expect(students[0].rate).toBe(1);
    expect(students[1].rate).toBe(7);
    expect(students[2].rate).toBe(32);
  });

  it('Should work getFullName method', () => {
    const fullName = getFullName('yunus emre', 'kavi');

    expect(fullName).toBe('yunus emre kavi');
  });
});
