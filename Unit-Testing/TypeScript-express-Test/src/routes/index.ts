// import { Router } from "express";
// import auth from "./auth";

// const router = Router();

// router.use("/auth", auth);

// export default router;


import * as express from 'express'
import { Router, Request, Response } from "express";

let router = express.Router();

/* GET users listing. */
router.get("/auth", (req: Request, res: Response) => {
  res.send(200);
});

router.get("/auths", (req: Request, res: Response) => {
  res.send(200);
});


export default router;
// import auth from "./auth";

// const router = Router();



// router.use("/auth", auth);

// export default router;
