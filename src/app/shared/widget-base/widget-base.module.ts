import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  RouterModule, // can be imported multiple time, needed for each component with <router-outlet>
  MaterialModule
];

/**
 * NgModule that includes all graphical stuff.
 */
@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class WidgetBaseModule {}
