import Pimanydata from "../controllers/manyobjtomanystud.js";
const Router = express.Router();

Router.post("/fetchmanytomany", Pimanydata);

export default Router;
