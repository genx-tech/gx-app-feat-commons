const path = require('path');
const testSuite = require('@genx/test');

const imageFile = path.resolve(__dirname, './files/logo.png');

testSuite(
    function (suite) {
        suite.testCase('test case 1', async function () {
            await suite.startWorker_(async (app) => {
                const hasher = app.getService('hasher');
                should.exist(hasher);

                const hash = await hasher.fromFile(imageFile, {algorithm: 'md5'});
                hash.should.be.exactly("3349b8205d8c682a3d246d8b0d07635f");
                
            });
        });
    },
    { verbose: true }
);
