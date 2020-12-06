function reset_all(){
    
    swal({
         title:"点数メモの初期化",
         text:"点数メモを初期化しますか？",
         type:"warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",
         confirmButtonText: "OK!",
         },
         function(){
         $("#scoreinfo_table tbody tr").remove()
         $("#ten_moti").val(25000)
         $("#ten_kaesi").val(30000)
         $("#ten_oka32").val(10000)
         $("#ten_oka41").val(20000)
         $("#playerA_name").val("")
         $("#playerA_name").val("")
         $("#playerA_name").val("")
         $("#playerA_name").val("")
         $("#playerB_name").val("")
         $("#playerC_name").val("")
         $("#playerD_name").val("")
         $("#playerA_siha").val("")
         $("#playerB_siha").val("")
         $("#playerC_siha").val("")
         $("#playerD_siha").val("")
         $("#playerA_pura").html("")
         $("#playerB_pura").html("")
         $("#playerC_pura").html("")
         $("#playerD_pura").html("")
         //calc_siha_ten()
         $("#playerA_gen").val($("#ten_moti").val())
         $("#playerB_gen").val($("#ten_moti").val())
         $("#playerC_gen").val($("#ten_moti").val())
         $("#playerD_gen").val($("#ten_moti").val())
         $("#playerA_rire1").text("")
         $("#playerB_rire1").text("")
         $("#playerC_rire1").text("")
         $("#playerD_rire1").text("")
         localStorage.removeItem("ls_tenmemo")
         })
    
    
    
}

function localstorage_remove_tenmemo(){
    

}

function select_siha_ten(id) {
    $("#"+id).val("")
    localstorage_tenmemosave()
}


function add_siha_ten(){
    A=$('#playerA_siha').val()
    B=$('#playerB_siha').val()
    C=$('#playerC_siha').val()
    D=$('#playerD_siha').val()
    
    if(A==""){
        if(B=="" || C=="" || D==""){
            swal({
                 title:"支払点入力エラー",
                 text:"点数を受ける人：空白(入力しない)<br>点数を支払う人：入力<br>点数を<a style='color:#F8BB86'>支払わない</a>人：0を入力",
                 html:true
                 })
            return
        }
        A="+"+(B*1+C*1+D*1)
        B=B*-1
        C=C*-1
        D=D*-1
    }
    else if(B==""){
        if(A=="" || C=="" || D==""){
            swal({
                 title:"支払点入力エラー",
                 text:"点数を受ける人：空白(入力しない)<br>点数を支払う人：入力<br>点数を<a style='color:#F8BB86'>支払わない</a>人：0を入力",
                 html:true
                 })
            return
        }
        B="+"+(A*1+C*1+D*1)
        A=A*-1
        C=C*-1
        D=D*-1
    }
    else if(C==""){
        if(A=="" || B=="" || D==""){
            swal({
                 title:"支払点入力エラー",
                 text:"点数を受ける人：空白(入力しない)<br>点数を支払う人：入力<br>点数を<a style='color:#F8BB86'>支払わない</a>人：0を入力",
                 html:true
                 })
            return
        }
        C="+"+(A*1+B*1+D*1)
        A=A*-1
        B=B*-1
        D=D*-1
    }
    else if(D==""){
        if(A=="" || B=="" || C==""){
            swal({
                 title:"支払点入力エラー",
                 text:"点数を受ける人：空白(入力しない)<br>点数を支払う人：入力<br>点数を<a style='color:#F8BB86'>支払わない</a>人：0を入力",
                 html:true
                 })
            return
        }
        D="+"+(A*1+B*1+C*1)
        A=A*-1
        B=B*-1
        C=C*-1
    }
    else if(A!="" && B!="" && C!="" && D!=""){
        swal({
             title:"支払点入力エラー",
             text:"点数を<a style='color:#F8BB86'>受ける</a>人：空白(入力しない)<br>点数を支払う人：入力<br>点数を支払わない人：0を入力",
             html:true
             })
        return
    }
    
    var num = $("#rire").find("tr").length
    $("#scoreinfo_table tbody").append("<tr><td style='border:none'><div style='display:none;'><input type='button'  style='border:none;border-bottom:1px dotted gray;' class='deleterow' value='削除'></div></td><td><div id='rireA" + num + "' style='display:none;'>"+A+"</div></td><td><div id='rireB" + num + "' style='display:none;'>"+B+"</div></td><td><div id='rireC" + num + "' style='display:none;'>"+C+"</div></td><td><div id='rireD" + num + "' style='display:none;'>"+D+"</div></td></tr>");
    $("#scoreinfo_table tbody td div").slideDown("fast");
    $("#playerA_siha").val("")
    $("#playerB_siha").val("")
    $("#playerC_siha").val("")
    $("#playerD_siha").val("")


    calc_siha_ten()
}

