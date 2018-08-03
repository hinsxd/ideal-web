/**
 *
 * Asynchronously loads the component for BalancePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
