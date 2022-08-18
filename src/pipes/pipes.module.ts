import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';

export const pipes = [
	MomentPipe
  ];

@NgModule({
	declarations: [MomentPipe],
	imports: [],
	exports: [MomentPipe]
})
export class PipesModule {}
