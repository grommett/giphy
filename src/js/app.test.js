import app from './app.js';
import * as assert from 'assert';
import sinon from 'sinon';
import 'jsdom-global/register';

describe('app', function() {
  it('calls gifGrid with data returned from gif service', async function() {
    const fake = sinon.fake();
    const data = [1, 2];
    const mockGrid = () => ({ renderGifs: fake });
    const gifApp = app({ getGifs: () => Promise.resolve(data) }, mockGrid);
    await gifApp.init({ target: 'el' });

    assert.equal(fake.calledOnce, true);
    assert.equal(fake.calledWith(data), true);
  });

  it('calls gifGrid update with data returned from gif service', async function() {
    const fake = sinon.fake();
    const data = [1, 2];
    const mockGrid = () => ({ renderGifs: () => {}, updateGifs: fake });
    const gifApp = app({ getGifs: () => Promise.resolve(data) }, mockGrid);
    await gifApp.init({ target: 'el' });
    await gifApp.onPageChange({ detail: { page: 10 } });

    assert.equal(fake.calledOnce, true);
    assert.equal(fake.calledWith(data), true);
  });
});
