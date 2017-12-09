import { User } from './user';

describe('class User', () => {

  test('should initialize with isAuthed equal to false', () => {
    const user = new User();
    expect(user.isAuthed).toEqual(false);
  });

  test('should initialize with isAuthed$ stream equal to false', (done) => {
    const expected = [false];

    const user = new User();
    user.isAuthed$.subscribe(value => {
      expect(value).toEqual(expected.shift());
    }, null, done);
    user.unsub();
  });

  test('should update the auth status with setter', () => {
    const user = new User();
    expect(user.isAuthed).toEqual(false);
    user.isAuthed = true;
    expect(user.isAuthed).toEqual(true);
  });

  test('should stream auth status', (done) => {
    const expected = [false, true];

    const user = new User();
    user.isAuthed$.subscribe({
      next: value => expect(value).toEqual(expected.shift()),
      error: null,
      complete: done()
    });
    user.isAuthed = true;
    user.unsub();
  });

});
