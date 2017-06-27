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
import { FooterComponent } from './components/shared/footer/footer.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ErrorsComponent } from './components/shared/errors/errors.component';
import { AlertComponent } from './components/shared/alert/alert.component';
//Components
import { DocumentComponent } from './components/document/document.component';
//Pages
import { LoginPage } from './pages/login/login.page';
import { DocumentPage } from './pages/document/document.page';
//Services
import { AuthService } from './services/auth.service';
//Directives
import { MaskDirective } from './directives/mask.directive';

@NgModule({
	declarations: [
		AppComponent,
		LoginPage,
		DocumentPage,
		HeadbarComponent,
		MenuComponent,
		FooterComponent,
		DocumentComponent,
		ModalComponent,
		ErrorsComponent,
		MaskDirective,
		AlertComponent
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
