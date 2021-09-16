import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const item = [{ price: 10 }, { price: 15 }];
    return item;
  }
}
