//G:手牌+上がり牌のみの上がりパターン G={(55,111,222,333,444),(55,123,123,123,444)...}
//agari:（手牌+上がり牌）+鳴牌+アンカン牌の上がり型区切り agari=(55,111,222,333,444)
//zenhai:agariの牌個別区切り =(11,11,11,12,12,12,13,13,13,14,14,14,15,15)
//A:上がり牌 A=5
//NAKI:鳴き牌 NAKI=(333,444)
//ANKAN:アンカン牌 ANKAN=(5555,6666)
//anko_check:手牌と上がり牌とアンカン(55,111,2222)
//萬11～19、筒21～29、索31～39、風41・43・45・47、字51・53・55

//手配配列 Array [ "11", "12", "13", "27", "28", "29", "33", "34", "35", "36", … ]
S=new Array()
S_copy=new Array()
//選択済み手配連想配列
rS=new Array()
//鳴き牌連想配列
rNAKI=new Array()
//上がり牌（一牌）配列
A=new Array()
A_copy=new Array()
//鳴き牌配列
NAKI=new Array()
//暗槓配列
ANKAN=new Array()
G=new Array()
touchid=""
//touchstartした時のY座標と、touchmoveした時のY座標
startY=""
endY=""
//全牌選択モードで、タッチ開始した牌画像のsrc(./img2/???.png)を保存する
startObj=""
//全牌選択モードで、タッチ移動した牌画像のsrc(./img2/???.png)を保存する
endObj=""


//タッチデバイスかどうか確認する
isTouch = ('ontouchstart' in window)

//空のfuncを用意しておく？
function touch_start(e) {
}

function touch_move(e) {
}

function touch_end(e) {
}

//touchendした時に座標をチェックして関数を実行するfunc
function touchend_check(script){
    if(Math.abs(startY-endY)<5){
        eval(script)
    }
}


function update_info(text){
    $("#footer").text(text)
    setTimeout($("#footer").text(""),1000)
}

//クイズモードで解答欄をクリックした時に実行するfunc
function quiz_ans_click(num){
  $('#quiz_ans'+num).val(''),scroll('quiz_test'),select_box(num)
}



$(function(){
  
  //タッチデバイス用　タッチした点を記憶する
  $('.button').on({'touchstart': function(e) {
    //e.preventDefault();　←いらない
    if(isTouch==true){
      startY=e.originalEvent.touches[ 0 ].pageY
      //tdをタッチした時、imgに指が触れていればelementFromPointがimgを指し示すので、直接srcを取得する
      startObj=$(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).attr("src")
      //tdをタッチした時、imgに指が触れていなければelementFromPointがtdを指し示すので、findしてimgのsrcを取得する
      if(startObj){}else{
        startObj=$(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).find("img").attr("src")
      }
    }
    else{startY=""}
    endY = startY
    endObj = startObj
  }
  })
  
  //タッチデバイス用　タッチが移動した点を記憶する
  $('.button').on({'touchmove': function(e) {
    //e.preventDefault();
    endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
    endObj=(isTouch ? $(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).attr("src") : "")
    if(endObj){}else{
      endObj=$(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).find("img").attr("src")
    }
  }
  })
  
  //ゲームモードの.button以外で、クリックした時にアニメーションするfunc
  $('.button:not("#gamemenudiv li")').on({'touchend mouseup': function(e) {
    if(Math.abs(startY-endY)<5){
      if($(this).parent().parent().attr("id")!="selecthaidiv"){
        if($(this).css("transform")=="none"){
          bordercss="1px solid gray"
        }
        else{
          $(this).velocity("stop")
        }
        $(this).css({"border":"1px solid blue"})
        .velocity({translateY: "-5px"},{duration: 0})
        .velocity({translateY: "10px"},{duration: 60})
        .velocity({translateY: "0px"},{duration: 300,complete: function(){$(this).css({"border":bordercss})}})
      }
    }
  }
  })

  
  $('.hai_all td').on({'touchstart': function(e) {
                      
    if(isTouch==true){
      startY=e.originalEvent.touches[ 0 ].pageY
      //tdをタッチした時、imgに指が触れていればelementFromPointがimgを指し示すので、直接srcを取得する
      startObj=$(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).attr("src")
      //tdをタッチした時、imgに指が触れていなければelementFromPointがtdを指し示すので、findしてimgのsrcを取得する
      if(startObj){}else{
        startObj=$(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).find("img").attr("src")
      }
      //$(this).css({"background":"-webkit-radial-gradient(center, ellipse cover, #d2ff52 0%,#91e842 100%)"})
      $(this).children().css({"border":"1px solid blue"})
    }
    else{startY=""}
    endY = startY
    endObj = startObj
    }
  })
  
  $('.hai_all td').on({'touchmove': function(e) {
    
    endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
    endObj=(isTouch? $(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).attr("src") : "")
    if(endObj){}else{
      endObj=$(document.elementFromPoint(e.originalEvent.touches[ 0 ].pageX, e.originalEvent.touches[ 0 ].pageY)).find("img").attr("src")
      //if(startObj!=endObj){
        //$('.hai_all td').css("background","")
        $('.hai_all img').css("border","1px solid #eee")
      //}
    }
    }
  })
  
  $('.hai_all td').on({'touchend mouseup': function(e) {
    $('.hai_all img').css("border","1px solid #eee")
    if(Math.abs(startY-endY)<10 && startObj == endObj){
                      
      //$(this).css({"background":""})
      $('.hai_all img').css("border","1px solid #eee")
      if($(this).css("transform")=="none"){
        backgroundcss=$(this).css("background-color")
      }
      //$(this).css({"border":"1px solid blue"})
      //$(this).css({"background-color":"blue"})
      $(this).css({"background":"-webkit-radial-gradient(center, ellipse cover, #527cff 0%,#4642e8 100%)"})
      .transition({
        //perspective: '100px',
        //rotateX: '180deg',
        //opacity:0,
        //y:0,
        duration:50
        //easing:"snap",
        //easing:"linear",
        //complete:function(){$(this).css({"transform":"none","transition":"none","opacity":"1"})}
        //complete:function(){$(this).css({"opacity":"1"})}
      })
      .transition({
        //y:0,
        duration:50,
        //complete:function(){$(this).css({"border":bordercss})}
        //complete:function(){$(this).css({"background-color":backgroundcss})}
        complete:function(){$(this).css({"background":backgroundcss})}
      })
      
    }
  }
  })
  $('#j,#m,#p,#s').on({'touchend mouseup': function(e) {
    if(startY==endY || Math.abs(startY-endY)<5){
      $('.haidiv')
      .transition({
        y:-5,
        duration:100
      })
      .transition({
        y:0,duration:100
      })
      $(this)
      .transition({
        y:5,
        duration:100
      })
      .transition({
        y:0,duration:100
      })
    }
  }
  })
  $('#erase1,#eraseall').on({'touchend mouseup': function(e) {
    if(startY==endY || Math.abs(startY-endY)<5){
      $(this)
      .transition({
        y:5,
        duration:100
      })
      .transition({
        y:0,duration:100
      })
    }
  }
  })
  $('#gamemenudiv li').on({'touchend mouseup': function(e) {
    if(startY==endY || Math.abs(startY-endY)<5){
      $(this)
      .transition({
        y:12,
        duration:130
      })
      .transition({
        y:0,duration:100
      })
    }
  }
  })
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
    $('.button').off("mouseup")
    $('.hai_all td').off("mouseup")
    $('#j,#m,#p,#s').off("mouseup")
    $('#erase1,#eraseall').off("mouseup")
  }
})

