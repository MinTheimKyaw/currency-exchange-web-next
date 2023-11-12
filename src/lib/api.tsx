import { API_DOMAIN } from '../config';
export default async function getData(url= '') {
    const res = await fetch(API_DOMAIN+url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}
  