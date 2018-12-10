import { gifGrid } from './gif-grid';
import * as assert from 'assert';
import 'jsdom-global/register';

describe('gifGrid', function() {
  it('creates an <img> for every item in the gifData collection', function() {
    let actual;
    const expected = 2;
    const gifData = [
      { images: { fixed_width: { url: 'someurl' } } },
      { images: { fixed_width: { url: 'someurl2' } } }
    ];
    const grid = gifGrid({
      appendChild: fragment => {
        actual = fragment.children.length;
      }
    });
    grid.renderGifs(gifData);
    assert.deepEqual(actual, expected);
  });
});