//ドラだけ自動で再計算されるのもおかしいので
/*
$(function(){
  $("#dora").on({"change": function(e) {
    agari_rekkyo();
    tensu();
    check_reach2();
  }})
})
*/




function scroll(id){
  $('#hai_naki').css("height", $('#hai_tehai').height())
  if(window.navigator.standalone || $("#"+id).offset() == void 0) {
    return
  }
  else {
    $('body').animate({scrollTop:$("#"+id).offset().top - 2},0,"swing")
  }
}


function select_hai_now(id,str) {
  $('.haidiv').hide(),$('#'+str).show()
  $('#selecthaidiv li').css('border','1px solid gray')
  $('#'+id).css('border','1px solid red')
}



function select_menu_now(id,str) {
  if(startY==endY || Math.abs(startY-endY)<5){
    //なんでこれいるの？
    //startY=""
    $("#menu_select").text(str)
    $("#selectmenudiv li:not('.calc')").css("background", "")
    if(str=="select"){
        
        $("#"+id).css("background", "Palegreen")
    }else{
        $("#"+id).css("background", "#fb98fb")
    }
          if($("#"+id).css("transform")=="none"){
              bordercss="1px solid gray"
          }
          /*
          if($("#"+id).css("transform")=="none"){
            bordercss="1px solid gray"
          }
          else{
            $("#"+id).velocity("stop")
          }
          $("#"+id).css({"border":"1px solid blue"})
          .velocity({translateY: "-5px"},{duration: 0})
          .velocity({translateY: "10px"},{duration: 60})
          .velocity({translateY: "0px"},{duration: 300,complete: function(){$(this).css({"border":bordercss})}})
          */
      
    if(str=="select"){
      $("#"+"naki"+(parseInt($("#"+"naki"+"_count").html())+1)).parents("td").css("border-bottom","none")
        rNAKI_count=0
        for(var j in rNAKI){
          rNAKI_count=rNAKI_count+1
        }
        /*
        $("#agari").parents("td").css("border-bottom","2px solid red")
        count=$("#select_count").text()*1
        $("#select_count").html(13)
        for(i=1;i+count<14;i++){
          if(rNAKI[parseInt(count+i)]==null){
            $("#select_count").html(parseInt(count+i-1))
            $("#agari").parents("td").css("border-bottom","none")
            $("#select"+(count+i)).parents("td").css("border-bottom","2px solid red")            
            break
          }
        }
        */
        $("#agari").parents("td").css("border-bottom","2px solid red")
        $("#"+"select"+(parseInt($("#"+"select"+"_count").html())+1)).parents("td").css("border-bottom","none")
        $("#select_count").html(13)
        for(i=0;i<13;i++){
            if(rNAKI[parseInt(i)]==null && rS[parseInt(i)]==null){
                $("#select_count").html(parseInt(i))
                $("#agari").parents("td").css("border-bottom","none")
                $("#select"+(i+1)).parents("td").css("border-bottom","2px solid red")
                break
            }
        }
        
      /*
      $("#agari").parents("td").css("border-bottom","none")
      if(parseInt($("#select_count").html())+parseInt($("#"+"naki"+"_count").html())==13){        
        $("#agari").parents("td").css("border-bottom","2px solid red")
      }
      else{
        $("#"+"select"+(parseInt($("#"+"select"+"_count").html())+1)).parents("td").css("border-bottom","2px solid red")
      }
      */
    }
    else if(str=="agari"){
      $("#"+"naki"+(parseInt($("#"+"naki"+"_count").html())+1)).parents("td").css("border-bottom","none")
      $("#"+"select"+(parseInt($("#"+"select"+"_count").html())+1)).parents("td").css("border-bottom","none")
      $("#agari").parents("td").css("border-bottom","2px solid red")
    }
    else{
      //if(parseInt($("#"+"select"+"_count").html())+parseInt($("#"+"naki"+"_count").html())<10){
        $("#"+"select"+(parseInt($("#"+"select"+"_count").html())+1)).parents("td").css("border-bottom","none")
        $("#agari").parents("td").css("border-bottom","none")
        $("#"+"naki"+(parseInt($("#"+"naki"+"_count").html())+1)).parents("td").css({"border-bottom":"2px solid red"})
        if(NAKI==""){
            $("#"+"naki"+(parseInt($("#naki_count").html())+1)).html('<br>')
        }
      //}

    }
  }
}
/*
$(function () {
  $("#selectmenudiv li").bind("touchend", function () {
    alert(startY+","+endY)
    if (startY == endY) {
      startY = ""
      $("#selectmenudiv li").css("background", "")
      $(this).css("background", "Palegreen")
      alert("t")
    }
  });
});

$(function () {
  $("#selectmenudiv li").bind("mouseup", function () {
    if (endY == '') {
      $("#selectmenudiv li").css("background", "")
      $(this).css("background", "Palegreen")
      alert("m")
    }
  });
});
*/