function calc_siha_ten(){
    
    
    
    $("#playerA_rire1").text($("#ten_moti").val())
    $("#playerB_rire1").text($("#ten_moti").val())
    $("#playerC_rire1").text($("#ten_moti").val())
    $("#playerD_rire1").text($("#ten_moti").val())
    
    
    
    row_count=$("#scoreinfo_table tbody").children().length
    
    A=$("#playerA_rire1").text()*1
    B=$("#playerB_rire1").text()*1
    C=$("#playerC_rire1").text()*1
    D=$("#playerD_rire1").text()*1
    
    for(i=0;i<row_count;i++){
        A=A+$("#scoreinfo_table tbody tr:nth-child("+(i+1)+") td:nth-child(2)").text()*1
        B=B+$("#scoreinfo_table tbody tr:nth-child("+(i+1)+") td:nth-child(3)").text()*1
        C=C+$("#scoreinfo_table tbody tr:nth-child("+(i+1)+") td:nth-child(4)").text()*1
        D=D+$("#scoreinfo_table tbody tr:nth-child("+(i+1)+") td:nth-child(5)").text()*1
    }
    
    $("#playerA_gen").val(A)
    $("#playerB_gen").val(B)
    $("#playerC_gen").val(C)
    $("#playerD_gen").val(D)
    
    calc_pura_ten()
    
    
}

