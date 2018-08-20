import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const paramId = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(paramId);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], { // indica qual rota deve seguir
      relativeTo: this.route, // indica em qual rota está = atual/edit
      queryParamsHandling: 'preserve' // 'preserve' preserva as query param | 'merge' mescla as antigascom as novas add
    });
  }

}
