import tl = require('vsts-task-lib');
const spark = require(`ciscospark/env`);

async function run() {
    try {
        var teamName = tl.getInput('teamName', true);
        var roomName = tl.getInput('roomName', true).toUpperCase();
        var message = tl.getInput('message', true);
        var team: any;

        var teams = await spark.teams.list();
        for (var index = 0; index < teams.length; index++) {
            if (teams.items[index].name = teamName) {
                team = teams.items[index];
                break;
            }
        }

        if (team != null) {
            var rooms = await spark.rooms.list()
            for (var index = 0; index < rooms.length; index++) {
                var room = rooms.items[index];
                if (room.teamId == team.id && room.title.toUpperCase() == roomName) {
                    spark.messages.create({
                        text: message,
                        roomId: room.id
                    });
                }
            }
        }
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();