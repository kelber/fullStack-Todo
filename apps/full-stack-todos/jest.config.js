module.exports = {
  name: 'full-stack-todos',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/full-stack-todos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
