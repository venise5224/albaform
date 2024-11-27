import { ApplicantData } from "../types/alba";

interface ApplicantStatsListProps {
  list: ApplicantData[];
}

const ApplicantStatsList = ({ list }: ApplicantStatsListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>경력</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody className="text-md text-black-400">
        {list.map((el) => (
          <tr key={el.applicantId}>
            <td className="underline">{el.name}</td>
            <td>{el.phoneNumber}</td>
            <td>{el.experienceMonths}</td>
            <td>{el.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicantStatsList;
