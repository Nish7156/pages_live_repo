import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    serverCreationStatus = "Server is not created"
    servername = "";

    run = false;
    onCreateNewServer: string;

    constructor() {
        setTimeout(() => {
            this.run = true;
            
        }, 2000);
    }

    onCreateServer() {
        this.serverCreationStatus ='Server is created'+''+ this.servername;
    }
    onUpdateServerName(event: Event) {
        this.servername = (<HTMLInputElement>event.target).value;
    }

    //Assignment Two way binding

    username = "";

     //Assignment 3
     showSecret = false;
     log=[];

     onToggleDetails() {
        this.showSecret = !this.showSecret;
        this.log.push(this.log.length + 1);
     }
}