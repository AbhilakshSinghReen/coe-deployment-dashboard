import axios from "axios";

class APIClient {
  async getCardsData() {
    try {
      const response = await axios.get("http://localhost:8000/dashboard/cards-data");
      return response.data.result;
    } catch (error) {
      console.error("Error fetching cards data:", error);
      return [];
    }
  }
}

const apiClient = new APIClient();
export default apiClient;
