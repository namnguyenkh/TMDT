import { GenericDialogInfo } from './generic-dialog-info';
import { EditableDialogComponent } from '../base-dialog/editable-dialog.component';

export class EditableDialogInfo<T extends EditableDialogComponent<TDto>, TDto> extends GenericDialogInfo<
  T,
  TDto,
  TDto
> {
  editMode: number;
}
