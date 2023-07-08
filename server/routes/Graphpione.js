import Pidata from "../controllers/oneobjtomanystud.js";
const Router = express.Router();

Router.post("/fetchonetoone", Pidata);

export default Router;