$(function(){
  $("#hai_tehai td").on({'touchstart': function(e) {
    if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
    else{startY=""}
    endY = startY
  }
  })
  $("#hai_tehai td").on({'touchmove': function(e) {
    endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
  }
  })
  $("#hai_tehai td").on({'touchend mouseup': function(e) {
    if(startY==endY || Math.abs(startY-endY)<5){
      $("#naki"+($("#naki_count").text()*1+1)).parents("td").css("border-bottom","none")
      $("#selectmenudiv li:not('.calc')").css("background", "")
      $("#menu1").css("background", "Palegreen")
      if($(this).children("img").attr("id")=="agari"){
        $("#menu_select").text("select")
        $("#select_count").text("13")
      }
      else{
        $("#menu_select").text("select") 
        $("#select_count").text($(this).children("img").attr("id").replace(/select/g,"")-1)
      }
      $("#hai_tehai td").css("border-bottom","none")
      $(this).css("border-bottom","2px solid red")
    }
  }
  })
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
    $("#hai_tehai td").off("mouseup")
  }
})


function ri_hai(){
    //alert("S"+S)
    //alert("rS.length"+rS.length)
    //alert("rS"+rS)
    //alert("rNAKI"+rNAKI)
    //console.log(S)
    //console.log(rS)
    
    //rSは[11,12,13,,,,,,21,22]みたいな配列だからsortすると,,,,が全部後ろに行ってしまう
    ////rS.sort()
    //alert(rS.length)
    S.sort()
    //alert(S)
    //Sのsort結果を見て、rSがnullならnullをpushして、値が入っていたらsortしたSの順番に値をpushする
    Snoi=0
    //sortしたrSになる配列
    rS_sort=new Array
    for(i=0;i<rS.length;i++){
        //ここ・・・""じゃなくてnulにしておけばいいのかな？
        if(rS[i]==null){
            rS_sort.push(null)
        }
        else{
            rS_sort.push(S[Snoi])
            Snoi=Snoi+1
        }
    }
    
    //配列をコピーする　rSをrS_sortにする
    rS=rS_sort.slice(0)
    //alert("rS"+rS)
    rS_text=""
    count=1
    for(i=1;i<rS.length+1;i++){
        $("#"+"select"+count).attr("src","./img/1j9.png")//.parents("td").css("border-bottom","none")
        count=count+1
    }
    count=1
    for(var j in rS){
        rS_text=rS_text+haimap2[rS[j]]
        if(rS[j]!=null){
            $("#"+"select"+count).attr("src","./img2/"+haimap2[rS[j]]+".png")//.parents("td").css("border-bottom","none")
        }
        count=count+1
    }
    
    //animation
    /*
    $("#select1").transition({y:0,duration:0}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select2").transition({y:0,duration:10}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select3").transition({y:0,duration:20}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select4").transition({y:0,duration:30}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select5").transition({y:0,duration:40}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select6").transition({y:0,duration:50}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select7").transition({y:0,duration:60}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select8").transition({y:0,duration:70}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select9").transition({y:0,duration:80}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select10").transition({y:0,duration:90}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select11").transition({y:0,duration:100}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select12").transition({y:0,duration:110}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    $("#select13").transition({y:0,duration:120}).transition({y:-8,duration:100}).transition({y:0,duration:100})
    */
    
    /*
    $("#select1").velocity({translateY: "0px"},{duration: 0}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select2").velocity({translateY: "0px"},{duration: 60}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select3").velocity({translateY: "0px"},{duration: 120}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select4").velocity({translateY: "0px"},{duration: 180}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select5").velocity({translateY: "0px"},{duration: 240}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select6").velocity({translateY: "0px"},{duration: 300}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select7").velocity({translateY: "0px"},{duration: 360}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select8").velocity({translateY: "0px"},{duration: 420}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select9").velocity({translateY: "0px"},{duration: 480}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select10").velocity({translateY: "0px"},{duration: 540}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select11").velocity({translateY: "0px"},{duration: 600}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select12").velocity({translateY: "0px"},{duration: 660}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select13").velocity({translateY: "0px"},{duration: 720}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    
    $("#agari").velocity({translateY: "0px"},{duration: 920}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    */

    $("#select1").velocity({translateY: "0px"},{duration: 0}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select2").velocity({translateY: "0px"},{duration: 10}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select3").velocity({translateY: "0px"},{duration: 75}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select4").velocity({translateY: "0px"},{duration: 140}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select5").velocity({translateY: "0px"},{duration: 215}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select6").velocity({translateY: "0px"},{duration: 270}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select7").velocity({translateY: "0px"},{duration: 335}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select8").velocity({translateY: "0px"},{duration: 400}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select9").velocity({translateY: "0px"},{duration: 490}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select10").velocity({translateY: "0px"},{duration: 535}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select11").velocity({translateY: "0px"},{duration: 595}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select12").velocity({translateY: "0px"},{duration: 660}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    $("#select13").velocity({translateY: "0px"},{duration: 720}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})
    
    $("#agari").velocity({translateY: "0px"},{duration: 920}).velocity({translateY: "-10px"},{duration: 60}).velocity({translateY: "0px"},{duration: 300})

    
}

function select_hai_touchstart(name,n){
    if($("#menu_select").text()==="select"){
        on="select"
        off="naki"
        count=parseInt($("#"+on+"_count").html())
        if(count==13){
            $("#agari").attr("src","./img2/"+name+".png")
        }
        else{
            $("#select"+n).attr("src","./img2/"+name+".png")
        }
    }
}

function select_hai(name,n){
  if(Math.abs(startY-endY)<10 && startObj == endObj){
  //if(startObj == endObj){
    //今手牌が何枚あるか
    //今鳴き牌が何牌分あるか
    //次に入力したい牌はどこか

    //select or nakiのどちらか
    if($("#menu_select").text()==="select"){
      on="select"
      off="naki"
      //メモしていた牌番号を呼び出す
      count=parseInt($("#"+on+"_count").html())
      if(count==13){
        $("#hai_tehai").find("td").css("background-color","")
        $("#agari").parents("td").css({"background-color":"green"})
        if($("#agari").css("transform")!="none"){
          //$("#agari").velocity("stop")
        }
        $("#agari")
          .transition({}).stop()
        $("#agari")
          .transition({
                      y:12,
                      duration:60
                      })
          .transition({
                      y:0,duration:120
                      }, function(){
                      $("#agari").parents("td").css("background-color","")
                      })
          /*
          .velocity({
                    translateY: "10px"
                    },
                    {
                    duration: 60,
                    complete: function(){
                    $("#agari").parents("td").css("background-color","")
                    }
                    })
          .velocity({
                    translateY: "0px"
                    },
                    {
                    
                    })
           */
        $("#agari").attr("src","./img2/"+name+".png").parents("td").css("border-bottom","2px solid red")
        A=new Array(n)
      }
      else{
        //牌番号countは0始まりだけど牌画像のTDは1始まりなので・・・
        count=count+1
        //選択した牌を更新する
        //anime_dd=new Date().getMilliseconds()
        //eval("var anime_id" + anime_dd + "=" + on+count);
          
        anime_id=on+count
          
        //$("#"+anime_id).attr("src","./img/1j9.png")
        $("#hai_tehai").find("td").css("background-color","")
          
        $("#"+anime_id).parents("td").css({"border-bottom":"none","background-color":"green"})
        
        $("#"+anime_id)
          
          .transition({
                      y:12,
                      duration:60
                      })
          .transition({
                      y:0,duration:120
                      }, function(){
                      $("#"+anime_id).parents("td").css("background-color","")
                      })
          
          /*
          .velocity({
                    translateY: "10px"
                    },
                    {
                    duration: 60,
                    complete: function(){
                    $("#"+anime_id).parents("td").css("background-color","")
                    }
                    })
          .velocity({
                    translateY: "0px"
                    },
                    {
                    duration:120
                    })
          */
        $("#"+anime_id).attr("src","./img2/"+name+".png")
        //$("#"+anime_id).attr("src","./img2/"+name+".png")
        //選択済み手牌連想配列rSと手牌配列Sを更新する
        rS[count-1]=n
        S=new Array()
        for(var j in rS){
            if(rS[j]!=null){
                S.push(rS[j])
            }
        }
        rNAKI_count=0
        for(var j in rNAKI){
        rNAKI_count=rNAKI_count+1
        } 
        $("#agari").parents("td").css("border-bottom","2px solid red")
        $("#select_count").html(13)
        for(i=1;i+count<14;i++){
          if(rNAKI[parseInt(count+i-1)]==null || rNAKI[parseInt(count+i-1)]=="undefined"){
            $("#select_count").html(parseInt(count+i-1))
            $("#agari").parents("td").css("border-bottom","none")
            $("#select"+(count+i)).parents("td").css("border-bottom","2px solid red")            
            break
          }
        }
        
        //S.push(n)
        h_test()
      }
    }
  else if($("#menu_select").text()==="chi" && parseInt(name.substring(2,3))<8 && name.substring(1,2)!="j"){
      on="naki"
      off="select"
      //牌番号をカウントする
      count=parseInt($("#"+on+"_count").html())
      if((count+S.length)*1<11){
          $("#"+on+(count*1+1)).parents("td").css("border-style","none")
          count=count+1

          $("#"+on+count).html('<img src="./img2/'+2+name.substring(1,3)+'.png" style="width:100%;">')
          .parents("td").css("width","8%")
          $("#"+on+(parseInt(count)+1)).html('<img src="./img2/'+name.substring(0,2)+(parseInt(name.substring(2,3))+1)+'.png" style="width:100%;">')
          .parents("td").css("width","6%")
          $("#"+on+(parseInt(count)+2)).html('<img src="./img2/'+name.substring(0,2)+(parseInt(name.substring(2,3))+2)+'.png" style="width:100%;">')
          .parents("td").css("width","6%")
          NAKI.push(n+(n*1+1).toString()+(n*1+2).toString())

          naki_count=0
      
          for(i=0;i<13;i++){
              if(rS[parseInt(12-i)]==null && rNAKI[parseInt(12-i)]==null){
                  $("#"+off+(13-i)).parents("td").attr("src","./img/none.png").css("border-style","none").hide()
                  rNAKI[parseInt(12-i)]="c"
                  naki_count=naki_count+1
                  if(naki_count>2){break}
              }
          }
          count=count+2
      }
    }

  else if($("#menu_select").text()==="pon"){
      on="naki"
      off="select"
      //牌番号をカウントする
      count=parseInt($("#"+on+"_count").html())
      if((count+S.length)*1<11){
          $("#"+on+(count*1+1)).parents("td").css("border-style","none")
          count=count+1

          $("#"+on+count).html('<img src="./img2/'+name+'.png" style="width:100%;">')
          .parents("td").css("width","6%")
          $("#"+on+(parseInt(count)+1)).html('<img src="./img2/'+2+name.substring(1,3)+'.png" style="width:100%;">')
          .parents("td").css("width","8%")
          $("#"+on+(parseInt(count)+2)).html('<img src="./img2/'+name+'.png" style="width:100%;">')
          .parents("td").css("width","6%")
          NAKI.push(n+n+n)

          naki_count=0
          for(i=0;i<13;i++){
              if(rS[parseInt(12-i)]==null && rNAKI[parseInt(12-i)]==null){
                  $("#"+off+(13-i)).parents("td").attr("src","./img/none.png").css("border-style","none").hide()
                  rNAKI[parseInt(12-i)]="c"
                  naki_count=naki_count+1
                  if(naki_count>2){break}
              }
          }
          count=count+2
      }
  }

  else if($("#menu_select").text()==="ankan"){
      on="naki"
      off="select"
      //牌番号をカウントする
      count=parseInt($("#"+on+"_count").html())
      if((count+S.length)*1<11){
          $("#"+on+(count*1+1)).parents("td").css("border-style","none")
          count=count+1
          $("#"+on+count).html('<img src="./img/1j9.png" style="width:100%;">')
          .parents("td").css("width","6%")
          $("#"+on+(parseInt(count)+1)).html('<img src="./img2/'+name+'.png" style="width:50%;"><img src="./img2/'+name+'.png" style="width:50%;">')
          .parents("td").css("width","12%")
          $("#"+on+(parseInt(count)+2)).html('<img src="./img/1j9.png" style="width:100%;">')
          .parents("td").css("width","6%")
          ANKAN.push(n+n+n+n)

          naki_count=0
          for(i=0;i<13;i++){
              if(rS[parseInt(12-i)]==null && rNAKI[parseInt(12-i)]==null){
                  $("#"+off+(13-i)).parents("td").attr("src","./img/none.png").css("border-style","none").hide()
                  rNAKI[parseInt(12-i)]="c"
                  naki_count=naki_count+1
                  if(naki_count>2){break}
              }
          }
          count=count+2
      }
  }

  else if($("#menu_select").text()==="minkan"){
      on="naki"
      off="select"
      //牌番号をカウントする
      count=parseInt($("#"+on+"_count").html())
      //styleで減らす分を計算する
      minus=($("#"+on+"_count").html()-1)*0

      if((count+S.length)*1<11){
          $("#"+on+(count*1+1)).parents("td").css("border-style","none")
          count=count+1

          $("#"+on+count).html('<img src="./img2/'+name+'.png" style="width:100%;">')
          .parents("td").css("width","6%")
          $("#"+on+(parseInt(count)+1)).html('<img src="./img2/'+name+'.png" style="width:50%;"><img src="./img2/'+name+'.png" style="width:50%;">')
          .parents("td").css("width","12%")
          $("#"+on+(parseInt(count)+2)).html('<img src="./img2/'+name+'.png" style="width:100%;">')
          .parents("td").css("width","6%")
          NAKI.push(n+n+n+n)

          naki_count=0
          for(i=0;i<13;i++){
              if(rS[parseInt(12-i)]==null && rNAKI[parseInt(12-i)]==null){
                  $("#"+off+(13-i)).parents("td").attr("src","./img/none.png").css("border-style","none").hide()
                  rNAKI[parseInt(12-i)]="c"
                  naki_count=naki_count+1
                  if(naki_count>2){break}
              }
          }
          count=count+2
      }
  }

  if($("#menu_select").text()==="select" || ($("#menu_select").text()==="chi" && (parseInt(name.substring(2,3))>7 || name.substring(1,2)=="j"))){}
  else{
    
    $("#"+on+"_count").html(count)
    /*
    count=parseInt($("#select_count").html())
    rS_count=0
    for(var j in rS){
      rS_count=rS_count+1
    }
    rNAKI_count=0
    for(var j in rNAKI){
      rNAKI_count=rNAKI_count+1
    }
    
        $("#agari").parents("td").css("border-bottom","2px solid red")
        $("#select_count").html(13)
        for(i=1;i+count<14;i++){
          if(rNAKI[parseInt(count+i)]==null){
            $("#select_count").html(parseInt(count+i-1))
            //$("#agari").parents("td").css("border-bottom","none")
            $("#select"+(count+i)).parents("td").css("border-bottom","2px solid red")            
            break
          }
        }
    */
      /*
      $("#agari").parents("td").css("border-bottom","2px solid red")
      $("#select_count").html(13)
      for(i=0;i<13;i++){
          if(rNAKI[parseInt(i)]==null && rS[parseInt(i)]==null){
              $("#select_count").html(parseInt(i))
              $("#agari").parents("td").css("border-bottom","none")
              $("#select"+(i+1)).parents("td").css("border-bottom","2px solid red")
              break
          }
      }
       */
    //手牌選択モードに戻す
    startY=endY
    select_menu_now('menu1','select')

    if($("#menu1").css("transform")=="none"){
      bordercss="1px solid gray"
    }
    else{
      $("#menu1").velocity("stop")
    }
    $("#menu1").css({"border":"1px solid blue"})
    .velocity({translateY: "-5px"},{duration: 0})
    .velocity({translateY: "10px"},{duration: 60})
    .velocity({translateY: "0px"},{duration: 300,complete: function(){$("#menu1").css({"border":bordercss})}})
  }

  shanten_hyoji()
  yukohai()
  yukohai13()
  yuko2_hyoji()


  }
}

function select_erase(){
  if(startY==endY){
    
    //startY=""
    h=$("#menu_select").text()
    //countは0始まり
    count=parseInt($("#"+h+"_count").html())
    if(h=="select"){
      if(count==13){
        //$("#agari").attr("src","./img/1j9.png").parents("td").css("border-bottom","none")
        $("#agari").attr("src","./img/1j9.png")
        A=new Array()
        h_test()
      }
      else{
        $("#"+h+(count+1)).attr("src","./img/1j9.png").parents("td").css("border-bottom","none")
        
        delete rS[parseInt((count)*1)]
        S=new Array()
        for(var j in rS){
            if(rS[j]!=null){
                S.push(rS[j])
            }
        }
        //S.pop()
        h_test()        
      }

      $("#"+h+"_count").html(0)
      $("#"+h+(1)).parents("td").css("border-bottom","2px solid red")
      for(i=0;i<13;i++){
          /* 一個前の牌を選択する方式
          if(rNAKI[parseInt(count-i-1)]==null){
           $("#"+h+"_count").html(Math.max(0,parseInt(count-i-1)))
           $("#"+h+(1)).parents("td").css("border-bottom","none")
           $("#"+h+Math.max(1,(count-i))).parents("td").css("border-bottom","2px solid red")
           break
          }
          */
          if(rNAKI[parseInt(count-i)]==null){
              $("#"+h+"_count").html(Math.max(0,parseInt(count-i)))
              $("#"+h+(1)).parents("td").css("border-bottom","none")
              $("#"+h+Math.max(1,(count-i+1))).parents("td").css("border-bottom","2px solid red")
              break
          }
      }      
    }
    if(h=="pon" || h=="chi" || h=="ankan" || h=="minkan"){
      count=parseInt($("#naki"+"_count").html())
      if(count!==0){
        $("#naki"+(count*1+1)).parents("td").css("border-bottom","none")
        //暗カンの見分け方　ちょっとあやしい・・・
        if($("#naki"+(count-2)).children().attr("src")=="./img/1j9.png"){
          ANKAN.pop()
        }
        else{
          NAKI.pop()
        }
      $("#naki"+count).html("")
      $("#naki"+(count-1)).html("")
      $("#naki"+(count-2)).html("")

      naki_count=0  
      for(i=0;i<13;i++){
        if(rS[parseInt(12-i)]==null && rNAKI[parseInt(12-i)]!=null){
          $("#"+"select"+(13-i)).parents("td").attr("src","./img/1j9.png").show()
          delete rNAKI[parseInt(12-i)]
          naki_count=naki_count+1
          if(naki_count>2){break}
        }
      }

      $("#naki_count").html(count-3)

      }

    //手牌選択モードに戻す
    startY=endY
    select_menu_now('menu1','select')

    if($("#menu1").css("transform")=="none"){
      bordercss="1px solid gray"
    }
    else{
      $("#menu1").velocity("stop")
    }
    $("#menu1").css({"border":"1px solid blue"})
    .velocity({translateY: "-5px"},{duration: 0})
    .velocity({translateY: "10px"},{duration: 60})
    .velocity({translateY: "0px"},{duration: 300,complete: function(){$("#menu1").css({"border":bordercss})}})
        
    }
    shanten_hyoji()
    yukohai()
    yukohai13()
  }
}

function erase_all() {

  //startY=""
  rS=new Array()
  rNAKI=new Array()
  S=new Array()
  A=new Array()
  NAKI=new Array()
  ANKAN=new Array()
  $("#select_count").html(0)
  $("#naki_count").html(0)
  $("#mati_text").html("")
  $("#shanten_text").html("")
  $("#yuko_text").html("")
  $("#yuko_text3").html("")
  $("#yuko_text2").html("")
  $("#hai_tehai td").css({"border-bottom":"none"})
  $("#select1").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").css({"border-bottom":"2px solid red"}).show()
  $("#select2").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select3").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select4").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select5").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select6").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select7").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select8").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select9").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select10").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select11").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select12").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#select13").attr("src","./img/1j9.png").css("border","1px solid #eee").parents("td").show()
  $("#agari").attr("src","./img/1j9.png")
  $("#naki1").html("<br>").parents("td").css("border","none")
  $("#naki2").html("").parents("td").css("border","none")
  $("#naki3").html("").parents("td").css("border","none")
  $("#naki4").html("").parents("td").css("border","none")
  $("#naki5").html("").parents("td").css("border","none")
  $("#naki6").html("").parents("td").css("border","none")
  $("#naki7").html("").parents("td").css("border","none")
  $("#naki8").html("").parents("td").css("border","none")
  $("#naki9").html("").parents("td").css("border","none")
  $("#naki10").html("").parents("td").css("border","none")
  $("#naki11").html("").parents("td").css("border","none")
  $("#naki12").html("").parents("td").css("border","none")
  //$("#naki1").html('<img src="./img/none.png" style="width:100%;border:white;">').parents("td").css("width","6%")

}

