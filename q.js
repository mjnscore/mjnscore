
//starttime=0
//endtime=0

oyaval=$('input[name="oya"]:checked').val()
tumoval=$('input[name="tumo"]:checked').val()
bakazeval=$('input[name="bakaze"]:checked').val()
jikazeval=$('input[name="jikaze"]:checked').val()

starttime=0
timerArray=new Array();

//モバイル自作テンキー用
selected=1

function quiz_toggle() {
  erase_all()
  if($("#quiz_hide").css("display")!="none"){
    $("#quiz_hide").hide()
    $("#quiz_hide2").hide()
    $("#ls_button").hide()
    $("#yaku_list").hide()
    $("#tensu").hide()
    $("#kirimaehu").hide()
    $("#mati_text").hide()
    $("#howtouse").hide()
    $("#quiz_mode").hide()
    $("#"+"select"+(parseInt($("#"+"select"+"_count").html())+1)).parents("td").css("border-bottom","none")
    $("#tyankan").attr("checked", false )
    $("#tenho").attr("checked", false )
    $("#tiho").attr("checked", false )
    $("#quiz_show").show()
      if($(window).width()>640){
          $("#qadiv_wide").show()
          $("#qadiv").hide()
      }
      else{
          $("#qadiv_wide").hide()
          $("#qadiv").show()
      }
    $("#game_button").hide()
    $("#quiz_button").val("クイズ終了")
    erase_all()
    //quiz()
    if($("#quiz_mode").val()=="g"){
      $("#quiz_do").val("パス")
      $("#quizg_retry").show()
      confirm_quizg_start()
    }
    else{
      $("#quiz_do").attr("disabled",false)
      $("#quiz_do").val("出題")
      $("#quiz_ans").attr("disabled",false)
      //$("#quiz_ans2").attr("disabled",false)
      quiz()
      $("#quizg_bar").hide()
      $("#quizg_retry").hide()
      $("#quizg_count").hide()
      $("#quizg_time").hide()
      $("#quizg_pertime").hide()
      $("#quizg_score").hide()
      $("#quizg_yaku").hide()
      $("#quizg_tensu").hide()
      $("#quizg_kirimaehu").hide()
    }
  }
  else{
    swal({
      title:"麻雀点数計算機",
      text:"クイズを終了しますか？",
      type:"warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "OK!",
    },
    function(){
      clearInterval(timerArray.shift())
      $("#quiz_hide").show()
      $("#quiz_hide2").show()
      $("#ls_button").show()
      $("#yaku_list").show().text("")
      $("#tensu").show().text("")
      $("#kirimaehu").show().text("")
      $("#mati_text").show()
      $("#howtouse").show()
      $("#quiz_mode").show()
      $("#quiz_show").hide()
      $("#game_button").show()
      $("#quiz_test").html("")
      $("#quiz_button").val("クイズ")
      superreload()
      $('body').animate({ scrollTop: 0 }, 0)
    })

  }

}

function confirm_quizg_start(){
  $('body').animate({ scrollTop: 0 }, 0)
    swal({
         title:"Ready?",
        text:"[全30問/1分間]"+"\n"+"(正答数×10,000)"+"\n"+"(残時間×1,000)"+"\n"+"(アガリ点×0.3)"+"\n"+"\n"+"[入力方法]"+"\n"+"3900→39"+"\n"+"4000オール→4"+"\n"+"2000,3900→239"
         },
         function(){
            $("#quiz_do").attr("disabled",false)
            $("#quiz_ans").attr("disabled",false)
            //$("#quiz_ans2").attr("disabled",false)
            quiz()
            quizg_start()
         }
         )
}


function quizg_start(){
    
    
  clearInterval(timerArray.shift())
  starttime=new Date()*1
  $("#quizg_bar").show()
  $("#quizg_time").show()
  $("#quizg_pertime").show()
  timelimit=60
    //180
  $("#quizg_time").text(timelimit)
  $("#quizg_pertime").text("")
  //quiz_timer()

  timerArray.push(setInterval("quiz_timer()",10))
  //$("#quizg_bar").stop(true,true).css({"transform":"none","transition":"none","transition-duration":"0s"})
  $("#quizg_bar").stop().css("width",$("#quizg_bar_parent").width())
  quiz_bar(timelimit)

  quizg_count=0
  $("#quizg_count").show()
  $("#quizg_count").html(quizg_count+"/30")

  quizg_score=0
  $("#quizg_score").show()
  $("#quizg_score").html(quizg_count+"点")


  $("#quizg_yaku").show().html("正解:役名(翻数)<br>")
  $("#quizg_tensu").show().html("翻数符数/点数(場風自風)<br>")
  $("#quizg_kirimaehu").show().html("符数明細<br>")
  $("#quiz_img").html("")

  $("#quizg_prev").html("")
}

function quiz_bar(n) {
  /*
  $("#quizg_bar").transition({
    scale:[0,1],
    duration:n*1000,
    easing:"linear"
  })
  */
  $("#quizg_bar").animate({
    width:0,
    easing:"liner"


  },n*1000)
}

function quiz_timer(){
  $("#quizg_time").html((timelimit-Math.round((new Date()*1-starttime)/10)/100).toFixed(2))
  //$("#quizg_time").html((Math.round((new Date()*1-starttime)/10)/100).toFixed(2))
  //if((Math.round((new Date()*1-starttime)/10)/100).toFixed(2)>6000){
  if((timelimit-Math.round((new Date()*1-starttime)/10)/100).toFixed(2)<0){
    clearInterval(timerArray.shift())
    $("#quizg_time").html(0)
    quizg_result()
  }
  //timer=setTimeout("quiz_timer()",10)
}

function quiz_hint() {
  /*
  oyaval=$('input[name="oya"]:checked').val()
  if($("#quiz_hint").val()=="点数表"){    
    if(oyaval=="oya"){
      $("#oyatenimg").show()
      $("#quiz_hint").val("隠す")}
    else{
      $("#kotenimg").show()
      $("#quiz_hint").val("隠す")}
  }
  else{$("#oyatenimg").hide(),$("#kotenimg").hide(),$("#quiz_hint").val("点数表")}
  */

  if($("#oyatenimg").css("display")=="none"){
      $("#oyatenimg").show()
      $("#kotenimg").show()
      $("#quiz_hint").val("点数表(表示中)")
  }
  else{
      $("#oyatenimg").hide()
      $("#kotenimg").hide()
      $("#quiz_hint").val("点数表")}

}

