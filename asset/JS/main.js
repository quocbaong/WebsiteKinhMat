function formValidation() {
    var frm = document.forms["survey"];

    if (frm.fname.length == 0) {
        alert("Bạn Chưa Điền Họ Tên, Làm ơn hãy điền đầy đủ thông tin!!!");
        frm.fname.focus();
        return false;
    }

    return true;
}

function openCart(){
    window.location.href = "donhang.html";
}
function showCart(){
    var formatter = new Intl.NumberFormat('vi-VN',{style: 'currency', currency: 'VND'});
    var container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
    container.innerHTML="";
    var sum=0;
    var totalPreTax=0;
    var discountRate=getDiscountRate();
    var taxRate=0.1;
    var discount=0;
    var tax=0;
    for(var i=0;i<window.localStorage.length;i++)
    {
        if(typeof itemList[localStorage.key(i)] === "undefined")
            continue;
        var tr=document.createElement("tr");
        var photoCell=document.createElement("td");
        var nameCell=document.createElement("td");
        var priceCell=document.createElement("td");
        var numberCell=document.createElement("td");
        var sumCell=document.createElement("td");
        var removeCell=document.createElement("td");
        var removeLink=document.createElement("a");
        var item=itemList[localStorage.key(i)];
        var number=localStorage.getItem(localStorage.key(i));
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='"+item.photo+"' class='round-figure'width='100px'/>";
        nameCell.innerHTML=item.name;
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="right";
        numberCell.innerHTML=number;
        numberCell.style.textAlign="right";
        sum=number*item.price;
        sumCell.innerHTML=formatter.format(sum);
        sumCell.style.textAlign="right";
        removeLink.innerHTML="<i class='fa fa-trash icon-pink'></i>";
        removeLink.setAttribute("href","#");
        removeLink.setAttribute("data-code",localStorage.key(i));
        removeLink.onclick=function(){
        removeCart(this.dataset.code);
        };
        removeCell.style.textAlign="center";
        removeCell.appendChild(removeLink);
        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(numberCell);
        tr.appendChild(priceCell);
        tr.appendChild(sumCell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
        totalPreTax+=sum;
        }
        var discount=totalPreTax*discountRate;
        var tax=(totalPreTax-discount)*taxRate;
        document.getElementById("bill_pre_tax_total").innerHTML=formatter.for
        mat(totalPreTax);
        document.getElementById("bill_discount").innerHTML=discountRate+" x A= "+formatter.format(discount);
        document.getElementById("bill_tax").innerHTML=formatter.format(tax);
        document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax-discount+tax);
    }
function addCart(code)
{
    var number=parseInt(document.getElementById(code).value);
    var name=itemList[code].name;
    if(number==0)
        return;
        if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number); }
    else{
        var current=parseInt(window.localStorage.getItem(code));
        if(current+number>100)
            {
                window.localStorage.setItem(code,100);
                alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của "+name+" này.");
                return; 
            }
            else
                window.localStorage.setItem(code,current+number);   
        }
            alert("Đã cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng. Số lượng sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");
}

