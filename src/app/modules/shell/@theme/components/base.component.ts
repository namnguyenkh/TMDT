import { TranslationService } from '../../../../services/translation.service';
/**
 *
 */
export abstract class BaseComponent {
  constructor(protected translateService: TranslationService) {}
}
