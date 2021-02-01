ippatu_count=0
rinsyan_count=0
haimap={
	11:"11",
    12:"12",
    13:"13",
    14:"14",
    15:"15",
    16:"16",
    17:"17",
    18:"18",
    19:"19",
    21:"21",
    22:"22",
    23:"23",
    24:"24",
    25:"25",
    26:"26",
    27:"27",
    28:"28",
    29:"29",
    31:"31",
    32:"32",
    33:"33",
    34:"34",
    35:"35",
    36:"36",
    37:"37",
    38:"38",
    39:"39",
    41:"41",
    42:"43",
    43:"45",
    44:"47",
    45:"51",
    46:"53",
    47:"55"
}
haimap2={
	"41":"1j1",
    "43":"1j2",
    "45":"1j3",
    "47":"1j4",
    "51":"1j5",
    "53":"1j6",
    "55":"1j7",
    "11":"1m1",
    "12":"1m2",
    "13":"1m3",
    "14":"1m4",
    "15":"1m5",
    "16":"1m6",
    "17":"1m7",
    "18":"1m8",
    "19":"1m9",
    "21":"1p1",
    "22":"1p2",
    "23":"1p3",
    "24":"1p4",
    "25":"1p5",
    "26":"1p6",
    "27":"1p7",
    "28":"1p8",
    "29":"1p9",
    "31":"1s1",
    "32":"1s2",
    "33":"1s3",
    "34":"1s4",
    "35":"1s5",
    "36":"1s6",
    "37":"1s7",
    "38":"1s8",
    "39":"1s9"
}

yamahai = [
	11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,
	21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,
	31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,
	41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47
]

yamahai_mt = []
glb_yamahai_mt = []

function game_toggle() {
    startY=endY
	erase_all()
	
  if($("#game_show").css("display")=="none"){
	swal({
		title:"Ready?",
		text:"[ルール]"+"\n\n"+"東場東風"+"\n"+"親番のみ"+"\n"+"鳴き なし"+"\n"+"ロンあがり なし",
		type:"info",
		showCancelButton: true,
		confirmButtonText: "OK",
	},
	function(){
		$("#quiz_hide").hide()
		$("#quiz_hide2").hide()
		$("#ls_button").hide()
		$("#yaku_list").hide()
		$("#tensu").hide()
		$("#kirimaehu").hide()
		$("#mati_text").hide()
		$("#howtouse").hide()
		$("#hutenimg_ko").hide()
		$("#quiz_mode").hide()
		$("#quiz_button").hide()
		$("#quiz_input_mode").hide()
		$("#quiz_scoreshow").hide()
		$("#sutehai_div").show()
		$("#game_show").show()
		$("#start_game").show()
		$("#retry_game").show()
		$("#auto_tumo_button").show()
		$("#game_button").val("一人打ち終了")
		$("#doramoji").hide()
		$("#hai_dora").hide()

		erase_all()
		start_game()
	})
  }
  else{
  	swal({
  		title:"麻雀点数計算機",
  		text:"一人打ちを終了しますか？",
  		type:"warning",
  		showCancelButton: true,
  		confirmButtonColor: "#DD6B55",
  		confirmButtonText: "OK!",
  	},
  	function(){
		$("#quiz_hide").show()
		$("#quiz_hide2").show()
		$("#ls_button").show()
	    $("#yaku_list").html("").show()
	    $("#tensu").html("").show()
	    $("#kirimaehu").html("").show()
        $("#mati_text").html("").show()
        $("#howtouse").show()
        $("#hutenimg_ko").show()
	    $("#quiz_mode").show()
	    $("#quiz_button").show()
		$("#quiz_input_mode").show()
		$("#quiz_scoreshow").show()
	    $("#sutehai_div").hide()
	    $("#game_show").hide()
		$("#start_game").hide()
		$("#retry_game").hide()
	    $("#auto_tumo_button").hide()
		$("#game_button").val("一人打ち麻雀")
		$("#doramoji").show()
		$("#hai_dora").show()
	    superreload()
	    $('body').animate({ scrollTop: 0 }, 'fast');
  	})

  }
}

function confirm_start_game(){

    swal({
         title:"麻雀点数計算機",
         text:"配牌しますか？",
         type:"warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",
         confirmButtonText: "OK!",
         },
         function(){
            start_game()
    })
}

function retry_start_game(){
	if(glb_yamahai_mt != void 0){
		swal({
			title:"麻雀点数計算機",
			text:"同じ配牌でやり直しますか？",
			type:"warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "OK!",
			},
			function(){
			   start_game("retry!")
			})

	}
}

var arrayHaiSute=new Array()

