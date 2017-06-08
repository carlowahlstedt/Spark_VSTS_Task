import tl = require('vsts-task-lib/task');
import request = require('request');
// import trm = require('vsts-task-lib/toolrunner');
// import mod = require('./taskmod');

async function run() {
    try {
        var botAccessToken = tl.getInput('botAccessToken', true);
        var teamsUrl = "https://api.ciscospark.com/v1/teams";

        // request.
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