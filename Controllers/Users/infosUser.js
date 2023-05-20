import { getDocs, userCollection } from "../../DB/config.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
let alldataUser = [];

async function getAllData() {
    try {
        const querySnapshot = await getDocs(userCollection);
        const data = [];
        querySnapshot.forEach((allData) => {
            const documentData = allData.data();
            data.push(documentData);
        });
        return data;
    } catch (error) {
        throw new Error("Une erreur s'est produite :", error);
    }
}

async function printAllData() {
    try {
        const data = await getAllData();
        alldataUser.push(data);
        testRecupere(alldataUser);
    } catch (error) {
        console.log("Une erreur s'est produite :", error);
    }
}

printAllData();

let nameUser=document.querySelector('.card-photo-name>h3')
console.log(nameUser)
function testRecupere(data) {
    // console.log(data[0], "my data");
    for (const item of data[0]) {
        if (item.id === id) {
            createElement(item)
           
        }
    }
    return null;
}

console.log( infos);

function createElement(data){
    nameUser.innerText=`${data.nom} ${data.prenom}`
}



