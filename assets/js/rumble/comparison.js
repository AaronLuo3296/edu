// used on an image's vulnerability-info page

const image = document.location.pathname.replace("/vulnerability-info/", "").split("/").pop()
const data = await d3.csv(`https://storage.googleapis.com/chainguard-academy/cve-data/${image}.csv`);
const displayColumns = ["Package", "Vulnerability", "Severity"];
const dataColumns = ["package", "vulnerability", "s"];
const dataSorted = sortData();

makeTable("#rumble-images-external", dataSorted.theirs, dataSorted.theirVulns);
makeTable("#rumble-images-chainguard", dataSorted.ours, dataSorted.ourVulns);

function sortData() {
  let theirs = [],
    ours = [];

  data.forEach(function (row) {
    if (row.image.startsWith("cgr.dev")) {
      ours.push(row);
    } else {
      theirs.push(row);
    }
  });

  let theirVulns = [];
  let ourVulns = [];

  theirs.forEach(function (row) {
    if (!(theirVulns.includes(row.vulnerability, 0))) {
      theirVulns.push(row.vulnerability)
    }
  })

  ours.forEach(function (row) {
    if (!(ourVulns.includes(row.vulnerability, 0))) {
      ourVulns.push(row.vulnerability)
    }
  })

  return { "theirs": theirs, "ours": ours, "theirVulns": theirVulns, "ourVulns": ourVulns }
};

function makeTable(id, sortedData, vulnIDs) {
  var table = d3.select(id).append("table"),
    thead = table.append("thead"),
    tbody = table.append("tbody");

  // append the header row
  thead.append("tr")
    .selectAll("th")
    .data(function () {
      return displayColumns.map(function (column) {
        if (column == "Vulnerability") {
          let count = vulnIDs.length;
          column = `Vulnerability [${count}]`
        }
        return column;
      })
    })
    .enter()
    .append("th")
    .text(function (column) { return column; });

  // create a row for each object in the data
  var rows = tbody.selectAll("tr")
    .data(sortedData)
    .enter()
    .append("tr");

  // create a cell in each row for each column
  rows.selectAll("td")
    .data(function (row) {
      return dataColumns.map(function (column) {
        let val = row[column];
        if (column == "vulnerability") {
          let isProd = getEnvUrl();
          if (isProd) {
            val = `<a href="/vulnerabilities/${val}">${val}</a>`
          } else {
            val = `<a href="/vulnerabilities/?id=${val}">${val}</a>`
          }
        }
        return { column: column, value: val };
      });
    })
    .enter()
    .append("td")
    .html(function (d) { return d.value; });
};

// toggles between absolute and ?id= URLs for each page when rendering table links
function getEnvUrl() {
  let host = document.location.host;
  if (host.match(`.+netlify.com.+`)) {
    return false
  } else if (host.match(`localhost:1313`)) {
    return false
  } else {
    return true
  }
};
