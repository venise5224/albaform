export const formatDate = (
  startDate: string,
  endDate: string,
  isAddForm = false
) => {
  return [
    startDate.slice(0, 10).replace(/-/g, isAddForm ? ". " : "."),
    endDate.slice(0, 10).replace(/-/g, isAddForm ? ". " : "."),
  ];
};