function quiz_hinthu() {
  if($("#huimg").css("display")=="none"){
      $("#huimg").show()
      $("#quiz_hinthu").val("符表(表示中)")
  }
  else{
      $("#huimg").hide()
      $("#quiz_hinthu").val("符表")
  }
}

function hutenimg_toggle(str) {
    $("#hutenimg_span").show()
    if(str=="oya"){
        $("#hutenimg").show().attr("src","img2/oyaten.png")
    }
    else if(str=="ko"){
        $("#hutenimg").show().attr("src","img2/koten.png")
    }
    else if(str=="hu"){
        $("#hutenimg").show().attr("src","img2/hu.png")
    }
    $('body').animate({ scrollTop: 0 }, 0)
    $("#footer").text("画像クリックで閉じる")
    clear_footer()
}

$(function(){
  $("#hutenimg").on({'touchstart': function(e) {
    if(isTouch==true){startY=e.originalEvent.touches[ 0 ].pageY}
    else{startY=""}
    endY = startY
    }})
  $("#hutenimg").on({'touchmove': function(e) {
    endY = (isTouch ? e.originalEvent.touches[ 0 ].pageY : "")
    }})
  $("#hutenimg").on({'touchend mouseup': function(e) {
    if(startY==endY || Math.abs(startY-endY)<5){
                    e.preventDefault();
                    $("#hutenimg_span").hide()
                    $("#hutenimg").hide()
                    $('body').animate({ scrollTop: 0 }, 0)
                    }
                    }})
  //タッチデバイスならマウスを無効にする（要Winタブ検討）
  if(isTouch==true){
  $("#hutenimg").off("mouseup")
  }
  
  })


function quiz_hinthu() {
    if($("#huimg").css("display")=="none"){
        $("#huimg").show()
        $("#quiz_hinthu").val("符表(表示中)")
    }
    else{
        $("#huimg").hide()
        $("#quiz_hinthu").val("符表")
    }
}

function quizg_minus(){
    if($("#quiz_do").attr("disabled")=="disabled"){return;}
  if($("#quiz_mode").val()=="g" && quizg_count<30){
    if(oyaval=="oya" && tumoval=="tumo"){
      //quizg_score=quizg_score-quiz_siharaiten*3
      quizg_score=quizg_score-1000
    }
    else if(oyaval=="ko" && tumoval=="tumo"){
      //quizg_score=quizg_score-quiz_siharaiten-quiz_siharaiten2*2
      quizg_score=quizg_score-1000
    }
    else{
      //quizg_score=quizg_score-quiz_siharaiten
      quizg_score=quizg_score-1000
    }
    $("#quizg_score").html(quizg_score+"点")
  }
}

