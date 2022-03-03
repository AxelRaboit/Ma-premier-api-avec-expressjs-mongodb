import express from 'express';
import { 
    getRoot,
    getTest,
    postTest,
    addRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom
} from '../controllers/roomController.js';

//Creation du router via express
const router = express.Router();

//Route Racine
router.get('/', getRoot)

//Route Test pour récuperer des informations
router.get('/test', getTest)

//Route Test pour poster des informations
router.post('/test', postTest)

//Route pour créer une room
router.post('/room', addRoom)

//Route pour récuperer les rooms
router.get('/rooms', getRooms)

//Route pour récuperer une chambre par son id
router.get('/room/:id', getRoom)

//Route pour update une chambre par son id
router.patch('/room/:id', updateRoom)

//Route pour delete une chambre par son id
router.delete('/room/:id', deleteRoom)

export default router;