function start_game(retry){
	$('body').animate({ scrollTop: 0 }, 200)
	$("#riti").attr("checked", false )
	$("#driti").attr("checked", false )
	$("#ippatu").attr("checked", false )
	$("#rinsyan").attr("checked", false )
	$("#haitei").attr("checked", false )
	$("#tenho").attr("checked", false )
	$("#game_menu4").css("color","rgba(0,0,0,0.1)")
	$("#game_menu4").css("border","1px solid rgba(0,0,0,0.1)")
	$("#game_menu5").css("color","rgba(0,0,0,0.1)")
	$("#game_menu5").css("border","1px solid rgba(0,0,0,0.1)")
	$("#game_menu6").css("color","rgba(0,0,0,1)")
	$("#game_menu6").css("border","1px solid gray")
	$("#game_menu6").css({"background-color":"#F9BF98"})
	$("#start_game").css({"background-color":"#eee"})
	$("#sutehai_div").html("")
	$("#dorahaidiv").html("ドラ牌")
	arrayDora=new Array()
	DORA = new Array()
	DORA_hyoji = new Array()
	$("#guide_m").html("東一局、親番です")
	$("#guide_r").html("")
	erase_all()
	arrayX=["m","p","s","j"]
	//牌種ごとの枚数（0～4）
	arrayHaicount=new Array()
	arrayHaiSute=new Array()
	//14枚の牌の種類（0～34）
	arrayHai=[0,0,0,0,0,0,0,0,0,0,0,0,0]
	//上がり牌の種類
	arrayHaiA=[0]
	S=new Array()
	
	if(retry != void 0){
		yamahai_mt = glb_yamahai_mt.concat()
	}
	else{
		//ランダムな山牌を生成する
		var mt = new MersenneTwister()
		var j
		var k
		yamahai_mt = yamahai.concat()
		for(var i = 135; i>0; i--){
			j = mt.nextInt(0,135)
			k = yamahai_mt[i]
			yamahai_mt[i] = yamahai_mt[j]
			yamahai_mt[j] = k
		}
		glb_yamahai_mt = yamahai_mt.concat()
	}

	//test用 yamahai_mt = [11,11,12,13,14,16,17,22,23,24,34,35,36,15,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29]
	//yamahai_mt = [11,11,11,11,12,13,14,16,17,18,22,23,24,35,35,35,35,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29]
   

	//手牌を配る
	for(i=0;i<13;i++){
		imgsrc = haimap2[haimap[yamahai_mt[i]]]
		hai = yamahai_mt[i]

		if(arrayHaicount[hai] == void 0){
			arrayHaicount[hai] = 1
		}
		else{
			arrayHaicount[hai]=arrayHaicount[hai]*1+1
		}
		arrayHai[i]=haimap[hai]
	}

	//13牌を削除
	yamahai_mt.splice(0, 13)

	//アガリ牌を配る
	imgsrc = haimap2[haimap[yamahai_mt[0]]]
	hai = yamahai_mt[0]
	$("#agari").attr("src","./img2/"+imgsrc+".png")
	if(arrayHaicount[hai] == void 0){
		arrayHaicount[hai] = 1
	}
	else{
		arrayHaicount[hai] = arrayHaicount[hai]*1 + 1
	}
	arrayHaiA[0]=haimap[hai]

	//1牌を削除
	yamahai_mt.splice(0, 1)
	  



	img_sort()
	$("#mnd_last_count").text(40)
	$("#mnd_take_count").text(0)
	$("#select_count").text("13")
	$("#agari").parents("td").css("border-bottom","2px solid red")
	for(i=1;i<13;i++){
		$("#select"+i).parents("td").css("border-bottom","none")
	}
	set_S()
	agari_rekkyo()
	tensu()
	//$("#guide_m").text("「捨てる牌を選択して打牌ボタンを押してください」")
	check_ankan()
	if($("#tensu").text()!=""){
		$("#tenho").prop({'checked':'checked'})
		$("#game_menu4").css("color","rgba(255,0,0,1)")
		$("#game_menu4").css("border","1px solid gray")
	}
	else{
		$("#game_menu4").css("color","rgba(0,0,0,0.1)")
		$("#game_menu4").css("border","1px solid rgba(0,0,0,0.1)")
		$("#yaku_list").hide()
	  	$("#tensu").hide()
    	$("#kirimaehu").hide()
	}
	$("#zan_hai_count").text(136-14)
	$("#tumo_hai_count").text(0).css("color","black")
    $("#riti_hai_text").hide()
    $("#riti_hai_count").text("").css("color","black")
    
	dora()
	check_reach()
	shanten_hyoji()
	loading()
    setTimeout(function(){yukohai();end_loading()},0)
	//yukohai()
	yuko2_hyoji()
}

function img_sort(){
	arrayHai.sort()
	S.sort()
	for(i=0;i<13;i++){
		if(arrayHai[i]){
			$("#select"+(i*1+1)).attr("src","./img2/"+haimap2[arrayHai[i]]+".png").parents("td").show()
		}
		else{
			$("#select"+(i*1+1)).parents("td").hide()
		}
	}
}

function set_S(){
    
	S=new Array()
	A=new Array(arrayHaiA[0])
	for(i=0;i<13;i++){
		if(arrayHai[i]!=null){
			S.push(arrayHai[i])
		}
	}
}

function check_ankan(){
	T=new Array()
	T=$.merge([],S);
	if(A[0]!=null){T.push(A[0])}
	T.sort()
	T_count=T.length-3
	$("#game_menu3").css("color","rgba(0,0,0,0.1)")
	$("#game_menu3").css("border","1px solid rgba(0,0,0,0.1)")
	for(i=0;i<T_count;i++){
		if($.inArray(T[i],T,i+1)>-1 && $.inArray(T[i],T,$.inArray(T[i],T,i+1)*1+1)>-1 && $.inArray(T[i],T,$.inArray(T[i],T,i+2)*1+1)>-1){
			$("#game_menu3").css("color","rgba(0,0,0,1)")
			$("#game_menu3").css("border","1px solid gray")
			break;
		}
	}
}

