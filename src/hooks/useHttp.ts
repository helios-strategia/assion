import { useState } from "react";
import { useJWT } from "./useJWT";

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH"
}

export const useHttp = (): {
  request: (
    url: string,
    method: HTTPMethod,
    body?: any,
    headers?: Record<string, string>
  ) => Promise<any>;
  loading: boolean;
  error: Error | undefined;
} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const { jwtToken } = useJWT();

  async function request(
    url: string,
    method: HTTPMethod = HTTPMethod.GET,
    body?: any,
    headers?: Record<string, string>
  ) {
    try {
      setLoading(true);

      const token =
        jwtToken ||
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YWxlcmFAaGVsaW9zLmNvbSIsInJvbGUiOiJBRE1JTiIsImlkIjoxLCJpYXQiOjE2NTkzODc2NDEsImV4cCI6MTY1OTM5NDg0MX0.eGhP10QQHHCj2UiglqcsXCzkP8nnK4a-64Cb2kGpJTw";

      const isFormData = body instanceof FormData;

      const myHeaders = new Headers();
      !isFormData && myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          myHeaders.append(key, value);
        });
      }
      const raw = isFormData ? body : JSON.stringify(body);

      const response = await fetch(url, {
        method: method,
        body: raw,
        headers: myHeaders,
      })
        .then((res) => res.json())
        .catch((e) => {
          const err = new Error(e);
          setError(err);
          throw err;
        })
        .finally(() => {
          setLoading(false);
        });

      return response;
    } catch (e) {
      console.warn(e);
    }
  }

  return { request, loading, error };
};
