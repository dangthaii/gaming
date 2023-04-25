import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6478b455775842d396e804ba250f9117",
  },
});
