const router = require('express').Router();
const userController = require('../../controllers/userController');

router.get('/test', async (req, res) => {
    try {
        const response = userController.getTest(req.app.username);
        res.json(response);
    } catch (e) {
        res.error(e);
    }
});

// router.post('/postUser', async (req, res) => {
//     try {
//         const response = userController.postUser(req.body, req.app.connectionSettings, req.app.username);
//         res.json(response);
//     } catch (e) {
//         logger.error(e);
//     }
// });

module.exports = router;