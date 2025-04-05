"use client";

export type CacheType = { timer: number, hours: string, minutes: string, seconds: string, title: string, theme: string };

export function setCache(key: string, value: CacheType): void {
    const cache = JSON.parse(localStorage.getItem('cache') || '{}');
    cache[key] = value;
    localStorage.setItem('cache', JSON.stringify(cache));
}


export function getCache(key: string): CacheType | null {
    const cache = JSON.parse(localStorage.getItem('cache') || '{}');
    return cache[key] || null;
}


export function updateCache(key: string, updateKey: string, updateValue: string): void {
    const cache = JSON.parse(localStorage.getItem('cache') || '{}');
    if (cache[key]) {
        cache[key][updateKey] = updateValue;
        localStorage.setItem('cache', JSON.stringify(cache));
    }
}

export function clearCache(key: string): void {
    const cache = JSON.parse(localStorage.getItem('cache') || '{}');
    if (cache[key]) {
        delete cache[key];
        localStorage.setItem('cache', JSON.stringify(cache));
    }
}