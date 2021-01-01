import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Router } from "@angular/router";

import { ServersService } from "../servers.service";
import { Server } from "./server-resolver.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data["server"];
    });
    // this.route.params.subscribe((params) => {
    //   this.server = this.serversService.getServer(+params["id"]);
    // });
  }

  onEdit() {
    this.router.navigate(["/servers", this.server.id, "edit"], {
      queryParamsHandling: "preserve",
    });
  }
}
