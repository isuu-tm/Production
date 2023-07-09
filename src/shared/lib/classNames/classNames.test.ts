import { classNames } from './classNames';

describe('Тесты для классов', () => {
    test('test', () => {
        expect(classNames('classes')).toBe('classes');
    });
});

describe('Тесты для классов', () => {
    test('Тест для classNames', () => {
        const expected = 'classes hovered';
        expect(classNames('classes', {}, ['hovered'])).toBe(expected);
    });
});

test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
