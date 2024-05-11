import { HeaderExitButton, HeaderExitButtonText, HeaderExitButtonMobile } from "./ExitButtonStyles";

const ExitButton = () => {
  return (
    <>
      <HeaderExitButton>
        <HeaderExitButtonText>Exit</HeaderExitButtonText>
      </HeaderExitButton>
      <HeaderExitButtonMobile>
        {/* Placeholder svg do podmianki */}
        <svg width="16" height="16">
          <rect width="16" height="16" stroke="gray" fill="gray" />
        </svg>
      </HeaderExitButtonMobile>
    </>
  );
};

export default ExitButton;
