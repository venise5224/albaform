export interface AddFormStepProps {
  stepOne?: {
    title: string;
    description: string;
    recruitmentStartDate: string;
    recruitmentEndDate: string;
    imageUrls?: File[];
    tempImage: string[];
  };
  stepTwo?: {
    numberOfPositions: number;
    gender: string;
    education: string;
    age: string;
    preferred: string;
  };
  stepThree?: {
    location: string;
    workStartDate: string;
    workEndDate: string;
    workStartTime: string;
    workEndTime: string;
    workDays: string[];
    isNegotiableWorkDays: boolean;
    hourlyWage: number;
    isPublic: boolean;
  };
}
