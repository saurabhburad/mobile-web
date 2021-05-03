import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../common/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CommonClothShoppingModule } from '../common/common-cloth-shopping.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CommonClothShoppingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
