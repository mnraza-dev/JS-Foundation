
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { RootState } from './redux/store';
import App from './App';
store.subscribe(() => {
  const state: RootState = store.getState();
  localStorage.setItem('todos', JSON.stringify(state.todos.items));
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);