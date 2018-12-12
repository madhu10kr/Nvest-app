import React, { Component } from 'react';
import './directorySubmissions.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



function onRowSelect(row, isSelected, e) {
    let rowStr = '';
    for (const prop in row) {
        rowStr += prop + ': "' + row[prop] + '"';
        console.log();
    }
    console.log(`is selected: ${isSelected}, ${rowStr}`);
}

function onSelectAll(isSelected, rows) {
    alert(`is select all: ${isSelected}`);
    if (isSelected) {
        alert('Current display and selected data: ');
    } else {
        alert('unselect rows: ');
    }
    for (let i = 0; i < rows.length; i++) {
        alert(rows[i].id);
    };
}
var datalink = [
    { id: 1, ivalue: "INCLUDED", name: "test1", link: "https://www.test1.com/" },
    { id: 2, ivalue: "INCLUDED", name: "test2", link: "https://www.test1.com/" },
    { id: 3, ivalue: "INCLUDED", name: "test3", link: "https://www.test1.com/" },
    { id: 4, ivalue: 1000, name: "test4", link: "https://www.test1.com/" },
    { id: 5, ivalue: 1500, name: "test5", link: "https://www.test1.com/" },
    { id: 6, ivalue: 1000, name: "test6", link: "https://www.test1.com/" },
    { id: 7, ivalue: 500, name: "test7", link: "https://www.test1.com/" }
];

// const data = datalink.map(item => {
//     return (
//         <p>{item.ivalue}</p>
//     )
// })


const selectRowProp = {
    mode: 'checkbox',
    selected: [1, 2, 3],
    clickToSelect: true,
    onSelect: onRowSelect,
    onSelectAll: onSelectAll
};


class DirectorySubmissions extends Component {
    render() {
        return (
            <div className="directoryContainer">
                <div className="col-sm-12">
                    <p><strong>Data DIRECTORY</strong><br />SUBMISSIONS</p>
                    <div className="line"></div>
                </div>
                <div className="col-xs-12 dirRowsubmission">
                    <BootstrapTable data={datalink} selectRow={selectRowProp}>
                        <TableHeaderColumn dataField='id' isKey></TableHeaderColumn>
                        <TableHeaderColumn dataField='ivalue'></TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>$595.00</TableHeaderColumn>
                        <TableHeaderColumn dataField='link'>Data + ALL FREE SUBMISSIONS</TableHeaderColumn>
                    </BootstrapTable>
                    <div className="row directTotal">
                        <div className="col-sm-4 col-xs-12">Total : </div>
                        <div className="col-sm-4 col-xs-12"></div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="butnalihn">
                                <button className="btn btn-success Proceed">Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectorySubmissions;