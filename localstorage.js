//現在選択している牌譜の番号
var g_ls_select = null

//保存ボタンを押したときの挙動
function localstorage_save(){
    //一牌も選択されていなければ
    if(S.length == 0){
        swal({
            title:"",
            text:"手牌が選択されていません",
            html:true
            })
        return
    }

    //JSON.stringifyをしてlocalStorageに保存する

    //localStorageから取り出し
    var ls_loaded = localStorage.getItem('ls_array');
    
    var addData = {addS : S, addA : A, addNAKI : NAKI, addANKAN : ANKAN}

    //保存用配列を用意する
    ls_array = new Array
    if(ls_loaded !=void 0){
        ls_array = JSON.parse(ls_loaded)
    }

    //保存用配列に保存する
    if(S != ""){
        ls_array.push(addData)    

        //配列を文字列に直してからLSに保存する
        localStorage.setItem('ls_array', JSON.stringify(ls_array));
    }
    localstorage_show()
    $("#ls_div").show()
    localstorage_select(ls_array.length-1)

}

function localstorage_load(){

    //localStorageから取り出し
    var ls_array_load = localStorage.getItem('ls_array');

    //取り出した後にJSON.parseする
    ls_array_JSON = JSON.parse(ls_array_load);

    return ls_array_JSON

}

function localstorage_clear(){

    swal({
        title:"保存牌譜の削除",
        text:"全ての牌譜を削除しますか？",
        type:"warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "OK!",
        },
        function(){
            localStorage.removeItem("ls_array")
            //localstorage_show()
            $("#ls_div").hide()
            $("#ls_div").html("")
        }
    )

}

function localstorage_show(){

    $("#ls_div").html("")

    if(localStorage.getItem('ls_array') == void 0){
        swal({
            title:"",
            text:"保存されている譜面がありません",
            html:true
            })
        return
    }

    
    //localStorageから取り出し
    var ls_loaded = localStorage.getItem('ls_array');
    if(ls_loaded ==void 0){
        return
    }

    ls_loaded = JSON.parse(ls_loaded)

    var ls_array_JSON = new Array
    ls_array_JSON = ls_loaded
    var hai_img ="<table id='ls_table'><tr>"

    for(var i=0;i<ls_array_JSON.length;i++){
        hai_img = hai_img + '<td>' + (i+1) + '</td><td onclick = "localstorage_select(' + i + ')" id="ls' + i + '">'
        for(var j=0;j<ls_array_JSON[i].addS.length;j++){
            var img = ls_array_JSON[i].addS[j]
            hai_img = 
                hai_img
                 + '<img src="./img2/' + haimap2[img] + '.png" style="width: 4.2%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
        }
        for(var j=0;j<13 - ls_array_JSON[i].addS.length - ls_array_JSON[i].addNAKI.length*3 - ls_array_JSON[i].addANKAN.length*3;j++){
            hai_img = 
            hai_img
             + '<img src="./img2/' + '1j9' + '.png" style="width: 4.2%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
        }
        

        hai_img = hai_img + "  "

        if(ls_array_JSON[i].addA.length != 0){
            var imgA = ls_array_JSON[i].addA
            hai_img = 
                hai_img
                 + '<img src="./img2/' + haimap2[imgA] + '.png" style="width: 4.2%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
        }else{
            hai_img = 
                hai_img
                 + '<img src="./img2/' + '1j9' + '.png" style="width: 4.2%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'

        }

        hai_img = hai_img + " "

        if(ls_array_JSON[i].addNAKI != void 0){
            for(var j=0;j<ls_array_JSON[i].addNAKI.length;j++){
                for(var k=0;k<ls_array_JSON[i].addNAKI[j].length/2;k++){
                    var imgNAKI = ls_array_JSON[i].addNAKI[j].substr(k*2,2)
                    var haimap2NAKI = haimap2[imgNAKI]
                    var size = "4.2%"
                    //チーなら横に倒す
                    if(k == 0 && ls_array_JSON[i].addNAKI[j].substr(k*2,2) != ls_array_JSON[i].addNAKI[j].substr((k+1)*2,2)){
                        haimap2NAKI = "2" + haimap2[imgNAKI].substr(1,2)
                        size = "5.6%"
                    }
                    //ポンなら横に倒す
                    else if(k == 1 && ls_array_JSON[i].addNAKI[j].substr(k*2,2) == ls_array_JSON[i].addNAKI[j].substr((k+1)*2,2)){
                        haimap2NAKI = "2" + haimap2[imgNAKI].substr(1,2)
                        size = "5.6%"
                    }
                    hai_img = 
                        hai_img
                         + '<img src="./img2/' + haimap2NAKI + '.png" style="width: ' + size + '; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
                }
                hai_img = hai_img + " "
            }
        }
        if(ls_array_JSON[i].addANKAN != void 0){
            for(var j=0;j<ls_array_JSON[i].addANKAN.length;j++){
                for(var k=0;k<ls_array_JSON[i].addANKAN[j].length/2;k++){
                    var imgANKAN = ls_array_JSON[i].addANKAN[j].substr(k*2,2)
                    var haimap2ANKAN = haimap2[imgANKAN]
                    if(k == 0 || k == 3){
                        haimap2ANKAN = "1j9"
                    }
                    hai_img = 
                        hai_img
                         + '<img src="./img2/' + haimap2ANKAN + '.png" style="width: 4.2%; transform: translate(0px); border: 1px solid rgb(238, 238, 238);" alt="" class=""></img>'
                }
                hai_img = hai_img + " "
            }
        }

        hai_img = hai_img + '</td></tr>'
    }




    var ls_div_html = hai_img

    $("#ls_div").html(ls_div_html)
    if(g_ls_select != void 0){
        localstorage_select(g_ls_select)
    }


}

