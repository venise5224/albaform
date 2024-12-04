import StepSidebar from "./components/StepSidebar";

interface AddFormPageProps {
  searchParams: Promise<{ step: string }>;
}

const AddFormPage = async ({ searchParams }: AddFormPageProps) => {
  const { step } = await searchParams;

  return (
    <div>
      <StepSidebar step={step} />
    </div>
  );
};

export default AddFormPage;