function sns() {

  var agent = navigator.userAgent
  if(agent.search(/iPhone/) != -1){
    $('#quiz_input_mode').val("a")
  }
  else if(agent.search(/iPad/) != -1){
    $('#quiz_input_mode').val("a")
  }
  else if(agent.search(/Android/) != -1){
    $('#quiz_input_mode').val("a")
  }

  if (navigator.onLine) {
  }

}

function fukeisan(){


hoge=new Array()

if($("#select_count").html()>0){
for(i=1;i<=parseInt($("#select_count").html());i++){
a=$("#select"+i).html().slice(36,39)
hoge.push(a)
}
}

if($("#naki_count").html()>0){
for(i=1;i<=$("#naki_count").html();i++){
a=$("#select"+i).html().slice(36,39)
hoge.push(a)
}
}

if($("#agari").html()!=""){
a=$("#select"+i).html().slice(36,39)
hoge.push(a)
}

alert(hoge)

//hoge 元ネタ
//all 元ネタコピー
//atama 頭候補
//men 面子候補

atama=new Array()
men=new Array()
all=new Array()

all=hoge


    if(all.indexOf(
         all[0].slice(0,2)
         +(all[0].slice(2,3)+1)
       )>-1&&all.indexOf(
         all[0].slice(0,2)
         +(all[0].slice(2,3)+1)
       ),all.indexOf(
         all[0].slice(0,2)
         +(all[0].slice(2,3)+1)
       )){alert("ok")}

test=
  all[0].slice(0,2)
  +(all[0].slice(2,3)+1)


test1=
all.indexOf(
  all[0].slice(0,2)
  +(parseInt(all[0].slice(2,3))+1)
)
test2=
all.indexOf(
  all[0].slice(0,2)
  +(all[0].slice(2,3)+1)
  ,all.indexOf(
     all[0].slice(0,2)
     +(all[0].slice(2,3)+1)
     )
  )
  
alert(test)
alert(test1)
alert(test2)

}

