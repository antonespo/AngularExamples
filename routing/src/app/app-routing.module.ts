import { NgModule } from "@angular/core";
import { AuthGuardService } from "./auth-guard.service";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./login/login.component";
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolverService } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
  {
    path: "servers",
    component: ServersComponent,
    canActivate: [AuthGuardService],
    // canActivateChild: [AuthGuardService],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolverService },
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
    ],
  },
  {
    path: "unknown",
    component: ErrorPageComponent,
    data: { message: "This product is unknown!" },
  },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found!" },
  },
  // { path: "not-found", component: NotFoundComponent },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
