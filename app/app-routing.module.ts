import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { ScoreComponent } from "./score/score.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "play/:correction/:mode", component: PlayComponent },
    { path: "score/:score/:mode", component: ScoreComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
