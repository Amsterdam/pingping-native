import normalizeValue from './normalizeValue';

test('Get device info', async () => {
	expect(normalizeValue(14)).toEqual(26);
});
