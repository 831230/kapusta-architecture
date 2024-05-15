import { ReportsNavLink, ReportsNavText, ReportsNavIcon } from "./ReportsNavStyles";

import reportsLogo from "./reportsLogo.svg";

const ReportsNav = () => {
  return (
    <ReportsNavLink to="/reports">
      <ReportsNavText>Reports</ReportsNavText>
      <ReportsNavIcon src={reportsLogo} alt="Reports Icon" />
    </ReportsNavLink>
  );
};

export default ReportsNav;
