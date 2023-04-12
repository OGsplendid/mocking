import fetchData from '../http';
import getLevel from '../loadData';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('should call getLevel once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
