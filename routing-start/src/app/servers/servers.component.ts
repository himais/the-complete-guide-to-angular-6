import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reloadPage() {
    /* - router.navigate não permite navegação relativa, pois ele não reconhece qual é a rota atual
       - então sempre reconhecerá o path padrão: localhost
       - para reconhecer o path atual, é preciso passar o segundo argumeto do tipo ActivatedRoute que reconhece
       a rota atual. */
    this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
