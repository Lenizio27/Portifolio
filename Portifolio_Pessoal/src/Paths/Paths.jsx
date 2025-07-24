import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage';

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;