//二回目のアンカンがおかしい
function da_ankan(){
    //タッチではなくスライドなら実行しない
	if(startY!=endY){return}
    //既に上がっていたら実行しない
    if($("#tensu").is(":visible")==true){
        $("#guide_m").html("既にあがっています")
        return
    }
    if($("#riti").is(':checked')){
        $("#guide_m").html("リーチ後はカンできません")
        return
    }
	T=new Array()
	T=$.merge([],S);
	for(i=0;i<13;i++){
		if(arrayHai[i]==null){
            //配列Tのi番目のインデックスをnullに置き換えする（要素数の削除はしない）
			T.splice(i,0,null)
		}
	}
	if(A[0]!=null){T.push(A[0])}
	T_length=T.length
	t=$("#select_count").text()*1
	t_count=0
	for(ti=0;ti<T_length;ti++){
		if(T[ti]==T[t]){
			t_count=t_count+1
		}
	}
	if(t_count==4){
		dora()
		rinsyan_count=1
		$("#rinsyan").prop({'checked':'checked'})
		ti_last=0
		for(ti=0;ti<T_length-1;ti++){
            if(T[ti]==T[t]){
				$("#select"+(ti+1)).attr("src","./img/none.png").parents("td").css("border-style","none").hide()
                //arrayHaiにnullを突っ込む
				arrayHai[ti]=null
				ti_last=ti
			}
		}
		count=$("#naki_count").html()*1+1
		$("#naki"+count).html('<img src="./img/1j9.png" style="width:100%;">')
        .parents("td").css("width","5.2%")
        $("#naki"+(parseInt(count)+1)).html('<img src="./img2/'+haimap2[T[t]]+'.png" style="width:50%;"><img src="./img2/'+haimap2[T[t]]+'.png" style="width:50%;">')
        .parents("td").css("width","12%")
        $("#naki"+(parseInt(count)+2)).html('<img src="./img/1j9.png" style="width:100%;">')
        .parents("td").css("width","5.2%")
        ANKAN.push(T[t]+T[t]+T[t]+T[t])
        $("#naki_count").html(count+2)
        
        //Tにはnulも含めて13牌+上がり牌を全てセットしているので、13は常に上がり牌を示す
        //上がり牌でアンカンする場合、

		if(T[13]==T[t]){
            arrayHaiA[0]=null
			$("#select_count").text("13")
			da_hai()
		}
		else{
			$("#select_count").text(ti_last)
			$("#select"+(ti_last+1)).parents("td").show()
			da_hai()
		}
	}
	else{
		//console.log("この牌ではカンできません")
		$("#guide_m").html("この牌ではカンできません")
	}
}
//オートツモボタンを押した時に実行するfunc
function auto_tumo(){
	if(startY!=endY){return}
    if($("#tensu").is(":visible")==true){
        $("#guide_m").html("既にあがっています")
        return
    }
    if(arrayHaicount_count>121){
        $("#guide_m").html("山牌がありません")
        $("#start_game").css({"background-color":"#F9BF98"})
        $("#game_menu6").css("color","rgba(0,0,0,0.1)")
        $("#game_menu6").css("border","1px solid rgba(0,0,0,0.1)")
        return
    }
    /*
    if($("#riti").is(':checked')){}else{
        $("#guide_r").html("")
    }
    */
	$("#guide_m").html("オートツモ中...")
	auto_tumo_count=0
	for(var i in arrayHaicount){
		auto_tumo_count=auto_tumo_count+arrayHaicount[i]
	}
	auto_tumo_count=Math.max(0,122-auto_tumo_count)
	$("#select_count").text("13")
	$("#agari").parents("td").css("border-bottom","2px solid red")
	for(i=1;i<14;i++){
  	$("#select"+i).parents("td").css("border-bottom","none")
    }
	for(ati=0;ati<auto_tumo_count;ati++){
		ippatu_count=ippatu_count-1
		if(ippatu_count<0){
			$("#ippatu").attr("checked", false )
		}

		//アガリ牌を引く
		imgsrc = haimap2[haimap[yamahai_mt[0]]]
		hai = yamahai_mt[0]
		$("#agari").attr("src","./img2/"+imgsrc+".png")
		if(arrayHaicount[hai]==null){
			arrayHaicount[hai]=1
		}
		else{
			arrayHaicount[hai]=arrayHaicount[hai]*1+1
		}
		sute_hai()
		arrayHaiA[0]=haimap[hai]

		//1牌を削除
		yamahai_mt.splice(0, 1)

		$("#zan_hai_count").text($("#zan_hai_count").text()-1)
		$("#tumo_hai_count").text($("#tumo_hai_count").text()*1+1)
        if($("#tumo_hai_count").text()>18){
            $("#tumo_hai_count").css("color","red")
        }
        set_S()
        agari_rekkyo()
        tensu()
        check_ankan()
        if($("#tensu").text()!=""){
            $("#game_menu4").css("color","rgba(0,0,0,1)")
            $("#game_menu4").css("border","1px solid gray")
            break;
        }
        else{
            $("#tensu").text("")
            $("#game_menu4").css("color","rgba(0,0,0,0.1)")
            $("#game_menu4").css("border","1px solid rgba(0,0,0,0.1)")
            $("#yaku_list").hide()
            $("#tensu").hide()
            $("#kirimaehu").hide()
        }
	}
    arrayHaicount_count=0
    for(var i in arrayHaicount){
        arrayHaicount_count=arrayHaicount_count+arrayHaicount[i]
    }
	$("#guide_m").html("")
}

function sute_hai(str){
	if(startY!=endY){return}
    
	if($("#tensu").is(":visible")==true){
		return
	}
    if(arrayHaicount_count>120){
        return
    }
	if($("#select_count").text()*1<13){
		if(str=="reach"){
			$("#sutehai_div").append("<img src='./img2/2"+haimap2[arrayHai[parseInt($("#select_count").text())]].substring(1,3)+".png' style='height:20px;'>")
            arrayHaiSute.push(arrayHai[parseInt($("#select_count").text())])
		}
        else if($("#riti").is(':checked')){}else{
			$("#sutehai_div").append("<img src='./img2/"+haimap2[arrayHai[parseInt($("#select_count").text())]]+".png' style='width:20px;'>")
            arrayHaiSute.push(arrayHai[parseInt($("#select_count").text())])
		}
	}else{
		if(str=="reach"){
			$("#sutehai_div").append("<img src='./img2/2"+haimap2[arrayHaiA[0]].substring(1,3)+".png' style='height:20px;'>")
		}
		else{
			$("#sutehai_div").append("<img src='./img2/"+haimap2[arrayHaiA[0]]+".png' style='width:20px;'>")
		}
		arrayHaiSute.push(arrayHaiA[0])
	}
}

function mes(){
	$("#guide_m").html("打牌中...")
} 

