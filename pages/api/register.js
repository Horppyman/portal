import UserService from "@services/userService";

export default async function register(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const response = await UserService.createUser(data);
    console.log("data: ", response);
  } else {
    res.status(400).json({
      message: "Method is not allowed",
    });
  }
}
