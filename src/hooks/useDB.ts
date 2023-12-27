import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc, addDoc, getDoc } from "firebase/firestore"
import { db } from "@/service/firebase"

export const getData = async () => {
  const dataCol = collection(db, 'BookShelf')
  const dataRef = doc(dataCol, 'IDDoFulanoChato   ')
  const dataSnapshot = await getDoc(dataRef)
  const dataList = dataSnapshot.data()
  console.log(dataList)
}

type setData = {
  collectionName: string,
  data: any
}

export const setData = async ({collectionName, data}: setData) => {
  const dataCol = collection(db, 'BookShelf')
  const dataRef = doc(dataCol, collectionName)
  await setDoc(dataRef, {data})
}

export const addData = async ({campo, dado}) => {
  const dataCol = collection(db, 'BookShelf')
  await addDoc(dataCol, { [campo]: dado })
}

export const updateData = async ({livro, campo, dado}) => {
  const dataCol = collection(db, 'BookShelf')
  const dataRef = doc(dataCol, livro)
  await updateDoc(dataRef, { [campo]: dado })
}

export const deleteData = async (id: string) => {
  const dataCol = collection(db, 'BookShelf')
  const dataRef = doc(dataCol, id)
  await deleteDoc(dataRef)
}