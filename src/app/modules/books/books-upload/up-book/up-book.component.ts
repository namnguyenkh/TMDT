import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pizza } from '../../../../models/food.model';
import { TranslateService } from '@ngx-translate/core';
import { MAX_LENGTH_TEXT } from '../../../../helpers/constants.helper';

@Component({
  selector: 'ngx-up-book',
  templateUrl: './up-book.component.html',
  styleUrls: ['./up-book.component.scss']
})
export class UpBookComponent implements OnInit {
  public radioCheck = false;
  public formFood: FormGroup;
  public foodModel: Pizza;
  constructor(
    private readonly fb: FormBuilder,
    private readonly translateService: TranslateService
  ) { }

  ngOnInit() {
  }
  private createFormFood() {
    this.formFood = this.fb.group({
      namefood: ['', [Validators.required, Validators.maxLength(MAX_LENGTH_TEXT.splashName)]],
      type: ['', [Validators.min(1), Validators.pattern('[0-9]*')]],
      imageUrl: ['', [Validators.required, Validators.maxLength(MAX_LENGTH_TEXT.textDefault)]],
      checkList: [this.radioCheck],
    });
  }

}