function da_hai(){
	//console.log(yamahai_mt)
	if(startY!=endY){return}
	if($("#tensu").is(":visible")==true){
		$("#guide_m").html("既にあがっています")
		return
	}
    arrayHaicount_count=0
    for(var i in arrayHaicount){
        arrayHaicount_count=arrayHaicount_count+arrayHaicount[i]
    }
    if(arrayHaicount_count>121){
        $("#guide_m").html("山牌がありません")
        $("#start_game").css({"background-color":"#F9BF98"})
        $("#game_menu6").css("color","rgba(0,0,0,0.1)")
        $("#game_menu6").css("border","1px solid rgba(0,0,0,0.1)")
        return
    }
	$("#zan_hai_count").text(Math.max(0,121-(arrayHaicount_count)+arrayDora.length))
	$("#tumo_hai_count").text(arrayHaicount_count-arrayDora.length-13)
    if($("#tumo_hai_count").text()>18){
        $("#tumo_hai_count").css("color","red")
    }
	if(arrayHaicount_count>121){
		$("#guide_m").html("山牌がありません")
        $("#start_game").css({"background-color":"#F9BF98"})
        $("#game_menu6").css("color","rgba(0,0,0,0.1)")
        $("#game_menu6").css("border","1px solid rgba(0,0,0,0.1)")
		return
    }
	else{
		//setTimeout(mes,0)
		//$("#guide_m").html("打牌中...")
		if(arrayHaicount_count==121){
			$("#haitei").prop({'checked':'checked'})
		}
		if(parseInt($("#select_count").text())<13){
			if($("#riti").is(':checked')){
				//console.log("リーチ中はツモ牌以外切れません")
				$("#guide_m").html("リーチ中はツモ牌以外切れません")
				return
			}else{
				ippatu_count=ippatu_count-1
				if(ippatu_count<0){
					$("#ippatu").attr("checked", false )
				}
				rinsyan_count=rinsyan_count-1
				if(rinsyan_count<0){
					$("#rinsyan").attr("checked", false )
				}
				//arrayHai[$("#select_count").text()]
                
                //おかしくなったらここをifにして、da_ankanした時にarrayHaiA[0]をnullにするように変えたのが原因　20160111
                if(arrayHaiA[0]!=null){
                    arrayHai[parseInt($("#select_count").text())]=arrayHaiA[0]
                }
                
				//$("#select"+(parseInt($("#select_count").text())*1+1)).attr("src","./img2/"+haimap2[arrayHaiA[0]]+".png")
				//setTimeout(img_sort,0)
				img_sort()

				//一枚牌を引く
				imgsrc = haimap2[haimap[yamahai_mt[0]]]
				hai = yamahai_mt[0]
				$("#agari").attr("src","./img2/"+imgsrc+".png")
				if(arrayHaicount[hai] == void 0){
					arrayHaicount[hai] = 1
				}
				else{
					arrayHaicount[hai] = arrayHaicount[hai]*1 + 1
				}
				arrayHaiA[0]=haimap[hai]

				//1牌を削除
				yamahai_mt.splice(0, 1)
				

		  }
		}
		else{
			ippatu_count=ippatu_count-1
			if(ippatu_count<0){
				$("#ippatu").attr("checked", false )
			}
			rinsyan_count=rinsyan_count-1
			if(rinsyan_count<0){
				$("#rinsyan").attr("checked", false )
			}
		  	//一枚牌を引く
			imgsrc = haimap2[haimap[yamahai_mt[0]]]
			hai = yamahai_mt[0]
			$("#agari").attr("src","./img2/"+imgsrc+".png")
			if(arrayHaicount[hai]==void 0){
				arrayHaicount[hai]=1
			}
			else{
				arrayHaicount[hai]=arrayHaicount[hai]*1+1
			}
			arrayHaiA[0]=haimap[hai]

			//1牌を削除
			yamahai_mt.splice(0, 1)

		}
		$("#select_count").text("13")
		

		$("#hai_tehai td").css("border-bottom","none")
		$("#agari").parents("td").css("border-bottom","2px solid red")
		set_S()
		$("#guide_m").html("")
		setTimeout(da_hai_check,0)
		shanten_hyoji()
		loading()
	    setTimeout(function(){yukohai();end_loading()},0)
		//yukohai()
		yuko2_hyoji()
	}
}

function da_hai_check(){
		agari_rekkyo()
		tensu()
		check_ankan()	  
		if($("#tensu").text()!=""){
			$("#game_menu4").css("color","rgba(0,0,0,1)")
			$("#game_menu4").css("border","1px solid gray")
		}
		else{
			if($("#riti").is(':checked') || $("#ippatu").is(':checked')){}else{
				check_reach()
			}
			$("#tensu").text("")
			$("#game_menu4").css("color","rgba(0,0,0,0.1)")
			$("#game_menu4").css("border","1px solid rgba(0,0,0,0.1)")
			$("#yaku_list").hide()
			$("#tensu").hide()
			$("#kirimaehu").hide()
		}
}

