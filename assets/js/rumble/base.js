import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// colour coding for sevrity on vulnerabilty info pages
const severityColours = {
    Critical: "#F236F6",
    High: "#3443F4",
    Medium: "#1F2892",
    Low: "#16C0D7",
    Negligible: "#C5C5C5",
    Unknown: "#8C8C8C"
}

// used on image comparison and vulnerability info page search fields
const searchFilter = document.querySelector("#filterInput");
searchFilter.value = null;
searchFilter.addEventListener("keyup", () => {
    filterTable("rumble-images-external");
    filterTable("rumble-images-chainguard");
});

// taken from https://www.delftstack.com/howto/javascript/javascript-filter-table/
function filterTable(tableId) {
    var filter, table, tr, i, j;
    filter = document.getElementById("filterInput").value.toLowerCase();
    table = document.getElementById(tableId);
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        const tdArray = tr[i].getElementsByTagName("td");
        for (var j = 0; j < tdArray.length; j++) {
            const cellValue = tdArray[j];
            if (cellValue && cellValue.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            }
        }
    }
}