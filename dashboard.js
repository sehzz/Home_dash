

// Device variables
const devices = {
    Bedroom: 1854,
    Bedroom_Fenster: 4619,
    Corridor: 7355,
    Garage: 12648,
    Gastezimmer: 10661,
    KaminFenster: 9088,
    Kinderzimmer: 17850,
    Kinderzimmer_Fenster: 3685,
    Kitchen: 9405,
    LivingRoom: 12908
};

// Function for the up button
function buttonUpClicked(device) {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/${devices[device]}`, {
        method: 'GET'
    });
}

// Function for the hold button
function buttonHoldClicked(device) {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/${devices[device]}`, {
        method: 'GET'
    });
}

// Function for the down button
function buttonDownClicked(device) {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/${devices[device]}`, {
        method: 'GET'
    });
}