function quiz() {
  //初期化
  if($("#quiz_do").attr("disabled")=="disabled"){return;}
  
  $("#quiz_do").css("background-color","#eee")
  $('#quiz_ans').val('')
  //$('#quiz_ans2').val('')
  $("#ls_button").hide()
  $("#yaku_list").hide()
  $("#tensu").hide()
  $("#kirimaehu").hide()
  $("#quiz_test").text("出題")
  $("#quiz_yaku").text("")
  $("#"+"select"+(parseInt($("#"+"select"+"_count").html())+1)).parents("td").css("border-bottom","none")
  $("#riti").attr("checked", false )
  $("#driti").attr("checked", false )
  $("#ippatu").attr("checked", false )
  $("#hotei").attr("checked", false )
  $("#haitei").attr("checked", false )
  $("#rinsyan").attr("checked", false )
  $("#oyatenimg").hide(),$("#kotenimg").hide(),$("#quiz_hint").val("点数表")
  $("#huimg").hide(),$("#quiz_hinthu").val("符表")
  $("#select1").attr("src","img/none.png").css("border-style","none")
  for(i=1;i<14;i++){
    $("#select"+(i+1)).attr("src","img/none.png").css("border-style","none")
  }
  for(i=0;i<13;i++){
    $("#naki"+(i+1)).html("")
  }
  $("#naki1").html('<img src="./img/none.png" style="width:100%;border:white;">').parents("td").css("width","6%")
  /*親子は場風自風で判定する
  per=Math.floor(Math.random()*100);
  if(per>50){$("#oya").val("oya")}else{$("#oya").val("ko")}
  */
  //ツモロン
  per=Math.floor(Math.random()*100);
  if(per>50){
    $('input[name="tumo"]').val(['tumo'])
    tumoval=$('input[name="tumo"]:checked').val()
  }
  else{
    $('input[name="tumo"]').val(['ron'])
    tumoval=$('input[name="tumo"]:checked').val()
  }
  //場風 クイズモードは東南まで
  per=Math.floor(Math.random()*100);
  if(per<50){
    $('input[name="bakaze"]').val(['41'])
    bakazeval=$('input[name="bakaze"]:checked').val()
  }
  else{
    $('input[name="bakaze"]').val(['43'])
    bakazeval=$('input[name="bakaze"]:checked').val()
  }
  //else if(per<75){$("#bakaze").val("45")}
  //else{$("#bakaze").val("47")}
  //自風
  per=Math.floor(Math.random()*100);
  if(per<25){
    $('input[name="jikaze"]').val(['41'])
    jikazeval=$('input[name="jikaze"]:checked').val()
  }
  else if(per<50){
    $('input[name="jikaze"]').val(['43'])
    jikazeval=$('input[name="jikaze"]:checked').val()
  }
  else if(per<75){
    $('input[name="jikazeo"]').val(['45'])
    jikazeval=$('input[name="jikaze"]:checked').val()
  }
  else{
    $('input[name="jikazemo"]').val(['47'])
    jikazeval=$('input[name="jikaze"]:checked').val()
  }
  if(bakazeval==jikazeval){
    $('input[name="oya"]').val(["oya"])
    oyaval=$('input[name="oya"]:checked').val()
  }
  else{
    $('input[name="oya"]').val(["ko"])
    oyaval=$('input[name="oya"]:checked').val()
  }
  

  hai_list=new Array()
  hai_list=["11","12","13","14","15","16","17","18","19","21","22","23","24","25","26","27","28","29","31","32","33","34","35","36","37","38","39","41","43","45","47","51","53","55"]
  haigazou_list=["1m1","1m2","1m3","1m4","1m5","1m6","1m7","1m8","1m9","1p1","1p2","1p3","1p4","1p5","1p6","1p7","1p8","1p9","1s1","1s2","1s3","1s4","1s5","1s6","1s7","1s8","1s9","1j1","1j2","1j3","1j4","1j5","1j6","1j7"]
  
  do{
    $("#quiz_yaku").text("")
    $("#riti").attr("checked", false )
    $("#driti").attr("checked", false )
    $("#ippatu").attr("checked", false )
    $("#hotei").attr("checked", false )
    $("#haitei").attr("checked", false )
    $("#rinsyan").attr("checked", false )
    S=new Array()
    A=new Array()
    NAKI=new Array()
    ANKAN=new Array()
    haigazou=new Array()
    haigazouA=new Array()
    haigazouMINKAN=new Array()
    haigazouANKAN=new Array()
    haigazouPON=new Array()
    haigazouCHI=new Array()
    dcount=1

    //ランダムに雀頭を選ぶ
    var quiz_mt = new MersenneTwister()
    var num = quiz_mt.nextInt(0,34)
    //num=Math.floor(Math.random()*34)
    S.push(hai_list[num],hai_list[num])
    haigazou.push(haigazou_list[num],haigazou_list[num])  

    //4つ面子を作る

    for(i=0;i<4;i++){
      //ランダムに牌を選ぶ
      
      
      //num=Math.floor(Math.random()*34);
      num = quiz_mt.nextInt(0,34)
      //一桁目
      str1=hai_list[num].substr(1,1)
      //0~99
      //per=Math.floor(Math.random()*100);
      per = quiz_mt.nextInt(0,100)
      //ミンカン
      if(per<2){NAKI.push(hai_list[num]+hai_list[num]+hai_list[num]+hai_list[num])
                haigazouMINKAN.push(haigazou_list[num])}
      //アンカン
      else if(per<4){ANKAN.push(hai_list[num]+hai_list[num]+hai_list[num]+hai_list[num])
                    haigazouANKAN.push(haigazou_list[num])}
      //ポン
      else if(per<10){NAKI.push(hai_list[num]+hai_list[num]+hai_list[num])
                      haigazouPON.push(haigazou_list[num])}
      //チー
      else if(hai_list[num]<40 && per<16){
        if(str1==1){
          NAKI.push(hai_list[num]+hai_list[num+1]+hai_list[num+2])
          haigazouCHI.push(haigazou_list[num])
        }
        else if(str1==9){
          NAKI.push(hai_list[num-2]+hai_list[num-1]+hai_list[num])
          haigazouCHI.push(haigazou_list[num-2])
        }
        else if(str1==2){
          if(per<13){
            NAKI.push(hai_list[num]+hai_list[num+1]+hai_list[num+2])
            haigazouCHI.push(haigazou_list[num])
          }
          else{
            NAKI.push(hai_list[num-1]+hai_list[num]+hai_list[num+1])
            haigazouCHI.push(haigazou_list[num-1])
          }
        }
        else if(str1==8){
          if(per<13){
            NAKI.push(hai_list[num-2]+hai_list[num-1]+hai_list[num])
            haigazouCHI.push(haigazou_list[num-2])
          }
          else{
            NAKI.push(hai_list[num-1]+hai_list[num]+hai_list[num+1])
            haigazouCHI.push(haigazou_list[num-1])
          }
        }
        else{
          if(per<12){
            NAKI.push(hai_list[num-2]+hai_list[num-1]+hai_list[num])
            haigazouCHI.push(haigazou_list[num-2])
          }
          else if(per<14){
            NAKI.push(hai_list[num-1]+hai_list[num]+hai_list[num+1])
            haigazouCHI.push(haigazou_list[num-1])
          }
          else{
            NAKI.push(hai_list[num]+hai_list[num+1]+hai_list[num+2])
            haigazouCHI.push(haigazou_list[num])
          }
        }
      }
      //字牌か、1/4の確率で刻子
      else if(hai_list[num]>40 || per<30){
        S.push(hai_list[num],hai_list[num],hai_list[num])
        haigazou.push(haigazou_list[num],haigazou_list[num],haigazou_list[num])
      }
      //以下順子
      else if(str1==1){
        S.push(hai_list[num],hai_list[num+1],hai_list[num+2])
        haigazou.push(haigazou_list[num],haigazou_list[num+1],haigazou_list[num+2])
      }
      else if(str1==9){
        S.push(hai_list[num-2],hai_list[num-1],hai_list[num])
        haigazou.push(haigazou_list[num-2],haigazou_list[num-1],haigazou_list[num])
      }
      else if(str1==2){
        if(per<75){
          S.push(hai_list[num],hai_list[num+1],hai_list[num+2])
          haigazou.push(haigazou_list[num],haigazou_list[num+1],haigazou_list[num+2])
        }
        else{
          S.push(hai_list[num-1],hai_list[num],hai_list[num+1])
          haigazou.push(haigazou_list[num-1],haigazou_list[num],haigazou_list[num+1])
        }
      }
      else if(str1==8){
        if(per<75){
          S.push(hai_list[num-2],hai_list[num-1],hai_list[num])
          haigazou.push(haigazou_list[num-2],haigazou_list[num-1],haigazou_list[num])
        }
        else{
          S.push(hai_list[num-1],hai_list[num],hai_list[num+1])
          haigazou.push(haigazou_list[num-1],haigazou_list[num],haigazou_list[num+1])
        }
      }
      else{
        if(per<53){
          S.push(hai_list[num-2],hai_list[num-1],hai_list[num])
          haigazou.push(haigazou_list[num-2],haigazou_list[num-1],haigazou_list[num])
        }
        else if(per<75){
          S.push(hai_list[num-1],hai_list[num],hai_list[num+1])
          haigazou.push(haigazou_list[num-1],haigazou_list[num],haigazou_list[num+1])
        }
        else{
          S.push(hai_list[num],hai_list[num+1],hai_list[num+2])
          haigazou.push(haigazou_list[num],haigazou_list[num+1],haigazou_list[num+2])
        }
      }
    }


    num=Math.floor(Math.random()*S.length);
    
    A.push(S[num])
    S.splice(num,1)

    //S=["11","12","13","11","12","13","21","21","25","26","27","29","29"]
    //A=["29"]
    //S=["45","12","13","14","12","13","14","23","23","23","45","45","45"]
    //A=["45"]
    haigazouA.push(haigazou[num])
    haigazou.splice(num,1)

    //手牌以外の役
    //per=Math.floor(Math.random()*100);
    per = quiz_mt.nextInt(0,100)
    if(per==99 && NAKI.length==0){
      $("#driti").prop({'checked':'checked'});$("#quiz_yaku").text($("#quiz_yaku").text()+"+ダブル立直")
    }
    else if(per<50 && NAKI.length==0){$("#riti").prop({'checked':'checked'});$("#quiz_yaku").text($("#quiz_yaku").text()+"+立直")}
    //per=Math.floor(Math.random()*100);
    per = quiz_mt.nextInt(0,100)
    if(per<20 && ($("#riti").is(':checked') || $("#driti").is(':checked')) && NAKI.length==0){
      $("#ippatu").prop({'checked':'checked'});$("#quiz_yaku").text($("#quiz_yaku").text()+"+一発")
    }
    else{
      if(per==21 && tumoval=="ron"){$("#hotei").prop({'checked':'checked'});$("#quiz_yaku").text($("#quiz_yaku").text()+"+河底撈魚")}
      if(per==22 && tumoval=="tumo"){$("#haitei").prop({'checked':'checked'});$("#quiz_yaku").text($("#quiz_yaku").text()+"+海底摸月")}
      if(per==23 && (haigazouANKAN.length>0 || haigazouMINKAN.length>0)){$("#rinsyan").prop({'checked':'checked'});$("#quiz_yaku").text($("#quiz_yaku").text()+"+嶺上開花")}
    }
    //ドラ計算用
    zenhai=new Array()

    zenhai=$.merge([],S)
    zenhai=$.merge(zenhai,A)
    if(NAKI[0]!=null){
      for(i=0;i<NAKI.length;i++){
        for(j=0;j<NAKI[0].length;j++){
        zenhai.push(NAKI[i].substr(j*2,2))
        }
      }
    }
    if(ANKAN[0]!=null){
      for(i=0;i<ANKAN.length;i++){
        for(j=0;j<ANKAN[0].length;j++){
        zenhai.push(ANKAN[i].substr(j*2,2))
        }
      }
    }
  
    hai_count=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)

    for(i=0;i<zenhai.length;i++){
      if(zenhai[i]==11){hai_count[0]=hai_count[0]+1}
      if(zenhai[i]==12){hai_count[1]=hai_count[1]+1}
      if(zenhai[i]==13){hai_count[2]=hai_count[2]+1}
      if(zenhai[i]==14){hai_count[3]=hai_count[3]+1}
      if(zenhai[i]==15){hai_count[4]=hai_count[4]+1}
      if(zenhai[i]==16){hai_count[5]=hai_count[5]+1}
      if(zenhai[i]==17){hai_count[6]=hai_count[6]+1}
      if(zenhai[i]==18){hai_count[7]=hai_count[7]+1}
      if(zenhai[i]==19){hai_count[8]=hai_count[8]+1}
      if(zenhai[i]==21){hai_count[9]=hai_count[9]+1}
      if(zenhai[i]==22){hai_count[10]=hai_count[10]+1}
      if(zenhai[i]==23){hai_count[11]=hai_count[11]+1}
      if(zenhai[i]==24){hai_count[12]=hai_count[12]+1}
      if(zenhai[i]==25){hai_count[13]=hai_count[13]+1}
      if(zenhai[i]==26){hai_count[14]=hai_count[14]+1}
      if(zenhai[i]==27){hai_count[15]=hai_count[15]+1}
      if(zenhai[i]==28){hai_count[16]=hai_count[16]+1}
      if(zenhai[i]==29){hai_count[17]=hai_count[17]+1}
      if(zenhai[i]==31){hai_count[18]=hai_count[18]+1}
      if(zenhai[i]==32){hai_count[19]=hai_count[19]+1}
      if(zenhai[i]==33){hai_count[20]=hai_count[20]+1}
      if(zenhai[i]==34){hai_count[21]=hai_count[21]+1}
      if(zenhai[i]==35){hai_count[22]=hai_count[22]+1}
      if(zenhai[i]==36){hai_count[23]=hai_count[23]+1}
      if(zenhai[i]==37){hai_count[24]=hai_count[24]+1}
      if(zenhai[i]==38){hai_count[25]=hai_count[25]+1}
      if(zenhai[i]==39){hai_count[26]=hai_count[26]+1}
      if(zenhai[i]==41){hai_count[27]=hai_count[27]+1}
      if(zenhai[i]==43){hai_count[28]=hai_count[28]+1}
      if(zenhai[i]==45){hai_count[29]=hai_count[29]+1}
      if(zenhai[i]==47){hai_count[30]=hai_count[30]+1}
      if(zenhai[i]==51){hai_count[31]=hai_count[31]+1}
      if(zenhai[i]==53){hai_count[32]=hai_count[32]+1}
      if(zenhai[i]==55){hai_count[33]=hai_count[33]+1}
    }

    //dora_max:ドラの最大数
    dora_max=1+haigazouMINKAN.length+haigazouANKAN.length
    if(($("#riti").is(':checked') || $("#driti").is(':checked'))){dora_max=dora_max+1}
    //dora_array:ドラ牌の番号を格納する（0～33）
    dora_array=new Array()
    for(i=0;i<dora_max;i++){
      do{
        //num=Math.floor(Math.random()*34);
        num = quiz_mt.nextInt(0,34)
      }while(num==dora_array[i])
      dora_array.push(num)
    }
    //dora_apply:適用されるドラの数
    dora_apply=0
    for(i=0;i<dora_max;i++){
      dora_apply=dora_apply+hai_count[dora_array[i]]
    }
    $("#dora").val(dora_apply)
    if(dora_apply>0){$("#quiz_yaku").text($("#quiz_yaku").text()+"+ドラ"+dora_apply)}

    //alert(S[0]+","+S[1]+","+S[2]+","+S[3]+","+S[4]+","+S[5]+","+S[6]+","+S[7]+","+S[8]+","+S[9]+","+S[10]+","+S[11]+","+S[12]+","+A[0])
    agari_rekkyo();tensu()
    dcount=1
    for(i=0;i<zenhai.length;i++){
      for(j=i+1;j<zenhai.length;j++){
        if(zenhai[i]==""){continue;}
        if(zenhai[i]==zenhai[j]){dcount=dcount+1}
      }
      if(dcount>4){break}
      else{dcount=1}
    }
    //whileの複数条件がうまくいかないからdcountの値で無理やり条件付けする
    //if(yakuman==0){dcount=5}
    //if(han<10){dcount=5}
    
  }while(dcount>4 || $("#tensu").text()=="")


  for(i=0;i<haigazou.length;i++){
    $("#select"+(i+1)).attr("src","./img2/"+haigazou[i]+".png").css("border","1px solid #eee")
  }
  $("#agari").attr("src","./img2/"+haigazouA[0]+".png")
  //naki牌の表示位置
  nakiiti=0
  for(i=0;i<haigazouMINKAN.length;i++){
    $("#naki"+(nakiiti+1)).html('<img src="./img2/'+haigazouMINKAN[i]+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css("width","6%")
    $("#naki"+(nakiiti+2)).html('<img src="./img2/'+2+haigazouMINKAN[i].substring(1,3)+'.png" style="border:1px solid #eee;width:57%;"><img src="./img2/'+haigazouMINKAN[i]+'.png" style="border:1px solid #eee;width:43%;">')
    .parents("td").css("width","14%")
    $("#naki"+(nakiiti+3)).html('<img src="./img2/'+haigazouMINKAN[i]+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css({"width":"6%"})
    nakiiti=nakiiti+3
  }
  for(i=0;i<haigazouANKAN.length;i++){
    $("#naki"+(nakiiti+1)).html('<img src="./img/1j9.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css("width","6%")
    $("#naki"+(nakiiti+2)).html('<img src="./img2/'+haigazouANKAN[i]+'.png" style="border:1px solid #eee;width:50%;"><img src="./img2/'+haigazouANKAN[i]+'.png" style="border:1px solid #eee;width:50%;">')
    .parents("td").css("width","12%")
    $("#naki"+(nakiiti+3)).html('<img src="./img/1j9.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css({"width":"6%"})
    nakiiti=nakiiti+3
  }
  for(i=0;i<haigazouPON.length;i++){
    $("#naki"+(nakiiti+1)).html('<img src="./img2/'+haigazouPON[i]+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css("width","6%")
    $("#naki"+(nakiiti+2)).html('<img src="./img2/'+2+haigazouPON[i].substring(1,3)+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css("width","8%")
    $("#naki"+(nakiiti+3)).html('<img src="./img2/'+haigazouPON[i]+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css({"width":"6%"})
    nakiiti=nakiiti+3
  }
  for(i=0;i<haigazouCHI.length;i++){
    $("#naki"+(nakiiti+1)).html('<img src="./img2/'+2+haigazouCHI[i].substring(1,3)+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css("width","8%")
    $("#naki"+(nakiiti+2)).html('<img src="./img2/'+haigazouCHI[i].substring(0,2)+(haigazouCHI[i].substring(2,3)*1+1)+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css("width","6%")
    $("#naki"+(nakiiti+3)).html('<img src="./img2/'+haigazouCHI[i].substring(0,2)+(haigazouCHI[i].substring(2,3)*1+2)+'.png" style="border:1px solid #eee;width:100%;">')
    .parents("td").css({"width":"6%"})
    nakiiti=nakiiti+3
  }




  if($('input[name="oya"]:checked').val()=="oya"){oyatext="親"}
  else if($('input[name="oya"]:checked').val()=="ko"){oyatext="子"}
  if($('input[name="tumo"]:checked').val()=="tumo"){tumotext="ツモ"}
  if($('input[name="tumo"]:checked').val()=="ron"){tumotext="ロン"}
  if($('input[name="jikaze"]:checked').val()=="41"){jikazetext="東風"}
  if($('input[name="jikaze"]:checked').val()=="43"){jikazetext="南風"}
  if($('input[name="jikaze"]:checked').val()=="45"){jikazetext="西風"}
  if($('input[name="jikaze"]:checked').val()=="47"){jikazetext="北風"}
  if($('input[name="bakaze"]:checked').val()=="41"){bakazetext="東場"}
  if($('input[name="bakaze"]:checked').val()=="43"){bakazetext="南場"}
  if($('input[name="bakaze"]:checked').val()=="45"){bakazetext="西場"}
  if($('input[name="bakaze"]:checked').val()=="47"){bakazetext="北場"}
  $("#quiz_ba").text(
    //$('#oya option:selected').text()
    oyatext
    //+$('#tumo option:selected').text()
    +tumotext
    +"/"
    //+$('#bakaze option:selected').text()
    +bakazetext
    //+$('#jikaze option:selected').text()
    +jikazetext
    +"/ "
  )
  /*以下、zenhaiとhai_countのデバッグ
  for(i=0;i<zenhai.length;i++){
  $("#quiz_ba").text($("#quiz_ba").text()+zenhai[i]+",")}
  //+zenhai[1]+","+zenhai[2]+","+zenhai[3]+","+zenhai[4]+","+zenhai[5]+","+zenhai[6]+","+zenhai[7]+","+zenhai[8]+","+zenhai[9]+","+zenhai[10]+","+zenhai[11]+","+zenhai[12]+","+zenhai[13]+"."+zenhai.length)
  $("#quiz_ba").text($("#quiz_ba").text()+zenhai.length+"||")
  for(i=0;i<hai_count.length;i++){
  $("#quiz_ba").text($("#quiz_ba").text()+hai_count[i]+",")}
  /*+hai_count[1]+","+hai_count[2]+","+hai_count[3]+","+hai_count[4]+","+hai_count[5]+","+hai_count[6]+","+hai_count[7]+","+hai_count[8]+"|"+
     hai_count[9]+","+hai_count[10]+","+hai_count[11]+","+hai_count[12]+","+hai_count[13]+","+hai_count[14]+","+hai_count[15]+","+hai_count[16]+","+hai_count[17]+"|"+
     hai_count[18]+","+hai_count[19]+","+hai_count[20]+","+hai_count[21]+","+hai_count[22]+","+hai_count[23]+","+hai_count[24]+","+hai_count[25]+","+hai_count[26]+"|"+
     hai_count[27]+","+hai_count[28]+","+hai_count[29]+","+hai_count[30]+"|"+hai_count[31]+","+hai_count[32]+","+hai_count[33])
  デバッグここまで*/
  if($("#quiz_input_mode").val()=="a"){
    $("#quiz_ans").attr("readonly",true)
    //$("#quiz_ans2").attr("readonly",true)
  }
  else{
    $("#quiz_ans").attr("readonly",false)
    //$("#quiz_ans2").attr("readonly",false)
  }
  if(tumoval=="ron"){
    $("#quiz_ten").text("点")
    //$("#quiz_ans2").hide()
    $("#quiz_ans").focus()
    $("#quiz_ans").css({"border":"","margin":""})
    //$("#quiz_ans2").css({"border":"","margin":""})
    $("#quiz_ans").css({"border":"2px solid blue","margin":"-1px"})
  }
  else if(oyaval=="oya"){
    $("#quiz_ten").text("点オール")
    //$("#quiz_ans2").hide()
    $("#quiz_ans").focus()
    $("#quiz_ans").css({"border":"","margin":""})
    //$("#quiz_ans2").css({"border":"","margin":""})
    $("#quiz_ans").css({"border":"2px solid blue","margin":"-1px"})
  }
  else{
    $("#quiz_ten").text("点(子) 点(親)")
    $("#quiz_ans").focus()
    $("#quiz_ans").css({"border":"","margin":""})
    //$("#quiz_ans2").css({"border":"","margin":""})
    $("#quiz_ans").css({"border":"2px solid blue","margin":"-1px"})
  }
  //$("#quiz_yaku").text($('#oya option:selected').text()+$('#tumo option:selected').text()+$('#bakaze option:selected').text()+$('#jikaze option:selected').text())

  //starttime=new Date()
  if($("#quiz_debug").is(':checked')){$("#yaku_list").show();$("#tensu").show();$("#kirimaehu").show()}

  //$('body').animate({ scrollTop: 0 }, 0)


}

$(function () {
  $("#quiz_ans").keypress(function (e) {
    if(e.which == 13){
      if($("#yaku_list").css("display")=="none"){
        quiz_check();
      }
      else{
        quiz()
      }
    }
    });
  $("#quiz_ans2").keypress(function (e) {
    if(e.which == 13){
      $("#quiz_ans").focus();
    }
    });
})

function quiz_check() {
  if($("#quiz_do").attr("disabled")=="disabled"){return;}
  //親か子のロンなら
  if(oyaval=="oya" || oyaval=="ko" && tumoval=="ron"){
    if($("#quiz_ans").val().replace(/0/g,"")==String(quiz_siharaiten).replace(/0/g,"")){
      if($("#quiz_mode").val()=="g"){
        if(quizg_count<30){
          quizg_count=quizg_count+1
          $("#quizg_count").html(quizg_count+"/30")
          if(oyaval=="oya" && tumoval=="tumo"){
            quizg_score=quizg_score+quiz_siharaiten*3
          }
          else{
            quizg_score=quizg_score+quiz_siharaiten
          }
          $("#quizg_score").html(quizg_score+"点")
          $("#quizg_pertime").html("("+(Math.round((timelimit-$("#quizg_time").text())/quizg_count*100)/100).toFixed(2)+"/cps)")
          $("#quizg_yaku").html("正解:"+$("#yaku_list").html()).show()
          $("#quizg_tensu").html($("#tensu").html()).show()
          $("#quizg_kirimaehu").html($("#kirimaehu").html()).show()
          if(quizg_count>29){
            quizg_result()
          }
          else{
            quiz()
          }
        }
      }
      else{
        $("#yaku_list").show()
        $("#tensu").show()
        $("#kirimaehu").show()
        $("#quiz_test").html("")
        $("#quiz_do").css("background-color","#F9BF98")
        //$('body').animate({ scrollTop: 0 }, 0)
      }
    }else{
      $("#quiz_test").html("違います")
      .css({"color":"red"})
      .transition({
        duration:300,
        complete:function(){$("#quiz_test").css({"color":"black"})}
      })
      //$('body').animate({ scrollTop: 0 }, 0) 
    }
  }
  //子のツモなら
  else{
    //if($("#quiz_ans").val().replace(/0/g,"")==String(quiz_siharaiten).replace(/0/g,"") && $("#quiz_ans2").val().replace(/0/g,"")==String(quiz_siharaiten2).replace(/0/g,"")){
    if($("#quiz_ans").val().replace(/0/g,"")==String(quiz_siharaiten).replace(/0/g,"") + String(quiz_siharaiten2).replace(/0/g,"")){  
      if($("#quiz_mode").val()=="g"){
        if(quizg_count<30){
          quizg_count=quizg_count+1
          $("#quizg_count").html(quizg_count+"/30")

          quizg_score=quizg_score+quiz_siharaiten+quiz_siharaiten2*2

          $("#quizg_score").html(quizg_score+"点")

          $("#quizg_pertime").html("("+(Math.round((timelimit-$("#quizg_time").text())/quizg_count*100)/100).toFixed(2)+"/cps)")
          $("#quizg_yaku").html("正解:"+$("#yaku_list").html()).show()
          $("#quizg_tensu").html($("#tensu").html()).show()
          $("#quizg_kirimaehu").html($("#kirimaehu").html()).show()
          if(quizg_count>29){
            quizg_result()
          }
          else{
            quiz()
          }
        }
      }
      else{
        $("#yaku_list").show()
        $("#tensu").show()
        $("#kirimaehu").show()
        $("#quiz_test").html("出題")
        $("#quiz_do").css("background-color","#F9BF98")
        //$('body').animate({ scrollTop: 0 }, 0)
      }
    }else{
      $("#quiz_test").html("違います")
      .css({"color":"red"})
      .transition({
        duration:300,
        complete:function(){$("#quiz_test").css({"color":"black"})}
      })
      //$('body').animate({ scrollTop: 0 }, 0)
    }
  }
  
}


function quiz_gazo(){
  var hai_img =""
    for(var j=0;j<S.length;j++){
        var img = S[j]
        hai_img = 
            hai_img
             + '<img src="./img2/' + haimap2[img] + '.png" style="width: 5.04%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
    }
    hai_img = hai_img + "  "
    if(A.length != 0){
        var imgA = A
        hai_img = 
            hai_img
             + '<img src="./img2/' + haimap2[imgA] + '.png" style="width: 5.04%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
    }
    hai_img = hai_img + " "
    if(NAKI != void 0){
        for(var j=0;j<NAKI.length;j++){
            for(var k=0;k<NAKI[j].length/2;k++){
                var imgNAKI = NAKI[j].substr(k*2,2)
                var haimap2NAKI = haimap2[imgNAKI]
                var size = "5.04%"
                //チーなら横に倒す
                if(k == 0 && NAKI[j].substr(k*2,2) != NAKI[j].substr((k+1)*2,2)){
                    haimap2NAKI = "2" + haimap2[imgNAKI].substr(1,2)
                    size = "6.72%"
                }
                //ポンなら横に倒す
                else if(k == 1 && NAKI[j].substr(k*2,2) == NAKI[j].substr((k+1)*2,2)){
                    haimap2NAKI = "2" + haimap2[imgNAKI].substr(1,2)
                    size = "6.72%"
                }
                hai_img = 
                    hai_img
                     + '<img src="./img2/' + haimap2NAKI + '.png" style="width: ' + size + '; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
            }
            hai_img = hai_img + " "
        }
    }
    if(ANKAN != void 0){
        for(var j=0;j<ANKAN.length;j++){
            for(var k=0;k<ANKAN[j].length/2;k++){
                var imgANKAN = ANKAN[j].substr(k*2,2)
                var haimap2ANKAN = haimap2[imgANKAN]
                if(k == 0 || k == 3){
                    haimap2ANKAN = "1j9"
                }
                hai_img = 
                    hai_img
                     + '<img src="./img2/' + haimap2ANKAN + '.png" style="width: 5.04%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
            }
        }
    }
    $("#quiz_img").html(hai_img)
}

function quiz_checkauto(){
  
  if($("#quiz_do").attr("disabled")=="disabled"){return;}
  
  var len = $("#quiz_ans").val().length
  if(len == 0){return;}
  
  if($("#quiz_ans").val().replace(/0/g,"").substring(0,len) != (String(quiz_siharaiten2).replace(/0/g,"") + String(quiz_siharaiten).replace(/0/g,"")).substring(0,len)){
    $("#quiz_test").text("違います")
      .css({"color":"red"})
      .transition({
        duration:300,
        complete:function(){$("#quiz_test").text("出題").css({"color":"black"})}
      })
      //$('body').animate({ scrollTop: 0 }, 0)
    $("#quiz_ans").val("")
    return
  }

  if(len != (String(quiz_siharaiten2).replace(/0/g,"") + String(quiz_siharaiten).replace(/0/g,"")).length){
    return
  }

  //親か子のロンなら
  if(oyaval=="oya" || oyaval=="ko" && tumoval=="ron"){
    if($("#quiz_ans").val().replace(/0/g,"")==String(quiz_siharaiten).replace(/0/g,"")){
      if($("#quiz_mode").val()=="g"){
        if(quizg_count<30){
          quizg_count=quizg_count+1
          $("#quizg_count").html(quizg_count+"/30")
          if(oyaval=="oya" && tumoval=="tumo"){
            quizg_score=quizg_score+quiz_siharaiten*3
          }
          else{
            quizg_score=quizg_score+quiz_siharaiten
          }
          $("#quizg_score").html(quizg_score+"点")
          $("#quizg_pertime").html("("+(Math.round((timelimit-$("#quizg_time").text())/quizg_count*100)/100).toFixed(2)+"/cps)")
          $("#quizg_yaku").html("正解:"+$("#yaku_list").html()).show()
          $("#quizg_tensu").html($("#tensu").html()).show()
          $("#quizg_kirimaehu").html($("#kirimaehu").html()).show()
          quiz_gazo()
          if(quizg_count>29){
            quizg_result()
          }
          else{
            quiz()
          }
        }
      }
      else{
        $("#yaku_list").show()
        $("#tensu").show()
        $("#kirimaehu").show()
        $("#quiz_test").html("")
        $("#quiz_do").css("background-color","#F9BF98")
        //$('body').animate({ scrollTop: 0 }, 0)
      }
    }else{
      $("#quiz_test").html("違います")
      .css({"color":"red"})
      .transition({
        duration:300,
        complete:function(){$("#quiz_test").css({"color":"black"})}
      })
      //$('body').animate({ scrollTop: 0 }, 0)   
    }
  }
  //子のツモなら
  else{
    //if($("#quiz_ans").val().replace(/0/g,"")==String(quiz_siharaiten).replace(/0/g,"") && $("#quiz_ans2").val().replace(/0/g,"")==String(quiz_siharaiten2).replace(/0/g,"")){
    if($("#quiz_ans").val().replace(/0/g,"")==String(quiz_siharaiten2).replace(/0/g,"") + String(quiz_siharaiten).replace(/0/g,"")){  
      if($("#quiz_mode").val()=="g"){
        if(quizg_count<30){
          quizg_count=quizg_count+1
          $("#quizg_count").html(quizg_count+"/30")

          quizg_score=quizg_score+quiz_siharaiten+quiz_siharaiten2*2

          $("#quizg_score").html(quizg_score+"点")

          $("#quizg_pertime").html("("+(Math.round((timelimit-$("#quizg_time").text())/quizg_count*100)/100).toFixed(2)+"/cps)")
          $("#quizg_yaku").html("正解:"+$("#yaku_list").html()).show()
          $("#quizg_tensu").html($("#tensu").html()).show()
          $("#quizg_kirimaehu").html($("#kirimaehu").html()).show()
          quiz_gazo()
          if(quizg_count>29){
            quizg_result()
          }
          else{
            quiz()
          }
        }
      }
      else{
        $("#yaku_list").show()
        $("#tensu").show()
        $("#kirimaehu").show()
        $("#quiz_test").html("出題")
        $("#quiz_do").css("background-color","#F9BF98")
        //$('body').animate({ scrollTop: 0 }, 0)
      }
    }else{
      $("#quiz_test").html("違います")
      .css({"color":"red"})
      .transition({
        duration:300,
        complete:function(){$("#quiz_test").css({"color":"black"})}
      })
      //$('body').animate({ scrollTop: 0 }, 0)
    }
  }

}

//がっつりクイズモードで、時間がきたらor30問答えたら実行する
function quizg_result(){
    //残り時間表示のtimerを止める
    clearInterval(timerArray.shift())
    //解答した点数*0.3+解答した数*10,000+残り時間*1,000
    quizg_score_total=quizg_score*0.3+quizg_count*10000+$("#quizg_time").text()*1000
    //$("#quizg_score").text(quizg_score)
    rank="Z"
    //30
    if(quizg_score_total>300000){
        rank="S"
    }
    //24
    else if(quizg_score_total>240000){
        rank="A"
    }
    //18
    else if(quizg_score_total>180000){
        rank="B"
    }
    //12
    else if(quizg_score_total>120000){
        rank="C"
    }
    //6
    else if(quizg_score_total>60000){
        rank="D"
    }
    else{
        rank="E"
    }
    
    if(quizg_count!=0){
        $("#quizg_pertime").html("("+(Math.round((timelimit-$("#quizg_time").text())/quizg_count*100)/100).toFixed(2)+"/cps)")
    }
    else{
        $("#quizg_pertime").html("(0/cps)")
    }
    
    quizg_score_comma=String(quizg_score_total).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' )
    $("#quizg_score").text(quizg_score_comma+":"+rank).focus()
    //alert("score:"+quizg_score+"\n"+"rank:"+rank)
    

    var highscoretext =""
    var array = JSON.parse(localStorage.getItem('ls_quiz_result'))
    if(array == void 0 || quizg_score_total > array[3]){
      var array_quiz_result = [quizg_count*1,$("#quizg_time").text()*1,quizg_score*1,quizg_score_total*1,rank,$("#quizg_pertime").html()]
      localStorage.setItem('ls_quiz_result', JSON.stringify(array_quiz_result));
      if(quizg_score_total > 0){highscoretext = "ハイスコア！"}
    }

    swal(highscoretext+"\n"+"\n"+
         "正答数:"+quizg_count+"×10000"+"\n"+
         "残時間:"+$("#quizg_time").text()+"×1000"+"\n"+
         "解答点:"+quizg_score+"×0.3"+"\n"+
         "\n"+
         "score:"+quizg_score_comma+"\n"+
         "rank:"+rank)
    
    $("#quiz_do").attr("disabled",true)
    $("#quiz_ans").attr("disabled",true)
    //$("#quiz_ans2").attr("disabled",true)
    $("#quizg_retry").css("background-color","#F9BF98")
    $("#quizg_bar").stop()

    
}

function quiz_scoreshow(){

  var array = JSON.parse(localStorage.getItem('ls_quiz_result'))
  if(array == void 0){return}
  console.log(array)
  swal("ハイスコア"+"\n"+"\n"+"正答数:"+array[0]+"×10000"+"\n"+
         "残時間:"+array[1]+"×1000"+"\n"+
         "解答点:"+array[2]+"×0.3"+"\n"+
         "\n"+
         "score:"+String(array[3]).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' )+"\n"+
         "rank:"+array[4]
         )
}

function quiz_scoreclear(){
  localStorage.removeItem("ls_quiz_result")
}
/*
function quizg_result(){
  clearInterval(timerArray.shift())
  quizg_score=quizg_score*1+$("#quizg_time").text()*1000
  $("#quizg_score").text(quizg_score)
  rank="Z"
  if(quizg_score>250000){
    rank="S"
  }
  else if(quizg_score>100000){
    rank="A"
  }
  else if(quizg_score>50000){
    rank="B"
  }
  else{
    rank="C"
  }
  if(quizg_count!=0){
    $("#quizg_pertime").html("("+(Math.round((timelimit-$("#quizg_time").text())/quizg_count*100)/100).toFixed(2)+"/cps)")
  }
  else{
    $("#quizg_pertime").html("(0/cps)")
  }
  $("#quizg_score").text($("#quizg_score").text()+":"+rank).focus()
  //alert("score:"+quizg_score+"\n"+"rank:"+rank)

  swal("score:"+quizg_score+"\n"+"rank:"+rank)

  $("#quiz_do").attr("disabled",true)
  $("#quiz_ans").attr("disabled",true)
  $("#quiz_ans2").attr("disabled",true)
    $("#quiz_retry").css("background-color","#F9BF98")
    
}
*/

function select_box(box){
  selected=box
  $("#quiz_ans").css({"border":"","margin":""})
  //$("#quiz_ans2").css({"border":"","margin":""})
  $("#quiz_ans"+box).css({"border":"2px solid blue","margin":"-1px"})
  $("#quiz_ans"+box).val("")

}

function select_num(num){
  if(startY==endY || Math.abs(startY-endY)<5){
    $("#quiz_ans").val($("#quiz_ans").val()+num)
    quiz_checkauto()
  }
}
function select_num_delete(){
  if(startY==endY || Math.abs(startY-endY)<5){
    $("#quiz_ans"+selected).val("")
  }
}
function select_num_next(){
  if(startY==endY || Math.abs(startY-endY)<5){
    if(selected==""){
      quiz_check()
    }
    else{
      selected=""
      //$("#quiz_ans2").css({"border":"","margin":""})
      $("#quiz_ans").css({"border":"2px solid blue","margin":"-1px"})
    }
  }
}