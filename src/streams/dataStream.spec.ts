import { DataStream } from './dataStream';

describe('class DataStream', () => {

  test('should reflect current data', () => {
    const stream = new DataStream();

    expect(stream.data).toBe(undefined);
    stream.data = 'w00t';
    expect(stream.data).toBe('w00t');
  });

  test('should reflect current data', () => {
    const stream = new DataStream('wat');

    expect(stream.data).toBe('wat');
    stream.data = 'w00t';
    expect(stream.data).toBe('w00t');
  });

  test('shouls async', (done) => {
    const expected = ['test one'];

    const stream = new DataStream('wat');
    stream.data$.subscribe({
      next: value => expect(value).toBe(expected.shift()),
      error: null,
      complete: done()
    });
    stream.data = 'test one';
    stream.unsub();
  });

});
