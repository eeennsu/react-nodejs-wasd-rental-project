import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    MainPage,
    ManagerPage,
    ManagerToolStatusPage,
    MyPage,
    RentalPage,
    RentalLogPage,
    Suggestions,
} from './pages'
import { RootLayout } from './layout'
import { ROLES } from './layout/auth/roles'
import SampleLogin from './pages/SampleLogin/SampleLogin'
import RequireAuth from './layout/auth/RequireAuth'
import Unauthorized from './layout/auth/Unauthorized'
import NotFound from './layout/NotFound'
import Login from './pages/MainPage/Auth/Login'
import SignUp from './pages/MainPage/Auth/SignUp'
import Forgot from './pages/MainPage/Auth/Forgot'
import FindPW from './pages/MainPage/Auth/Form/FindPW'
import FindID from './pages/MainPage/Auth/Form/FindID'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout type='main' />}>
                    <Route index path='/' element={<MainPage />} />
                    <Route path='/main/login' element={<Login />} />
                    <Route path='/main/sign-up' element={<SignUp />} />
                    <Route path='/main/forgot' element={<Forgot />} />
                    <Route path='/main/forgot/id' element={<FindID />} />
                    <Route path='/main/forgot/pw' element={<FindPW />} />
                </Route>

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />}> */}
                <Route element={<RootLayout type='other' />}>
                    <Route index path='/rental' element={<RentalPage />} />
                </Route>
                {/* </Route>           */}

                <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                    <Route element={<RootLayout type='other' />}>
                        <Route
                            index
                            path='/manager'
                            element={<ManagerPage />}
                        />
                        <Route
                            path='/manager/tool-status'
                            element={<ManagerToolStatusPage />}
                        />
                        <Route
                            path='/manager/rental-log'
                            element={<RentalLogPage />}
                        />
                        <Route
                            path='/manager/suggestions'
                            element={<Suggestions />}
                        />
                    </Route>
                </Route>

                <Route element={<RootLayout type='other' />}>
                    <Route path='/sampleLogin' element={<SampleLogin />} />
                </Route>

                <Route
                    element={
                        <RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />
                    }
                >
                    <Route element={<RootLayout type='other' isLogo={false} />}>
                        <Route path='/my-page' element={<MyPage />} />
                    </Route>
                </Route>

                <Route path='/unauthorized' element={<Unauthorized />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
