import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => {

  return (
    <Provider store={store}>
      <h1>App</h1>
    </Provider>
  )
}
export default App