interface SearchParamsData {
  orderBy?: string;
  limit: number;
  keyword?: string;
  isRecruiting?: boolean | undefined;
}

export const getAlbaList = async ({
  orderBy,
  limit,
  keyword,
  isRecruiting,
}: SearchParamsData) => {
  const url = new URL(`https://fe-project-albaform.vercel.app/9-3/forms`);

  url.searchParams.append("orderBy", orderBy || "mostRecent");
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("keyword", keyword || "");
  isRecruiting !== undefined &&
    url.searchParams.append("isRecruiting", String(isRecruiting));

  const response = await fetch(url.toString());
  const result = await response.json();

  return {
    status: response.status,
    data: result.data,
    nextCursor: result.nextCursor,
  };
};
