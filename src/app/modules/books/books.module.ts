import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksUploadComponent } from './books-upload/books-upload.component';
import { UpBookComponent } from './books-upload/up-book/up-book.component';
import { UpAuthorComponent } from './books-upload/up-author/up-author.component';
import { UpGenresComponent } from './books-upload/up-genres/up-genres.component';
import { UpPublisherComponent } from './books-upload/up-publisher/up-publisher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbInputModule,
  NbTableModule,
  NbCardModule,
  NbIconModule,
  NbDialogModule,
  NbSelectModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbButtonModule,
  NbRadioModule,
  NbContextMenuModule,
  NbAccordionModule
} from '@nebular/theme';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ColorPickerModule } from 'ngx-color-picker';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedModule } from 'primeng/components/common/shared';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    BooksUploadComponent,
    UpBookComponent,
    UpAuthorComponent,
    UpGenresComponent,
    UpPublisherComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    SplitButtonModule,
    NbTableModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbSelectModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbButtonModule,
    NbRadioModule,
    NbContextMenuModule,
    NbAccordionModule,
    ColorPickerModule,
    InputSwitchModule,
    NgbModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    MenuModule,
    InputSwitchModule,
    SplitButtonModule,
    MultiSelectModule,
    SharedModule,
    CovalentDataTableModule,
    MatIconModule,
    NbCheckboxModule
  ],
  providers: [DecimalPipe]
})
export class BooksModule {}
