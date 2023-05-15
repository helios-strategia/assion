import { useState } from "react";

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

export const useHttp = (): [
  (
    url: string,
    method: HTTPMethod,
    body?: any,
    headers?: Record<string, string>
  ) => any,
  boolean,
  Error | undefined
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  async function request(
    url: string,
    method: HTTPMethod = HTTPMethod.GET,
    body?: any,
    headers?: Record<string, string>
  ) {
    try {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YWxlcmFAaGVsaW9zLmNvbSIsInJvbGUiOiJBRE1JTiIsImlkIjoxLCJpYXQiOjE2NTkzODc2NDEsImV4cCI6MTY1OTM5NDg0MX0.eGhP10QQHHCj2UiglqcsXCzkP8nnK4a-64Cb2kGpJTw"
      );

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          myHeaders.append(key, value);
        });
      }

      const raw = JSON.stringify(body);

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

  return [request, loading, error];
};
