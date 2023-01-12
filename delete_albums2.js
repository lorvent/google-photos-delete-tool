var intervalId = window.setInterval(function () {
deleteAlbum()
}, 6000);

var albums = 0;
var albumNumber = document.getElementsByClassName('U26fgb JRtysb WzwrXb YI2CVc G6iPcb').length;

function deleteAlbum() {
// Get our first album and click it
setTimeout(function () {
document.getElementsByClassName('U26fgb JRtysb WzwrXb YI2CVc G6iPcb')[2].click();
}, 500);
    setTimeout(function () {
    document.getElementsByClassName('z80M1 o7Osof')[6].dispatchEvent(new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window
    }));
}, 1500);


// Get our delete button and click it
setTimeout(function () {
    document
        .getElementsByClassName('z80M1 o7Osof')[6].dispatchEvent(new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        view: window
    }));
}, 2500);


// Confirm deletion
setTimeout(function () {
    document
        .getElementsByClassName('VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ nCP5yc AjY5Oe kHssdc HvOprf')[0].click();

}, 4000);

// Confirm deletion
setTimeout(function () {
    currentAlbums = document.getElementsByClassName('U26fgb JRtysb WzwrXb YI2CVc G6iPcb').length;
    console.log("Current album number: " + currentAlbums);
    console.log("Old album number: " + albumNumber)
    if (currentAlbums < albumNumber) {
        albums++;
        console.log(albums + " deleted.");
    } else {
        console.log("Error deleting album. Aborting")
        clearInterval(intervalId)
    }
}, 5500);
}
