//import tuitsDao from "../tuits/tuits-dao.js";
import {DfindAllTuits, DupdateTuit, DdeleteTuit, DcreateTuit} from "../tuits/tuits-dao.js";

const tuitController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

    const findAllTuits = async (req, res) => {
        const tuits = await DfindAllTuits()
        res.json(tuits);
    }

    const createTuit = async (req, res) => {
        const newTuit = req.body;
        const insertedTuit = await DcreateTuit(newTuit);
        res.json(insertedTuit);
    }

    const deleteTuit = async (req, res) => {
        const tuitdIdToDelete = req.params.tid;
        const status = await DdeleteTuit(tuitdIdToDelete);
        res.send(status);
    }

    const updateTuit = async (req, res) => {
        const tuitdIdToUpdate = req.params.tid;
        const updatedTuit = req.body;
        const status = await DupdateTuit(tuitdIdToUpdate, updatedTuit);
        res.send(status);
    }

    export default tuitController;

