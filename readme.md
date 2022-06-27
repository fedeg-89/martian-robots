# Martian Robots

A DCSL GuideSmiths Mission, by Federico Gatti

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

## Install

    $ npm i

## Running the project

    $ npm run start
This will start a local server in port 7000

To start the mission, just send a POST request to `localhost:7000/api/mission` with a body `{input: <your input>}`


### CURL example
To run the mission with the example input, run the following code in the Command Line:
```
$ curl -X POST -H "Content-Type: application/json" \
    -d '{"input":"5 3\n\r1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFRFLFL"}' \
    http://localhost:7000/api/mission
```
---
## Test

    $ npm run test
    
The given example test is in  `test/services/initMission.test.js`.