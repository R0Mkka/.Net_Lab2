import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SecondTaskService } from '../services/second-task.service';

import { IResultObject } from '../models/common.models';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondTaskComponent implements OnInit {
  public numberControl: FormControl;
  public result: string = '?';

  constructor(
    private readonly secondTaskService: SecondTaskService,
    private readonly cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.initControl();
  }

  public convert(): void {
    if (!this.numberControl.valid) {
      return;
    }

    this.secondTaskService.convert(Number(this.numberControl.value))
      .subscribe((resultObject: IResultObject) => {
        this.result = resultObject.result;

        this.cdRef.markForCheck();
      });
  }

  private initControl(): void {
    this.numberControl = new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]);
  }
}
