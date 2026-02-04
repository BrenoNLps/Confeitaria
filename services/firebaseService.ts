import {storage} from "../firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export async function getFirebaseStorage(pasta: string): Promise<string[]> {
    const referenciaDaPasta = ref(storage, pasta);
    const resultado = await listAll(referenciaDaPasta);
    return await Promise.all(
        resultado.items.map((item) => getDownloadURL(item))
    );
}


