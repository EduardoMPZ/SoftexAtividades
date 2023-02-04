import { Route, Routes, Link } from 'react-router-dom';
import Add from './pagina01';
import A from './pagina02';

function App() {
    return (
        <div>
            <h1>Layout Common</h1>
            <Link to="/">Home  </Link>
            <Link to="/teste01">Página 01  </Link>
            <Link to="/teste02">Página 02</Link>
            <Routes>
                <Route exact path="/" />
                <Route exact path="/teste01" element={<Add />} />
                <Route exact path="/teste02" element={<A />} />
            </Routes>
        </div>
    );
}

export default App;