/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FriendPage from './components/FriendPage'
import TodoApp from './todo_components/TodoApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TodoApp);
