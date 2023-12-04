import { ImageContainer, Line, StepCounterContainer } from "./StepCounterStyles"

import SecondStep from "../../images/second_step.svg"
import FirstStepCurrent from "../../images/first_step_current.svg"
import FirstStepFinished from "../../images/first_step_finished.svg"
import SecondStepCurrent from "../../images/second_step_current.svg"

type StepCounterProps = {
  firstStep?: boolean
}

const StepCounter = ({ firstStep }: StepCounterProps): JSX.Element => {
  return (
    <StepCounterContainer>
      <ImageContainer>
        <img
          src={firstStep ? FirstStepCurrent : FirstStepFinished}
          alt="First Step"
          title="First Step"
        />

        <span>Dados pessoais</span>
      </ImageContainer>

      <Line />

      <ImageContainer>
        <img
          src={firstStep ? SecondStep : SecondStepCurrent}
          alt="Second Step"
          title="Second Step"
        />

        <span>Contato</span>
      </ImageContainer>
    </StepCounterContainer>
  )
}

export default StepCounter
