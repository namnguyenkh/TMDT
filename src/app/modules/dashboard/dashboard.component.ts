import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonService } from '../../services/common.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading = false;
  constructor(
    private readonly notificationService: NotificationService,
    private readonly commonService: CommonService,
    private readonly dialogService: DialogService
  ) {}

  ngOnInit() {}
}
