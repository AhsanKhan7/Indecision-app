var namevar = 'ahsan';
var namevar = 'mike';
console.log('varname', namevar);

let namelet = 'jen';
namelet = 'kjh';
console.log('namelet', namelet);

const nameconst = 'frank';
console.log('nameconst', nameconst);

//Block scoping

var fncname = 'ahsan nas';

 if (fncname) {
    var fncname = fncname.split(' ')[0];
    console.log('function turns in ', fncname);
};
