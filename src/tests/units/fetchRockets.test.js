import { apiCall } from '../../redux/rockets/rockets';

test('test fetching rockets API call', async () => {
  const rockets = await apiCall();
  expect(rockets.length).toBeGreaterThan(0);
  expect(rockets).toBeInstanceOf(Array);
  expect(rockets[0]).toBeInstanceOf(Object);
  expect(rockets[0].id).not.toBeNull();
});
