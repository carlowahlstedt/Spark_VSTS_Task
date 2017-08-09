import tl = require('vsts-task-lib/task');
import * as corem from 'vso-node-api/CoreApi';
// import * as restm from 'vso-node-api/RestClient';
import spark = require('ciscospark');
import http = require('https');

async function run() {
    try {
        var botAccessToken = tl.getInput('botAccessToken', true);
        var teamsUrl = "";

        var rom = spark.rooms;
        var roms = spark.rooms.list();

        // http.request({
        //     hostname: 'api.ciscospark.com',
        //     // port: 443,
        //     path: '/v1/rooms',
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json; charset=utf-8',
        //         'Authorization': 'Bearer OTZhNjk1ZGMtYjlmZi00MTcwLWFlMjktYWQ5MTllMGM1MGU4ZjUwMDg2NjEtMGUz',
        //         // 'Content-Length': Buffer.byteLength(postData)
        //     }
        // }, (res) => {
        //     console.log(`STATUS: ${res.statusCode}`);
        //     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        //     res.setEncoding('utf8');
        //     res.on('data', (chunk) => {
        //         console.log(`BODY: ${chunk}`);
        //     });
        //     res.on('end', () => {
        //         console.log('No more data in response.');
        //     });
        // });

        // var teams = request.get(teamsUrl);
        // $.get(teamsUrl, function (data) {
        //     console.log(data);
        // });'
        var teamName = tl.getInput('teamName', true);
        // GET teams
        // https://api.ciscospark.com/v1/teams
        // Request Headers
        // Content - type:application/ json; charset = utf - 8
        // Authorization:Bearer ODI1ZWM1NDktZTFhZS00N2VkLTg3YWMtYWIzNzg4OGFmNzc2YzBlZDNlODItYTFi

        var team = '';
        // array.forEach(element => {
        //     if (element.name === teamName) {
        //         team = element.id;
        //     }
        // });

        // GET rooms
        // https://api.ciscospark.com/v1/rooms
        // Request Headers
        // Content - type:application/ json; charset = utf - 8
        // Authorization:Bearer ODI1ZWM1NDktZTFhZS00N2VkLTg3YWMtYWIzNzg4OGFmNzc2YzBlZDNlODItYTFi

        // Query Parameters
        // Name	Type	Your values	Required
        // teamId	string	team
        // type string	group

        var roomName = tl.getInput('roomName', true);
        var room = ''
        // array.forEach(element => {
        //     if (element.title === roomName) {
        //         room = element.id;
        //     }
        // });

        // POST a message
        // https://api.ciscospark.com/v1/messages
        // Request Headers
        // Content - type:application/ json; charset = utf - 8
        // Authorization:Bearer ODI1ZWM1NDktZTFhZS00N2VkLTg3YWMtYWIzNzg4OGFmNzc2YzBlZDNlODItYTFi

        // Request Parameters
        // Name	Type	Your values	Required
        // roomId	string	
        // markdown	string	
        var message = tl.getInput('message', true);

    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();