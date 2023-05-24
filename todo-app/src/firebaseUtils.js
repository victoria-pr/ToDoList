import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const saveData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'collectionName'), data);
    console.log('Documento guardado con ID:', docRef.id);
  } catch (error) {
    console.error('Error al guardar el documento:', error);
  }
};

const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'collectionName'));
    querySnapshot.forEach((doc) => {
      console.log('ID:', doc.id, 'Data:', doc.data());
    });
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
  }
};

export { saveData, getData };
