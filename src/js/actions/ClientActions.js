import state from '../tree';
import api from '../api';
import request from 'superagent';

import * as MainActions from './MainActions';

const cursor = state.select('client');

export function getCardsByClient() {
  const user = MainActions.getUser();

  request
    .get(api.getCards.replace('{id}', user.id))
    .end((err, res) => {
      if (res.ok) {
        cursor.set('cards', res.body.data.cards);
      }
    });
}
