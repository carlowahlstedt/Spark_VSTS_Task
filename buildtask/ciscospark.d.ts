declare module "ciscospark" {
    export = require('./spark');
}

interface Rooms {
    on: any;
    emit(event: string, ...args: any[]): boolean;
    emitWithState: any;
    state: any;
    handler: any;
    attributes: any;
    context: any;
    name: any;
    isOverriden: any;
}