function getDiscountRate()
{
    var d=new Date();
    var weekday=d.getDay();
    var totalMins=d.getHours()*60+d.getMinutes();
    if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
        return 0.1;
    return 0;
}
function removeCart(code)
{
    if(typeof window.localStorage[code] !== "undefined")
    {
    window.localStorage.removeItem(code);
    document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
    showCart();
    }
    }
    var itemList={ 
        "sp001":{
            "name":"LV Waimea L Sunglasses",
            "price":1290000,
            "photo":"../asset/imgs/uudai/product5.png"},
        "sp002":{
            "name":"LV Jewel Square Sunglasses",
            "price":2249000,
            "photo":"../asset/imgs/uudai/product6.jpg"},
        "sp003":{
            "name":"Gucci Eyewear",
            "price":1990000,
            "photo":"../asset/imgs/uudai/product7.png"},
        "sp004":{
            "name":"Mắt Kính LV Clash - Cỡ Lớn",
            "price":1590000,
            "photo":"../asset/imgs/trangchu/LV_Clash.png"},
        "sp005":{
            "name":"DIOR MISSDIORB2U E0B2",
            "price":1290000,
            "photo":"../asset/imgs/trangchu/DIOR_MISSDIORB2U.webp"},
        "sp006":{
            "name":"SQUARE METAL AND ACETATE GLASSES",
            "price":2490000,
            "photo":"../asset/imgs/trangchu/gucci_glass.jpg"},
        "sp007":{
            "name":"Prada Linea Rossa Impavid Sunglasses",
            "price":1990000,
            "photo":"../asset/imgs/trangchu/prada_glass.jpg"},
        "sp008":{
            "name":"Gucci Eyewear Men's Gg1221s",
            "price":2990000,
            "photo":"../asset/imgs/uudai/product8.jpg"},
        "sp009":{
            "name":"DIOR MEN'S ROUNDED RIMLESS SUNGLASSES",
            "price":3900000,
            "photo":"../asset/imgs/uudai/product9.jpg"},
        "sp010":{
            "name":"DIOR DIORESSENCE19 - havana yellow",
            "price":5500000,
            "photo":"../asset/imgs/uudai/product10.jpg"},
        "sp011":{
            "name":"Óculos de Sol Prada Black PR09ZS 1AB5S0-54",
            "price":3590000,
            "photo":"../asset/imgs/uudai/product11.jpg"},
        "sp012":{
            "name":"Prada PR 18WS Men's Rectangular Sunglasses",
            "price":2990000,
            "photo":"../asset/imgs/uudai/product12.jpg"},
    };
    function copied(){
        alert("Voucher đã được sao chép");
}

function checkfrom() {
    const name = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const comment = document.getElementById('comment').value;

    if(name === "" || email === "" || phone === "" || comment === ""){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    document.querySelector("form").submit();
}
document.querySelector("input[type='submit']").addEventListener("click",checkfrom);

//Dang ky

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    var nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/;
    if (name && !nameRegex.test(name)) {
        alert('Tên không hợp lệ! Tên phải có ít nhất 2 từ và bắt đầu bằng chữ cái hoa và không dấu.');
        return false;
    }

    var phoneRegex = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (phone && !phoneRegex.test(phone)) {
        alert('Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.');
        return false;
    }

    var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email && !emailRegex.test(email)) {
        alert('Địa chỉ email không hợp lệ');
        return false;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (password && !passwordRegex.test(password)) {
        alert('Mật khẩu không hợp lệ. Mật khẩu cần có ít nhất 8 ký tự, bao gồm chữ cái viết thường, chữ cái viết hoa và số.');
        return false;
    }

    if (name === '' || phone === '' || email === '' || password === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return false;
    }

    var registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
    if (registeredEmails.includes(email)) {
        alert('Email này đã được đăng ký. Vui lòng sử dụng email khác.');
        return false;
    } else {
        registeredEmails.push(email);
        localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
    }

    var userInfo = {
        name: name,
        phone: phone,
        email: email,
        password: password
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert('Đăng ký thành công!');
    openSignIn();
    openSignUpButton.addEventListener("click", openSignUp, false);
    openSignInButton.addEventListener("click", openSignIn, false);
    return false; 
}

function displayError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    var errorMessages = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = '';
    }
}

function login() {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        var email = document.getElementById('email2').value.trim();
        var password = document.getElementById('password2').value.trim();
        if (email === userInfo.email && password === userInfo.password) {
            alert('Đăng nhập thành công !');
            window.location.href = "../trangchu.html";
            return false;
        } else {
            alert('Sai tài khoản hoặc mật khẩu!');
            resetForm();
            return false;
        }
    } else {
        alert('No user registered yet!');
        return false;
    }
}
