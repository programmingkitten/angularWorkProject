import { ShortenPipe } from '../feedback/shorten.pipe';

describe('ShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenPipe();
    expect(pipe).toBeTruthy();
  });
});
