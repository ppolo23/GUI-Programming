import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/ChessGame', pathMatch: 'full' },
  { path: 'ChessGame', component: WelcomePageComponent },
  { path: 'ChessGame/StartGame', component: StartGameComponent },
  { path: 'ChessGame/Game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
