var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var siteContainer;

if (localStorage.getItem("siteContainer") == null) {
    siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem("siteContainer"));
    displaySites()
}

function addSite() {


    if (validateSiteInput()) {
        var sites = {
            name: siteName.value,
            url: siteUrl.value
        }
        siteContainer.push(sites);
        localStorage.setItem("siteContainer", JSON.stringify(siteContainer))
        displaySites()
        clearData()
    }
    else {
        window.alert("Please Validate Your Site")
    }

}

//   <!-- PaulaSoliman94.develop@gmail.com -->
//   <!-- 01221521221 -->

function displaySites() {
    var site = "";
    for (i = 0; i < siteContainer.length; i++) {
        site += `
        <tr>
        <td>${i + 1}</td>
        <td class="fw-bold fs-4">${siteContainer[i].name}</td>
        <td><button class="btn btn-info" id="sitebtn" onclick="visitSite(${i})">Visit</button></td>
        <td><button class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
      </tr> `
    }
    document.getElementById('displayData').innerHTML = site;
}

function clearData() {
    siteName.value = "";
    siteUrl.value = ""
}

function deleteData(index) {
    siteContainer.splice(siteContainer[index], 1);
    localStorage.setItem("siteContainer", JSON.stringify(siteContainer));
    displaySites();
}

function visitSite(index) {
    window.open(siteContainer[index].url, siteContainer[index].name)

}

function validateSiteInput() {
    var regexUrl = /^https:\/\//
    if (regexUrl.test(siteUrl.value)) {
        return true
    }
    else {
        return false
    }
}