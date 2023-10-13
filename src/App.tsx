
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ManagerPage, MyPage, RentPage } from './components';
import Layout from './layout/Layout';

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/rent' element={<RentPage />} />
                    <Route path='/my-page/:id' element={<MyPage />} />
                    <Route path='/manager' element={<ManagerPage />} />              
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;