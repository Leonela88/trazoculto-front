import api from "./api";

const authService = {
  login: async (email, password) => {
   
    const token = "Basic " + btoa(`${email}:${password}`);

    try {
     
      const response = await api.get("/project", {
        headers: { Authorization: token }
      });

     
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", email); 
      
      return response.data;
    } catch (error) {
      
      throw new Error("Invalid Credentials");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  }
};

export default authService;