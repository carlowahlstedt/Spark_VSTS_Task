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
            var token = tl.getInput('access_token', true);
            process.env.CISCOSPARK_ACCESS_TOKEN = token;
            const spark = require(`ciscospark/env`);
            // const spark = new CiscoSpark({
            //     credentials: token
            // });
            // "CISCOSPARK_ACCESS_TOKEN": "MWE3NzQ5MjItN2I2My00NTNkLWI2OTUtNThiN2E1YzNhZmU5Y2I0MTAyMzItYzEy",
            var teamName = tl.getInput('teamName', true);
            var roomName = tl.getInput('roomName', true).toUpperCase();
            var message = tl.getInput('message', true);
            var team;
            var teams = yield spark.teams.list();
            for (var index = 0; index < teams.length; index++) {
                if (teams.items[index].name = teamName) {
                    team = teams.items[index];
                    break;
                }
            }
            if (team != null) {
                var rooms = yield spark.rooms.list();
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
    });
}
run();
//# sourceMappingURL=sparktask.js.map