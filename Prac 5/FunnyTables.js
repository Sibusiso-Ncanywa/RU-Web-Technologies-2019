/**
 *   Playing with tables
 */

window.onload = function () {   // do not forget this or your event handlers might fail to get set up properly!

	var tableB = document.getElementById("mytbody").addEventListener(function(event){event.preventDefault()});
	var cells = document.getElementsByTagName("td").addEventListener(function(event){event.preventDefault()});

    for (i=1; i < cells.length; i = i+3) {   // (we make only the cells in the central column clickable, naturally
	   cells[i].onclick = function() {      //  this is simple function to exercise the named functions below,
		                                                  // swapping the cells to the right and the left of the cell clicked
		var col = getCellColumn(this);
		var row = getCellRow(this);
		var temp = cellHandle (tableB, row, col + 1).innerHTML;

		cellHandle(tableB, row, col +1).innerHTML = cellHandle(tableB, row, col - 1).innerHTML;  // standard swap
		cellHandle(tableB, row, col - 1).innerHTML = temp;

     }
	}
	
	function cellHandle (tableBody, row, column) {  // a function simply improving legibility of the code
        return tableBody.rows[row].cells[column];
	}
	
	function getCellColumn(cell) {   // another function  improving legibility of the code
		return cell.cellIndex;
	}
	
	function getCellRow(cell) {
		return cell.parentElement.rowIndex;  // same here; note the 'climbing up' of the DOM via parentElement
	}
	
}