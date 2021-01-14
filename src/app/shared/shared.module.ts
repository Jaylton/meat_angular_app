import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";



@NgModule({
    declarations: [RatingComponent, InputComponent, RadioComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [RatingComponent, InputComponent, RadioComponent, FormsModule, ReactiveFormsModule, CommonModule]
})
export class SharedModule {

}