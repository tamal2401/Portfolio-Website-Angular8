import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { ReferenceComponent } from './profile/reference/reference.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ContactsComponent } from './profile/contacts/contacts.component';
import { AboutComponent } from './profile/about/about.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { FooterComponent } from './profile/footer/footer.component';
import { HeaderComponent } from './profile/header/header.component';
import { IntroComponent } from './profile/intro/intro.component';
import { ProfileService } from './profile/profile.service';
import { EducationComponent } from './profile/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ProfileComponent,
    ProjectsComponent,
    ReferenceComponent,
    SkillsComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NgxSpinnerService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
