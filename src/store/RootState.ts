import reducers from 'reducers';
import { RouterState } from 'connected-react-router';
import { CombinedState, DeepPartial } from 'redux';

type RootState = DeepPartial<
  ReturnType<typeof reducers> &
  CombinedState<{ router: RouterState<{}>; }>
>;

export default RootState;
