import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
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
