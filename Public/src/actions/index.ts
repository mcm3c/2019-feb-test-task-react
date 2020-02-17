import { LocationChangeAction } from 'connected-react-router';

export default RootActions;

type RootActions =
  | { type: 'TEST_ACTION' }
  | LocationChangeAction;
