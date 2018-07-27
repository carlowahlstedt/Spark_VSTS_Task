import tl = require('vsts-task-lib');

async function run() {
    try {
        console.log('Getting the access token');
        process.env.CISCOSPARK_ACCESS_TOKEN = tl.getInput('access_token', true);

        console.log('Getting the inputs');
        var teamName = tl.getInput('teamName', true).toUpperCase();
        var roomName = tl.getInput('roomName', true).toUpperCase();
        var message = tl.getInput('message', true);
        var team: any;

        console.log('Preparing for a connection to Cisco Webex Teams');
        const spark = require(`ciscospark/env`);

        console.log('Getting the teams list');
        var teams = await spark.teams.list();
        console.log('Looking for a match');
        for (var index = 0; index < teams.length; index++) {
            console.log('Team Name: ' + teams.items[index].name);
            if (teams.items[index].name.toUpperCase() == teamName) {
                console.log('Team Match found for ' + teams.items[index].name);
                team = teams.items[index];
                break;
            }
        }

        if (team != null) {
            console.log('Getting the rooms list');
            var rooms = await spark.rooms.list()
            console.log('Looking for a match');
            for (var index = 0; index < rooms.length; index++) {
                var room = rooms.items[index];
                console.log('Room Name: ' + room.title);
                if (room.teamId == team.id && room.title.toUpperCase() == roomName) {
                    console.log('Room found for that team');
                    console.log('Message to output: ' + message);
                    spark.messages.create({
                        markdown: message,
                        roomId: room.id
                    });
                    console.log('Message Send');
                    tl.setResult(tl.TaskResult.Succeeded, "Success");
                    return;
                }
            }
        }
        else {
            tl.setResult(tl.TaskResult.Failed, "No Team Match Found");
            return;
        }
        tl.setResult(tl.TaskResult.Failed, "No Room Match Found for that Team");
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();