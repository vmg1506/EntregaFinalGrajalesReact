// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9TT9H_EsJQn_u_nwnQoeUJaTd4X69Ct4",
  authDomain: "comision-47140-4a944.firebaseapp.com",
  projectId: "comision-47140-4a944",
  storageBucket: "comision-47140-4a944.appspot.com",
  messagingSenderId: "250842977262",
  appId: "1:250842977262:web:2f79f8b529e68cc925b4ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems(){
    const micoleccion = collection(firestore, 'productos')
    let snapShotDB = await getDocs(micoleccion)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getBestItems(){
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('outstanding', '==', false))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, 'productos', idParams)
    const docSnapshot = await getDoc(docRef)
    return {...docSnapshot.data(), id:docSnapshot.id}
}

export async function getItemsByType(typParams){
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('type', '==', typParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.doc.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getItemByDescription(descParams){
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('description', '==', descParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function createBuyOrder(orderData){
    const collectionRef = collection(firestore, 'orders')
    let answer = await addDoc(collectionRef, orderData)
    return answer.id
}

export default firestore;