const getStored = () =>{
 const storeLawyersData = localStorage.getItem("myBookList");
  if(storeLawyersData){
    const storeLawyerData = JSON.parse(storeLawyersData);
    return storeLawyerData;
  }
  else{
    return [];
  }
}




const addToStoreDB =(id) =>{
    const storeDataDB = getStored();
    if(storeDataDB.includes(id)){
        alert("ai id ase")
    }
    else{
        storeDataDB.push(id);
        const storeData = JSON.stringify(storeDataDB);
        localStorage.setItem("myBookList", storeData);
    }
}
export {addToStoreDB,getStored};