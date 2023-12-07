import { useState } from "react";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import { apiURL } from "../../api/apiURL";
import { UserCreateFormState } from "./CreateUser";
import { message } from "antd";

export function useCreateUser() {
  const {
    baseUrl,
    user: { createUser },
  } = apiURL;

  const { request, loading } = useHttp();

  const [newUser, setNewuser] = useState<any[]>([]);

  async function fetchCreateUser(data: UserCreateFormState) {
    const res = await request(`${baseUrl}${createUser}`, HTTPMethod.POST, data);
    if (res.id) {
      message.success(`Пользователь ${res.name} успешно создан`);
      setNewuser(res);
    } else {
      message.error(res.message);
    }
  }

  return {
    newUser,
    fetchCreateUser,
    loadingUCreateUser: loading,
  };
}
