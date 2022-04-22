const btn = document.querySelectorAll("#Mua_intel-E5-2673")
    // console.log(btn)
       btn.forEach(function (button,index) {
            // console.log(button,index)
             button.addEventListener("click",function (event) {
                 var btnitem = event.target
                 var product = btnitem.parentElement
                //  console.log(product)
                 var productimg = product.querySelector("#imga").src
                //  console.log(productimg)
                 var productName = product.querySelector("#tenn").innerText
                //  console.log(productName)
                 var productGia = product.querySelector("#gia").innerText
                //  console.log(productGia)
                 addcart(productGia,productimg,productName)
             })
       })
         function addcart(productGia,productimg,productName) {
           var addtr = document.createElement("tr")
           var trcontent = ' <tr><td style="display: flex; align-items: center;"><img src="'+productimg+'" width="70px">'+productName+'</td><td><span>'+productGia+'</span></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;">Xóa</td></tr>'
           addtr.innerHTML = trcontent
           var carttable = document.querySelector("tbody")
           carttable.append(addtr)
           carttotal()
       }
       function carttotal() {
         var totalc = 0
         var cartItem = document.querySelectorAll("tbody tr")
        //  console.log(cartItem)
        for(var i=0;i<cartItem.length;i++){
          var inputt = cartItem[i].querySelector("input").value
          console.log(inputt)
          var producval = cartItem[i].querySelector("H3").innerHTML
          console.log(producval)
          tongtien = inputt*producval
          tongtienb = tongtien.toLocaleString('de-DE')
          console.log(tongtienb)
          totalc = totalc+tongtien
        }
        var cartotalA = document.querySelector(".tongtien")
        cartotalA.innerHTML = totalc
       }