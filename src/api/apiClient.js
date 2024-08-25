import axios from "axios";

class APIClient {
  async getCardsData() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/dashboard/cards-data");
      const cardsData = response.data.result.cardsData;
      return cardsData;
    } catch (error) {
      console.error("Error fetching cards data:", error);
      return [];
    }
  }
}

const apiClient = new APIClient();
export default apiClient;
