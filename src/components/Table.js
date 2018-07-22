// React
import React, { Component } from "react";

// Material UI components
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class TableContent extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: "auto"
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          className="table"
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan={this.props.tableHeader.length}
                style={{ textAlign: "left" }}
              >
                {this.props.tableTitle}
              </TableHeaderColumn>
            </TableRow>

            <TableRow>
              {this.props.tableHeader.map((row, index) => (
                <TableHeaderColumn key={index}>
                  {this.props.tableHeader[index]}
                </TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.tableData.map((row, item) => (
              <TableRow key={item}>
                {this.props.tableHeader.map((row, index) => (
                  <TableRowColumn key={index}>
                    {Object.values(this.props.tableData[item])[index]}
                  </TableRowColumn>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TableContent;
