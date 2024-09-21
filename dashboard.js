

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
    fetch(`http://192.168.178.1:8181/rollingshutter/v1/open/${devices[device]}`, {
        method: 'GET'
    });
}

// Function for the hold button
function buttonHoldClicked(device) {
    fetch(`http://192.168.178.1:8181/rollingshutter/v1/stop/${devices[device]}`, {
        method: 'GET'
    });
}

// Function for the down button
function buttonDownClicked(device) {
    fetch(`http://192.168.178.1:8181/rollingshutter/v1/close/${devices[device]}`, {
        method: 'GET'
    });
}
function F1() {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/12908`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/7355`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/9088`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/10661`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/9405`, {
        method: 'GET'
    });
    
}
function F2() {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/12908`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/7355`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/9088`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/10661`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/9405`, {
        method: 'GET'
    });
    
}
function F3() {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/12908`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/7355`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/9088`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/10661`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/9405`, {
        method: 'GET'
    });
    
}
function S1() {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/3685`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/17850`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/4619`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/open/1854`, {
        method: 'GET'
    });
}
function S2() {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/3685`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/17850`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/4619`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/stop/1854`, {
        method: 'GET'
    });
}
function S3() {
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/3685`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/17850`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/4619`, {
        method: 'GET'
    });
    fetch(`http://127.0.0.1:8181/rollingshutter/v1/close/1854`, {
        method: 'GET'
    });
}