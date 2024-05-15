import arrowLeft from "./arrow-left.svg";
import arrowRight from "./arrow-right.svg";

import { ReportsCategoriesNavContainer, ReportsCategoriesNavNextButton, ReportsCategoriesNavView } from "./ReportsCategoriesNavStyles";

const ReportsCategoriesNav = ({ currentView, toggleView }) => {
  return (
    <ReportsCategoriesNavContainer>
      <ReportsCategoriesNavNextButton onClick={toggleView}>
        <img src={arrowLeft} alt="Logo" />
      </ReportsCategoriesNavNextButton>
      <ReportsCategoriesNavView>{currentView === "expenses" ? "Expenses" : "Income"}</ReportsCategoriesNavView>
      <ReportsCategoriesNavNextButton onClick={toggleView}>
        <img src={arrowRight} alt="Logo" />
      </ReportsCategoriesNavNextButton>
    </ReportsCategoriesNavContainer>
  );
};

export default ReportsCategoriesNav;
