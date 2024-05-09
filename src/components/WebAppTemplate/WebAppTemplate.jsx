import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const WebAppTemplate = () => {
  return ( 
    <>
      <Header/>
      <main>
        <Suspense fallback={<div>...is loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
   );
}
 
export default WebAppTemplate;