window.onload=function(){
	// console.log("hello world");
	var shop=document.querySelector(".shop"),  //整个购物车
	    checkAll=shop.querySelector(".checkAll"),  //全选框
	    check=shop.querySelectorAll(".check"),   //所有单选框
	    len=check.length,   
      index=0;
      // 全选与反选
      checkAll.onclick=function(){
      	// for(var i=0;i<len;i++){
       //    if(checkAll.checked){
       //      check[i].checked=true;
       //    }else{
       //      check[i].checked=false;
       //    }
       //  }
       //  paymentMoney();
       for(var i=0;i<len;i++){
        if(check[i].getAttribute("check")=="yes"){
          check[i].setAttribute("check", "no");
        }else{
          check[i].setAttribute("check", "yes");
        }
        if(checkAll.checked){
          check[i].checked=true;
        }else{
          check[i].checked=false;
        }
       }
       paymentMoney();
      }
        // 单选框影响全选框  
        for(var i=0;i<len;i++){
        	// check[i].onclick=function(){
        	// 	if(this.checked){
        	// 		index++;
         //      if(index==len){
         //        checkAll.checked=true;
         //        }
        	// 		}else {                  
         //      index--;
         //      checkAll.checked=false;
         //    }
         check[i].setAttribute("check", "yes");
         check[i].onclick=function(){
          if(this.getAttribute("check")=="yes"){
            this.setAttribute("check", "no");
          }else{
            this.setAttribute("check", "yes");
          }
          var arr=[];
          for(var i=0;i<len;i++){
            arr.push(check[i].getAttribute("check"));
          }
          if(arr.indexOf("no")==-1){
            checkAll.checked=true;
          }else{
            checkAll.checked=false;
          }
          paymentMoney();
         }
        }
        		
    // 单行商品金额计算  重复代码较多
    var shopItem=document.querySelectorAll('.shop-item'),   //单行商品
        shopAccounts=document.querySelector('.shop-accounts-money'),  //应付总金额 
        unitPrice=document.querySelectorAll('.unitPrice-money'), //单价
        countPrice=document.querySelectorAll('.countPrice'), //总价
        amount=document.querySelectorAll('.amount'),  //数量
        add=document.querySelectorAll('.add'),   //加法按钮
        subtract=document.querySelectorAll('.subtract'); //减法按钮
         
        // 点击加减按钮，增减商品数量，计算单行商品总价   重复代码较多
        for(var a=0;a<len;a++){
          add[a].title=a;
          add[a].onclick=function(){
            index=this.title;
            amount[index].value=parseInt(amount[index].value)+1;
            countPrice[index].innerHTML=parseInt(unitPrice[index].innerHTML)*parseInt(amount[index].value);
            paymentMoney();
          }
          subtract[a].title=a;
          subtract[a].onclick=function(){
            index=this.title;
            if(amount[index].value == 1){
                    amount[index].value = 1;
                }else{
            amount[index].value = parseInt(amount[index].value)-1;
                }
            countPrice[index].innerHTML=parseInt(unitPrice[index].innerHTML)*parseInt(amount[index].value);
            paymentMoney();
          }
          amount[a].title=a;
          amount[a].onblur=function(){
            index=this.title;
            countPrice[index].innerHTML=parseInt(unitPrice[index].innerHTML)*parseInt(amount[index].value);
            paymentMoney();
          }
        }

     // 应付总金额计算   
        function paymentMoney(){
          var num=0;
        	for(var m=0;m<len;m++){
            if(check[m].checked){
               num+= +countPrice[m].innerHTML;
            }
          }
          shopAccounts.innerHTML=num;
        };


       // 微信二维码显示 利用立即执行函数，下同
        (function(){
        	var weChat=document.querySelector(".footer-icon-weixin"),
        	    codePic=document.querySelector(".footer-icon-weixin_QRcode");
            	weChat.onmouseover=function(){
            		codePic.style.display="block";
            	};
            	weChat.onmouseout=function(){
            		codePic.style.display="none";
            	}    
        })();
       // 搜索框显示
       (function(){
          var seek=document.querySelector(".seek-txt"),
              placeholder=document.querySelector(".placeholder");
              seek.onfocus=function(){
              	placeholder.style.display="none";
              };
              seek.onblur=function(){
                placeholder.style.display="block";
              };
       })();
    }
