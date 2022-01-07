import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <>
            <Router>
                <Route path='/' render={() => <Navbar style={{ position: "fixed" }} />} />
                <Route path='/' component={() => <Main />} />
            </Router>
        </>
    );
}

export default App;


