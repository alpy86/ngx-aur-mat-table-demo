import {Component, OnInit} from '@angular/core';
import {ActionEvent, RowActionConfig, TableConfig, TableRow} from "ngx-aur-mat-table";
import {Customer} from "../../shared/model/customer";
import {CustomerGenerator} from "../../shared/generator/CustomerGenerator";
import {CustomerTableRow} from "../../shared/model/customer-table-row";

@Component({
  selector: 'app-table-with-actions',
  templateUrl: './table-with-actions.component.html',
  styleUrls: ['./table-with-actions.component.scss']
})
export class TableWithActionsComponent {

  tableConfig: TableConfig<Customer>[] = [
    {
      name: 'customers name',
      key: 'name'
    },
    {
      name: 'customers age',
      key: 'age',
    }
  ];

  actions: RowActionConfig = {
    actions: [
      {
        action: 'edit',
        icon: {
          name: 'edit',
          tooltip: 'редактировать',
          color: 'blue'
        }
      },
      {
        action: 'delete',
        icon: {
          name: 'delete',
          tooltip: 'удалить',
          color: 'red'
        }
      }
    ]
  }

  tableData: TableRow<Customer>[] = CustomerGenerator.generate(10).map(c => new CustomerTableRow(c, c.name, c.age));

  onRowActions($event: ActionEvent<Customer>) {
    alert($event.action + ': ' + $event.value.name)
  }
}
