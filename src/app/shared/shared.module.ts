import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacePipe } from './convert-to-space.pipe';

@NgModule({
    declarations: [
        ConvertToSpacePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [CommonModule, ConvertToSpacePipe]
})
export class SharedModule { }
