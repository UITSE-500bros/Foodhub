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
        accept: "*/*",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data));
    return response;
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
  async delete(endpoint: string,data: object) {
    const response = await fetch(this.getURL(endpoint), {
      method: "DELETE",
      headers: {
        accept: "*/*",
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
}
const apis = new APIs();
export default apis;