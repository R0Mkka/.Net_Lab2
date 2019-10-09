import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FirstTaskService } from '../services/first-task.service';

import { IResultObject } from '../models/common.models';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstTaskComponent implements OnInit {
  public numberControl: FormControl;
  public degreeControl: FormControl;
  public result: string = '?';

  constructor(
    private readonly firstTaskService: FirstTaskService,
    private readonly cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.initControls();
  }

  public countSqrtN(): void {
    if (!this.numberControl.valid || !this.degreeControl.valid) {
      return;
    }

    this.firstTaskService.countSqrtN(this.getValues())
      .subscribe((resultObject: IResultObject) => {
        this.result = resultObject.result;

        this.cdRef.markForCheck();
      });
  }

  public countSqrtPow(): void {
    if (!this.numberControl.valid || !this.degreeControl.valid) {
      return;
    }

    this.firstTaskService.countSqrtPow(this.getValues())
      .subscribe((resultObject: IResultObject) => {
        this.result = resultObject.result;

        this.cdRef.markForCheck();
      });
  }

  private getValues(): { targetNumber: number, degree: number } {
    const targetNumber = Number(this.numberControl.value);
    const degree = Number(this.degreeControl.value);

    return { targetNumber, degree };
  }

  private initControls(): void {
    this.numberControl = new FormControl('', Validators.required);
    this.degreeControl = new FormControl('', Validators.required);
  }
}
