import {
  CurrentPeriodButton,
  CurrentPeriodContainer,
  CurrentPeriodWrapper,
  CurrentPeriodButtonIcon,
  CurrentPeriodLabel,
  CurrentPeriodDate,
} from "./CurrentPeriodStyles";

import leftIcon from "./left-icon.svg";
import rightIcon from "./right-icon.svg";

const CurrentPeriod = ({ currentPeriod, setCurrentPeriod }) => {
  const goToPreviousMonth = () => {
    setCurrentPeriod((prevPeriod) => {
      const [year, month] = prevPeriod.split("-").map(Number);
      const previousMonth = new Date(year, month - 2);
      return `${previousMonth.getFullYear()}-${String(previousMonth.getMonth() + 1).padStart(2, "0")}`;
    });
  };

  const goToNextMonth = () => {
    setCurrentPeriod((prevPeriod) => {
      const [year, month] = prevPeriod.split("-").map(Number);
      const nextMonth = new Date(year, month);
      const today = new Date();
      if (nextMonth <= new Date(today.getFullYear(), today.getMonth())) {
        return `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, "0")}`;
      }
      return prevPeriod;
    });
  };

  const [year, month] = currentPeriod.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = months[month - 1];

  return (
    <CurrentPeriodContainer>
      <CurrentPeriodLabel>Current period:</CurrentPeriodLabel>
      <CurrentPeriodWrapper>
        <CurrentPeriodButton onClick={goToPreviousMonth}>
          <CurrentPeriodButtonIcon src={leftIcon} />
        </CurrentPeriodButton>
        <CurrentPeriodDate>
          {monthName} {year}
        </CurrentPeriodDate>
        <CurrentPeriodButton onClick={goToNextMonth}>
          <CurrentPeriodButtonIcon src={rightIcon} />
        </CurrentPeriodButton>
      </CurrentPeriodWrapper>
    </CurrentPeriodContainer>
  );
};

export default CurrentPeriod;
