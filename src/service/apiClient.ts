import api from "./api";

interface ClientData {
  name: string;
  email: string;
  [key: string]: any;
}

const clientService = {
  createClient: async (data: ClientData) => {
    const response = await api.post("/clients/register", data);
    return response.data;
  },

  deleteClient: async (id: string | number) => {
    const response = await api.delete(`/clients/${id}`);
    return response.data; 
  },

  getAll: async () => {
    const response = await api.get("/clients"); 
    return response.data; 
  }
};

export default clientService;
