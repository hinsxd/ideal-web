/**
 *
 * Asynchronously loads the component for OrdersPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
