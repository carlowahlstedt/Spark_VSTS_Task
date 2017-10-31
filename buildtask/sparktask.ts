import tl = require('vsts-task-lib');

async function run() {
    try {
        process.env.CISCOSPARK_ACCESS_TOKEN = tl.getInput('access_token', true);

        var teamName = tl.getInput('teamName', true);
        var roomName = tl.getInput('roomName', true).toUpperCase();
        var message = tl.getInput('message', true);
        var team: any;

        const spark = require(`ciscospark/env`);

        var teams = await spark.teams.list();
        for (var index = 0; index < teams.length; index++) {
            if (teams.items[index].name = teamName) {
                console.log('Team found');
                team = teams.items[index];
                break;
            }
        }

        if (team != null) {
            var rooms = await spark.rooms.list()
            for (var index = 0; index < rooms.length; index++) {
                var room = rooms.items[index];
                if (room.teamId == team.id && room.title.toUpperCase() == roomName) {
                    console.log('Room found for that team');
                    console.log('Message to output: ' + message);
                    spark.messages.create({
                        markdown: message,
                        roomId: room.id
                    });
                }
            }
        }
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.constructor.name + ": " + err.message);
    }
}

run();