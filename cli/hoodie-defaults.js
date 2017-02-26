module.exports = getHoodieDefaults

function getHoodieDefaults () {
  return {
    address: '127.0.0.1',
    port: 8080,
    data: '.hoodie',
    public: 'public',
    username: undefined,
    pass: undefined,
    dbAddress: undefined,
    dbAdapter: 'pouchdb-adapter-fs',
    inMemory: false,
    loglevel: 'warn',
    url: undefined,
    adminPassword: undefined
  }
}
