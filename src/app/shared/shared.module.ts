import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ColorsService } from './colors/colors.service';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        TypeaheadModule.forRoot(),
        ToasterModule
    ],
    providers: [
        ColorsService
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        DatepickerModule,
        BsDatepickerModule,
        BsDropdownModule,
        ModalModule,
        PaginationModule,
        ProgressbarModule,
        RatingModule,
        TabsModule,
        TimepickerModule,
        TooltipModule,
        PopoverModule,
        TypeaheadModule,
        ToasterModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
