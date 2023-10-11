const fs = require('fs');

/* util functions */
const saveData = (data,file) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(file, stringifyData)
}

const getData = (file) => {
    const jsonData = fs.readFileSync(file)
    return JSON.parse(jsonData)    
}


/* Create - POST method */
function add(newData,primaryKey){
    const existItems = getData();
    const itemData = newData;
    const findExist = existItems.find( item => item[primaryKey] === itemData[primaryKey] )
    if (findExist) {
        return {error: true, msg: 'record already exist'};
    }
    existItems.push(itemData);
    saveData(existItems);
    res.send({success: true, msg: 'User data added successfully'})
}

/* Read - GET method */
function getList () {
    const items = getData()
    return items;
}

/* Update - Patch method */
function update(key,keyValue, updatedData) {
    const primaryKey = key;
    const itemData = updatedData;
    const existItems = getData();    
    const findExist = existItems.find( item => item[primaryKey] === keyValue )
    if (!findExist) {
        return {error: true, msg: 'username not exist'}
    }
    const updateItem = existItems.filter( item => item[primaryKey] === keyValue )
    updateItem.push(itemData)
    saveData(updateItem)
    return{success: true, msg: 'User data updated successfully'}
}
/* Delete - Delete method */
function deleteItem(key,keyValue){
    const primaryKey = key;
    const existItems = getData()
    const filterItem = existItems.filter( item => item[primaryKey] !== keyValue )
    if ( existItems.length === filterItem.length ) {
        return {error: true, msg: 'username does not exist'};
    }
    saveData(filterUser)
    return {success: true, msg: 'User removed successfully'};
    
}

module.exports = { getList, add, update, deleteItem };