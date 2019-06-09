const lib = require('./');

jest.useFakeTimers();

jest.mock('./log', () => ({
  saveLogToFile: () => {},
  createLogFile: () => {},
  generateLog: () => {}
}));

describe('lib', () => {
  it('should expose FakeLogs by default', () => {
    expect(lib).toBeDefined();
    expect(lib).toBeInstanceOf( Function );
  })

  it('should expose generateLog', () => {
    expect(lib.generateLog).toBeDefined()
  })
});

describe('FakeLogs', () => {
  const mockConfig = {
    logName: 'log name',
    logTimer: 10000,
    schema: {
      userName: 'schema user name'
    }
  }

  it('should set an interval', () => {
    lib(mockConfig);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), mockConfig.logTimer);
  })
});