//ツモボタンを押した時に実行するfunc
function game_agari(){
	if(startY!=endY){return}
	if($("#tensu").is(":visible")==true){
		$("#guide_m").html("既にあがっています")
		return
	}
	set_S()
	if($.inArray(A[0],arrayHaiSute)>-1){
		//console.log("捨て牌では上がれません")
		//return
	}
    //まずドラを除いて上がっているか確認する
	agari_rekkyo()
	tensu()
    //上がっていたら
	if($("#tensu").text()!=""){
        //リーチしているか、または、ダブルリーチしているか、または一発なら（一発いる？）、ドラの数だけ裏ドラを乗せる
        if($("#riti").is(':checked') || $("#driti").is(':checked') || $("#ippatu").is(':checked')){
            uradora_count=arrayDora.length
            for(uradorai=0;uradorai<uradora_count;uradorai++){
                dora()
            }
        }
        dora_count=0
        for(var key in S){
            if($.inArray(S[key],arrayDora)>-1){
                dora_count=dora_count*1+1
            }
        }
        if($.inArray(A[0],arrayDora)>-1){
            dora_count=dora_count*1+1
        }
        for(var key in NAKI){
            for(nakii=0;nakii<NAKI[key].length/2;nakii+=2){
                if($.inArray(NAKI[key].substring(nakii,nakii+2),arrayDora)>-1){
                    dora_count=dora_count*1+1
                }
            }
        }
        for(var key in ANKAN){
            for(nakii=0;nakii<ANKAN[key].length;nakii+=2){
                if($.inArray(ANKAN[key].substring(nakii,nakii+2),arrayDora)>-1){
                    dora_count=dora_count*1+1
                }
            }
        }
        
		//ドラはHTMLに書き残さずに、DORA配列に入れることにする
		//HTMLは赤ドラだけにする
		//$("#dora").val(dora_count)
        //再度計算する
        agari_rekkyo()
        tensu()
        
		if($("#tumo_hai_count").text()==1 && NAKI.length==0 && ANKAN.length==0){
			$("#tenho").prop({'checked':'checked'})
			tensu()
		}
		$("#yaku_list").show()
		$("#tensu").show()
		$("#kirimaehu").show()
        $("#game_menu3").css("color","rgba(0,0,0,0.1)")
        $("#game_menu3").css("border","1px solid rgba(0,0,0,0.1)")
        $("#game_menu4").css("color","rgba(0,0,0,0.1)")
        $("#game_menu4").css("border","1px solid rgba(0,0,0,0.1)")
        $("#game_menu5").css("color","rgba(0,0,0,0.1)")
        $("#game_menu5").css("border","1px solid rgba(0,0,0,0.1)")
        $("#game_menu6").css("color","rgba(0,0,0,0.1)")
        $("#game_menu6").css("border","1px solid rgba(0,0,0,0.1)")

		$("#start_game").css({"background-color":"#F9BF98"})
	}
	else{
		//console.log("この手牌では上がれません")
		$("#guide_m").html("この手牌では上がれません")
	}
}

function check_reach(){

    //リーチボタンを初期化する
	$("#game_menu5").css("color","rgba(0,0,0,0.1)")
	$("#game_menu5").css("border","1px solid rgba(0,0,0,0.1)")
	$("#guide_r").html("")
	S_length=S.length
    
    //dora_count:ドラの数
	dora_count=0
    //ドラの数を数える（上がり牌）
	if($.inArray(A[0],arrayDora)>-1){
		dora_count=dora_count*1+1
	}
    //ドラの数を数える（明鳴牌）
	for(var key in NAKI){
		NAKI_length=NAKI[key].length/2
		for(nakii=0;nakii<NAKI_length;nakii+=2){
			if($.inArray(NAKI[key].substring(nakii,nakii+2),arrayDora)>-1){
				dora_count=dora_count*1+1
			}
		}
	}
    //ドラの数を数える（暗鳴牌）
	for(var key in ANKAN){
		ANKAN_length=ANKAN[key].length
		for(nakii=0;nakii<ANKAN_length;nakii+=2){
			if($.inArray(ANKAN[key].substring(nakii,nakii+2),arrayDora)>-1){
				dora_count=dora_count*1+1
			}
		}
	}
    //手牌
	loop1:for(ti=0;ti<S_length;ti++){
		if(S[ti]==S[ti*1+1]){continue;}
		x=1
		y=1
		mati=""
		for(cr_i=0;cr_i<34;cr_i++){
			hai=x*10+y
			if(arrayHaicount[hai]==null){
		  	arrayHaicount[hai]=0
		  }			
			if(arrayHaicount[hai]>3){
				if(y<9){y=y+1}else{x=x+1,y=1}
				continue;
			}
			else{
				S[ti]=haimap[hai]
				
				dora_count2=dora_count
				for(var key in S){
					if($.inArray(S[key],arrayDora)>-1){
						dora_count2=dora_count2*1+1
					}
				}
				//$("#dora").val(dora_count2)

			  agari_rekkyo()
			  tensu()
			  S[ti]=arrayHai[ti]
			  for(Sti=ti;Sti<13;Sti++){
			  	if(arrayHai[Sti]!=null){
			  		Sti=(arrayHai[Sti])
			  		break
			  	}
				}
			  if($("#tensu").text()!=""){

			  	mati=mati+"待<img src='./img2/"+haimap2[haimap[hai]]+".png' style='width:20px;'>"+"*"+(4-arrayHaicount[hai])+""+"("+han+"翻"+hu+"符)"+","
			  	//mati=mati+haimap2[haimap[hai]]+"("+(4-arrayHaicount[hai])+"/4"+"("+han+"翻"+hu+"符)"+","
			  		//$("#select"+(i*1+1)).attr("src","./img2/"+haimap2[arrayHai[i]]+".png").parents("td").show()
			  	//break
			  	//break loop1;
			  }
			}
			if(y<9){y=y+1}else{x=x+1,y=1}
		}
		if(mati!=""){
			//console.log("打"+ti+":"+mati)
			//$("#guide_r").html($("#guide_r").html()+"打"+"<img src='./img2/"+haimap2[Sti]+".png' style='width:20px;'>"+":"+mati+"<br>")
			
			$("#game_menu5").css("color","rgba(0,0,0,1)")
			$("#game_menu5").css("border","1px solid gray")
		}
	}
    //ここでset_Sしてもいいのかな？
    //鳴くと鳴いた箇所にnullを入れるけど、上のforではnullにも値をはめて試していく過程で配列Sにnullが入りっぱなしになっているので一度set_Sをやり直す
    set_S()
	//if($("#tensu").text()==""){
		if($.inArray(A[0],arrayDora)>-1){
			//$("#dora").val($("#dora").val()-1)
		}
    
		x=1
		y=1
		mati=""
		for(cri=0;cri<34;cri++){
			hai=x*10+y
			if(arrayHaicount[hai]==null){
		  	arrayHaicount[hai]=0
		  }
			if(arrayHaicount[hai]>3 || A[0]==haimap[hai]){
				if(y<9){y=y+1}else{x=x+1,y=1}
				continue;
			}
			else{
				A[0]=haimap[hai]
			  agari_rekkyo()
			  tensu()
			  A[0]=arrayHaiA[0]
			  if($("#tensu").text()!=""){
			  	
			  	//console.log("check"+ti)
			  	//mati=mati+haimap2[haimap[hai]]+"("+(4-arrayHaicount[hai])+"/4"+"("+han+"翻"+hu+"符)"+","
			  	mati=mati+"待<img src='./img2/"+haimap2[haimap[hai]]+".png' style='width:20px;'>"+"*"+(4-arrayHaicount[hai])+""+"("+han+"翻"+hu+"符)"+","
			  	//break;
			  }
			}
			if(y<9){y=y+1}else{x=x+1,y=1}
		}
		if(mati!=""){
				//console.log("打"+ti+":"+mati)
				//$("#guide_m").html($("#guide_m").html()+"打"+ti+":"+mati+"<br>")
				//$("#guide_r").html($("#guide_r").html()+"打"+"<img src='./img2/"+haimap2[A[0]]+".png' style='width:20px;'>"+":"+mati+"<br>")
				$("#game_menu5").css("color","rgba(0,0,0,1)")
			  $("#game_menu5").css("border","1px solid gray")
		}
	//}
	set_S()
}

