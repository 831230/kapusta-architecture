// import addIncomeIcon from "../../assets/addIncomeIcon.svg";
// import salaryIcon from "../../assets/salaryIcon.svg";
// import alcoholIcon from "../../assets/alcoholIcon.svg";
// import communicationIcon from "../../assets/communicationIcon.svg";
// import educationIcon from "../../assets/educationIcon.svg";
// import entertainmentIcon from "../../assets/entertainmentIcon.svg";
// import healthIcon from "../../assets/healthIcon.svg";
// import hobbiesIcon from "../../assets/hobbiesIcon.svg";
// import housingIcon from "../../assets/housingIcon.svg";
// import otherIcon from "../../assets/otherIcon.svg";
// import productsIcon from "../../assets/productsIcon.svg";
// import techniqueIcon from "../../assets/techniqueIcon.svg";
// import transportIcon from "../../assets/transportIcon.svg";

// const iconMapper = {
//   addIncome: addIncomeIcon,
//   salary: salaryIcon,
//   alcohol: alcoholIcon,
//   communication: communicationIcon,
//   education: educationIcon,
//   entertainment: entertainmentIcon,
//   health: healthIcon,
//   hobbies: hobbiesIcon,
//   housing: housingIcon,
//   other: otherIcon,
//   products: productsIcon,
//   technique: techniqueIcon,
//   transport: transportIcon,
// };

// export default iconMapper;

import { ReactComponent as AddIncomeIcon } from "../../assets/addIncomeIcon.svg";
import { ReactComponent as SalaryIcon } from "../../assets/salaryIcon.svg";
import { ReactComponent as AlcoholIcon } from "../../assets/alcoholIcon.svg";
import { ReactComponent as CommunicationIcon } from "../../assets/communicationIcon.svg";
import { ReactComponent as EducationIcon } from "../../assets/educationIcon.svg";
import { ReactComponent as EntertainmentIcon } from "../../assets/entertainmentIcon.svg";
import { ReactComponent as HealthIcon } from "../../assets/healthIcon.svg";
import { ReactComponent as HobbiesIcon } from "../../assets/hobbiesIcon.svg";
import { ReactComponent as HousingIcon } from "../../assets/housingIcon.svg";
import { ReactComponent as OtherIcon } from "../../assets/otherIcon.svg";
import { ReactComponent as ProductsIcon } from "../../assets/productsIcon.svg";
import { ReactComponent as TechniqueIcon } from "../../assets/techniqueIcon.svg";
import { ReactComponent as TransportIcon } from "../../assets/transportIcon.svg";

const iconMapper = {
  addIncome: <AddIncomeIcon />,
  salary: <SalaryIcon />,
  alcohol: <AlcoholIcon />,
  communalCommunication: <CommunicationIcon />,
  education: <EducationIcon />,
  entertainment: <EntertainmentIcon />,
  health: <HealthIcon />,
  sportsHobbies: <HobbiesIcon />,
  housing: <HousingIcon />,
  other: <OtherIcon />,
  products: <ProductsIcon />,
  technique: <TechniqueIcon />,
  transport: <TransportIcon />,
};

export default iconMapper;