function calc_pura_ten(){
    
    A=$("#playerA_gen").val()
    B=$("#playerB_gen").val()
    C=$("#playerC_gen").val()
    D=$("#playerD_gen").val()
    
    if((A*1+B*1+C*1+D*1)!=$("#ten_moti").val()*4){
        swal({
             title:"±表記エラー",
             text:"現在の点 合計："+(A*1+B*1+C*1+D*1)+"点<br>持ち点の合計と一致しません",
             confirmButtonText: "構わず表示する",
             html:true
             })
    }
    
    var tenrankarray = [
                        {name:"A",ten:A,fugo:"+"},
                        {name:"B",ten:B,fugo:"+"},
                        {name:"C",ten:C,fugo:"+"},
                        {name:"D",ten:D,fugo:"+"}
                        ]
    
    tenrankarray.sort(function(a,b){
                      if(a.ten<b.ten) return 1;
                      if(a.ten>b.ten) return -1;
                      return 0;
                      });
    
    tenrankarray[0]["ten"]=tenrankarray[0]["ten"] - $("#ten_kaesi").val() + ($("#ten_kaesi").val() - $("#ten_moti").val())*4 + $("#ten_oka41").val()*1
    tenrankarray[1]["ten"]=tenrankarray[1]["ten"] - $("#ten_kaesi").val() + $("#ten_oka32").val()*1
    tenrankarray[2]["ten"]=tenrankarray[2]["ten"] - $("#ten_kaesi").val() - $("#ten_oka32").val()
    tenrankarray[3]["ten"]=tenrankarray[3]["ten"] - $("#ten_kaesi").val() - $("#ten_oka41").val()
    
    if(tenrankarray[0]["ten"]>0){tenrankarray[0]["fugo"]="+"}else{tenrankarray[0]["fugo"]=""}
    if(tenrankarray[1]["ten"]>0){tenrankarray[1]["fugo"]="+"}else{tenrankarray[1]["fugo"]=""}
    if(tenrankarray[2]["ten"]>0){tenrankarray[2]["fugo"]="+"}else{tenrankarray[2]["fugo"]=""}
    if(tenrankarray[3]["ten"]>0){tenrankarray[3]["fugo"]="+"}else{tenrankarray[3]["fugo"]=""}
    
    $("#player"+tenrankarray[0]["name"]+"_pura").html(tenrankarray[0]["fugo"]+Math.round(tenrankarray[0]["ten"]/1000)+"<br>("+tenrankarray[0]["ten"]+")")
    $("#player"+tenrankarray[1]["name"]+"_pura").html(tenrankarray[1]["fugo"]+Math.round(tenrankarray[1]["ten"]/1000)+"<br>("+tenrankarray[1]["ten"]+")")
    $("#player"+tenrankarray[2]["name"]+"_pura").html(tenrankarray[2]["fugo"]+Math.round(tenrankarray[2]["ten"]/1000)+"<br>("+tenrankarray[2]["ten"]+")")
    $("#player"+tenrankarray[3]["name"]+"_pura").html(tenrankarray[3]["fugo"]+Math.round(tenrankarray[3]["ten"]/1000)+"<br>("+tenrankarray[3]["ten"]+")")
    
    
    $("#scoreinfo_puracalc").css("height","1px")
    $("#scoreinfo_puracalc").css("height",$("#scoreinfo_puracalc").parent().css("height"))
    localstorage_tenmemosave()
    
}

$(function(){
  $(document).on('click', '.deleterow', function() {

    var clicked = this
    swal({
        title:"麻雀点数計算機",
  		text:"削除しますか？",
  		type:"warning",
  		showCancelButton: true,
  		confirmButtonColor: "#DD6B55",
  		confirmButtonText: "OK!",
  	},
  	function(){
          $(clicked).parent().parent().parent().fadeOut(400, function(){$(this).remove();calc_siha_ten();});
          localstorage_tenmemosave()
  	})
    //$(this).parent().parent().parent().remove()
  });
})


$(function(){
  $('#playerA_gen,#playerB_gen,#playerC_gen,#playerD_gen').on('focus', function(e) {
    e.target.setSelectionRange(0, e.target.value.length);
  });
})


function localstorage_tenmemosave(){
    //JSON.stringifyをしてlocalStorageに保存する

    //localStorageから取り出し
    //var ls_tenmemo = localStorage.getItem('tenmemo');
    
    var addData = {moti: $("#ten_moti").val(), kaesi: $("#ten_kaesi").val(), oka32: $("#ten_oka32").val(), oka41: $("#ten_oka41").val(),
         nameA: $("#playerA_name").val(), nameB: $("#playerB_name").val(), nameC: $("#playerC_name").val(), nameD: $("#playerD_name").val(),
         sihaA: $("#playerA_siha").val(), sihaB: $("#playerB_siha").val(), sihaC: $("#playerC_siha").val(), sihaD: $("#playerD_siha").val(),
         genA : $("#playerA_gen").val(), genB : $("#playerB_gen").val(), genC : $("#playerC_gen").val(), genD : $("#playerD_gen").val(),
         rireA: $("#playerA_rire1").html(), rireB: $("#playerB_rire1").html(), rireC: $("#playerC_rire1").html(), rireD: $("#playerD_rire1").html()
        }

    var addrire
    var forrire
    for(i=0;i<$("#rire").find("tr").length;i++){
        var mkA = "rireA" + i
        var mkB = "rireB" + i
        var mkC = "rireC" + i
        var mkD = "rireD" + i
        addData[mkA]= $("#rireA" +i).html()
        addData[mkB]= $("#rireB" +i).html()
        addData[mkC]= $("#rireC" +i).html()
        addData[mkD]= $("#rireD" +i).html()

    }
    //保存用配列を用意する


    //配列を文字列に直してからLSに保存する
    localStorage.setItem('ls_tenmemo', JSON.stringify(addData));

}

