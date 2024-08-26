import { fetcher } from "@/lib/utils";
import useSWR from "swr";

const useCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const { data, error, isLoading, mutate } = useSWR(`/api/user/?id=${user?._id}`, fetcher);

  return {
    currentUser: data?.response,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
