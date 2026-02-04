const TWENTY_FOUR_HOURS_MS = 1000 * 60 * 60 * 24;

export function isCacheTimeValid(pasta:string): boolean{
    const cachePath = `${pasta}_tempo`;
    const cacheTime = localStorage.getItem(cachePath);
    if  (!cacheTime) return false;

    const  now = Date.now();
    const  timeDiff = now - parseInt(cacheTime);
    return timeDiff < TWENTY_FOUR_HOURS_MS;
}


export function getCache(pasta: string): string[] | null {
    const cachePath = `${pasta}_imagens`;
    const cache = localStorage.getItem(cachePath);

    if (cache && isCacheTimeValid(pasta)) { 
        try{
            return JSON.parse(cache);
        }
        catch{
            return null; 
        }
    }return null; 
}


export function setCache(pasta: string, urls: string[]): void {
    const cache = `${pasta}_imagens`;
    const cacheTempo = `${pasta}_tempo`;

    localStorage.setItem(cache, JSON.stringify(urls));
    localStorage.setItem(cacheTempo, Date.now().toString());
}


