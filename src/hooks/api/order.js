import { useRequest } from "@/hooks/config/request";

export function useGetExamStatus() {
  const { authConfig } = useUser();
  const { request } = useRequest();
  const [loading, setLoading] = useState(false);

  const getExamStatus = request(
    async function (assessmentId) {
      setLoading(true);

      const res = await apiReq.get(`/cbt/assessments/${assessmentId}/progress`, authConfig);

      const resData = res.data;
      if (resData?.error && !resData?.success) {
        toast.error(resData.message);
        return;
      }

      return resData?.result;
    },
    {
      onFinally: () => setLoading(false),
    },
  );

  return { getExamStatus, loading };
}
