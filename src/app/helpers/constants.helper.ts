import { FormControl } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrConfig } from '@nebular/theme';

export const TOASTR_CONFIG: Partial<NbToastrConfig> = {
  duration: 5000,
  hasIcon: true,
  iconPack: 'eva',
  destroyByClick: true,
  duplicatesBehaviour: 'all',
  preventDuplicates: false,
  position: NbGlobalPhysicalPosition.BOTTOM_RIGHT
};

export const PAGE_SIZES = [5, 10, 15, 20, 30, 50, 100, { showAll: 'splash.table.paginator.showall' }];
export const SHOW_ALL_INDEX = PAGE_SIZES.length - 1;

export const DATATABLE = {
  columns: [],
  fromRow: 1,
  toRow: 1,
  currentPage: 1,
  pageSize: PAGE_SIZES[0],
  sortOrder: 'DESC',
  sortBy: '',
  totalRecords: 0,
  totalPages: 0
};

export const DATETIME_FORMAT = 'DD/MM/YYYY HH:mm:ss';

export const MAX_LENGTH_TEXT = {
  textDefault: 80,
  splashName: 30,
  companyName: 80,
  welcomeTitle: 80,
  labelButton: 30,
  footerTitle: 80,
  loginPageName: 32
};

export const TITLE_EXCEPTION = {
  notFoundData: 'Not found data'
};

export const SPLASH_URL = '/api/splash/preview?code=';
export const DEFAULT_IMAGE = 'assets/images/no-image.png';
export const DEFAULT_COLOR = '#FFFFFF';
export const TIME_OVER_SLIDE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const LIMIT_IMAGES = 5;
export const DEFAULT_NUMBER_CONDITION = 6;

export const INPUT_NORMAL_PATTERN = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
export const NAME_PATTERN = '[^!@#$%^&*()+={};:"\'<>?]+$';
export const PHONE_PATTERN = '(\\+84|0)\\d{9,10}';
export const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const NUMBER_PATTERN = /^-?[\d.]+(?:e-?\d+)?$/;
export const WHITE_LINK_PATTERN = RegExp('^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$');
export const CODE_BY_TIME_FORMAT = 'YYYYMMDDHHmmss';

export enum DeviceType {
  MOBILE = 'preview-mobile',
  TABLET = 'preview-tablet',
  LAPTOP = 'preview-laptop'
}
export enum GroupCode {
  xmen = 'XMEN',
  superAdmin = 'SUPER_ADMIN',
  admin = 'ADMIN',
  editor = 'EDITOR',
  reporter = 'REPORTER'
}
/**
 * function check special Characters
 * @export
 * @param {FormControl} control
 * @returns
 */
export function specialCharactersValidator(control: FormControl) {
  const value = control.value;
  const regInvalid = new RegExp(/[*|(|)|=|,|:|[|\]|`|\/]+/);
  if (value && regInvalid.test(control.value)) {
    return {
      pattern: {
        specialCharacters: true
      }
    };
  }
  return null;
}
