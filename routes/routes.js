const router = require("express").Router();

const {
  checkNaddMovie,
  showDetails,
} = require("../controller/movieController");

// Routes
/**
 * @swagger
 * /getMovieDetails/{movieName}:
 *  get:
 *    description: Use to get the details of a movie
 *    parameters:
 *       - in: path
 *         name: movieName
 *    responses:
 *        description: A successful response with movie details
 */
router.get("/getMovieDetails/:movieName", showDetails);

/**
 * @swagger
 * /checknadd:
 *  post:
 *    description: Use to get the details of a movie
 *    consumes:
 *       - application/json
 *    parameters:
 *       - in: body
 *         name: movieName
 *         schema:
 *            type: object
 *            required:
 *              -name:
 *                type: string
 *    responses:
 *        description: A successful response with movie details
 */
router.post("/checknadd", checkNaddMovie);

module.exports = router;
