function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nama != "" && email != "" && alamat != "") {
        return true;
    } else {
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

function ValidateEmail() {
    var email = document.getElementById("temail").value;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
    }
}

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("No Hp harus angka !");
        return false;
        return true;
    }
}

function Submit() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nohp = document.getElementById("nohp").value;

    if (nama != "" && email != "" && nohp != "") {
        document.write("Nama Anda adalah	: " + nama);

        document.write(" Email Anda adalah	: " + email);

        document.write(" No HP Anda adalah	: " + nohp);
        return false;
        return true;
    }
}