function localstorage_select(num){
    $("#ls_table td").css({"border":"none"})
    if($("#ls" + num) == void 0){
        return
    }else{
        $("#ls" + num).css({"border":"1px solid blue"})
        g_ls_select = num
    }    

}

function localstorage_delete(){
    if($("#ls_div").css("display") == "none"){
        $("#footer").text("表示されていません")
        clear_footer()
        return
    }
    //ボーダーのCSSをリセットする
    $("#ls_table td").css({"border":"none"})
    //localStorageから取り出し
    var ls_loaded = localStorage.getItem('ls_array');

    //LSがないか、選択されていなければ抜ける
    if(ls_loaded == void 0){
        $("#footer").text("保存されていません")
        clear_footer()
        return
    }
    if(g_ls_select == null){
        $("#footer").text("選択されていません")
        clear_footer()
        return
    }

    //LSの文字列をJSON形式に置き換える
    ls_loaded = JSON.parse(ls_loaded)

    //選択したLSを削除する
    ls_loaded.splice(g_ls_select,1)

    //保存用配列に保存する
    //配列を文字列に直してからLSに保存する
    localStorage.setItem('ls_array', JSON.stringify(ls_loaded));

    g_ls_select = null
    localstorage_show()
    $("#ls_div").show()

}

function localstorage_reflect(){

    if(localStorage.getItem('ls_array') == void 0){
        swal({
            title:"",
            text:"保存されている譜面がありません",
            html:true
            })
        return
    }

    if(g_ls_select == void 0){
        swal({
            title:"",
            text:"譜面が選択されていません",
            html:true
            })
        return
    }


    //localStorageから取り出し
    var ls_loaded = localStorage.getItem('ls_array');
    if(ls_loaded == void 0){
        return
    }
    if(g_ls_select == null){
        return
    }

    ls_loaded = JSON.parse(ls_loaded)
    ls_reflect = ls_loaded[g_ls_select]

    erase_all()
    $("#hai_naki").find("td").css("width","6%")
    S = ls_loaded[g_ls_select].addS
    rS = ls_loaded[g_ls_select].addS
    A = ls_loaded[g_ls_select].addA
    NAKI = ls_loaded[g_ls_select].addNAKI
    rNAKI = new Array
    ANKAN = ls_loaded[g_ls_select].addANKAN

    for(var i=0;i<S.length;i++){
        $("#select" + (i+1)).attr("src","./img2/" + haimap2[S[i]] + ".png")
    }
    if(A.length != 0){
        $("#agari").attr("src","./img2/" + haimap2[A] + ".png")
    }
    var count = 1
    $("#naki_count").html(0)
    for(var i=0;i<NAKI.length;i++){
        for(var j=0;j<NAKI[i].length/2;j++){            
            if(j == 0 && NAKI[i].substr(j*2,2) != NAKI[i].substr((j+1)*2,2)){
                $("#naki" + count).html('<img src="./img2/'+'2'+haimap2[NAKI[i].substr(j*2,2)].substr(1,2)+'.png" style="width:100%;">')
                .parents("td").css("width","8%")
            }
            else if(j == 1 && NAKI[i].substr(j*2,2) == NAKI[i].substr((j+1)*2,2)){
                $("#naki" + count).html('<img src="./img2/'+'2'+haimap2[NAKI[i].substr(j*2,2)].substr(1,2)+'.png" style="width:100%;">')
                .parents("td").css("width","8%")
            }else{
                $("#naki" + count).html('<img src="./img2/'+haimap2[NAKI[i].substr(j*2,2)]+'.png" style="width:100%;">')
            }
            $("#select" + (14 - count)).parent("td").hide()
            rNAKI[13 - count] = "c"
            count = count + 1
            
            
            
        }
        $("#naki_count").html($("#naki_count").text()*1 + 3)
    }
    for(var i=0;i<ANKAN.length;i++){
        for(var j=0;j<ANKAN[i].length/2;j++){
            if(j == 0 || j == 2){
                $("#naki" + count).html('<img src="./img2/1j9.png" style="width:100%;">')
                .parents("td").css("width","5.2%")
            }else if(j == 1){
                $("#naki" + count).html('<img src="./img2/'+haimap2[ANKAN[i].substr(j*2,2)]+'.png" style="width:50%;"><img src="./img2/'+haimap2[ANKAN[i].substr(j*2,2)]+'.png" style="width:50%;">')
                .parents("td").css("width","12%")
            }else{
                continue
            }
            $("#select" + (14 - count)).parent("td").hide()
            rNAKI[13 - count] = "c"
            count = count + 1
            
            
        }
        $("#naki_count").html($("#naki_count").text()*1 + 3)
    }
    shanten_hyoji()
    //setTimeout(function(){swal("loading...",{button: false,})},0)
    //setTimeout(function(){loading()},1)
    loading()
    setTimeout(function(){yukohai();end_loading()},0)
    //yukohai()
    yukohai13()
    yuko2_hyoji()
    agari_rekkyo()
    tensu()
    $("#ls_div").hide()
}

