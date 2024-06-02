import { client } from "./api";

// const myAxiosInstance = axios.create({ baseURL: "https://www.naver.com" });
// 1. 나만의 인스턴스니까 커스텀 할 수 있다.
// 2. 여러개의 나만의 인스턴스를 만들 수 있다.

export async function getBrands() {
  const endpoint = `/brands`;
  const response = await client.get(endpoint);

  return response.data;
}
export async function getBrand(brandId) {
  const endpoint = `/brands/${brandId}`;
  const response = await client.get(endpoint);

  return response.data;
}
