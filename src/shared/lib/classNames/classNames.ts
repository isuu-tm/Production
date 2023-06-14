export type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    /* Если мы по умолчанию передадим значения то в ts они станут необязательным */
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    /* Object entries - возвращает нам ключ и значение в виде массива */
    ]
        .join(' ')
};
