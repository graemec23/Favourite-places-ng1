// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


import angular from 'angular';

angular.module('app', []);




  function favouritePlaces() {
    this.init();
  }
  favouritePlaces.prototype.init = function() {

    this.lookupRecords();
    this.addClickEvents();
    this.getAddress();
  };

  favouritePlaces.prototype.lookupRecords = function() {
    if (window.localStorage) {
      localStorage.setItem('user', 'Graeme');
    }
  }

  favouritePlaces.prototype.addClickEvents = function() {
    var findAddress = document.getElementById('findAddress');
    findAddress.addEventListener('click', function() {
      console.log(this)

    });
  };

  favouritePlaces.prototype.getAddress = function() {
    // fetch('https://api.getAddress.io/v2/uk/cm28qj?api-key=OWFZnWh1h0muJI8Fx_fvRA7066', {
    //   method: 'get'
    // }).then(r => r.json()).then(data => {
    //   console.log(data.Addresses); // and this works
    // });
    
      var addresses = ["1 Attwoods Close, , , , , Chelmsford, Essex", "10 Attwoods Close, , , , , Chelmsford, Essex", "11 Attwoods Close, , , , , Chelmsford, Essex", "12 Attwoods Close, , , , , Chelmsford, Essex", "13 Attwoods Close, , , , , Chelmsford, Essex", "14 Attwoods Close, , , , , Chelmsford, Essex", "15 Attwoods Close, , , , , Chelmsford, Essex", "16 Attwoods Close, , , , , Chelmsford, Essex", "17 Attwoods Close, , , , , Chelmsford, Essex", "18 Attwoods Close, , , , , Chelmsford, Essex", "19 Attwoods Close, , , , , Chelmsford, Essex", "2 Attwoods Close, , , , , Chelmsford, Essex", "20 Attwoods Close, , , , , Chelmsford, Essex", "21 Attwoods Close, , , , , Chelmsford, Essex", "22 Attwoods Close, , , , , Chelmsford, Essex", "23 Attwoods Close, , , , , Chelmsford, Essex", "24 Attwoods Close, , , , , Chelmsford, Essex", "25 Attwoods Close, , , , , Chelmsford, Essex", "26 Attwoods Close, , , , , Chelmsford, Essex", "27 Attwoods Close, , , , , Chelmsford, Essex", "28 Attwoods Close, , , , , Chelmsford, Essex", "29 Attwoods Close, , , , , Chelmsford, Essex", "3 Attwoods Close, , , , , Chelmsford, Essex", "30 Attwoods Close, , , , , Chelmsford, Essex", "31 Attwoods Close, , , , , Chelmsford, Essex", "32 Attwoods Close, , , , , Chelmsford, Essex", "33 Attwoods Close, , , , , Chelmsford, Essex", "34 Attwoods Close, , , , , Chelmsford, Essex", "35 Attwoods Close, , , , , Chelmsford, Essex", "36 Attwoods Close, , , , , Chelmsford, Essex", "38 Attwoods Close, , , , , Chelmsford, Essex", "4 Attwoods Close, , , , , Chelmsford, Essex", "40 Attwoods Close, , , , , Chelmsford, Essex", "5 Attwoods Close, , , , , Chelmsford, Essex", "6 Attwoods Close, , , , , Chelmsford, Essex", "7 Attwoods Close, , , , , Chelmsford, Essex", "8 Attwoods Close, , , , , Chelmsford, Essex", "9 Attwoods Close, , , , , Chelmsford, Essex"];
      var mapped = addresses.map(function (address) {
        let lineOne = address.split(',')[0];
        let addressNum = lineOne.split(' ').join()[0];
        // console.log(typeof addressNum)
        // console.log(addressNum)
        //console.log(lineOne)
        return $('<option />').attr('value', addressNum).text(lineOne);
      });
      
      // mapped.sort(function(a,b) {
      //   console.log(a, a.val)
      //   return a.val - b.val;
      // });
      
      // console.log('mapped', mapped)
      
      $('.list').append(mapped);
  };

  var favourite = new favouritePlaces();
