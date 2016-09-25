/* jshint node: true */
'use strict';

var _ = require('busyman'),
    http = require('http'),
    chalk = require('chalk'),
    ZShepherd = require('zigbee-shepherd');

var mockDevs = require('./dev_mock'),
    ioServer = require('./helpers/ioServer');

var server = http.createServer(),
    shepherd = new ZShepherd('/dev/ttyUSB0');

server.listen(3030);
ioServer.start(server);

var app = function () {
    var firstPermitJoin = true;

    setLeaveMsg();

/**********************************/
/* register Req handler           */
/**********************************/
    ioServer.regReqHdlr('getDevs', function (args, cb) {
        var devs = {};

        shepherd.list().forEach(function (dev) {
            var eps = [];

            if (dev.nwkAddr === 0)
                return;

            dev.epList.forEach(function (epId) {
                eps.push(shepherd.find(dev.ieeeAddr, epId));
            });

            devs[dev.ieeeAddr] = getDevInfo(dev.ieeeAddr, eps);
        });

        cb(null, devs);
    });

    ioServer.regReqHdlr('permitJoin', function (args, cb) {
        shepherd.permitJoin(args.time);
        cb(null, null);

        if (firstPermitJoin) {
            firstPermitJoin = false;
            simpleApp();
        }
    });

    ioServer.regReqHdlr('write', function (args, cb) {
        var auxId =  _.split(args.auxId, '.'),  // [ epId, cid, rid ]
            ieeeAddr = args.permAddr,
            epId = parseInt(auxId[0]),
            cid = auxId[1],
            val = args.value,
            ep = shepherd.find(ieeeAddr, epId);

        if (ieeeAddr === '0x0000000022222222') {
            ep.functional = mockDevs.functional;
            toggleDev(ep, cid, val);
        } else if (cid === 'genOnOff') {
            var cmd = val ? 'on' : 'off';
            ep.functional('genOnOff', cmd, {}, function (err, rsp) {});
        }

        cb(null, val);
    });

/************************/
/* Event handle         */
/************************/
    shepherd.on('ready', function () {
        readyInd();
    });

    shepherd.on('permitJoining', function (timeLeft) {
        permitJoiningInd(timeLeft);
    });

    shepherd.on('error', function (err) {
        errorInd(err.message);
    });

    shepherd.on('ind', function (msg) {
        switch (msg.type) {
            case 'devIncoming':
                devIncomingInd(getDevInfo(msg.data, msg.endpoints));
                break;
            case 'devStatus':
                devStatusInd(msg.endpoints[0].getIeeeAddr(), msg.data);
                break;
            case 'devChange':
                attrsChangeInd(msg.endpoints[0].getIeeeAddr(), getGadInfo(msg.endpoints[0]));
                break;
            default:
                break;
        }
    });

/**********************************/
/* start shepherd                 */
/**********************************/
    setTimeout(function () {
        shepherd.start(function (err) {
            if (err)
                console.log(err);
            else
                showWelcomeMsg();
        });
    }, 20000);
    
};

/**********************************/
/* welcome function               */
/**********************************/
function showWelcomeMsg() {
var zbPart1 = chalk.blue('      ____   ____ _____ ___   ____ ____        ____ __ __ ____ ___   __ __ ____ ___   ___     '),
    zbPart2 = chalk.blue('     /_  /  /  _// ___// _ ) / __// __/ ____  / __// // // __// _ \\ / // // __// _ \\ / _ \\ '),
    zbPart3 = chalk.blue('      / /_ _/ / / (_ // _  |/ _/ / _/  /___/ _\\ \\ / _  // _/ / ___// _  // _/ / , _// // /  '),
    zbPart4 = chalk.blue('     /___//___/ \\___//____//___//___/       /___//_//_//___//_/   /_//_//___//_/|_|/____/    ');

    console.log('');
    console.log('');
    console.log('Welcome to zigbee-shepherd webapp... ');
    console.log('');
    console.log(zbPart1);
    console.log(zbPart2);
    console.log(zbPart3);
    console.log(zbPart4);
    console.log(chalk.gray('         A network server and manager for the ZigBee machine network'));
    console.log('');
    console.log('   >>> Author:     Jack Wu (jackchased@gmail.com)              ');
    console.log('   >>> Version:    zigbee-shepherd v0.0.6                      ');
    console.log('   >>> Document:   https://github.com/zigbeer/zigbee-shepherd  ');
    console.log('   >>> Copyright (c) 2016 Jack Wu, The MIT License (MIT)       ');
    console.log('');
    console.log('The server is up and running, press Ctrl+C to stop server.     ');
    console.log('');
    console.log('---------------------------------------------------------------');
}

