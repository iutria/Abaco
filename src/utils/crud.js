import { db } from "../config/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
const coleccion = collection(db, 'producto');

export const add = async (obj) => {
    const response = await addDoc(coleccion, obj);
    return response;
}

export const update = async (id, obj) => {
    const response = await updateDoc(doc(coleccion, id), obj);
    return response;
}

export const deleteObj = async (id) => {
    const response = await deleteDoc(doc(coleccion, id));
    return response;
}
