import { Router } from "express";
import { subscribe, unsubscribe, getSubscriber } from "../../controllers/subscribeController";

const router = Router();

router.get("/:email", getSubscriber);
router.post("/", subscribe);
router.delete("/", unsubscribe);

export { router as subscribeRouter };