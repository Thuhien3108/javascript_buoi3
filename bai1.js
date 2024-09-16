var id = 0;
var grandTotal = 0;

function add() {
    id++;

    var producname = document.getElementById("pd").value;
    var producquality = document.getElementById("pp").value;
    var producprice = document.getElementById("pq").value;

    var subtotal = producprice * producquality;

    grandTotal += subtotal; // Cập nhật tổng cộng
    var formattedGrandTotal = '$' + grandTotal.toFixed(2);


    var table = document.getElementById("tb");
    var totalRowIndex = table.rows.length - 1; // Lấy chỉ số của hàng tổng cộng
    var newRow = table.insertRow(totalRowIndex); // Thêm hàng mới trước hàng tổng cộng


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = producname;
    cell3.innerHTML = producquality;
    cell4.innerHTML = producprice;
    cell5.innerHTML = '$' + subtotal.toFixed(2);

    // Cập nhật tổng cộng
    document.getElementById("grand-total").innerHTML = formattedGrandTotal;


    document.getElementById("pd").value = "";
    document.getElementById("pp").value = "";
    document.getElementById("pq").value = "";
}