function da_reach(){
	if(startY!=endY){return}
    if($("#tensu").is(":visible")==true){
        $("#guide_m").html("既にあがっています")
        return
    }
	if($("#riti").is(':checked')){
		//console.log("既にリーチしています")
		$("#guide_m").html("既にリーチしています")
	}else{
		if($("#select_count").text()=="13"){
			
			x=1
			y=1
			for(dri=0;dri<34;dri++){
				hai=x*10+y
				if(arrayHaicount[hai]>3){
					if(y<9){y=y+1}else{x=x+1,y=1}
					continue;
				}
				else{
					A[0]=haimap[hai]
					agari_rekkyo()
					tensu()
					A[0]=arrayHaiA[0]
					if($("#tensu").text()!=""){
						$("#guide_m").html("リーチ!")
						$("#game_menu5").css("color","rgba(0,0,255,1)")
						$("#game_menu5").css("border","1px solid blue")
						$("#ippatu").prop({'checked':'checked'})
						ippatu_count=1
						sute_hai("reach")
						da_hai()
						if($("#tumo_hai_count").text()==1 && NAKI.length==0 && ANKAN.length==0){
							$("#driti").prop({'checked':'checked'})
							$("#riti_hai_count").text($("#tumo_hai_count").text())
							$("#riti_hai_text").show()
							if($("#riti_hai_count").text()>18){
								$("#riti_hai_count").css("color","red")
							}
							//$("#riti_hai_count").text("(立直:"+$("#tumo_hai_count").text()+")")
						}
						else{
							$("#riti").prop({'checked':'checked'})
							//$("#riti_hai_count").text("(立直:"+$("#tumo_hai_count").text()+")")
							$("#riti_hai_count").text($("#tumo_hai_count").text())
							$("#riti_hai_text").show()
							if($("#riti_hai_count").text()>18){
								$("#riti_hai_count").css("color","red")
							}
						}
						$("#tensu").text("")
						break;
				  }
				}
				if(y<9){y=y+1}else{x=x+1,y=1}
			}
		}
		else{
			T=new Array()
			T=$.merge([],S);
			for(i=0;i<13;i++){
				if(arrayHai[i]==null){
					T.splice(i,0,null)
				}
			}
			//if(A[0]!=null){T.push(A[0])}
			T_length=T.length
			t=$("#select_count").text()*1
			t2=t
			for(i=0;i<t;i++){
				if(arrayHai[i]==null){
					t2=t2-1
				}
			}
			//console.log(t+","+t2)
			S[t2]=arrayHaiA[0]
			x=1
			y=1
			for(dr_i=0;dr_i<34;dr_i++){
				hai=x*10+y
				if(arrayHaicount[hai]>3){
					if(y<9){y=y+1}else{x=x+1,y=1}
						continue;
					}
				else{
					A[0]=haimap[hai]
					agari_rekkyo()
					tensu()
					A[0]=arrayHaiA[0]
					//console.log(haimap[hai])
					if($("#tensu").text()!=""){
					  $("#guide_m").html("リーチ!")
					  $("#game_menu5").css("color","rgba(0,0,255,1)")
					  $("#game_menu5").css("border","1px solid blue")
					  $("#ippatu").prop({'checked':'checked'})
					  ippatu_count=1
					  sute_hai("reach")
					  da_hai()
					  $("#riti").prop({'checked':'checked'})
                      //$("#riti_hai_count").text("(立直:"+$("#tumo_hai_count").text()+")")
                      $("#riti_hai_count").text($("#tumo_hai_count").text())
                      $("#riti_hai_text").show()
                      if($("#riti_hai_count").text()>18){
                        $("#riti_hai_count").css("color","red")
                      }
					  $("#tensu").text("")				  
					  break;
					}
				}
				if(y<9){y=y+1}else{x=x+1,y=1}
			}
			S[t2]=arrayHai[t2]
			//$("#tensu").text("")
		}
	}
	//kore = window.prompt("",0)
	//yamahai_mt[1] = kore*1
}




