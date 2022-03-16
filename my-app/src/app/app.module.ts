import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule(
  {
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    DashboardComponent,
    PipeDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path : "", component : DashboardComponent },
      { path : "databinding", component : AppComponent },
      { path : "pipedemo", component : PipeDemoComponent },
      { path : "employee", component: EmployeeComponent },
      { path : "dashboard", component : DashboardComponent },
      { path : "login", component : LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [HomeComponent]
}
)
export class AppModule { }
