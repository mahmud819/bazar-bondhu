
import { useEffect, useState } from "react";
import useAuth from "../UseAuth/useAuth";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";

const useUser = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    if (!user?.email) {
      setUserInfo(null);
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await axiosSecure.get("/userInfo", {
          params: { email: user.email },
        });

        if (isMounted) {
          setUserInfo(res.data);
        }
      } catch (error) {
        console.error("User fetching error:", error);

        if (isMounted) {
          setUserInfo(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [user?.email, loading, axiosSecure]);

  return { userInfo, isLoading };
};

export default useUser;
