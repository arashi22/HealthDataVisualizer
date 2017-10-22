import { StackNavigator, TabNavigator } from 'react-navigation';
import TodosScreen from '../containers/TodosScreen';
import FavoritesScreen from '../containers/FavoritesScreen';
import DetailScreen from '../containers/DetailScreen';

const TabScreenNavigator = TabNavigator({
  Todos: { screen: TodosScreen },
  Favorites: { screen: FavoritesScreen },
}, {
  initialRouteName: 'Todos',
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

const AppNavigator = StackNavigator({
  List: {
    screen: TabScreenNavigator,
    navigationOptions: {
      title: 'Counties',
    }
  },
  Detail: {
    screen: DetailScreen,
    animationEnabled: true,
  }
}, {
  initialRouteName: 'List'
})

export { AppNavigator as default }