"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("vsts-task-lib");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            process.env.CISCOSPARK_ACCESS_TOKEN = tl.getInput('access_token', true);
            var teamName = tl.getInput('teamName', true).toUpperCase();
            var roomName = tl.getInput('roomName', true).toUpperCase();
            var message = tl.getInput('message', true);
            var team;
            const spark = require(`ciscospark/env`);
            var teams = yield spark.teams.list();
            for (var index = 0; index < teams.length; index++) {
                if (teams.items[index].name.toUpperCase() == teamName) {
                    console.log('Team found');
                    team = teams.items[index];
                    break;
                }
            }
            if (team != null) {
                var rooms = yield spark.rooms.list();
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
    });
}
run();
