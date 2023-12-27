import { db } from "@/service/firebase";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const checkHaveData = async (collectionName) => {
  const dataCol = collection(db, 'BookShelf');
  const dataRef = doc(dataCol, collectionName);
  const dataSnapshot = await getDoc(dataRef);
  return dataSnapshot.exists();
}

export const createUserData = async (collectionName) => {
  const dataCol = collection(db, 'BookShelf');
  const dataRef = doc(dataCol, collectionName);
  await setDoc(dataRef, { books: [] });
}

export const getUserData = async (collectionName) => {
  const dataCol = collection(db, 'BookShelf');
  const dataRef = doc(dataCol, collectionName);
  const dataSnapshot = await getDoc(dataRef);
  if (dataSnapshot.data() === undefined) {
    console.error('No data found!');
    return null
  }
  return dataSnapshot.data();
}

export const addBook = async ({ collectionName, book }) => {
  const dataCol = collection(db, 'BookShelf');
  const dataRef = doc(dataCol, collectionName);
  const data = await getUserData(collectionName);
  const updateBooks = [...data.books, ...book];
  await updateDoc(dataRef, { books: updateBooks })
}

export const removeBookDB = async ({ collectionName, book }) => {
  const dataCol = collection(db, 'BookShelf');
  const dataRef = doc(dataCol, collectionName);
  const data = await getUserData(collectionName);
  const updateBooks = data.books.filter((item) => item.id !== book.id);
  console.log(data.books.filter((item) => item.id ))
  await updateDoc(dataRef, { books: updateBooks })
}
