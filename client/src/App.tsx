
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MainPage, ManagerPage, ManagerToolStatus, MyPage, RentPage } from './pages';
import { MainLayout, OtherLayout, RootLayout } from './layout';
import { ROLES } from './layout/auth/roles';
import ExamplePage from './pages/ExamplePage/ExamplePage';
import SampleNav from './layout/components/SampleNav';
import SampleLogin from './pages/SampleLogin/SampleLogin';
import RequireAuth from './layout/auth/RequireAuth';
import Unauthorized from './layout/auth/Unauthorized';



const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<SampleNav />}/>   
                <Route path='unauthorized' element={<Unauthorized />} />         
                <Route element={<RootLayout />}>
                    <Route element={<MainLayout />}>
                        <Route index path='/main' element={<MainPage />} />       
                        <Route path='/example' element={<ExamplePage />} />     
                    </Route>

                    <Route element={<OtherLayout />}>
                        <Route path='/sampleLogin' element={<SampleLogin />} />
                    </Route>
                  
                    <Route element={<OtherLayout />}>       
                        <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}>
                            <Route path='/rent' element={<RentPage />} />
                        </Route>    
                        <Route path='/my-page/:id' element={<MyPage />} />
                        <Route path='/manager' element={<ManagerPage />}>
                            <Route path='tool-status' element={<ManagerToolStatus />} /> 
                        </Route>                                                 
                        <Route path='/sampleLogin' element={<SampleLogin />} />
                    </Route>               
                </Route>     

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />} >
                    <Route element={<RootLayout />}>
                        <Route element={<OtherLayout />}>
                            <Route path='/rent' element={<RentPage />} />
                            <Route path='/my-page/:id' element={<MyPage />} />
                        </Route>
                    </Route>                   
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                    <Route element={<RootLayout />}>
                        <Route element={<OtherLayout />}>
                            <Route path='/manager' element={<ManagerPage />} />
                            <Route path='tool-status' element={<ManagerToolStatus />} /> 
                        </Route>    
                    </Route>                 
                </Route> */}
                                             
            </Routes>
        </BrowserRouter>
    );
}

export default App;