import { Route, Routes } from 'react-router-dom';
import Add from './pagina01';
import A from './pagina02';

function App() {
    return (
        <div>
            <h1>Layout Commom</h1>
            <Routes>
                <Route exact path="/teste01" element={<Add />} />
                <Route exact path="/teste02" element={<A />} />
            </Routes>
        </div>
    );
}

export default App;