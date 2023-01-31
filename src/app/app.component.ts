import { Component, Inject } from '@angular/core';
import { CatI18nRegistry, CatIconRegistry } from '@haiilo/catalyst';
import {
  CAT_I18N_REGISTRY_TOKEN,
  CAT_ICON_REGISTRY_TOKEN,
} from '@haiilo/catalyst-angular';
import { ci } from '@haiilo/catalyst-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(CAT_ICON_REGISTRY_TOKEN)
    private readonly iconRegistry: CatIconRegistry,
    @Inject(CAT_I18N_REGISTRY_TOKEN)
    private readonly i18nRegistry: CatI18nRegistry
  ) {
    this.addCatalystIcons();
    this.addCatalystTranslations();
  }

  private addCatalystIcons(): void {
    this.iconRegistry.addIcons(ci);
  }

  private addCatalystTranslations(): void {
    this.i18nRegistry.set({
      'dialog.close': 'Close',
      'input.clear': 'Clear',
      'input.optional': 'Optional',
      'input.required': 'Required',
      'notification.dismiss': 'Dismiss',
      'pagination.prev': 'Previous',
      'pagination.page': 'Go to page {{page}}',
      'pagination.next': 'Next',
      'select.close': 'Close',
      'select.deselect': 'Deselect',
      'select.empty': 'No items',
      'select.open': 'Open',
    });
  }
}
