import database from "@models/index";

// const { User } = database;

export default class UserService {
  static async createUser(user) {
    try {
      const newUser = await database.Users.create(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
}
