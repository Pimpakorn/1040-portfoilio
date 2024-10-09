window.onload = pageLoad;

function pageLoad() {
    var xhr = new XMLHttpRequest(); // เรียก XMLHttpRequest object
    xhr.open("GET", "cloth.json", true); // เปิดไฟล์ JSON
    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText); // แปลงข้อมูล JSON
            showData(data); // ส่งข้อมูลไปยัง showData
        }
    };
    xhr.send(); // ส่งคำขอ
}

function showData(data) {
    var container = document.getElementById("layer"); // หา div ที่จะใส่ข้อมูล
    var divs = container.getElementsByTagName("div"); // หา div ทั้งหมดใน layer

    var keys = Object.keys(data); // ดึง key ของ data เช่น top1, top2

    for (var i = 0; i < keys.length; i++) {
        var product = data[keys[i]]; // ดึงข้อมูลแต่ละรายการจาก JSON

        // แสดงชื่อสินค้าและราคาใน div
        divs[i].innerHTML = '<img src="' + product.pic + '" width="150" height="200">'  +
                            '<h3>' + product.brandname + '</h3>' +
                            '<p>Price: ' + product.price + ' Baht</p>';
    }
}