/**********************************/
/* goodBye function               */
/**********************************/
function setLeaveMsg() {
    process.stdin.resume();

    function showLeaveMessage() {
        console.log(' ');
        console.log(chalk.blue('      _____              __      __                  '));
        console.log(chalk.blue('     / ___/ __  ___  ___/ /____ / /  __ __ ___       '));
        console.log(chalk.blue('    / (_ // _ \\/ _ \\/ _  //___// _ \\/ // // -_)   '));
        console.log(chalk.blue('    \\___/ \\___/\\___/\\_,_/     /_.__/\\_, / \\__/ '));
        console.log(chalk.blue('                                   /___/             '));
        console.log(' ');
        console.log('    >>> This is a simple demonstration of how the shepherd works.');
        console.log('    >>> Please visit the link to know more about this project:   ');
        console.log('    >>>   ' + chalk.yellow('https://github.com/zigbeer/zigbee-shepherd'));
        console.log(' ');
        process.exit();
    }

    process.on('SIGINT', showLeaveMessage);
}

/**********************************/
/* Indication funciton            */
/**********************************/
function readyInd () {
    ioServer.sendInd('ready', {});
    console.log(chalk.green('[         ready ] '));
}

function permitJoiningInd (timeLeft) {
    ioServer.sendInd('permitJoining', { timeLeft: timeLeft });
    console.log(chalk.green('[ permitJoining ] ') + timeLeft + ' sec');
}

function errorInd (msg) {
    ioServer.sendInd('error', { msg: msg });
    console.log(chalk.red('[         error ] ') + msg);
}

function devIncomingInd (dev) {
    ioServer.sendInd('devIncoming', { dev: dev });
    console.log(chalk.yellow('[   devIncoming ] ') + '@' + dev.permAddr);
}

function devStatusInd (permAddr, status) {
    ioServer.sendInd('devStatus', { permAddr: permAddr, status: status });
    status = (status === 'online') ? chalk.green(status) : chalk.red(status);
    console.log(chalk.magenta('[     devStatus ] ') + '@' + permAddr + ', ' + status);
}

function attrsChangeInd (permAddr, gad) {
    ioServer.sendInd('attrsChange', { permAddr: permAddr, gad: gad });
    console.log(chalk.blue('[   attrsChange ] ') + '@' + permAddr + ', auxId: ' + gad.auxId + ', value: ' + gad.value);
}

function toastInd (msg) {
    ioServer.sendInd('toast', { msg: msg });
}

function getDevInfo (ieeeAddr, eps) {
    var dev = {
            permAddr: ieeeAddr,
            status: shepherd.list(ieeeAddr)[0].status,
            gads: {}
        };

    eps.forEach(function (ep) {
        var gadInfo = getGadInfo(ep);

        if (gadInfo)
            dev.gads[gadInfo.auxId] = gadInfo;
    });

    return dev;
}

function getGadInfo (ep) {
    var epInfo = ep.dump(),
        gadType = getGadType(epInfo);

    if (!gadType) return;

    var val = ep.clusters.get(gadType.cid, 'attrs', gadType.rid);

    return {
        type: gadType.type,
        auxId: epInfo.epId + '.' + gadType.cid + '.' + gadType.rid,
        value: _.isNumber(val) ? Math.round(val) : val
    };
}

