import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-ck-editor',
  templateUrl: './ck-editor.component.html'
})
export class CkEditorComponent implements OnInit {
  @Input() placeholder: string;
  @Input() idElement: string;
  @ViewChild('editor', { static: true }) angularEditor;
  @Output() editorEvent = new EventEmitter<string>();
  public htmlContent = '';
  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: true,
    placeholder: '',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '3',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [],
    sanitize: false,
    toolbarPosition: 'top'
  };
  constructor(private readonly translateService: TranslateService) {}

  ngOnInit() {
    this.editorConfig.placeholder = this.translateService.instant(this.placeholder);
    if (!this.idElement) {
      // auto generate id element
      this.idElement = `editor-${Math.floor(Math.random() * 100) + 1}`;
    }
  }

  /**
   * get HTML code
   * @memberof CkEditorComponent
   */
  public getHtmlCode() {
    if (!this.angularEditor || !this.angularEditor.textArea || !this.angularEditor.textArea.nativeElement) return;
    this.editorEvent.emit(this.angularEditor.textArea.nativeElement.innerHTML);
  }
}
