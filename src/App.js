import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// HOOKS:
import useAuth from "./hooks/useAuth";

// COMPONENTS:
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const WebAppTemplate = lazy(()=>import("./components/WebAppTemplate/WebAppTemplate.jsx"));
const LoginForm = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const TransactionsPage = lazy(() => import("./pages/TransactionsPage/TransactionsPage.jsx"));
const Expenses = lazy(() => import("./components/Expenses/Expenses.jsx"));
const Income = lazy(() => import("./components/Income/Income.jsx"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage.jsx"));

const App = () => {
  const {userData, isLoggedIn} = useAuth(); 
  console.log({userData, isLoggedIn});
  return ( 
    <>
      <Routes>
        <Route path="/" element={<WebAppTemplate/>}>
          <Route index element={<PrivateRoute Component={<LoginForm/>} redirectTo="/transactions/expenses"/>}/>
          <Route path="/transactions" element={<ProtectedRoute Component={<TransactionsPage/>} redirectTo="/"/>}>
            <Route path="expenses" element={<ProtectedRoute Component={<Expenses/>} redirectTo="/"/>}/>
            <Route path="income" element={<ProtectedRoute Component={<Income/>} redirectTo="/"/>}/>
          </Route>
          <Route path="/reports" element={<ProtectedRoute Component={<ReportsPage/>} redirectTo="/"/>}/>
        </Route>

      </Routes>
    </>
   );
}
 
export default App;
