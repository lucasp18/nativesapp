import { Directive, ElementRef, HostListener, Input } from '@angular/core';

declare const android:any;

@Directive({ selector: '[nsShadow]'})
export class NativeShadowDirective  implements AfterViewInit {
	@Input() nsShadow: string;
	constructor(private el: ElementRef){
		
	}

	ngAfterViewInit(){
		if(this.nsShadow === ''){
			this.nsShadow = '2';
		}
	}

	@HostListener('loaded') onLoaded(){
		const tnsView = this.el.nativeElement;
		if(tnsView.android){
			const shape = new android.graphics.drawable.GradientDrawable();
			shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
			shape.setColor(android.graphics.Color.WHITE);
			shape.setCornerRadius(18);
			tnsView.android.setBackgroundDrawable(shape);
			tnsView.android.setElevation(this.nsShadow);
		}
	}
}