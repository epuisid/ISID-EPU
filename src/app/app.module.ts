import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SitefooterComponent } from './comps/sitefooter/sitefooter.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MsqepageComponent } from './pages/academics/msqepage/msqepage.component';
import { SiteheaderComponent } from './comps/siteheader/siteheader.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AnnouncementsPageComponent } from './pages/announcements-page/announcements-page.component';
import { FlashboxComponent } from './comps/flashbox/flashbox.component';
import { PlacementspageComponent } from './pages/placementspage/placementspage.component';
import { ParaspecboxComponent } from './comps/paraspecbox/paraspecbox.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { SafePipe } from './safe.pipe';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { PhdProgramPageComponent } from './pages/academics/phd-program-page/phd-program-page.component';
import { PastPhdStudentsComponent } from './pages/misc/past-phd-students/past-phd-students.component';
import { CoursesPageComponent } from './pages/academics/courses-page/courses-page.component';
import { VersatileboxComponent } from './comps/versatilebox/versatilebox.component';
import { FacultyPageComponent } from './pages/people/faculty-page/faculty-page.component';
import { PersonboxComponent } from './comps/personbox/personbox.component';
import { VisitorspageComponent } from './pages/people/visitorspage/visitorspage.component';
import { AcegdPageComponent } from './pages/events/acegd-page/acegd-page.component';
import { WorkshopsPageComponent } from './pages/events/workshops-page/workshops-page.component';
import { SeminarPageComponent } from './pages/events/seminar-page/seminar-page.component';
import { PastSeminarsPageComponent } from './pages/misc/past-seminars-page/past-seminars-page.component';
import { PhdStudentsPageComponent } from './pages/people/phd-students-page/phd-students-page.component';
import { StudentboxComponent } from './comps/studentbox/studentbox.component';
import { FormsModule } from '@angular/forms';
import { OthersPageComponent } from './pages/misc/others-page/others-page.component';
import { PersonPageComponent } from './pages/people/person-page/person-page.component';
import { PublicationBoxComponent } from './comps/publication-box/publication-box.component';
import { CollapsibleComponent } from './comps/collapsible/collapsible.component';
import { SeminarboxComponent } from './comps/seminarbox/seminarbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SitefooterComponent,
    HomepageComponent,
    MsqepageComponent,
    SiteheaderComponent,
    AboutUsPageComponent,
    AnnouncementsPageComponent,
    FlashboxComponent,
    PlacementspageComponent,
    ParaspecboxComponent,
    ContactsPageComponent,
    SafePipe,
    PlaceholderComponent,
    PhdProgramPageComponent,
    PastPhdStudentsComponent,
    CoursesPageComponent,
    VersatileboxComponent,
    FacultyPageComponent,
    PersonboxComponent,
    VisitorspageComponent,
    AcegdPageComponent,
    WorkshopsPageComponent,
    SeminarPageComponent,
    PastSeminarsPageComponent,
    PhdStudentsPageComponent,
    StudentboxComponent,
    OthersPageComponent,
    PersonPageComponent,
    PublicationBoxComponent,
    CollapsibleComponent,
    SeminarboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
