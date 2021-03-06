import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private touter: Router) { }

  ngOnInit() {
    //getting data using Dinamic data resolver
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']
      }
    )
    /* scince we imported data wits data resolver we don't need the old code
    //+ converts id from sreing to search for a number
    const id = +this.route.snapshot.params['id']; 
    this.server = this.serversService.getServer(id); 
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']); 
      }
    )
    */ 
  }

  onEdit(){
    this.touter.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
