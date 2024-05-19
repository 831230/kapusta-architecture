import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

import styles from "./WebAppTemplate.module.css"

const WebAppTemplate = () => {
  return ( 
    <>
      <ErrorBoundary><Header/></ErrorBoundary>
      <main>
        <Suspense fallback={<div className={styles.loader}><Loader/></div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
   );
}
 
export default WebAppTemplate;