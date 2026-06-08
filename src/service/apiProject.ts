import api from "./api";

interface ProjectData {
  projectTitle: string;
  projectDescription?: string;
  editingServiceId?: string | number;
  clientId?: string | number;
  dateOfSubmission?: string;
  notes?: string;
  [key: string]: any;
}

const projectService = {
  getAll: async () => {
    const response = await api.get("/project");
    return response.data;
  },

  getByState: async (state: string) => {
    const response = await api.get("/project/filter", { params: { state } });
    return response.data;
  },

  getAllSorted: async (direction: "asc" | "desc" = "desc") => {
    const response = await api.get("/project/sorted", { params: { direction } });
    return response.data;
  },

  create: async (data: ProjectData) => {
    const response = await api.post("/project", data);
    return response.data;
  },

  update: async (id: string | number, data: Partial<ProjectData>) => {
    const response = await api.put(`/project/${id}`, data);
    return response.data;
  },

  delete: async (id: string | number) => {
    await api.delete(`/project/${id}`);
  }
};

export default projectService;
