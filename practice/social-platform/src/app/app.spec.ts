import { App } from './app';

describe('App', () => {
  it('harus punya title', () => {
    const component = new App();
    expect(component.title).toBeDefined();
  });
});