import {
	setAsyncStorage,
	getFromAsyncStorage,
	multiSetAsyncStorage,
	multiGetFromAsyncStorage,
	clearAsyncStorage,
} from './asyncStorageHelpers';

describe('Tests the setAsyncStorage helper', () => {
	it('can set asyncstorage', async () => {
		await setAsyncStorage('@pingpingNative_status', 'language_selected');
	});

	it('can read asyncstorage', async () => {
		const status = await getFromAsyncStorage('@pingpingNative_status');
		expect(status).toBe('language_selected');
	});

	it('can multi set asyncstorage', async () => {
		await multiSetAsyncStorage([
			['@pingpingNative_user', 'something'],
			['@some_other_key', 'some_other_key'],
		]);
	});

	it('can multi get asyncstorage', async () => {
		const res = await multiGetFromAsyncStorage(['@pingpingNative_user', '@some_other_key']);
		expect(res).toEqual([
			['@pingpingNative_user', 'something'],
			['@some_other_key', 'some_other_key'],
		]);
	});

	it('clears async storage', async () => {
		await clearAsyncStorage();
		const res = await multiGetFromAsyncStorage(['@pingpingNative_user', '@some_other_key']);
		expect(res).toEqual([
			['@pingpingNative_user', null],
			['@some_other_key', null],
		]);
	});
});
