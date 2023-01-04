// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Main from './Layouts/Main'
import {UserProvider} from "./Context/UserContext"

function App() {
  return (
    <UserProvider>
      <Main/>
    </UserProvider>
  );
}

export default App;
