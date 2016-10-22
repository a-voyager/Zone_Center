import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { ZoneComponent } from './zone.component';
import { UserService } from './user.service';
import { RegisterComponent } from './register.component'

// 2. 导入路由包
import { RouterModule, Routes } from '@angular/router';



// 输入框 NgModule 需要
import { FormsModule } from '@angular/forms';


// 3. import 路由模块 
// path 中不能用斜线开头
const routers: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'zone', component: ZoneComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routers)],
  declarations: [AppComponent, LoginComponent, ZoneComponent, RegisterComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule { }
