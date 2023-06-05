
export type Mods = Record<string, boolean | string>
export function classNames(cls:string, mods:Mods, additional:string[]):string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    /* Object entries - возвращает нам ключ и значение в виде массива*/
    ]
        .join(' ')
};