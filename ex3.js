function Ca(tenCa, mauSac, canNang) {
    this.tenCa = tenCa;
    this.mauSac = mauSac;
    this.canNang = canNang;
    this.swim = function () {
        console.log('Ca la phai biet boi');
    }
}

Object.prototype.birth = function () {
    console.log('Ca la phai de trung');
}

Ca.prototype.dive = function () {
    console.log('Lan thoai mai khong so chet');
}

var caRo = new Ca('Ca Ro', 'Xam', '2');
caRo.swim = () => {
    console.log('Ca ro boi tung tang');
}

caRo.information = () => {
    console.log('Ten: ' + caRo.tenCa + '\n' + 'Mau Sac: ' + caRo.mauSac + '\n' + 'Can Nang: ' + caRo.canNang);
}

for (var skill in caRo) {
    console.log(skill);
}
caRo.information();
caRo.swim();
caRo.birth();
caRo.dive();

caNgua = Object.create(Ca);
caNgua.birth = () => {
    console.log('Ca ngua de con');
}
caNgua.birth();