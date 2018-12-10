import { createGif, updateGif } from './gif-renderer.js';
import * as assert from 'assert';
import 'jsdom-global/register';

describe('gifRenderer', function() {
  it('creates an <img> with argument as src attribute', function() {
    const expected = 'someURL';
    const img = createGif(expected);
    const actual = img.src;

    assert.deepEqual(expected, actual);
  });

  it('updates an <img> with its argument as the new src attribute', function() {
    const expected = 'someURL';
    const img = createGif('oldSrc');
    updateGif(img, expected);
    const actual = img.src;

    assert.deepEqual(expected, actual);
  });
});
