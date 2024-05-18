import { SpeechBubbleContainer, SpeechBubbleWrapper } from "./ModalStyles";

const ModalCloud = () => {
  return (
    <>
      <SpeechBubbleContainer>
        <SpeechBubbleWrapper>
          <p>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p>You can't spend money until you have it :)</p>
        </SpeechBubbleWrapper>
      </SpeechBubbleContainer>
    </>
  );
};

export default ModalCloud;