function getGadType (epInfo) {
    var prop = {
            type: null,
            cid: null,
            rid: null
        };

    switch (epInfo.devId) {
        case 0:     // onOffSwitch
        case 1:     // levelControlSwitch
        case 259:   // onOffLightSwitch
        case 260:   // dimmerSwitch
        case 261:   // colorDimmerSwitch
            if (epInfo.clusters.genOnOff) {
                prop.type = 'Switch';
                prop.cid = 'genOnOff';
                prop.rid = 'onOff';
            }
            break;

        case 12:    // simpleSensor
            if (epInfo.clusters.msIlluminanceMeasurement) {
                prop.type = 'Illuminance';
                prop.cid = 'msIlluminanceMeasurement';
                prop.rid = 'measuredValue';
            }
            break;

        case 256:   // onOffLight
        case 257:   // dimmableLight
        case 258:   // coloredDimmableLight
            if (epInfo.clusters.genOnOff) {
                prop.type = 'Light';
                prop.cid = 'genOnOff';
                prop.rid = 'onOff';
            }
            break;

        case 770:   // temperatureSensor
            if (epInfo.clusters.msTemperatureMeasurement) {
                prop.type = 'Temperature';
                prop.cid = 'msTemperatureMeasurement';
            } else if (epInfo.clusters.msRelativeHumidity) {
                prop.type = 'Humidity';
                prop.cid = 'msRelativeHumidity';
            }
            prop.rid = 'measuredValue';
            break;

        case 1026:  // iasZone
            if (epInfo.clusters.genBinaryInput) {
                prop.type = 'Flame';
                prop.cid = 'genBinaryInput';
                prop.rid = 'presentValue';
            } else if (epInfo.clusters.msOccupancySensing) {
                prop.type = 'Pir';
                prop.cid = 'msOccupancySensing';
                prop.rid = 'occupancy';
            }
            break;

        case 1027:  // iasWarningDevice
            if (epInfo.clusters.genBinaryInput) {
                prop.type = 'Buzzer';
                prop.cid = 'genBinaryInput';
                prop.rid = 'presentValue';
            }
            break;

        default:
            return;
    }

    return prop;
}

function toggleDev (gad, cid, onOff) {
    var cmd = onOff ? 'on' : 'off',
        isMock = gad.functional('genOnOff', cmd, { }, function (err, rsp) { });

    if (isMock)
        attChangeInd(gad, cid, onOff);
}

function attChangeInd (ep, cid, value) {
    var gadType = getGadType(ep),
        msg = {
            type: 'devChange',
            endpoints: [ ep ],
            data: {
                cid: cid,
                data: {}
            }
        };

    msg.data.data[gadType.rid] = value;
    ep.clusters.set(gadType.cid, 'attrs', gadType.rid, value);

    shepherd.emit('ind', msg);
}

