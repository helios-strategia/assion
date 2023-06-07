import { useState } from "react";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import { apiURL } from "../../api/apiURL";

export function useAllUsers() {
  const {
    baseUrl,
    user: { getAll },
  } = apiURL;

  const { request, loading } = useHttp();

  const [users, setUsers] = useState<any[]>([]);

  async function fetchAllUsers() {
    const res = await request(`${baseUrl}${getAll}`, HTTPMethod.GET);

    if (Array.isArray(res)) {
      setUsers(res);
    }
  }

  return {
    users,
    fetchAllUsers,
    loadingUsers: loading,
  };
}
