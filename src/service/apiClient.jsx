import api from "./api";

const clientService = {
  
  createClient: async (data) => {
    const response = await api.post("/clients/register", data);
    return response.data;
  },

 
  deleteClient: async (id) => {
    const response = await api.delete(`/clients/${id}`);
    return response.data; 
  },

};

export default clientService;