/**
 *
 * Asynchronously loads the component for HomeNav
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