function dora(){
	arrayHaicount_count=0
	for(var i in arrayHaicount){
		arrayHaicount_count=arrayHaicount_count+arrayHaicount[i]
	}
	$("#zan_hai_count").text(Math.max(0,121-(arrayHaicount_count)+arrayDora.length))
	$("#tumo_hai_count").text(arrayHaicount_count-arrayDora.length-13)
    if($("#tumo_hai_count").text()>18){
        $("#tumo_hai_count").css("color","red")
    }
	if(arrayHaicount_count>135){console.log("牌数オーバー")}
	else{
		//ドラ牌を引く

		//ドラ表示牌
		hai = yamahai_mt[0]
		x = String(yamahai_mt[0]).charAt(0)*1
		y = String(yamahai_mt[0]).charAt(1)*1
		if(x == 4){
			if(y==3){
				y2=1
			}else if(y==7){
				y2=4
			}else{
				y2=y*1+1
				}
			}
		else{
			if(y == 9){
				y2 = 1
			}else{
				y2 = y*1+1
			}
		} 
		//ドラ牌
		hai2 = x*10 + y2
		//imgsrc=haimap2[hai2]
		imgsrc = haimap2[haimap[hai2]]

		$("#dorahaidiv").append("<img src='./img2/"+imgsrc+".png' style='width:30px;'>")
		if(arrayHaicount[hai]==null){
			arrayHaicount[hai]=1
		}
		else{
			arrayHaicount[hai]=arrayHaicount[hai]*1+1
		}
		arrayDora.push(haimap[hai2])
		DORA.push(haimap[hai2])

		//1牌を削除
		yamahai_mt.splice(0, 1)
	}
}

/*
function check_mentsu2(){
	arrayMentsu=new Array
	arrayI=[14,17,21,24]
	for(I=0;I<4;I++){
		i=arrayI[I]
		//刻子チェック
		if(arrayHai[i]==arrayHai[i+1] && arrayHai[i]==arrayHai[i+2]){
			arrayMentsu.push(haimap[arrayHai[i]],haimap[arrayHai[i+1]],haimap[arrayHai[i+2]])
			//console.log(haimap[arrayHai[i]]+","+haimap[arrayHai[i+1]]+","+haimap[arrayHai[i+2]])
			//alert("!")
		}
		//順子チェック
		else{
			ary=new Array(haimap[arrayHai[i]],haimap[arrayHai[i+1]],haimap[arrayHai[i+2]])			
			ary.sort()
			//console.log(ary[0].toString().substring(1,1)+","+ary[1].toString().substring(1,1)+","+ary[2].toString().substring(1,1))
			if(ary[0].toString().substring(0,1)!="4" &&
				 ary[0].toString().substring(0,1)==ary[1].toString().substring(0,1) &&
				 ary[0].toString().substring(0,1)==ary[2].toString().substring(0,1) &&
				 ary[0].toString().substring(1,2)*1+1==ary[1].toString().substring(1,2)*1 &&
				 ary[0].toString().substring(1,2)*1+2==ary[2].toString().substring(1,2)*1){
				arrayMentsu.push(ary[0].toString(),ary[1].toString(),ary[2].toString())
				//console.log(haimap[arrayHai[i]]+","+haimap[arrayHai[i+1]]+","+haimap[arrayHai[i+2]])
				//alert("!")
			}
		}
	}
	if(arrayHai[20]==arrayHai[27]){
		arrayMentsu.push(haimap[arrayHai[20]],haimap[arrayHai[27]])
	}
	if(arrayMentsu.length==14){
		alert("a")
	}
}
*/
function check_mentsu(){
	arrayMentsu=new Array
	arrayI=[14,17,21,24]
	for(I=0;I<4;I++){
		i=arrayI[I]
		//刻子チェック
		if(arrayHai[i]==arrayHai[i+1] && arrayHai[i]==arrayHai[i+2]){
			arrayMentsu.push(arrayHai[i],arrayHai[i+1],arrayHai[i+2])
			//console.log(arrayHai[i]+","+arrayHai[i+1]+","+arrayHai[i+2])
			//alert("!")
		}
		//順子チェック
		else{
			ary=new Array(arrayHai[i],arrayHai[i+1],arrayHai[i+2])			
			ary.sort()
			//console.log(ary[0].substring(0,1)+","+ary[1].toString().substring(1,2)+","+ary[2].toString().substring(2,3))
			//console.log(ary[0]+","+ary[1]+","+ary[2])

			if(ary[0].substring(1,2)!="j" &&
				 ary[0].substring(1,2)==ary[1].substring(1,2) &&
				 ary[0].substring(1,2)==ary[2].substring(1,2) &&
				 ary[0].substring(2,3)*1+1==ary[1].substring(2,3)*1 &&
				 ary[0].substring(2,3)*1+2==ary[2].substring(2,3)*1){
				arrayMentsu.push(ary[0].toString(),ary[1].toString(),ary[2].toString())
				//console.log(arrayHai[i]+","+arrayHai[i+1]+","+arrayHai[i+2])
				//alert("!")
			}
		}
	}
	if(arrayHai[20]==arrayHai[27]){
		arrayMentsu.push(arrayHai[20],arrayHai[27])
	}
	if(arrayMentsu.length==14){
		arrayMentsu.pop()
		for(i=0;i<13;i++){
			arrayMentsu[i]=haimap2[arrayMentsu[i]]
		}
		S=new Array()
		S=$.merge([],arrayMentsu);
		A=new Array(arrayMentsu[12])
		agari_rekkyo();tensu();$('body').animate({ scrollTop: 0 }, 200)
		$("#mnd_siharaiten").text(
			quiz_siharaiten*3
			*Math.round((1+$("#mnd_last_count").text()*0.1+(4-$("#mnd_take_count").text())*0.1)*10)/10
			+"("+(quiz_siharaiten*3)+"*倍率"+Math.round((1+$("#mnd_last_count").text()*0.1+(4-$("#mnd_take_count").text())*0.1)*10)/10+")"
		)
	}

}
$(function () {
  $("#mnd_table td").click(function () {
  	change_hai($("img",this).attr("src"),$("#mnd_table td").index(this))
  })})

