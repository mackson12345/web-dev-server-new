import tuitsModel from './tuits-model.js';



export const DfindAllTuits = () => tuitsModel.find();
export const DcreateTuit = (tuit) => tuitsModel.create(tuit);
export const DdeleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const DupdateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

/*
export default tuitsDao
{
    const findAllTuits = () => tuitsModel.find();
    const createTuit = (tuit) => tuitsModel.create(tuit);
    const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
    const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})
}
 */