function superreload() {
  startY=endY
  erase_all()
  $('input[name="oya"]').val(["oya"])
  //$("#oya").val("oya")
  $('input[name="tumo"]').val(["tumo"])
  //$("#tumo").val("tumo")
  $('input[name="bakaze"]').val(["41"])
  //$("#bakaze").val("41")
  $('input[name="jikaze"]').val(["41"])
  //$("#jikaze").val("41")
  $("#dora").val("")
  $("#riti").attr("checked", false )
  $("#driti").attr("checked", false )
  $("#ippatu").attr("checked", false )
  $("#hotei").attr("checked", false )
  $("#haitei").attr("checked", false )
  $("#rinsyan").attr("checked", false )
  $("#tyankan").attr("checked", false )
  $("#tenho").attr("checked", false )
  $("#tiho").attr("checked", false )
  $("#kazoe").val("13")
  //scroll('yaku_list')
  $('body').animate({ scrollTop: 0 }, 300);
  //$('body').velocity("scroll", { duration: 300});
}

function t_bagime(){
  if($("#t_bagime1").attr("class")=="bagime_on" && $("#t_bagime2").attr("class")=="bagime_on" && $("#t_bagime3").attr("class")=="bagime_on" && $("#t_bagime4").attr("class")=="bagime_on"){}
    else{
      rand=""
      do{
        rand=Math.floor(Math.random()*4+1)
      }
      while($("#t_bagime"+rand).attr("class")=="bagime_on")
      $("#t_bagime"+rand).attr("src","./img2/1j"+rand+".png").addClass("bagime_on")
  }
}