function simpleApp () {
    var ctrlDev = mockDevs.ctrlDev,
        sensorDev = mockDevs.sensorDev,
        weatherDev = mockDevs.weatherDev;

    if (!shepherd.find('0x0000000011111111', 1)) {
        shepherd._registerDev(sensorDev).then(function () {
            return shepherd._registerDev(ctrlDev);
        }).then(function () {
            return shepherd._registerDev(weatherDev);
        }).done();
    } else {
        var devs = [ sensorDev, ctrlDev, weatherDev ];
        devs.forEach(function (dev) {
            dev = shepherd._findDevByAddr(dev.ieeeAddr);
            dev.setNetInfo({ status: 'online', joinTime: Math.floor(Date.now()/1000) });
        });
        shepherd._devbox.maintain(function (err){ });
    }

    setTimeout(function () {
        toastInd('Device ' + weatherDev.ieeeAddr + ' will join the network');

        setTimeout(function () {
            var endpoints = [];
            _.forEach(weatherDev.epList, function (epId) {
                endpoints.push(weatherDev.getEndpoint(epId));
            });
            shepherd.emit('ind', { type: 'devIncoming', endpoints: endpoints, data: weatherDev.ieeeAddr });
            shepherd.emit('ind', { type: 'devStatus', endpoints: endpoints, data: 'online' });
        }, 3000);

        setInterval(function () {
            var tempVal = 25 + Math.random() * 5,
                humidVal = 40 + Math.random() * 10;
            attChangeInd(weatherDev.getEndpoint(1), 'msTemperatureMeasurement', tempVal);
            attChangeInd(weatherDev.getEndpoint(2), 'msRelativeHumidity', humidVal);
        }, 3000);
    }, 100);

    setTimeout(function () {
        toastInd('Device ' + sensorDev.ieeeAddr + ' will join the network');

        setTimeout(function () {
            var endpoints = [];
            _.forEach(sensorDev.epList, function (epId) {
                endpoints.push(sensorDev.getEndpoint(epId));
            });
            shepherd.emit('ind', { type: 'devIncoming', endpoints: endpoints, data: sensorDev.ieeeAddr });
            shepherd.emit('ind', { type: 'devStatus', endpoints: endpoints, data: 'online' });
        }, 3000);
    }, 3500);

    setTimeout(function () {
        toastInd('Device ' + ctrlDev.ieeeAddr + ' will join the network');

        setTimeout(function () {
            var endpoints = [];
            _.forEach(ctrlDev.epList, function (epId) {
                endpoints.push(ctrlDev.getEndpoint(epId));
            });
            shepherd.emit('ind', { type: 'devIncoming', endpoints: endpoints, data: ctrlDev.ieeeAddr });
            shepherd.emit('ind', { type: 'devStatus', endpoints: endpoints, data: 'online' });
        }, 3000);
    }, 7000);

    setTimeout(function () {
        toastInd('You can click on a lamp or a buzzer');
    }, 11000);

    setTimeout(function () {
        toastInd('User will turn on the light switch');

        setTimeout(function () {  // turn on the light switch
            attChangeInd(ctrlDev.getEndpoint(3), 'genOnOff', true);
        }, 4000);

        setTimeout(function () {  // turn on the light
            toggleDev(ctrlDev.getEndpoint(2), 'genOnOff', true);
        }, 4300);

        setTimeout(function () {
            toastInd('User will turn off the light switch');
        }, 6500);

        setTimeout(function () {  // turn off the light switch
            attChangeInd(ctrlDev.getEndpoint(3), 'genOnOff', false);
        }, 10500);

        setTimeout(function () {  // turn off the light
            toggleDev(ctrlDev.getEndpoint(2), 'genOnOff', false);
        }, 11000);
    }, 17000);

    setTimeout(function () {
        toastInd('Illumination is less than 50 lux, light would be turned on');

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(1), 'msIlluminanceMeasurement', 39);
        }, 4500);

        setTimeout(function () {
            toggleDev(ctrlDev.getEndpoint(2), 'genOnOff', true);
        }, 4800);

        setTimeout(function () {
            toastInd('Illumination is greater than 50 lux, light would be turned off');
        }, 6000);

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(1), 'msIlluminanceMeasurement', 58);
        }, 10500);

        setTimeout(function () {
            toggleDev(ctrlDev.getEndpoint(2), 'genOnOff', false);
        }, 10800);

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(1), 'msIlluminanceMeasurement', 66);
        }, 12000);
    }, 29000);

    setTimeout(function () {
        toastInd('PIR sensed someone walking around, light would be turned on');

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(3), 'msOccupancySensing', true);
        }, 5000);

        setTimeout(function () {
            toggleDev(ctrlDev.getEndpoint(2), 'genOnOff', true);
        }, 5300);

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(3), 'msOccupancySensing', false);
        }, 9500);

        setTimeout(function () {
            toggleDev(ctrlDev.getEndpoint(2), 'genOnOff', false);
        }, 10500);
    }, 41000);

    setTimeout(function () {
        toastInd('Flame sensor detect the presence of a fire, buzzer would be turned on');

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(2), 'genBinaryInput', true);
        }, 5000);

        setTimeout(function () {
            toggleDev(ctrlDev.getEndpoint(1), 'genBinaryInput', true);
        }, 5300);

        setTimeout(function () {
            attChangeInd(sensorDev.getEndpoint(2), 'genBinaryInput', false);
        }, 9500);

        setTimeout(function () {
            toggleDev(ctrlDev.getEndpoint(1), 'genBinaryInput', false);
        }, 10500);
    }, 53000);
}

module.exports = app;