function localstorage_tenmemoload(){

    if(localStorage.getItem('ls_tenmemo') == void 0){
        swal({
            title:"読込エラー",
            text:"保存されているデータがありません",
            html:true
        })
    }
    


    
    //初期化
    $("#scoreinfo_table tbody tr").remove()
    $("#playerA_siha").val("")
    $("#playerB_siha").val("")
    $("#playerC_siha").val("")
    $("#playerD_siha").val("")
    $("#playerA_pura").html("")
    $("#playerB_pura").html("")
    $("#playerC_pura").html("")
    $("#playerD_pura").html("")
    $("#playerA_gen").val($("#ten_moti").val())
    $("#playerB_gen").val($("#ten_moti").val())
    $("#playerC_gen").val($("#ten_moti").val())
    $("#playerD_gen").val($("#ten_moti").val())
    $("#playerA_rire1").text("")
    $("#playerB_rire1").text("")
    $("#playerC_rire1").text("")
    $("#playerD_rire1").text("")



    var ls_loaded = localStorage.getItem('ls_tenmemo');
    ls_loaded = JSON.parse(ls_loaded)

    $("#ten_moti").val(ls_loaded.moti)
    $("#ten_kaesi").val(ls_loaded.kaesi)
    $("#ten_oka32").val(ls_loaded.oka32)
    $("#ten_oka41").val(ls_loaded.oka41)
    $("#playerA_name").val(ls_loaded.nameA)
    $("#playerB_name").val(ls_loaded.nameB)
    $("#playerC_name").val(ls_loaded.nameC)
    $("#playerD_name").val(ls_loaded.nameD)
    $("#playerA_siha").val(ls_loaded.sihaA)
    $("#playerB_siha").val(ls_loaded.sihaB)
    $("#playerC_siha").val(ls_loaded.sihaC)
    $("#playerD_siha").val(ls_loaded.sihaD)
    $("#playerA_gen").val(ls_loaded.genA)
    $("#playerB_gen").val(ls_loaded.genB)
    $("#playerC_gen").val(ls_loaded.genC)
    $("#playerD_gen").val(ls_loaded.genD)
    $("#playerA_rire1").html(ls_loaded.rireA)
    $("#playerB_rire1").html(ls_loaded.rireB)
    $("#playerC_rire1").html(ls_loaded.rireC)
    $("#playerD_rire1").html(ls_loaded.rireD)

    for(i=0;i<Object.keys(ls_loaded).length-20;i++){
        var mkA = "rireA" + i
        var mkB = "rireB" + i
        var mkC = "rireC" + i
        var mkD = "rireD" + i
        if(ls_loaded[mkA] != void 0){
            $("#scoreinfo_table tbody").append("<tr><td style='border:none'><div style='display:none;'><input type='button'  style='border:none;border-bottom:1px dotted gray;' class='deleterow' value='削除'></div></td><td><div id='rireA" + i + "' style='display:none;'>"+ls_loaded[mkA]+"</div></td><td><div id='rireB" + i + "' style='display:none;'>"+ls_loaded[mkB]+"</div></td><td><div id='rireC" + i + "' style='display:none;'>"+ls_loaded[mkC]+"</div></td><td><div id='rireD" + i + "' style='display:none;'>"+ls_loaded[mkD]+"</div></td></tr>");
        }
    }
    $("#scoreinfo_table tbody td div").slideDown("fast");
    calc_pura_ten()

}
