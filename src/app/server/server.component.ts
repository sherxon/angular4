import {Component} from '@angular/core';
/**
 * Created by sherxon on 4/17/17.
 */
@Component({
  selector : 'app-server',
  templateUrl : './server.component.html',
})
export class ServerComponent{
  serverId:number = 10;
  serverStatus = 'Offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