function t_bagime_reset(){
  $("#t_bagime1").attr("src","./img/1j9.png").attr("class","")
  $("#t_bagime2").attr("src","./img/1j9.png").attr("class","")
  $("#t_bagime3").attr("src","./img/1j9.png").attr("class","")
  $("#t_bagime4").attr("src","./img/1j9.png").attr("class","")

}

function t_dice(){
  var mt = new MersenneTwister()
  var rand = mt.nextInt(6)
  $("#t_dice1").attr("src","./img2/1p"+(rand+1)+".png")
  /*
  var num = 0
  for(i=0;i<10000;i++){
    var mt = new MersenneTwister()
    var rand = mt.nextInt(6) + 1
    num = num + rand
  }
  console.log(num + "," + num/10000)
  */
  var mt = new MersenneTwister()
  var rand = mt.nextInt(6)
  $("#t_dice2").attr("src","./img2/1p"+(rand+1)+".png")
  /*
  var num = 0
  for(i=0;i<10000;i++){
    var mt = new MersenneTwister()
    var rand = mt.nextInt(6) + 1
    num = num + rand
  }
  console.log(num + "," + num/10000)
  */
}
function t_dice_reset(){
  $("#t_dice1").attr("src","./img/1j9.png")
  $("#t_dice2").attr("src","./img/1j9.png")
}

