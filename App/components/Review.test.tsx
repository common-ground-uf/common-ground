import { describe, expect, test } from '@jest/globals';

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'MockedFontAwesomeIconsicons'
);

describe('Test test', () => {
    test('ADD ACTUAL TESTS FOR Review.tsx HERE', () => {
        expect(true).toBe(true);
    });
});
