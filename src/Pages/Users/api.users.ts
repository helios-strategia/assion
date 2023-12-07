import { useState } from "react";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import { apiURL } from "../../api/apiURL";
import { User } from "../../types/user";
import { message } from "antd";

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
  async function fetchEditUser(data: FormData, id: string | number) {
    const res = await request(
      `${baseUrl}${getAll}/${id}`,
      HTTPMethod.PATCH,
      data
    );

    if (res.id) {
      message.success("Данні користувача оновлені");
    }
  }

  return {
    users,
    fetchAllUsers,
    fetchEditUser,
    loadingUsers: loading,
  };
}