/*
$(function(){
  $("#badiv input:radio").on({'touchstart': function(e) {
                        if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
                        else{startY=""}
                        endY = startY
                        }
                        })
  $("#badiv input:radio").on({'touchmove': function(e) {
                        endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
                        }
                        })
  $("#badiv input:radio").on({'touchend mouseup': function(e) {
                        if(startY==endY){
                       
                            if ($(this).prop('checked')) {
                                $(this).prop('checked', true);
                            } else {
                                $(this).prop('checked', true);
                            }
                        }
                        }
                        })
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
  $("##badiv input:radio").off("mouseup")
  }
  
})
*/
$(function(){
  $("#badiv td").on({'touchstart': function(e) {
    if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
    else{startY=""}
    endY = startY
  }})
  $("#badiv td").on({'touchmove': function(e) {
    endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
  }})
  $("#badiv td").on({'touchend': function(e) {
    if(startY==endY){
        /*
        if ($("input:radio",this).prop('checked')) {
            $("input:radio",this).prop('checked', true);
        } else {
            $("input:radio",this).prop('checked', true);
        }
        */
                    /*
        if ($(this).prev().prop('checked')) {
            $(this).prev().prop('checked', true);
        } else {
            $(this).prev().prop('checked', true);
        }
                     */
        if ($(this).children("input").prop('checked')) {
            $(this).children("input").prop('checked', true);
        } else {
            $(this).children("input").prop('checked', true);
        }
                    
    }
  }})
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
  $("#badiv td").off("mouseup")
  }
})
  
