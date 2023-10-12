import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba403b3b27144ee6ab693acfec49ca38",
  },
});
