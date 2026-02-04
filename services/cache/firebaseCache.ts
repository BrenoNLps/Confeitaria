import { getFirebaseStorage } from "@/services/firebaseService";
import { getCache, setCache } from "./cacheUtils";


export async function getData(path:string): Promise<string[]> {
    //Se houver Cache
    const cache = getCache(path);
    if (cache) return cache;

    //Caso nao tenha cache
    const firebaseUrls = await getFirebaseStorage(path);
    setCache(path, firebaseUrls);
    return firebaseUrls;
}

