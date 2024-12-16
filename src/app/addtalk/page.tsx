import { Suspense } from "react";
import AddTalkForm from "./components/AddTalkForm";

const AddTalkPage = () => {
  return (
    <Suspense>
      <AddTalkForm />
    </Suspense>
  );
};

export default AddTalkPage;