function change_hai(str,num){
	if($("#mnd_selecting_file").text()==""){
		//かなり無理やり
		str=str.replace(/\\/g,'/').replace( /.*\//, '' ).substr(0,3)
		$("#mnd_selecting_file").text(str)
		$("#mnd_selecting_num").text(num)
		//$("#mnd_table td:eq("+num+")").css("border","1px solid gray")
	}
	else{
		str=str.replace(/\\/g,'/').replace( /.*\//, '' ).substr(0,3)
		$("#mnd_table td:eq("+num+") img").attr("src","./img2/"+$("#mnd_selecting_file").text()+".png")
		$("#mnd_table td:eq("+$("#mnd_selecting_num").text()+") img").attr("src","./img2/"+str+".png")
		arrayHai[num]=$("#mnd_selecting_file").text()
		
		arrayHai[$("#mnd_selecting_num").text()]=str
		
		if($("#mnd_selecting_num").text()>13 && num<14){
			$("#mnd_take_count").text($("#mnd_take_count").text()*1+1)
			if($("#mnd_last_count").text()>0){
				for(i=0;i<1;i++){
			  	x=Math.floor(Math.random()*4+1)-1
			  	if(x==0){
			  	  y=Math.floor(Math.random()*7+1)
			  	}
			  	else{
			  	  y=Math.floor(Math.random()*9+1)
			  	}
			  	imgsrc="1"+arrayX[x]+y
			  	hai=x*7+Math.max(x-1,0)*2+y*1
			  	if(arrayHaicount[hai]>3){i=i-1;continue;}
			  	$("#mnd_table td:eq("+num+") img").attr("src","./img2/"+imgsrc+".png")
			  	arrayHaicount[hai]=arrayHaicount[hai]*1+1
			  	arrayHai[i]=imgsrc
			  	$("#mnd_last_count").text($("#mnd_last_count").text()-1)
			  }
			}
		}
		else if(num>13 && $("#mnd_selecting_num").text()<14){
			$("#mnd_take_count").text($("#mnd_take_count").text()*1+1)
			if($("#mnd_last_count").text()>0){
				for(i=0;i<1;i++){
			  	x=Math.floor(Math.random()*4+1)-1
			  	if(x==0){
			  	  y=Math.floor(Math.random()*7+1)
			  	}
			  	else{
			  	  y=Math.floor(Math.random()*9+1)
			  	}
			  	imgsrc="1"+arrayX[x]+y
			  	hai=x*7+Math.max(x-1,0)*2+y*1
			  	if(arrayHaicount[hai]>3){i=i-1;continue;}
			  	$("#mnd_table td:eq("+$("#mnd_selecting_num").text()+") img").attr("src","./img2/"+imgsrc+".png")
			  	arrayHaicount[hai]=arrayHaicount[hai]*1+1
			  	arrayHai[i]=imgsrc
			  	$("#mnd_last_count").text($("#mnd_last_count").text()-1)
			  }
			}
		}
  	$("#mnd_selecting_file").text("")
		$("#mnd_selecting_num").text("")
	}

}














function game_agari_rekkyo() {
	G=new Array()
	ANKO=new Array()
	S2=new Array()
	T=new Array()
	M=new Array()
	k=new Array()
	s=new Array()
	g=0

	S2=$.merge([],S);
	if(A[0]!=null){S2.push(A[0])}
	S2.sort()
  for(i=0;i<S2.length;i++){
    if(S2[i]!=S2[i-1]){
      T=$.merge([],S2);
      M=new Array()
      k=new Array()
      s=new Array()
	    if(T[i]==T[i+1] && T[i+1]!=null){
	      j1=T[i]
	      j2=T[i+1]
	      M.push(T[i].toString()+T[i+1].toString())
	      T.splice(i,1)
	      T.splice(i,1)
	      game_mentsu_rekkyo()
	      

	    }
    }
  }
  $("#hyouji").html("")
  for(g=0;g<G.length;g++){
    $("#hyouji").html($("#hyouji").html()+G[g][0]+","+G[g][1]+","+G[g][2]+","+G[g][3]+","+G[g][4]+"<br>")
  }
}

function game_mentsu_rekkyo() {
  if(T.length==0){
    G[g]=new Array()
    for(a=0;a<M.length;a++){
      G[g][a]=M[a]
    }
    g=g+1
  }
  T.sort()
  for(i=0;i<1;i++){
	  if($.inArray(T[i],T,i+1)>-1 && $.inArray(T[i],T,$.inArray(T[i],T,i+1)*1+1)>-1){
	    M.push(T[i].toString()+T[i].toString()+T[i].toString())
	    k1=T[i]
	    k.push(T[i],T[i],T[i])    //Tから刻子を削除する sortしてることが前提 危ない
	    T.splice(i,1)
	    T.splice(i,1)
	    T.splice(i,1)
	    game_mentsu_rekkyo()
	    T.unshift(k.pop(),k.pop(),k.pop())
	    M.pop()
	  }
	  if($.inArray((T[i]*1+1).toString(),T)>-1 && $.inArray((T[i]*1+2).toString(),T)>-1){
	    M.push(T[i]+(T[i]*1+1)+(T[i]*1+2))
	    s1=T[i]
	    s.push(T[i],(T[i]*1+1).toString(),(T[i]*1+2).toString())
	    T.splice(i,1)
	    T.splice($.inArray((s1*1+1).toString(),T),1)
	    T.splice($.inArray((s1*1+2).toString(),T),1)
	    game_mentsu_rekkyo()
	    T.unshift(s.pop(),s.pop(),s.pop())
	    M.pop()
	  }
	}
  //console.log(T.length+",")
	        if(T.length==6){
  	//console.log("1st")
  }
}

function test(){

	const starttime = performance.now()
	for(i=0;i<100000;i++){
		var a = 1
    	var b = 2
		c = Math.min(a,b)
	}
	const endtime = performance.now()
    console.log(endtime - starttime)

}

function test2(){

	const starttime = performance.now()
	for(i=0;i<100000;i++){
		var a = 1
    	var b = 2
		if(a>b){c=b}else{c=a}
	}
	const endtime = performance.now()
    console.log(endtime - starttime)



}