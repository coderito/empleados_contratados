/** Controller */
import Users from "../model/user";

// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}


// get : http://localhost:3000/api/users/:id
export async function getUser(req, res){
  try {
    const {userId} = req.query

    if(userId){
      const user = await Users.findById(userId)
      res.status(200).json(user)
    }
    res.status(404).json({error: "User not selected.."})
  } catch (error) {
    res.status(404).json({error: "Cannont get the user!!"})
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });

    const newUser = await Users.create(formData);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
    // buscar un documento en una colección de MongoDB por su ID y actualizarlo al mismo tiempo.
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while updating the data" });
  }
}

// delete: http://localhost:3000/api/users
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    // buscar un documento en una colección de MongoDB por su ID y eliminarlo al mismo tiempo
    const deletedUser = await Users.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({deleted: userId});
  } catch (error) {
    return res.status(500).json({ error: "Error while deleting user" });
  }
}
