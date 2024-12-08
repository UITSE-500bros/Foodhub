import { API_URL } from "@env";

class APIs {
  baseUrl: string;
  constructor() {
    this.baseUrl = API_URL;
  }
  private getURL(url: string) {
    return `${this.baseUrl}${url}`;
  }
  async get(endpoint: string) {
    const response = await fetch(this.getURL(endpoint), {
      method: "GET",
      headers: {
        accept: "*/*",
        
      },
    });
    return await response.json();
  }
  async post(endpoint: string, data: object) {
    const response = await fetch(this.getURL(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async put(endpoint: string, data: object) {
    const response = await fetch(this.getURL(endpoint), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  async delete(endpoint: string) {
    const response = await fetch(this.getURL(endpoint), {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    });
    return response.json();
  }
}
const apis = new APIs();
export default apis;