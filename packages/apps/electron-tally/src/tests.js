const {convertObjToXml} = require('@glassball/xml');
const {getTallyCommandMap, tallyApiInit, getCurrentCompany} = require("@glassball/tally");

function testXml() {
  const sampleObj = {
    "name": "Alice",
    "age": 30
  }
  console.log('Sample Object:', convertObjToXml(sampleObj));
  console.log(`convertObjToXml=${convertObjToXml}`);
}

function testTally() {
  console.log('Tally Command Map:', getTallyCommandMap());

  const tallyServer = {host: '192.168.64.3', port: 9000};
  tallyApiInit(tallyServer);
  getCurrentCompany({})
      .then(resp => {
        console.log('Tally Current Company:', resp.response.value);
      })
      .catch(err => {
        console.error(`Error! ${JSON.stringify(err, null, 2)}`);
      });
}

module.exports = {
  testXml,
  testTally
}