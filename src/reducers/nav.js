import { NavigationActions } from 'react-navigation';
import AppNavigator from '../config/NavConfig';

// Start with two routes: The Main screen, with the Login screen on top.
const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.reset({
  index: 0,
	actions: [
	  NavigationActions.navigate({
		  routeName: 'List',
	  }),
	],
}));

export default function navReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'List':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}