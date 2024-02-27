import { useParams } from "react-router-dom";
import EStudentInfo from "../../components/EnrollmentDetails/EStudentinfo";
import ETrainerInfo from "../../components/EnrollmentDetails/ETrainerinfo";
import { useFetch } from "../../hooks/useFetch";

const EnrollDetails = () => {
  const { id } = useParams();
  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/enroll/enroll-detail?eId=${id}`
  );
  console.log(data);
  return (
    <>
      <section>
        <div className="box p-0">
          <EStudentInfo student={data?.data} />
          <ETrainerInfo trainer={data?.data} />
        </div>
      </section>
    </>
  );
};

export default EnrollDetails;
