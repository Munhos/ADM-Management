import { Router } from "express";
import { addUserController, allUsersController, editUserController, deleteUserController, singUpController, signInController } from "../../controllers/controllers";

const router = Router();
/* Management system */
router.post("/adduser", addUserController);

router.get("https://adm-management-api.vercel.app/allusers", allUsersController);

router.post("/edituser", editUserController);

router.delete("/deletuser/:_id",deleteUserController);


/* Login System */

router.post("/signUp", singUpController);

router.post("/signIn", signInController);

export default router;
