import React from "react";
import { createContext, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export const ProductoContext = createContext();

export function ProductoContextProvider({ children }) {
  const coleccion = collection(db, "producto");

  const [productos, setProductos] = useState([]);

  // useEffect(() => setProductos(productos), []);

  const add = async (obj) => {
    const response = await addDoc(coleccion, obj);
    return response;
  };

  const update = async (id, obj) => {
    const response = await updateDoc(doc(coleccion, id), obj);
    return response;
  };

  const snapshot = async () => {
    onSnapshot(coleccion, (docs) => setProductos(docs.docs.map((docu)=>({id: docu.id, ...docu.data()}))));
  };

  const deleteObj = async (id) => {
    const response = await deleteDoc(doc(coleccion, id));
    return response;
  };

  const context = {
    add,
    productos,
    update,
    snapshot,
    deleteObj,
  };

  return (
    <ProductoContext.Provider value={context}>
      {children}
    </ProductoContext.Provider>
  );
}
