import api from "./api";

const projectService = {
 
  getAll: async () => {
    const response = await api.get("/project");
    return response.data;
  },

  getByState: async (state) => {
    const response = await api.get("/project/filter", { params: { state } });
    return response.data;
  },

  
  getAllSorted: async (direction = "desc") => {
    const response = await api.get("/project/sorted", { params: { direction } });
    return response.data;
  },

  
  create: async (data) => {
    const response = await api.post("/project", data);
    return response.data;
  },

  
  update: async (id, data) => {
    const response = await api.put(`/project/${id}`, data);
    return response.data;
  },

  
  delete: async (id) => {
    await api.delete(`/project/${id}`);
  }
};

export default projectService;