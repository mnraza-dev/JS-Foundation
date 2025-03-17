import { Provider } from "react-redux"
import store from "./redux/store"
import { Container, Typography } from "@mui/material"
import AddHabbitForm from "./components/AddHabbitForm"

const App = () => {

  return (
    <Provider store={store}>
     <Container maxWidth="md">
    <Typography variant="h2" component="h1" align={"center"}>
      Habbit Tracker
    </Typography>
    <AddHabbitForm/>
     </Container>
    </Provider>
  )
}
export default App