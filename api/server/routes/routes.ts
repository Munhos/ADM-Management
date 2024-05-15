import { Router } from "express";
import { addUserController, allUsersController, editUserController, deleteUserController, singUpController, signInController } from "../../controllers/controllers";
import { Response, Request } from "express";


const router = Router();
/* Management system */
router.post("/adduser", addUserController);

router.get("/", (req, res) => {
  return res.send("teste");
})

router.get("/allusers", allUsersController);

router.post("/edituser", editUserController);

router.delete("/deletuser/:_id",deleteUserController);

export default router;
