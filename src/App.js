import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// HOOKS:
import useAuth from "./hooks/useAuth";

// COMPONENTS:
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const WebAppTemplate = lazy(()=>import("./components/WebAppTemplate/WebAppTemplate.jsx"));
const LoginForm = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ExpensesPage = lazy(() => import("./pages/ExpensesPage/ExpensesPage.jsx"));
const IncomePage = lazy(() => import("./pages/IncomePage/IncomePage.jsx"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage.jsx"));

const App = () => {
  const {userData, isLoggedIn} = useAuth(); 
  console.log({userData, isLoggedIn});
  return ( 
    <>
      <Routes>
        <Route path="/" element={<WebAppTemplate/>}>
          <Route index element={<PrivateRoute Component={<LoginForm/>} redirectTo="/transactions/expenses"/>}/>
          <Route path="/transactions">
            <Route path="expenses" element={<ProtectedRoute Component={<ExpensesPage/>} redirectTo="/"/>}/>
            <Route path="income" element={<ProtectedRoute Component={<IncomePage/>} redirectTo="/"/>}/>
          </Route>
          <Route path="/reports" element={<ProtectedRoute Component={<ReportsPage/>} redirectTo="/"/>}/>
        </Route>

      </Routes>
    </>
   );
}
 
export default App;
