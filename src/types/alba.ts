export interface AppliedAlbaData {
  updatedAt: string;
  createdAt: string;
  status: string;
  resumeName: string;
  resumeId: number;
  form: {
    owner: {
      imageUrl: string;
      storeName: string;
      id: number;
    };
    recruitmentEndDate: string;
    recruitmentStartDate: string;
    description: string;
    title: string;
    id: number;
  };
}

export interface AlbarformData {
  updatedAt: string;
  createdAt: string;
  isPublic: boolean;
  scrapCount: number;
  applyCount: number;
  imageUrls: string[];
  recruitmentEndDate: string;
  recruitmentStartDate: string;
  title: string;
  id: number;
}
