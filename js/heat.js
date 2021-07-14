let mensaje =
'<font size="6" face="Courier New" color="#fff">Những lá thư chưa gửi....<br></font>' + ' <br>' +

'<font color="#fff" size="4">Những lúc rảnh rỗi anh thường giành thời gian để vào trang cá nhân của em..chỉ là muôn biết những ngày trôi qua em như thế nào. Đôi lúc đọc những dòng chia sẽ, những cảm nghĩ của em, những lúc em buôn, thất vọng, suy sụp..tưởng chừng anh có thể bất chấp "cái tôi" của anh để mạnh dạn click vào 1 lời bình luận,1 chia sẽ,1 lời khuyên đến em, động viên em..hay ít ra anh có thể làm điều gì đó để em cười... nhưng anh đả ko làm như thế...anh hiểu mình nên làm gì...chỉ có thể im lặng và quan sát em thôi!! </font><br>' +

'<br>    ' +

'<font size="4" color="#fff">Chúng ta ko nói chuyên với nhau cũng lâu rồi em nhỉ?? thế nhưng khi đọc đc những cập nhật của em..anh thấy buồn. ko hiểu sao lại như thế này..lòng anh co bóp và quặn đau như thế này.. Đọc những chia sẽ của em..anh thấy em đang vui lắm. trang cá nhân của em dạo này tràn ngập mùa xuân rộn ràng...  .</font><br>' +

'<br>' +

'<font size="4" color="#fff">Thấy em vui và hạnh phúc, anh có thể cười mản nguyện rồi...giờ anh chỉ muốn co tròn trong cái mùa đông lạnh giá của anh. anh thích như thế!   </font>  <br> <br>           ' +

'  <font size="4" color="#fff"> Anh luôn đứng nhìn em từ phía sau..mạnh dạn bước đi em nhé. tuy bên cạnh em, sánh bước cùng em ko phải là anh..thì anh vẫn luôn là người đi phía sau em, dõi theo em..và luôn cầu nguyện cho em.! hy vọng sẽ có 1 thiên thần thay anh yêu em...! </font>' +
'                    <br>' +

'<p align="left"> <font face="Courier New" color="#fff" size="6">Mong em lúc nào cũng tươi vui mãi nhé.!! </font></p>';
    line = 0;
    cursor = '_';
    function teclear() {
        if (line == mensaje.length) cursor ='';
        document.getElementById('tinnhan3').innerHTML = mensaje.substring(0, line) + cursor;
        var objDiv = document.getElementById("tinnhan3");
        objDiv.scrollTop = objDiv.scrollHeight;
        if (line++ < mensaje.length) {setTimeout("teclear()", 60);}
    }