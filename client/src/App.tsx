
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, ManagerPage, ManagerToolStatusPage, MyPage, RentalPage, RentalLogPage, Suggestions, SignUpPage } from './pages';
import { RootLayout } from './layout';
import { ROLES } from './layout/auth/roles';
import ExamplePage from './pages/ExamplePage/ExamplePage';
import SampleNav from './layout/components/SampleNav';
import SampleLogin from './pages/SampleLogin/SampleLogin';
import RequireAuth from './layout/auth/RequireAuth';
import Unauthorized from './layout/auth/Unauthorized';
import NotFound from './layout/NotFound';

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<SampleNav />}/>   
                <Route path='/unauthorized' element={<Unauthorized />} />        
                 
                <Route element={<RootLayout type='main' />}>
                    <Route index path='/main' element={<MainPage />} />       
                    <Route path='/main/sign-up' element={<SignUpPage />} />      
                    <Route path='/example' element={<ExamplePage />} />   
                </Route>    
    
                <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}>
                    <Route element={<RootLayout type='other' />}>
                        <Route index path='/rental' element={<RentalPage />} />
                    </Route>                    
                </Route>          

                <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                    <Route element={<RootLayout type='other' />}>
                        <Route index path='/manager' element={<ManagerPage />} />
                        <Route path='/manager/tool-status' element={<ManagerToolStatusPage />} />                                                                    
                        <Route path='/manager/rental-log' element={<RentalLogPage />} />   
                        <Route path='/manager/suggestions' element={<Suggestions />} />       
                    </Route>
                </Route>                                                                                

                <Route element={<RootLayout type='other' />}>
                    <Route path='/sampleLogin' element={<SampleLogin />} />  
                </Route>                     
                   
                <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}>
                    <Route path='/my-page' element={<MyPage />} />
                </Route>         

                <Route path='*' element={<NotFound />} />             
            </Routes>
        </BrowserRouter>
    );
}

export default App;