function localstorage_toggle(){
    $("#ls_div").toggle()
    localstorage_show()
}


function localstorage_picture(){

    if($("#ls_div").css("display") == "none"){
        $("#footer").text("表示されていません")
        clear_footer()
        return
    }
    var ls_loaded = localStorage.getItem('ls_array');

    //LSがないか、選択されていなければ抜ける
    if(ls_loaded == void 0){
        $("#footer").text("保存されていません")
        clear_footer()
        return
    }
    if(g_ls_select == null){
        $("#footer").text("選択されていません")
        clear_footer()
        return
    }

    document.body.style.overflow = "hidden";

    $("#capture").css("background-color", "Ghostwhite")
    html2canvas(document.querySelector("#capture"),{onrendered: function(){
        
    }, scale:4, width:$("body").width(),}).then(canvas => {
        //document.body.appendChild(canvas).addClass("popcanvas")
        //var ctx = canvas.getContext('2d')
        //ctx.drawImage(canvas, 0, 0, this.width, this.height, 0, 0, 80, 60);
        //CanvasResize(canvas,80,60)
        var dataURI = canvas.toDataURL()
        $("#modalimg").attr("src",dataURI).css("width", $("body").width()*0.7)

        $('.modal').modaal({
            after_close: function() {
            　　$("#modalimg").attr("src","").css("width", "")
                $("#capture").css("background-color", "")

                　}  
        });
    
        $('#modalclick').click()
        //setTimeout($('canvas').remove(), 50000)
    });

    document.body.style.overflow = "visible";
    $("#capture").css("background-color", "")



}

function popuptest(){

    document.body.style.overflow = "hidden";
    
    html2canvas(document.querySelector("#capture"),{onrendered: function(){
        
    }, scale:2, width:$("body").width(),}).then(canvas => {
        //document.body.appendChild(canvas).addClass("popcanvas")
        $("#modal").append(canvas)
        $('.modal').modaal({
            after_close: function() {
                　　$('canvas').remove()
                　}  
        });
    
        $('#modalclick').click()
        //setTimeout($('canvas').remove(), 50000)
    });

    document.body.style.overflow = "visible";

    


    

    


}

