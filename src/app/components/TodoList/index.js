import TodoList from './TodoList.component';
import actions from './actionCreators';
import expressions from './expressions';
import sagas from './sagas';

TodoList.actions = actions;
TodoList.expressions = expressions;
TodoList.sagas = sagas;

export default TodoList;
