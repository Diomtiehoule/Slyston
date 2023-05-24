import { auth, signInWithEmailAndPassword, getDocs, userCollection} from "../../DB/config.js";

const password = document.querySelector("#user_password_connexion");
const email = document.querySelector("#user_mail_connexion");

let loginBtn = document.querySelector('#submit_connexion');
let form = document.querySelector('.form-connexion');

let alldataUser = [];

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = {
        password: password.value,
        email: email.value,
    };
    loginUser(user, (data) => {
        console.log('data', data.user);
        if (data.user) {
            const userId = testRedirection(alldataUser, user.email, user.password);
            if (userId) {
                console.log(userId, 'id');
                location.href=`../../HTML/dashboardUser.html?id=${userId}`;
            }
        }else if(user.email=="admis@gmail.com" && user.password=="123"){
            location.href=`../../HTML/dashboardAdmis.html?`;
        }
    });
    form.reset();
});

async function loginUser(user, callback) {
    let res = {
        user: null,
        error: null
    };
    console.log("user", user.email, user.password);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        res.user = userCredential.user;
    } catch (e) {
        res.error = e.code;
    }
    callback(res);
}

async function getAllData() {
    let querySnapshot = await getDocs(userCollection);
    const data = [];
    querySnapshot.forEach((allData) => {
        const documentData = allData.data();
        data.push(documentData);
    });

    return data;
}

function printAllData() {
    getAllData().then((data) => {
        alldataUser.push(data);
    }).catch((error) => {
        console.log("Une erreur s'est produite :", error);
    });
}
printAllData();

function testRedirection(data, mail, motPass) {
    for (const item of data[0]) {
        if (item.email === mail && item.password === motPass) {
            return item.id;
        }
    }
    return null;
}


