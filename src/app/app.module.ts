import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Routing
import { Routing, RoutingProviders } from './app.routing';
//Root
import { AppComponent } from './app.component';
//Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ErrorsComponent } from './components/shared/errors/errors.component';
//Components
import { HomeComponent } from './components/home/home.component';


//Pages back-office
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';

//Services
import { AuthService } from './services/auth.service';

//Directives
import { MaskDirective } from './directives/mask.directive';

@NgModule({
	declarations: [
		AppComponent,
		HomePage,
		LoginPage,
		HeadbarComponent,
		MenuComponent,
		ErrorsComponent, 
		MaskDirective,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		Routing
	],
	providers: [
		AuthService,
		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