$(function(){
  $("#badiv input[type='radio']").on({'touchstart': function(e) {
    if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
    else{startY=""}
    endY = startY
  }})
  $("#badiv input[type='radio']").on({'touchmove': function(e) {
    endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
  }})
  $("#badiv input[type='radio']").on({'touchend': function(e) {
    if(startY==endY){
        if ($(this).prop('checked')) {
            $(this).prop('checked', true);
        } else {
            $(this).prop('checked', true);
        }
    }
    }})
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
    $("#badiv input[type='radio']").off("mouseup")
  }
})
  
$(function(){
  $("#yaku_table li").on({'touchstart': function(e) {
                       if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
                       else{startY=""}
                       endY = startY
                       }})
  $("#yaku_table li").on({'touchmove': function(e) {
                       endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
                       }})
  $("#yaku_table li").on({'touchend mouseup': function(e) {
                       if(startY==endY){
                            if ($("input:checkbox",this).prop('checked')) {
                                $("input:checkbox",this).prop('checked', false);
                            } else {
                                $("input:checkbox",this).prop('checked', true);
                            }
                       }
                       }})
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
  $("#yaku_table li").off("mouseup")
  }
  
})

$(function(){
  $("#scoreinfo_table input").on({'touchstart': function(e) {
                         if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
                         else{startY=""}
                         touchid=this.id
                         endY = startY
                         }})
  $("#scoreinfo_table input").on({'touchmove': function(e) {
                         endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
                         }})
  $("#scoreinfo_table input:not(:button)").on({'touchend mouseup': function(e) {
                         if(touchid==this.id && (startY==endY || Math.abs(startY-endY)<5)){this.focus();}
                         //クリックイベントに反応して？違うidのinputが勝手にfocusされてしまうのを止めるためのreturn false(仮)
                         return false;
                         }})

  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
  $("#scoreinfo_table input").off("mouseup")
  }
  
  })

  
  let footer_timer
  function clear_footer(){

   clearTimeout(footer_timer)
   $("#footer").css({"color":"blue"})
   .transition({
     duration:300,
     complete:function(){$("#footer").css({"color":""})}
   })
    footer_timer = setTimeout(function(){$("#footer").text("")},2000)

  }

