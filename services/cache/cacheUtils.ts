const TWENTY_FOUR_HOURS_MS = 1000 * 60 * 60 * 24;

export function isCacheTimeValid(pasta:string): boolean{
    const cachePath = `${pasta}_tempo`;
    const cacheTime = localStorage.getItem(cachePath);
    if  (!cacheTime) return false;

    const  now = Date.now();
    const  timeDiff = now - parseInt(cacheTime);
    return timeDiff < TWENTY_FOUR_HOURS_MS;
}




