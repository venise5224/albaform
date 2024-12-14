import StepOneContents from "./StepOneContents";
import StepThreeContents from "./StepThreeContents";
import StepTwoContents from "./StepTwoContents";

const StepContent = ({ step }: { step: string }) => {
  const componentsByStep = {
    stepOne: StepOneContents,
    stepTwo: StepTwoContents,
    stepThree: StepThreeContents,
  };

  const Component = componentsByStep[step as keyof typeof componentsByStep];

  return Component ? <Component /> : null;
};

export default StepContent;
