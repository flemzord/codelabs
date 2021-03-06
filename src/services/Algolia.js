/* eslint-disable import/prefer-default-export */
import algoliasearch from 'algoliasearch';

import {
  ALGOLIA_API_KEY,
  ALGOLIA_APP_ID,
} from '../constants';

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex('codelabs');

export const search = (params = {}) => new Promise((resolve, reject) => {
  index.search(params, (err, content) => {
    if (err) {
      reject(err);
    }

    resolve(content.hits);
  });
});
