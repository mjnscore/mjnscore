hai_count_map = ["11","12","13","14","15","16","17","18","19","21","22","23","24","25","26","27","28","29","31","32","33","34","35","36","37","38","39","41","43","45","47","51","53","55"]

//有効牌リストをHTMLに書き出す
function shanten_hyoji(){
    $("#shanten_text").html("")
    var shanten_text = tehai_shanten()

    if(shanten_text == void 0){
        $("#shanten_text").html("※牌数オーバー")
        return
    }

    if(shanten_text == 0){
        shanten_text = "テンパイ"
    }else if(shanten_text < 0){
        shanten_text = "アガリ"
    }else{
        shanten_text = shanten_text + "シャンテン"
    }

    var titoi_shanten_text = tehai_titoi_shanten()
    if(titoi_shanten_text == void 0){
        titoi_shanten_text = "-"
    }else if(titoi_shanten_text == 0){
        titoi_shanten_text = "テンパイ"
    }else if(titoi_shanten_text < 0){
        titoi_shanten_text = "アガリ"
    }else{
        titoi_shanten_text = titoi_shanten_text + "シャンテン"
    }

    var kokusi_shanten_text = tehai_kokusi_shanten()
    if(kokusi_shanten_text == void 0){
        kokusi_shanten_text = "-"
    }else if(kokusi_shanten_text == 0){
        kokusi_shanten_text = "テンパイ"
    }else if(kokusi_shanten_text < 0){
        kokusi_shanten_text = "アガリ"
    }else{
        kokusi_shanten_text = kokusi_shanten_text + "シャンテン"
    }

    $("#shanten_text").html(shanten_text + " (七対子:" + titoi_shanten_text + " 国士:" + kokusi_shanten_text + ")")
}

//次打リストをHTMLに書き出す
function yuko2_hyoji(){
    $("#yuko_text2").html(glb_yuko_text2)
    glb_yuko_text2 = ""
    glb_yuko_text2_array = []
}

//使用なし
function yuko_hyoji(){
    $("#shanten_text").html("")
    var shanten_text = tehai_shanten()
    if(shanten_text == 0){
        $("#shanten_text").html("テンパイ")
    }else if(shanten_text < 0){
        $("#shanten_text").html("アガリ")
    }else{
        $("#shanten_text").html(tehai_shanten()+"シャンテン")
    }
}

//シャンテン数shantenを返す
function tehai_shanten(tehai){

    
    //外から14牌の手配配列tehaiを持ってきてたらそれに上書きする
    if(tehai != void 0){
        var zenhai = tehai
    }
    else{
        var zenhai=$.merge($.merge([],S),A)
        //手配配列 Array S [ "11", "12", "13", "27", "28", "29", "33", "34", "35", "36", … ] をコピーする
        //var zenhai=$.merge([],S)
        //アガリ牌（14牌目）も加える
        //zenhai=$.merge(zenhai,A)
    }
    
    var man_hai_count=[0,0,0,0,0,0,0,0,0]
    var pin_hai_count=[0,0,0,0,0,0,0,0,0]
    var sou_hai_count=[0,0,0,0,0,0,0,0,0]
    var yakuhai_hai_count=[0,0,0,0,0,0,0]
    var zenhai_length=zenhai.length
    for(var i=0;i<zenhai_length;i=(i+1)|0){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1;if(man_hai_count[0] > 4){return}}
      else if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1;if(man_hai_count[1] > 4){return}}
      else if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1;if(man_hai_count[2] > 4){return}}
      else if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1;if(man_hai_count[3] > 4){return}}
      else if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1;if(man_hai_count[4] > 4){return}}
      else if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1;if(man_hai_count[5] > 4){return}}
      else if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1;if(man_hai_count[6] > 4){return}}
      else if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1;if(man_hai_count[7] > 4){return}}
      else if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1;if(man_hai_count[8] > 4){return}}
      else if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1;if(pin_hai_count[0] > 4){return}}
      else if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1;if(pin_hai_count[1] > 4){return}}
      else if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1;if(pin_hai_count[2] > 4){return}}
      else if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1;if(pin_hai_count[3] > 4){return}}
      else if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1;if(pin_hai_count[4] > 4){return}}
      else if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1;if(pin_hai_count[5] > 4){return}}
      else if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1;if(pin_hai_count[6] > 4){return}}
      else if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1;if(pin_hai_count[7] > 4){return}}
      else if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1;if(pin_hai_count[8] > 4){return}}
      else if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1;if(sou_hai_count[0] > 4){return}}
      else if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1;if(sou_hai_count[1] > 4){return}}
      else if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1;if(sou_hai_count[2] > 4){return}}
      else if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1;if(sou_hai_count[3] > 4){return}}
      else if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1;if(sou_hai_count[4] > 4){return}}
      else if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1;if(sou_hai_count[5] > 4){return}}
      else if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1;if(sou_hai_count[6] > 4){return}}
      else if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1;if(sou_hai_count[7] > 4){return}}
      else if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1;if(sou_hai_count[8] > 4){return}}
      else if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1;if(yakuhai_hai_count[0] > 4){return}}
      else if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1;if(yakuhai_hai_count[1] > 4){return}}
      else if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1;if(yakuhai_hai_count[2] > 4){return}}
      else if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1;if(yakuhai_hai_count[3] > 4){return}}
      else if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1;if(yakuhai_hai_count[4] > 4){return}}
      else if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1;if(yakuhai_hai_count[5] > 4){return}}
      else if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1;if(yakuhai_hai_count[6] > 4){return}}
    }

    /*
    if(Math.max.apply(null,man_hai_count)>4 || Math.max.apply(null,pin_hai_count)>4 || Math.max.apply(null,sou_hai_count)>4 || Math.max.apply(null,yakuhai_hai_count)>4){
        return
    }
    */
    /*
    for(var i=0;i<9;i=(i+1)|0){
        if(man_hai_count[i] > 4){
            return
        }
    }
    for(var i=0;i<9;i=(i+1)|0){
        if(pin_hai_count[i] > 4){
            return
        }
    }
    for(var i=0;i<9;i=(i+1)|0){
        if(sou_hai_count[i] > 4){
            return
        }
    }
    for(var i=0;i<9;i=(i+1)|0){
        if(yakuhai_hai_count[i] > 4){
            return
        }
    }
    */

    //雀頭を取らないときの萬子の牌数
    var man_num = 0
    for(var i=0;i<9;i=(i+1)|0){
        //[i]が孤立牌の場合はスキップする
        if(man_hai_count[i] == 1
             && (man_hai_count[i-2] == 0 || man_hai_count[i-2] == void 0)
             && (man_hai_count[i-1] == 0 || man_hai_count[i-1] == void 0)
             && (man_hai_count[i+1] == 0 || man_hai_count[i+1] == void 0)
             && (man_hai_count[i+2] == 0 || man_hai_count[i+2] == void 0)){
        }else{
            man_num = man_num + man_hai_count[i]*(10**(9-i))/10  
        }
    }
    //man_hai_count[i]が二個以上あれば、雀頭を取り、配列に追加する
    var man_janto_check ="000000000"
    man_janto_check = ("000" + String(man_num)).slice(-9)
    //雀頭を取るときの萬子の牌数連想配列
    var man_janto_array = []
    for(var i=0;i<9;i=(i+1)|0){
        if(man_janto_check.substr(i,1)*1>1){
            if(i == 0){
                man_janto_array.push(String(man_janto_check.substr(0,1)*1-2) + man_janto_check.substr(1,8))
            }else{
                man_janto_array.push(man_janto_check.substr(0,i) + String(man_janto_check.substr(i,1)*1-2) + man_janto_check.substr(i+1,8-i))
            }            
        }
    }
    
    var man_str = "0000"
    man_str = ("000" + ShantenTable[man_num]).slice(-4)

    var pin_num = 0
    for(var i=0;i<9;i=(i+1)|0){
        if(pin_hai_count[i] == 1 && (pin_hai_count[i-2] == 0 || pin_hai_count[i-2] == void 0) && (pin_hai_count[i-1] == 0 || pin_hai_count[i-1] == void 0) && (pin_hai_count[i+1] == 0 || pin_hai_count[i+1] == void 0) && (pin_hai_count[i+2] == 0 || pin_hai_count[i+2] == void 0)){
        }else{
            pin_num = pin_num + pin_hai_count[i]*(10**(9-i))/10  
        }
    }
    //man_hai_count[i]が二個以上あれば、雀頭を取り、配列に追加する
    var pin_janto_check ="000000000"
    pin_janto_check = ("000" + String(pin_num)).slice(-9)
    //雀頭を取るときの萬子の牌数連想配列
    var pin_janto_array = []
    for(var i=0;i<9;i=(i+1)|0){
        if(pin_janto_check.substr(i,1)*1>1){
            if(i == 0){
                pin_janto_array.push(String(pin_janto_check.substr(0,1)*1-2) + pin_janto_check.substr(1,8))
            }else{
                pin_janto_array.push(pin_janto_check.substr(0,i) + String(pin_janto_check.substr(i,1)*1-2) + pin_janto_check.substr(i+1,8-i))
            }
        }
    }    

    var pin_str = "0000"
    pin_str = ("000" + ShantenTable[pin_num]).slice(-4)

    var sou_num = 0
    for(var i=0;i<9;i=(i+1)|0){
        if(sou_hai_count[i] == 1 && (sou_hai_count[i-2] == 0 || sou_hai_count[i-2] == void 0) && (sou_hai_count[i-1] == 0 || sou_hai_count[i-1] == void 0) && (sou_hai_count[i+1] == 0 || sou_hai_count[i+1] == void 0) && (sou_hai_count[i+2] == 0 || sou_hai_count[i+2] == void 0)){
        }else{
            sou_num = sou_num + sou_hai_count[i]*(10**(9-i))/10  
        }
    }

    //man_hai_count[i]が二個以上あれば、雀頭を取り、配列に追加する
    var sou_janto_check ="000000000"
    sou_janto_check = ("000" + String(sou_num)).slice(-9)
    //雀頭を取るときの萬子の牌数連想配列
    var sou_janto_array = []
    for(var i=0;i<9;i=(i+1)|0){
        if(sou_janto_check.substr(i,1)*1>1){
            if(i == 0){
                sou_janto_array.push(String(sou_janto_check.substr(0,1)*1-2) + sou_janto_check.substr(1,8))
            }else{
                sou_janto_array.push(sou_janto_check.substr(0,i) + String(sou_janto_check.substr(i,1)*1-2) + sou_janto_check.substr(i+1,8-i))
            }
        }
    }
    var sou_str = "0000"
    sou_str = ("000" + ShantenTable[sou_num]).slice(-4)

    var yakuhai_num = 0
    var yakuhai_koho_num = 0
    var yakuhai_janto_num = 0
    for(var i=0;i<7;i=(i+1)|0){
        if(yakuhai_hai_count[i] == 2){
            yakuhai_janto_num = 1
            yakuhai_koho_num = yakuhai_koho_num + 1
        }else if(yakuhai_hai_count[i] >2){
            yakuhai_num = yakuhai_num + 1
        }
    }

    var naki_num =0
    naki_num = NAKI.length + ANKAN.length

    var shanten = 0
    var janto_num = 0
    var jantoA_num = 0
    var jantoB_num = 0
    //面子＋面子候補が4位内、面子候補が順子かどうか
    var mentsuB_num = man_str.substr(0,1)*1+pin_str.substr(0,1)*1+sou_str.substr(0,1)*1
    var mentsuA_num = man_str.substr(2,1)*1+pin_str.substr(2,1)*1+sou_str.substr(2,1)*1
    var mentsu_kohoB_num = man_str.substr(1,1)*1+pin_str.substr(1,1)*1+sou_str.substr(1,1)*1
    var mentsu_kohoA_num = man_str.substr(3,1)*1+pin_str.substr(3,1)*1+sou_str.substr(3,1)*1
    if(mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num> 4){
        mentsu_kohoA_num = mentsu_kohoA_num - (mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num - 4)
        if(yakuhai_janto_num == 1){jantoA_num = 1}
    }
    if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 4){
        mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 4)
        if(yakuhai_janto_num == 1){jantoB_num = 1}
    }
    shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num
    //if(tehai == void 0){console.log("janto mae "+mentsuA_num,mentsu_kohoA_num,mentsuB_num,mentsu_kohoB_num,yakuhai_num,naki_num,yakuhai_koho_num,janto_num+" shanten "+shanten)}
    
    //雀頭を考慮した
    for(var i=0;i<man_janto_array.length;i=(i+1)|0){
        janto_num = 0
        var jantoA_num = 0
        var jantoB_num = 0
        var man_janto_num = 0
        for(var j=0;j<9;j=(j+1)|0){
            //[i]が孤立牌の場合はスキップする
            if(man_janto_array[i].charAt(j)*1 == 1 && (man_janto_array[i].charAt(j-2)*1 == 0 || man_janto_array[i].charAt(j-2)*1 == void 0) && (man_janto_array[i].charAt(j-1)*1 == 0 || man_janto_array[i].charAt(j-1)*1 == void 0) && (man_janto_array[i].charAt(j+1)*1 == 0 || man_janto_array[i].charAt(j+1)*1 == void 0) && (man_janto_array[i].charAt(j+2)*1 == 0 || man_janto_array[i].charAt(j+2)*1 == void 0)){
            }else{
                man_janto_num = man_janto_num + man_janto_array[i].substr(j,1)*(10**(9-j))/10  
            }
        }
        var mentsuB_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(0,1) | 0)*1+pin_str.substr(0,1)*1+sou_str.substr(0,1)*1
        var mentsuA_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(2,1) | 0)*1+pin_str.substr(2,1)*1+sou_str.substr(2,1)*1
        var mentsu_kohoB_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(1,1) | 0)*1+pin_str.substr(1,1)*1+sou_str.substr(1,1)*1
        var mentsu_kohoA_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(3,1) | 0)*1+pin_str.substr(3,1)*1+sou_str.substr(3,1)*1
        //雀頭が一つは確実にあるので面子＋面子候補は3つまでで比較する
        if(mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoA_num = mentsu_kohoA_num - (mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            jantoA_num = 1
        }
        if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            jantoB_num = 1
        }

        if(shanten > Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - 1){
            shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - 1
        }
    }
    //if(tehai == void 0){console.log("janto go1 "+mentsuA_num,mentsu_kohoA_num,mentsuB_num,mentsu_kohoB_num,yakuhai_num,naki_num,yakuhai_koho_num,janto_num+" shanten "+shanten)}

    for(var i=0;i<pin_janto_array.length;i=(i+1)|0){
        janto_num = 0
        var jantoA_num = 0
        var jantoB_num = 0
        var pin_janto_num = 0
        for(var j=0;j<9;j=(j+1)|0){
            //[i]が孤立牌の場合はスキップする
            if(pin_janto_array[i].charAt(j)*1 == 1 && (pin_janto_array[i].charAt(j-2)*1 == 0 || pin_janto_array[i].charAt(j-2)*1 == void 0) && (pin_janto_array[i].charAt(j-1)*1 == 0 || pin_janto_array[i].charAt(j-1)*1 == void 0) && (pin_janto_array[i].charAt(j+1)*1 == 0 || pin_janto_array[i].charAt(j+1)*1 == void 0) && (pin_janto_array[i].charAt(j+2)*1 == 0 || pin_janto_array[i].charAt(j+2)*1 == void 0)){
            }else{
                pin_janto_num = pin_janto_num + pin_janto_array[i].substr(j,1)*(10**(9-j))/10  
            }
        }
        var mentsuB_num = man_str.substr(0,1)*1+(("000" + ShantenTable[Number(pin_janto_num)]).slice(-4).substr(0,1) | 0)*1+sou_str.substr(0,1)*1
        var mentsuA_num = man_str.substr(2,1)*1+(("000" + ShantenTable[Number(pin_janto_num)]).slice(-4).substr(2,1) | 0)*1+sou_str.substr(2,1)*1
        var mentsu_kohoB_num = man_str.substr(1,1)*1+(("000" + ShantenTable[Number(pin_janto_num)]).slice(-4).substr(1,1) | 0)*1+sou_str.substr(1,1)*1
        var mentsu_kohoA_num = man_str.substr(3,1)*1+(("000" + ShantenTable[Number(pin_janto_num)]).slice(-4).substr(3,1) | 0)*1+sou_str.substr(3,1)*1
        //雀頭が一つは確実にあるので面子＋面子候補は3つまでで比較する
        if(mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoA_num = mentsu_kohoA_num - (mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            jantoA_num = 1
        }
        if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            jantoB_num = 1
        }

        if(shanten > Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - 1){
            shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - 1
        }
    }
    //if(tehai == void 0){console.log("janto go2 "+mentsuA_num,mentsu_kohoA_num,mentsuB_num,mentsu_kohoB_num,yakuhai_num,naki_num,yakuhai_koho_num,janto_num+" shanten "+shanten)}
    for(var i=0;i<sou_janto_array.length;i=(i+1)|0){
        janto_num = 0
        var jantoA_num = 0
        var jantoB_num = 0
        var sou_janto_num = 0
        for(var j=0;j<9;j=(j+1)|0){
            //[i]が孤立牌の場合はスキップする
            if(sou_janto_array[i].charAt(j)*1 == 1 && (sou_janto_array[i].charAt(j-2)*1 == 0 || sou_janto_array[i].charAt(j-2)*1 == void 0) && (sou_janto_array[i].charAt(j-1)*1 == 0 || sou_janto_array[i].charAt(j-1)*1 == void 0) && (sou_janto_array[i].charAt(j+1)*1 == 0 || sou_janto_array[i].charAt(j+1)*1 == void 0) && (sou_janto_array[i].charAt(j+2)*1 == 0 || sou_janto_array[i].charAt(j+2)*1 == void 0)){
            }else{
                sou_janto_num = sou_janto_num + sou_janto_array[i].substr(j,1)*(10**(9-j))/10  
            }
        }
        var mentsuB_num = man_str.substr(0,1)*1+pin_str.substr(0,1)*1+(("000" + ShantenTable[Number(sou_janto_num)]).slice(-4).substr(0,1) | 0)*1
        var mentsuA_num = man_str.substr(2,1)*1+pin_str.substr(2,1)*1+(("000" + ShantenTable[Number(sou_janto_num)]).slice(-4).substr(2,1) | 0)*1
        var mentsu_kohoB_num = man_str.substr(1,1)*1+pin_str.substr(1,1)*1+(("000" + ShantenTable[Number(sou_janto_num)]).slice(-4).substr(1,1) | 0)*1
        var mentsu_kohoA_num = man_str.substr(3,1)*1+pin_str.substr(3,1)*1+(("000" + ShantenTable[Number(sou_janto_num)]).slice(-4).substr(3,1) | 0)*1
        //雀頭が一つは確実にあるので面子＋面子候補は3つまでで比較する
        if(mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoA_num = mentsu_kohoA_num - (mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            jantoA_num = 1
        }
        if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            jantoB_num = 1
        }

        if(shanten > Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - 1){
            shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num) - jantoA_num, 8 - (mentsuB_num)*2 - (mentsu_kohoB_num) - jantoB_num) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - 1
        }
    }

    //if(tehai == void 0){console.log("janto go3 "+mentsuA_num,mentsu_kohoA_num,mentsuB_num,mentsu_kohoB_num,yakuhai_num,naki_num,yakuhai_koho_num,janto_num+" shanten "+shanten)}
    return shanten    
}


var glb_uti_record = ""
////var glb_sakiyomi_count = 0
////var glb_sakiyomi_kind = new Array()
var glb_yuko_text2 = ""
var glb_yuko_text2_array = []


function yukohai(sakiyomi,uti,mati){
    //手牌が14牌でなければFunctionを抜ける
    if(sakiyomi == void 0){
        if(S.length + A.length + NAKI.length*3 + ANKAN.length*3 < 14){return}
    }
    //有効牌の配列
    //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号],
    //[43 001 003 45]
    //[43 005 017 31 32 34 35 45] = [南を打ち、5種、17枚、待ち牌は31,32,34,35,45]
    var yuko_array = new Array()
    //not_yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号],
    //var not_yuko_array = new Array()

    //全牌の数をカウントする配列
    var yamahai = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)

    //手牌と上がり牌を配列に収める
    if(sakiyomi == void 0){
        //有効牌の表示HTML
        $("#yuko_text").html("")
        //シャンテン数は減らないが有効牌は増えるの表示HTML
        //$("#yuko_text3").html("")
        var zenhai=$.merge($.merge([],S),A)
        $("#yuko_text2").html("")
        //SとAをコピーしておく
        S_copy = S.concat()
        A_copy = A.concat()
    }else{
        var zenhai=sakiyomi.concat()
    }

    //数牌の数字ごとに枚数を収めるための配列
    var man_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var pin_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var sou_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var yakuhai_hai_count=new Array(0,0,0,0,0,0,0)
    var zenhai_length=zenhai.length

    //手牌の枚数を記憶する
    for(var i=0;i<zenhai_length;i=(i+1)|0){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1, yamahai[0]=yamahai[0]+1}
      else if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1, yamahai[1]=yamahai[1]+1}
      else if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1, yamahai[2]=yamahai[2]+1}
      else if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1, yamahai[3]=yamahai[3]+1}
      else if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1, yamahai[4]=yamahai[4]+1}
      else if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1, yamahai[5]=yamahai[5]+1}
      else if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1, yamahai[6]=yamahai[6]+1}
      else if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1, yamahai[7]=yamahai[7]+1}
      else if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1, yamahai[8]=yamahai[8]+1}
      else if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1, yamahai[9]=yamahai[9]+1}
      else if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1, yamahai[10]=yamahai[10]+1}
      else if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1, yamahai[11]=yamahai[11]+1}
      else if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1, yamahai[12]=yamahai[12]+1}
      else if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1, yamahai[13]=yamahai[13]+1}
      else if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1, yamahai[14]=yamahai[14]+1}
      else if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1, yamahai[15]=yamahai[15]+1}
      else if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1, yamahai[16]=yamahai[16]+1}
      else if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1, yamahai[17]=yamahai[17]+1}
      else if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1, yamahai[18]=yamahai[18]+1}
      else if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1, yamahai[19]=yamahai[19]+1}
      else if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1, yamahai[20]=yamahai[20]+1}
      else if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1, yamahai[21]=yamahai[21]+1}
      else if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1, yamahai[22]=yamahai[22]+1}
      else if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1, yamahai[23]=yamahai[23]+1}
      else if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1, yamahai[24]=yamahai[24]+1}
      else if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1, yamahai[25]=yamahai[25]+1}
      else if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1, yamahai[26]=yamahai[26]+1}
      else if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1, yamahai[27]=yamahai[27]+1}
      else if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1, yamahai[28]=yamahai[28]+1}
      else if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1, yamahai[29]=yamahai[29]+1}
      else if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1, yamahai[30]=yamahai[30]+1}
      else if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1, yamahai[31]=yamahai[31]+1}
      else if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1, yamahai[32]=yamahai[32]+1}
      else if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1, yamahai[33]=yamahai[33]+1}
    }
    for(var i=0;i<NAKI.length;i=(i+1)|0){
        for(var j=0;j<NAKI[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(NAKI[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(NAKI[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(NAKI[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(NAKI[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(NAKI[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(NAKI[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(NAKI[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(NAKI[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(NAKI[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(NAKI[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(NAKI[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(NAKI[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(NAKI[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(NAKI[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(NAKI[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(NAKI[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(NAKI[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(NAKI[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(NAKI[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(NAKI[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(NAKI[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(NAKI[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(NAKI[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(NAKI[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(NAKI[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(NAKI[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(NAKI[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(NAKI[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(NAKI[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(NAKI[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(NAKI[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(NAKI[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(NAKI[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(NAKI[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }
    for(var i=0;i<ANKAN.length;i=(i+1)|0){
        for(var j=0;j<ANKAN[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(ANKAN[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(ANKAN[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(ANKAN[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(ANKAN[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(ANKAN[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(ANKAN[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(ANKAN[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(ANKAN[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(ANKAN[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(ANKAN[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(ANKAN[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(ANKAN[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(ANKAN[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(ANKAN[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(ANKAN[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(ANKAN[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(ANKAN[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(ANKAN[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(ANKAN[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(ANKAN[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(ANKAN[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(ANKAN[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(ANKAN[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(ANKAN[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(ANKAN[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(ANKAN[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(ANKAN[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(ANKAN[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(ANKAN[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(ANKAN[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(ANKAN[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(ANKAN[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(ANKAN[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(ANKAN[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }

    var dora_length=DORA.length
    for(var i=0;i<dora_length;i=(i+1)|0){
        if(DORA[i]==11){yamahai[8]=yamahai[8]+1}
        else if(DORA[i]==12){yamahai[0]=yamahai[0]+1}
        else if(DORA[i]==13){yamahai[1]=yamahai[1]+1}
        else if(DORA[i]==14){yamahai[2]=yamahai[2]+1}
        else if(DORA[i]==15){yamahai[3]=yamahai[3]+1}
        else if(DORA[i]==16){yamahai[4]=yamahai[4]+1}
        else if(DORA[i]==17){yamahai[5]=yamahai[5]+1}
        else if(DORA[i]==18){yamahai[6]=yamahai[6]+1}
        else if(DORA[i]==19){yamahai[7]=yamahai[7]+1}
        else if(DORA[i]==21){yamahai[17]=yamahai[17]+1}
        else if(DORA[i]==22){yamahai[9]=yamahai[9]+1}
        else if(DORA[i]==23){yamahai[10]=yamahai[10]+1}
        else if(DORA[i]==24){yamahai[11]=yamahai[11]+1}
        else if(DORA[i]==25){yamahai[12]=yamahai[12]+1}
        else if(DORA[i]==26){yamahai[13]=yamahai[13]+1}
        else if(DORA[i]==27){yamahai[14]=yamahai[14]+1}
        else if(DORA[i]==28){yamahai[15]=yamahai[15]+1}
        else if(DORA[i]==29){yamahai[16]=yamahai[16]+1}
        else if(DORA[i]==31){yamahai[26]=yamahai[26]+1}
        else if(DORA[i]==32){yamahai[18]=yamahai[18]+1}
        else if(DORA[i]==33){yamahai[19]=yamahai[19]+1}
        else if(DORA[i]==34){yamahai[20]=yamahai[20]+1}
        else if(DORA[i]==35){yamahai[21]=yamahai[21]+1}
        else if(DORA[i]==36){yamahai[22]=yamahai[22]+1}
        else if(DORA[i]==37){yamahai[23]=yamahai[23]+1}
        else if(DORA[i]==38){yamahai[24]=yamahai[24]+1}
        else if(DORA[i]==39){yamahai[25]=yamahai[25]+1}
        else if(DORA[i]==41){yamahai[30]=yamahai[30]+1}
        else if(DORA[i]==43){yamahai[27]=yamahai[27]+1}
        else if(DORA[i]==45){yamahai[28]=yamahai[28]+1}
        else if(DORA[i]==47){yamahai[29]=yamahai[29]+1}
        else if(DORA[i]==51){yamahai[33]=yamahai[33]+1}
        else if(DORA[i]==53){yamahai[31]=yamahai[31]+1}
        else if(DORA[i]==55){yamahai[32]=yamahai[32]+1}
    }

    /*
    var dora_hyoji_length=DORA_hyoji.length
    for(var i=0;i<dora_hyoji_length;i++){
        yamahai[DORA_hyoji[i]] = yamahai[DORA_hyoji[i]]+1
    }
    */

    //一人打ちモードなら、捨て牌を山牌から除く
    if(document.getElementById("game_show").style.display != "none"){
        for(var i=0;i<arrayHaiSute.length;i=(i+1)|0){
            yamahai[hai_count_map.indexOf(arrayHaiSute[i])]=yamahai[hai_count_map.indexOf(arrayHaiSute[i])]+1
        }
    }

    //有効牌候補を羅列する
    if(document.getElementById("kokusi_calc").checked){
        var yuko_hai_koho = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    }else{
        var yuko_hai_koho = new Array(1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1)
    }

    //各牌について有効牌候補を配列に挿入する
    for(var i=0;i<man_hai_count.length;i=(i+1)|0){
        if(man_hai_count[i]>0){
            if(man_hai_count[i-2] != void 0 && yamahai[i-2]<4){yuko_hai_koho[i-2] = yuko_hai_koho[i-2]+1}
            if(man_hai_count[i-1] != void 0 && yamahai[i-1]<4){yuko_hai_koho[i-1] = yuko_hai_koho[i-1]+1}
            if(man_hai_count[i] != void 0 && yamahai[i]<4){yuko_hai_koho[i] = yuko_hai_koho[i]+1}
            if(man_hai_count[i+1] != void 0 && yamahai[i+1]<4){yuko_hai_koho[i+1] = yuko_hai_koho[i+1]+1}
            if(man_hai_count[i+2] != void 0 && yamahai[i+2]<4){yuko_hai_koho[i+2] = yuko_hai_koho[i+2]+1}
        }
    }
    for(var i=0;i<pin_hai_count.length;i=(i+1)|0){
        if(pin_hai_count[i]>0){
            if(pin_hai_count[i-2] != void 0 && yamahai[i-2+9]<4){yuko_hai_koho[i-2+9] = yuko_hai_koho[i-2+9]+1}
            if(pin_hai_count[i-1] != void 0 && yamahai[i-1+9]<4){yuko_hai_koho[i-1+9] = yuko_hai_koho[i-1+9]+1}
            if(pin_hai_count[i] != void 0 && yamahai[i+9]<4){yuko_hai_koho[i+9] = yuko_hai_koho[i+9]+1}
            if(pin_hai_count[i+1] != void 0 && yamahai[i+1+9]<4){yuko_hai_koho[i+1+9] = yuko_hai_koho[i+1+9]+1}
            if(pin_hai_count[i+2] != void 0 && yamahai[i+2+9]<4){yuko_hai_koho[i+2+9] = yuko_hai_koho[i+2+9]+1}
        }
    }
    for(var i=0;i<sou_hai_count.length;i=(i+1)|0){
        if(sou_hai_count[i]>0){
            if(sou_hai_count[i-2] != void 0 && yamahai[i-2+18]<4){yuko_hai_koho[i-2+18] = yuko_hai_koho[i-2+18]+1}
            if(sou_hai_count[i-1] != void 0 && yamahai[i-1+18]<4){yuko_hai_koho[i-1+18] = yuko_hai_koho[i-1+18]+1}
            if(sou_hai_count[i] != void 0 && yamahai[i+18]<4){yuko_hai_koho[i+18] = yuko_hai_koho[i+18]+1}
            if(sou_hai_count[i+1] != void 0 && yamahai[i+1+18]<4){yuko_hai_koho[i+1+18] = yuko_hai_koho[i+1+18]+1}
            if(sou_hai_count[i+2] != void 0 && yamahai[i+2+18]<4){yuko_hai_koho[i+2+18] = yuko_hai_koho[i+2+18]+1}
        }
    }
    if(yakuhai_hai_count[0] > 0 && yamahai[27] < 4){yuko_hai_koho[27] = yuko_hai_koho[27]+1}
    if(yakuhai_hai_count[1] > 0 && yamahai[28] < 4){yuko_hai_koho[28] = yuko_hai_koho[28]+1}
    if(yakuhai_hai_count[2] > 0 && yamahai[29] < 4){yuko_hai_koho[29] = yuko_hai_koho[29]+1}
    if(yakuhai_hai_count[3] > 0 && yamahai[30] < 4){yuko_hai_koho[30] = yuko_hai_koho[30]+1}
    if(yakuhai_hai_count[4] > 0 && yamahai[31] < 4){yuko_hai_koho[31] = yuko_hai_koho[31]+1}
    if(yakuhai_hai_count[5] > 0 && yamahai[32] < 4){yuko_hai_koho[32] = yuko_hai_koho[32]+1}
    if(yakuhai_hai_count[6] > 0 && yamahai[33] < 4){yuko_hai_koho[33] = yuko_hai_koho[33]+1}

    //現状のシャンテン数を保持する
    var shanten_base = 8
    var tszy = tehai_shanten()
    if($("#titoi_calc").is(':checked')){}else{
        var ttszy = tehai_titoi_shanten()
    }
    if($("#kokusi_calc").is(':checked')){}else{
        var tkszy = tehai_kokusi_shanten()
    }
    if(tszy == void 0){
        tszy = 8
    }
    if(ttszy == void 0){
        ttszy = 8
    }
    if(tkszy == void 0){
        tkszy = 8
    }
    shanten_base = Math.min(tszy, ttszy, tkszy)
    if(sakiyomi != void 0){shanten_base = shanten_base - 1}
    //現状の手牌と上がり牌を保持する
    var zenhai_base = new Array()
    //zenhai_base = $.merge($.merge([],S),A)
    zenhai_base = zenhai.concat()

    var yukoarraytext = ""
    //現状の手牌と上がり牌について、一枚ずつ有効牌候補に置き換えて、シャンテン数が減少するなら有効牌として保持する
    let zenhaibaselength = zenhai_base.length
    for(var i=0;i<zenhaibaselength;i=(i+1)|0){
        //二枚目の同じ牌なら処理を飛ばして、
        if(zenhai_base.indexOf(zenhai_base[i]) != i){continue}
        //有効牌候補について、
        for(var j=0;j<yuko_hai_koho.length;j=(j+1)|0){
            //有効牌候補の枚数が一枚以上で、交換候補が入替候補と同じでなければ、
            if(yuko_hai_koho[j]>0 && zenhai_base[i] != hai_count_map[j]){
                //有効牌に置き換える用の牌配列
                var zenhai_yuko = new Array()
                //zenhai_yuko = $.merge($.merge([],S),A)
                zenhai_yuko = zenhai.concat()
                //一牌ずつ有効牌候補に置き換える           
                zenhai_yuko[i] = hai_count_map[j]

                var tszy = tehai_shanten(zenhai_yuko)
                if($("#titoi_calc").is(':checked')){}else{
                    var ttszy = tehai_titoi_shanten(zenhai_yuko)
                }
                if($("#kokusi_calc").is(':checked')){}else{
                    var tkszy = tehai_kokusi_shanten(zenhai_yuko)
                }
                if(tszy == void 0){
                    tszy = 8
                }
                if(ttszy == void 0){
                    ttszy = 8
                }
                if(tkszy == void 0){
                    tkszy = 8
                }

                //置き換え後のシャンテン数がshanten_baseよりも少なくなれば、
                if(Math.min(tszy, ttszy, tkszy) < shanten_base){

                    /*
                    //現状の手牌について最初の置き換えであれば
                    if(yuko_array[i] == void 0){
                        //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号]
                        yuko_array[i] = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    //現状の手牌における二度目以降の置き換えであれば
                    }else{
                        yuko_array[i] = zenhai_base[i] + ("00" + String(yuko_array[i].substr(2,3)*1+1)).slice(-3) + ("00" + String(yuko_array[i].substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yuko_array[i].substr(8,999) + hai_count_map[j]
                    }
                    //sakiyomi中でなく、1シャンテンならsakiyomiに入る yukohai(sakiyomi,uti,mati)
                    if(sakiyomi == void 0 && shanten_base == 1){
                        //sakiyomi重いので一時的に消す！
                        //yukohai(zenhai_yuko,zenhai_base[i],hai_count_map[j])
                    }
                    */


                    if(yukoarraytext == ""){
                        yukoarraytext = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    }
                    else{
                        yukoarraytext = zenhai_base[i] + ("00" + String(yukoarraytext.substr(2,3)*1+1)).slice(-3) + ("00" + String(yukoarraytext.substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yukoarraytext.substr(8,999) + hai_count_map[j]
                    }





                }
                /*
                else if(tehai_shanten(zenhai_yuko) == shanten_base){
                    //シャンテン数がshanten_baseより少なくならなくても、有効牌が増えるかどうか
                    if(not_yuko_array[i] == void 0){
                        //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号]
                        not_yuko_array[i] = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    //現状の手牌における二度目以降の置き換えであれば
                    }else{
                        not_yuko_array[i] = zenhai_base[i] + ("00" + String(not_yuko_array[i].substr(2,3)*1+1)).slice(-3) + ("00" + String(not_yuko_array[i].substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + not_yuko_array[i].substr(8,999) + hai_count_map[j]
                    }
                }
                */
            }
        }
        if(yukoarraytext != ""){
            yuko_array.push(yukoarraytext)
        } 
        yukoarraytext = ""
    }

    /*
    //有効牌配列を、枚数・種類で並び替えする
    yuko_array.sort((a,b) =>{
        return b.substr(2,3)*1 - a.substr(2,3)*1
    })
    yuko_array.sort((a,b) =>{
        return b.substr(5,3)*1 - a.substr(5,3)*1
    })
    */

    //yuko_array (元の手牌に対して)[17 を捨てると　012　種　038枚　の候補になり、候補牌は　112122232427282933343536]

    var yuko_maisu = new Array()

    
    for(var i=0;i<yuko_array.length;i=(i+1)|0){
        if(yuko_array[i] == void 0){continue}

        yuko_maisu[yuko_array[i].substr(0,2)] = ""
        for(var j=0;j<yuko_array[i].substr(8,999).length/2;j=(j+1)|0){
            var color = ""
            if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 4){color = "4"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 3){color = "3"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 2){color = "2"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 1){color = "1"}

            if(sakiyomi == void 0){
                yuko_maisu[yuko_array[i].substr(0,2)] = String(yuko_maisu[yuko_array[i].substr(0,2)]) + color
            }
        }
    }
    
    
    //聴牌していなければ
    //現状の手牌からシャンテン数が進む打牌（key）の受け入れ候補を牌番号順に配列する array2 = rank{12: "004007004008004011", 15: "004004008004"}
    if(Math.max(tszy, ttszy, tkszy) >= 0){
        //console.log(yuko_array)
        var array2 = yukohai_array_rank(yukohai_array())
    }

    /*
    //array3 array2 = rank の受入候補牌×山札の残枚数
    var array3 = new Object()

    //console.log(array2)
    for(var key in yuko_maisu){
        array3[key] = 0
        for(var j=0;j<yuko_maisu[key].length;j++){
            array3[key] = array3[key] + array2[key].substr(j*3,3) * yuko_maisu[key].substr(j,1)
        }
    }

    //yuko_array {[11 012 037 17 21 22 23 24 27282933343536], [17 012 038 11 21 22 23 24 27282933343536], ...}　捨て牌、受入れ種類、受入れ枚数、受入れ候補牌
    //yuko_maisu {[11] = 3, [21] = 2, ...}　山札の残枚数 (ここ、調べる牌は限れる)
    //array2 {11: "012012012024012011025011021007007021", 17: "012012012024012011025011021007007021", 18: ""...} 11を捨てて、17を受け入れたときに一番多い候補牌の枚数 21を受け入れたときに・・・、17を捨てて、11を受け入れたときに・・・
    console.log(array2)
    //array3 {11: 568, 17:580, ...}　yuko_maisu[n] * array2[11]
    //yuko_array の冒頭二文字をキーにして、array3の値で並び替えする
    */





    //有効牌配列を、枚数・種類で並び替えする
    
    yuko_array.sort((a,b) =>{
        return b.substr(2,3)*1 - a.substr(2,3)*1
    })
    yuko_array.sort((a,b) =>{
        return b.substr(5,3)*1 - a.substr(5,3)*1
    })
    yuko_array.sort((a,b) =>{
        //return array3[b.substr(0,2)]*1 - array3[a.substr(0,2)]*1
        return array2[b.substr(0,2)]*1 - array2[a.substr(0,2)]*1
    })
    //console.log(array2)
    //console.log(yuko_array)
    if(array2 == void 0 || yuko_array[0] == void 0){}else{var array2val = array2[yuko_array[0].substr(0,2)]}
    var colorarray = ["ffeaea","ffeaf4","ffeaff","f4eaff","eaeaff","eff7ff","efffff","effff7","efffef","f7ffef"]
    var array2color = ""
    var array2text = ""
    


    //yuko_arrayをHTMLに書き出す
    for(var i=0;i<yuko_array.length;i=(i+1)|0){
        if(yuko_array[i] == void 0){continue}
        //待ち牌画像（sakiyomi共通）
        var text = ""
        //ハン数、符数
        var text2 = ""
        yuko_maisu[yuko_array[i].substr(0,2)] = ""
        for(var j=0;j<yuko_array[i].substr(8,999).length/2;j=(j+1)|0){
            var color = ""
            if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 4){color = "4"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 3){color = "3"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 2){color = "2"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 1){color = "1"}


            if(sakiyomi == void 0){
                yuko_maisu[yuko_array[i].substr(0,2)] = String(yuko_maisu[yuko_array[i].substr(0,2)]) + color
            }
            


            
            
            //text = text + "<img src='./img2/"+haimap2[String(yuko_array[i].substr(8+j*2,2))]+ ".png' style='width:20px; " + color + ";'>"
            text = text + "<img src='./img2/"+haimap2[String(yuko_array[i].substr(8+j*2,2))]+ ".png' style='width:20px; border-image: url(\"./img2/bg" + color + ".png\") 2; border-style:solid; border-width: 2px;'>"
            //text = text + "<img src='./img2/"+haimap2[String(yuko_array[i].substr(8+j*2,2))]+ ".png' style='width:20px; border-image: url('./img2/bg2.png') 15 round; border-style: solid; border-width: 10px;'>"

            //テンパイなら翻数・符数を表示する
            if(sakiyomi == void 0 && shanten_base == 0){

                //点数計算用の配列に現在の手牌をコピーする
                var zenhai_ten = new Array()
                zenhai_ten = S_copy.concat(A_copy)
                
                //第一打を除く
                zenhai_ten.splice(zenhai_ten.indexOf(String(yuko_array[i].substr(0,2))),1)

                S = zenhai_ten.concat()
                A = new Array(String(yuko_array[i].substr(8+j*2,2)))

                agari_rekkyo()
                var tenreturn = tensu_return()
                if(tenreturn == void 0){tenreturn = "役なし"}
                text2 = text2 + tenreturn + "/"
                S = S_copy.concat()
                A = A_copy.concat()
            }

            if(sakiyomi != void 0){

                //点数計算用の配列に現在の手牌をコピーする
                var zenhai_ten = new Array()
                zenhai_ten = S_copy.concat(A_copy)
                
                //第一打を除く
                zenhai_ten.splice(zenhai_ten.indexOf(String(uti)),1)
                //第一待ち牌を加える
                zenhai_ten.push(String(mati))
                //第二打を除く
                zenhai_ten.splice(zenhai_ten.indexOf(String(yuko_array[i].substr(0,2))),1)

                S = zenhai_ten.concat()
                A = new Array(String(yuko_array[i].substr(8+j*2,2)))

                agari_rekkyo()
                var tenreturn = tensu_return()
                if(tenreturn == void 0){tenreturn = "役なし"}
                text2 = text2 + tenreturn + "/"
                S = S_copy.concat()
                A = A_copy.concat()
            }
        }
        if(sakiyomi != void 0){

            if(glb_uti_record == ""){
                glb_uti_record = uti
                //glb_yuko_text2 = glb_yuko_text2 + "<br>"
                //$("#yuko_text2").html($("#yuko_text2").html() + "<br>")
            }
            if(glb_uti_record != uti){
                //$("#yuko_text2").html($("#yuko_text2").html() + "└" + glb_sakiyomi_kind.length + "種" + glb_sakiyomi_count + "枚<br>")
                //$("#yuko_text2").html($("#yuko_text2").html() + "<br>")
                //glb_yuko_text2 = glb_yuko_text2 + "<br>"
                //glb_sakiyomi_kind = new Array()
                //glb_sakiyomi_count = 0
                glb_uti_record = uti
            }

            //$("#yuko_text2").html($("#yuko_text2").html() + "打:"+"<img src='./img2/"+haimap2[String(uti)]+".png' style='width:20px;'>" + " 待:"+"<img src='./img2/"+haimap2[String(mati)]+".png' style='width:20px;'>" + " > 次打:"+"<img src='./img2/"+haimap2[String(yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 和了:"+ text + " " + yuko_array[i].substr(2,3)*1 + "種" + yuko_array[i].substr(5,3)*1 + "枚 " + text2 + "<br>")

            //単純な昇順でsakiyomiを表示するならこれでいい
            //glb_yuko_text2 = glb_yuko_text2 + "打:"+"<img src='./img2/"+haimap2[String(uti)]+".png' style='width:20px;'>" + " 待:"+"<img src='./img2/"+haimap2[String(mati)]+".png' style='width:20px;'>" + " > 次打:"+"<img src='./img2/"+haimap2[String(yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 和了:"+ text + " " + yuko_array[i].substr(2,3)*1 + "種" + yuko_array[i].substr(5,3)*1 + "枚 " + text2 + "<br>"
            
            //yuko_arrayの順番でsakiyomiを表示するために配列に入れる
            if(glb_yuko_text2_array[uti] == void 0){
                glb_yuko_text2_array[uti] = "<br>" + "打:"+"<img src='./img2/"+haimap2[String(uti)]+".png' style='width:20px;'>" + " 待:"+"<img src='./img2/"+haimap2[String(mati)]+".png' style='width:20px;'>" + " > 次打:"+"<img src='./img2/"+haimap2[String(yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 和了:"+ text + " " + yuko_array[i].substr(2,3)*1 + "種" + yuko_array[i].substr(5,3)*1 + "枚 " + text2 + "<br>"
            }else{
                glb_yuko_text2_array[uti] = glb_yuko_text2_array[uti] + "打:"+"<img src='./img2/"+haimap2[String(uti)]+".png' style='width:20px;'>" + " 待:"+"<img src='./img2/"+haimap2[String(mati)]+".png' style='width:20px;'>" + " > 次打:"+"<img src='./img2/"+haimap2[String(yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 和了:"+ text + " " + yuko_array[i].substr(2,3)*1 + "種" + yuko_array[i].substr(5,3)*1 + "枚 " + text2 + "<br>"
            }
            
            //glb_sakiyomi_kind = glb_sakiyomi_kind + yuko_array[i].substr(2,3)*1
            //glb_sakiyomi_count = glb_sakiyomi_count + yuko_array[i].substr(5,3)*1
            /*
            if(glb_sakiyomi_kind.indexOf(text) != void 0){
                glb_sakiyomi_kind.push(text)
                glb_sakiyomi_count = glb_sakiyomi_count + yuko_array[i].substr(5,3)*1
            }
            */

        }else{
            //var yuko_array_max_count = 0
            //yuko_array_max_count = yuko_array[0].substr(5,3)*1
            //console.log(yuko_array_max_count)
            array2color = colorarray[10 - Math.round(array2[yuko_array[i].substr(0,2)]/array2val*10)]
            array2text = Math.round(array2[yuko_array[i].substr(0,2)]/array2val*100)
            $("#yuko_text").html($("#yuko_text").html() + "<div style='background-color:" + array2color + "'>打:"+"<img src='./img2/"+haimap2[String(yuko_array[i].substr(0,2))]+".png' style='width:20px;border:1px solid gray'>"+" 待:"+ text + " " + yuko_array[i].substr(2,3)*1 + "種" + yuko_array[i].substr(5,3)*1 + "枚 (" + array2text + ")" + text2 + "</div>")
            /*
            if(glb_sakiyomi_kind != void 0){
                $("#yuko_text2").html($("#yuko_text2").html() + "└" +　glb_sakiyomi_kind.length + "種" + glb_sakiyomi_count + "枚<br>")
                glb_sakiyomi_kind = new Array()
                glb_sakiyomi_count = 0
                glb_uti_record = ""
            }
            */
           
        }
    }
    $("#footer").text("テンパイ候補　牌画像クリックで非表示")
    clear_footer()


    if(sakiyomi == void 0 ){
        for(var i=0;i<yuko_array.length;i=(i+1)|0){
            if(yuko_array[i] == void 0 ){continue}
            if(glb_yuko_text2_array[yuko_array[i].substr(0,2)*1] == void 0 ){continue}
            glb_yuko_text2 = glb_yuko_text2 + glb_yuko_text2_array[yuko_array[i].substr(0,2)*1]
        }


        /*
        var array2 = yukohai_array_rank(yukohai_array())

        var array3 = new Object()

        for(var key in yuko_maisu){
            array3[key] = 0
            for(var j=0;j<yuko_maisu[key].length;j++){
                array3[key] = array3[key] + array2[key].substr(j*3,3) * yuko_maisu[key].substr(j,1)
            }
        }
        */

        /*
        var pairs = Object.entries(array3);
        pairs.sort(function(p1, p2){
            var p1Val = p1[1], p2Val = p2[1];
            return p2Val - p1Val;
        })
        console.log(array3)
        array3 = Object.fromEntries(pairs);
        */

        //console.log(yuko_array)
        //console.log(yuko_maisu)
        //console.log(array2)
        //console.log(array3)
    }



    
    /*
    //シャンテン数は減らないが有効牌が増える場合
    if(sakiyomi == void 0){
        
        
        for(var i=0;i<not_yuko_array.length;i++){
            if(not_yuko_array[i] == void 0){continue}
            if(not_yuko_array[i].substr(5,3)*1 > yuko_array_max_count){
                //console.log(not_yuko_array[i].substr(5,3)*1)
                var text = ""
                for(var j=0;j<not_yuko_array[i].substr(8,999).length/2;j++){
                    var color = ""
                    if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 4){color = "border-bottom: 1px solid red;"}
                    else if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 3){color = "border-bottom: 1px solid blue;"}
                    else if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 2){color = "border-bottom: 1px solid black; border-bottom-style: dashed;"}
                    else if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 1){color = ""}
                    text = text + "<img src='./img2/"+haimap2[String(not_yuko_array[i].substr(8+j*2,2))]+ ".png' style='width:20px; " + color + ";'>"
                }
                $("#yuko_text3").html($("#yuko_text3").html() + "打:"+"<img src='./img2/"+haimap2[String(not_yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 待:"+ text + " " + not_yuko_array[i].substr(2,3)*1 + "種" + not_yuko_array[i].substr(5,3)*1 + "枚" +"<br>")
            }
        }
    }
    */
    swal.close()
}


//七対子のシャンテン数を返す
function tehai_titoi_shanten(tehai){
    if(NAKI.length + ANKAN.length > 0){return}

    if(tehai != void 0){
        var zenhai = tehai
    }
    else{
        var zenhai=$.merge($.merge([],S),A)
    }

    var zenhai_length=zenhai.length
    var hai_count=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    var titoi_count = new Object()
    for(i=0;i<zenhai_length;i=(i+1)|0){
        if(zenhai[i]==11){hai_count[0]=hai_count[0]+1;if(hai_count[0]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==12){hai_count[1]=hai_count[1]+1;if(hai_count[1]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==13){hai_count[2]=hai_count[2]+1;if(hai_count[2]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==14){hai_count[3]=hai_count[3]+1;if(hai_count[3]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==15){hai_count[4]=hai_count[4]+1;if(hai_count[4]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==16){hai_count[5]=hai_count[5]+1;if(hai_count[5]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==17){hai_count[6]=hai_count[6]+1;if(hai_count[6]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==18){hai_count[7]=hai_count[7]+1;if(hai_count[7]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==19){hai_count[8]=hai_count[8]+1;if(hai_count[8]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==21){hai_count[9]=hai_count[9]+1;if(hai_count[9]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==22){hai_count[10]=hai_count[10]+1;if(hai_count[10]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==23){hai_count[11]=hai_count[11]+1;if(hai_count[11]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==24){hai_count[12]=hai_count[12]+1;if(hai_count[12]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==25){hai_count[13]=hai_count[13]+1;if(hai_count[13]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==26){hai_count[14]=hai_count[14]+1;if(hai_count[14]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==27){hai_count[15]=hai_count[15]+1;if(hai_count[15]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==28){hai_count[16]=hai_count[16]+1;if(hai_count[16]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==29){hai_count[17]=hai_count[17]+1;if(hai_count[17]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==31){hai_count[18]=hai_count[18]+1;if(hai_count[18]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==32){hai_count[19]=hai_count[19]+1;if(hai_count[19]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==33){hai_count[20]=hai_count[20]+1;if(hai_count[20]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==34){hai_count[21]=hai_count[21]+1;if(hai_count[21]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==35){hai_count[22]=hai_count[22]+1;if(hai_count[22]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==36){hai_count[23]=hai_count[23]+1;if(hai_count[23]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==37){hai_count[24]=hai_count[24]+1;if(hai_count[24]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==38){hai_count[25]=hai_count[25]+1;if(hai_count[25]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==39){hai_count[26]=hai_count[26]+1;if(hai_count[26]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==41){hai_count[27]=hai_count[27]+1;if(hai_count[27]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==43){hai_count[28]=hai_count[28]+1;if(hai_count[28]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==45){hai_count[29]=hai_count[29]+1;if(hai_count[29]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==47){hai_count[30]=hai_count[30]+1;if(hai_count[30]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==51){hai_count[31]=hai_count[31]+1;if(hai_count[31]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==53){hai_count[32]=hai_count[32]+1;if(hai_count[32]>1){titoi_count[zenhai[i]]=1}}
        else if(zenhai[i]==55){hai_count[33]=hai_count[33]+1;if(hai_count[33]>1){titoi_count[zenhai[i]]=1}}
    }

    var shanten_titoi = 6 - Object.keys(titoi_count).length

    return shanten_titoi

}

//七対子のシャンテン数を返す
function old_tehai_titoi_shanten(tehai){
    if(NAKI.length + ANKAN.length > 0){return}

    if(tehai != void 0){
        var zenhai = tehai
    }
    else{
        var zenhai=$.merge($.merge([],S),A)
    }

    var zenhai_length=zenhai.length
    var hai_count=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(i=0;i<zenhai_length;i=(i+1)|0){
        if(zenhai[i]==11){hai_count[0]=hai_count[0]+1}
        else if(zenhai[i]==12){hai_count[1]=hai_count[1]+1}
        else if(zenhai[i]==13){hai_count[2]=hai_count[2]+1}
        else if(zenhai[i]==14){hai_count[3]=hai_count[3]+1}
        else if(zenhai[i]==15){hai_count[4]=hai_count[4]+1}
        else if(zenhai[i]==16){hai_count[5]=hai_count[5]+1}
        else if(zenhai[i]==17){hai_count[6]=hai_count[6]+1}
        else if(zenhai[i]==18){hai_count[7]=hai_count[7]+1}
        else if(zenhai[i]==19){hai_count[8]=hai_count[8]+1}
        else if(zenhai[i]==21){hai_count[9]=hai_count[9]+1}
        else if(zenhai[i]==22){hai_count[10]=hai_count[10]+1}
        else if(zenhai[i]==23){hai_count[11]=hai_count[11]+1}
        else if(zenhai[i]==24){hai_count[12]=hai_count[12]+1}
        else if(zenhai[i]==25){hai_count[13]=hai_count[13]+1}
        else if(zenhai[i]==26){hai_count[14]=hai_count[14]+1}
        else if(zenhai[i]==27){hai_count[15]=hai_count[15]+1}
        else if(zenhai[i]==28){hai_count[16]=hai_count[16]+1}
        else if(zenhai[i]==29){hai_count[17]=hai_count[17]+1}
        else if(zenhai[i]==31){hai_count[18]=hai_count[18]+1}
        else if(zenhai[i]==32){hai_count[19]=hai_count[19]+1}
        else if(zenhai[i]==33){hai_count[20]=hai_count[20]+1}
        else if(zenhai[i]==34){hai_count[21]=hai_count[21]+1}
        else if(zenhai[i]==35){hai_count[22]=hai_count[22]+1}
        else if(zenhai[i]==36){hai_count[23]=hai_count[23]+1}
        else if(zenhai[i]==37){hai_count[24]=hai_count[24]+1}
        else if(zenhai[i]==38){hai_count[25]=hai_count[25]+1}
        else if(zenhai[i]==39){hai_count[26]=hai_count[26]+1}
        else if(zenhai[i]==41){hai_count[27]=hai_count[27]+1}
        else if(zenhai[i]==43){hai_count[28]=hai_count[28]+1}
        else if(zenhai[i]==45){hai_count[29]=hai_count[29]+1}
        else if(zenhai[i]==47){hai_count[30]=hai_count[30]+1}
        else if(zenhai[i]==51){hai_count[31]=hai_count[31]+1}
        else if(zenhai[i]==53){hai_count[32]=hai_count[32]+1}
        else if(zenhai[i]==55){hai_count[33]=hai_count[33]+1}
    }

    //チートイツ
    titoi_check=0
    for(i=0;i<34;i=(i+1)|0){
        if(hai_count[i]>1){titoi_check=titoi_check+1}
    }
    var shanten_titoi = 6 - titoi_check

    return shanten_titoi

}

//国士のシャンテン数を返す
function tehai_kokusi_shanten(tehai){
    if(NAKI.length + ANKAN.length > 0){return}

    if(tehai != void 0){
        var zenhai = tehai
    }
    else{
        var zenhai=$.merge($.merge([],S),A)
    }

    var zenhai_length=zenhai.length
    var hai_count=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(i=0;i<zenhai_length;i=(i+1)|0){
        if(zenhai[i]==11){hai_count[0]=hai_count[0]+1}
        else if(zenhai[i]==12){hai_count[1]=hai_count[1]+1}
        else if(zenhai[i]==13){hai_count[2]=hai_count[2]+1}
        else if(zenhai[i]==14){hai_count[3]=hai_count[3]+1}
        else if(zenhai[i]==15){hai_count[4]=hai_count[4]+1}
        else if(zenhai[i]==16){hai_count[5]=hai_count[5]+1}
        else if(zenhai[i]==17){hai_count[6]=hai_count[6]+1}
        else if(zenhai[i]==18){hai_count[7]=hai_count[7]+1}
        else if(zenhai[i]==19){hai_count[8]=hai_count[8]+1}
        else if(zenhai[i]==21){hai_count[9]=hai_count[9]+1}
        else if(zenhai[i]==22){hai_count[10]=hai_count[10]+1}
        else if(zenhai[i]==23){hai_count[11]=hai_count[11]+1}
        else if(zenhai[i]==24){hai_count[12]=hai_count[12]+1}
        else if(zenhai[i]==25){hai_count[13]=hai_count[13]+1}
        else if(zenhai[i]==26){hai_count[14]=hai_count[14]+1}
        else if(zenhai[i]==27){hai_count[15]=hai_count[15]+1}
        else if(zenhai[i]==28){hai_count[16]=hai_count[16]+1}
        else if(zenhai[i]==29){hai_count[17]=hai_count[17]+1}
        else if(zenhai[i]==31){hai_count[18]=hai_count[18]+1}
        else if(zenhai[i]==32){hai_count[19]=hai_count[19]+1}
        else if(zenhai[i]==33){hai_count[20]=hai_count[20]+1}
        else if(zenhai[i]==34){hai_count[21]=hai_count[21]+1}
        else if(zenhai[i]==35){hai_count[22]=hai_count[22]+1}
        else if(zenhai[i]==36){hai_count[23]=hai_count[23]+1}
        else if(zenhai[i]==37){hai_count[24]=hai_count[24]+1}
        else if(zenhai[i]==38){hai_count[25]=hai_count[25]+1}
        else if(zenhai[i]==39){hai_count[26]=hai_count[26]+1}
        else if(zenhai[i]==41){hai_count[27]=hai_count[27]+1}
        else if(zenhai[i]==43){hai_count[28]=hai_count[28]+1}
        else if(zenhai[i]==45){hai_count[29]=hai_count[29]+1}
        else if(zenhai[i]==47){hai_count[30]=hai_count[30]+1}
        else if(zenhai[i]==51){hai_count[31]=hai_count[31]+1}
        else if(zenhai[i]==53){hai_count[32]=hai_count[32]+1}
        else if(zenhai[i]==55){hai_count[33]=hai_count[33]+1}
    }

    //国士
    var shanten_kokusi = 0

    shanten_kokusi = 
    
    13 -  
        Math.min(1,hai_count[0])
        - Math.min(1,hai_count[8])
        - Math.min(1,hai_count[9])
        - Math.min(1,hai_count[17])
        - Math.min(1,hai_count[18]) 
        - Math.min(1,hai_count[26])
        - Math.min(1,hai_count[27])
        - Math.min(1,hai_count[28])
        - Math.min(1,hai_count[29])
        - Math.min(1,hai_count[30])
        - Math.min(1,hai_count[31])
        - Math.min(1,hai_count[32])
        - Math.min(1,hai_count[33])
    
    if(hai_count[0] > 1 || hai_count[8] > 1 || hai_count[9] > 1 || 
        hai_count[17] > 1 || hai_count[18] > 1 || hai_count[26] > 1 || 
        hai_count[27] > 1 || hai_count[28] > 1 || hai_count[29] > 1 || 
        hai_count[30] > 1 || hai_count[31] > 1 || hai_count[32] > 1 || hai_count[33] > 1){
            shanten_kokusi = shanten_kokusi - 1
        }

    return shanten_kokusi

}

//手牌が13枚の時のシャンテン数をHTMLに書き出す
function yukohai13(){
    //手牌が13牌でなければFunctionを抜ける
    if(S.length + A.length + NAKI.length*3 + ANKAN.length*3 != 13){return}

    //有効牌の配列
    //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号],
    var yuko_array = new Array()

    //全牌の数をカウントする配列
    var yamahai = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)

    //手牌と上がり牌を配列に収める

    //有効牌の表示HTML
    $("#yuko_text").html("")
    //シャンテン数は減らないが有効牌は増えるの表示HTML
    $("#yuko_text3").html("")
    var zenhai=$.merge($.merge([],S),A)
    $("#yuko_text2").html("")
    //SとAをコピーしておく
    S_copy = S.concat()
    A_copy = A.concat()

    //数牌の数字ごとに枚数を収めるための配列
    var man_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var pin_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var sou_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var yakuhai_hai_count=new Array(0,0,0,0,0,0,0)
    var zenhai_length=zenhai.length
    //手牌の枚数を記憶する
    for(var i=0;i<zenhai_length;i=(i+1)|0){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1, yamahai[0]=yamahai[0]+1}
      else if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1, yamahai[1]=yamahai[1]+1}
      else if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1, yamahai[2]=yamahai[2]+1}
      else if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1, yamahai[3]=yamahai[3]+1}
      else if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1, yamahai[4]=yamahai[4]+1}
      else if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1, yamahai[5]=yamahai[5]+1}
      else if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1, yamahai[6]=yamahai[6]+1}
      else if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1, yamahai[7]=yamahai[7]+1}
      else if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1, yamahai[8]=yamahai[8]+1}
      else if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1, yamahai[9]=yamahai[9]+1}
      else if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1, yamahai[10]=yamahai[10]+1}
      else if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1, yamahai[11]=yamahai[11]+1}
      else if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1, yamahai[12]=yamahai[12]+1}
      else if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1, yamahai[13]=yamahai[13]+1}
      else if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1, yamahai[14]=yamahai[14]+1}
      else if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1, yamahai[15]=yamahai[15]+1}
      else if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1, yamahai[16]=yamahai[16]+1}
      else if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1, yamahai[17]=yamahai[17]+1}
      else if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1, yamahai[18]=yamahai[18]+1}
      else if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1, yamahai[19]=yamahai[19]+1}
      else if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1, yamahai[20]=yamahai[20]+1}
      else if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1, yamahai[21]=yamahai[21]+1}
      else if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1, yamahai[22]=yamahai[22]+1}
      else if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1, yamahai[23]=yamahai[23]+1}
      else if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1, yamahai[24]=yamahai[24]+1}
      else if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1, yamahai[25]=yamahai[25]+1}
      else if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1, yamahai[26]=yamahai[26]+1}
      else if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1, yamahai[27]=yamahai[27]+1}
      else if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1, yamahai[28]=yamahai[28]+1}
      else if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1, yamahai[29]=yamahai[29]+1}
      else if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1, yamahai[30]=yamahai[30]+1}
      else if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1, yamahai[31]=yamahai[31]+1}
      else if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1, yamahai[32]=yamahai[32]+1}
      else if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1, yamahai[33]=yamahai[33]+1}
    }
    for(var i=0;i<NAKI.length;i=(i+1)|0){
        for(var j=0;j<NAKI[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(NAKI[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(NAKI[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(NAKI[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(NAKI[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(NAKI[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(NAKI[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(NAKI[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(NAKI[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(NAKI[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(NAKI[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(NAKI[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(NAKI[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(NAKI[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(NAKI[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(NAKI[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(NAKI[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(NAKI[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(NAKI[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(NAKI[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(NAKI[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(NAKI[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(NAKI[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(NAKI[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(NAKI[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(NAKI[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(NAKI[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(NAKI[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(NAKI[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(NAKI[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(NAKI[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(NAKI[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(NAKI[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(NAKI[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(NAKI[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }
    for(var i=0;i<ANKAN.length;i=(i+1)|0){
        for(var j=0;j<ANKAN[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(ANKAN[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(ANKAN[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(ANKAN[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(ANKAN[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(ANKAN[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(ANKAN[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(ANKAN[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(ANKAN[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(ANKAN[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(ANKAN[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(ANKAN[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(ANKAN[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(ANKAN[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(ANKAN[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(ANKAN[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(ANKAN[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(ANKAN[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(ANKAN[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(ANKAN[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(ANKAN[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(ANKAN[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(ANKAN[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(ANKAN[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(ANKAN[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(ANKAN[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(ANKAN[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(ANKAN[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(ANKAN[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(ANKAN[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(ANKAN[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(ANKAN[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(ANKAN[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(ANKAN[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(ANKAN[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }

    //有効牌候補を羅列する
    if($("#kokusi_calc").is(':checked')){
        var yuko_hai_koho = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    }else{
        var yuko_hai_koho = new Array(1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1)
    }

    //各牌について有効牌候補を配列に挿入する
    for(var i=0;i<man_hai_count.length;i=(i+1)|0){
        if(man_hai_count[i]>0){
            if(man_hai_count[i-2] != void 0 && yamahai[i-2]<4){yuko_hai_koho[i-2] = yuko_hai_koho[i-2]+1}
            if(man_hai_count[i-1] != void 0 && yamahai[i-1]<4){yuko_hai_koho[i-1] = yuko_hai_koho[i-1]+1}
            if(man_hai_count[i] != void 0 && yamahai[i]<4){yuko_hai_koho[i] = yuko_hai_koho[i]+1}
            if(man_hai_count[i+1] != void 0 && yamahai[i+1]<4){yuko_hai_koho[i+1] = yuko_hai_koho[i+1]+1}
            if(man_hai_count[i+2] != void 0 && yamahai[i+2]<4){yuko_hai_koho[i+2] = yuko_hai_koho[i+2]+1}
        }
    }
    for(var i=0;i<pin_hai_count.length;i=(i+1)|0){
        if(pin_hai_count[i]>0){
            if(pin_hai_count[i-2] != void 0 && yamahai[i-2+9]<4){yuko_hai_koho[i-2+9] = yuko_hai_koho[i-2+9]+1}
            if(pin_hai_count[i-1] != void 0 && yamahai[i-1+9]<4){yuko_hai_koho[i-1+9] = yuko_hai_koho[i-1+9]+1}
            if(pin_hai_count[i] != void 0 && yamahai[i+9]<4){yuko_hai_koho[i+9] = yuko_hai_koho[i+9]+1}
            if(pin_hai_count[i+1] != void 0 && yamahai[i+1+9]<4){yuko_hai_koho[i+1+9] = yuko_hai_koho[i+1+9]+1}
            if(pin_hai_count[i+2] != void 0 && yamahai[i+2+9]<4){yuko_hai_koho[i+2+9] = yuko_hai_koho[i+2+9]+1}
        }
    }
    for(var i=0;i<sou_hai_count.length;i=(i+1)|0){
        if(sou_hai_count[i]>0){
            if(sou_hai_count[i-2] != void 0 && yamahai[i-2+18]<4){yuko_hai_koho[i-2+18] = yuko_hai_koho[i-2+18]+1}
            if(sou_hai_count[i-1] != void 0 && yamahai[i-1+18]<4){yuko_hai_koho[i-1+18] = yuko_hai_koho[i-1+18]+1}
            if(sou_hai_count[i] != void 0 && yamahai[i+18]<4){yuko_hai_koho[i+18] = yuko_hai_koho[i+18]+1}
            if(sou_hai_count[i+1] != void 0 && yamahai[i+1+18]<4){yuko_hai_koho[i+1+18] = yuko_hai_koho[i+1+18]+1}
            if(sou_hai_count[i+2] != void 0 && yamahai[i+2+18]<4){yuko_hai_koho[i+2+18] = yuko_hai_koho[i+2+18]+1}
        }
    }
    if(yakuhai_hai_count[0] > 0 && yamahai[27] < 4){yuko_hai_koho[27] = yuko_hai_koho[27]+1}
    if(yakuhai_hai_count[1] > 0 && yamahai[28] < 4){yuko_hai_koho[28] = yuko_hai_koho[28]+1}
    if(yakuhai_hai_count[2] > 0 && yamahai[29] < 4){yuko_hai_koho[29] = yuko_hai_koho[29]+1}
    if(yakuhai_hai_count[3] > 0 && yamahai[30] < 4){yuko_hai_koho[30] = yuko_hai_koho[30]+1}
    if(yakuhai_hai_count[4] > 0 && yamahai[31] < 4){yuko_hai_koho[31] = yuko_hai_koho[31]+1}
    if(yakuhai_hai_count[5] > 0 && yamahai[32] < 4){yuko_hai_koho[32] = yuko_hai_koho[32]+1}
    if(yakuhai_hai_count[6] > 0 && yamahai[33] < 4){yuko_hai_koho[33] = yuko_hai_koho[33]+1}

    //現状のシャンテン数を保持する
    var shanten_base = 8
    var tszy = tehai_shanten()
    if($("#titoi_calc").is(':checked')){}else{
        var ttszy = tehai_titoi_shanten()
    }
    if($("#kokusi_calc").is(':checked')){}else{
        var tkszy = tehai_kokusi_shanten()
    }
    if(tszy == void 0){
        tszy = 8
    }
    if(ttszy == void 0){
        ttszy = 8
    }
    if(tkszy == void 0){
        tkszy = 8
    }
    shanten_base = Math.min(tszy, ttszy, tkszy)
    //現状の手牌と上がり牌を保持する
    var zenhai_base = new Array()
    //zenhai_base = $.merge($.merge([],S),A)
    zenhai_base = zenhai.concat()

    //現状の手牌と上がり牌について、一枚ずつ有効牌候補に置き換えて、シャンテン数が減少するなら有効牌として保持する
    //for(var i=0;i<zenhai_base.length;i++){
    //    //二枚目の同じ牌なら処理を飛ばして、
    //    if(zenhai_base.indexOf(zenhai_base[i]) != i){continue}
    //    //有効牌候補について、
    for(var j=0;j<yuko_hai_koho.length;j=(j+1)|0){
        //有効牌候補の枚数が一枚以上で、交換候補が入替候補と同じでなければ、
        if(yuko_hai_koho[j]>0){
            //有効牌に置き換える用の牌配列
            var zenhai_yuko = new Array()
            zenhai_yuko = zenhai.concat()
            //足りない一牌を有効牌候補に置き換える        
            //zenhai_yuko[i] = hai_count_map[j]
            zenhai_yuko.push(hai_count_map[j])

            var tszy = tehai_shanten(zenhai_yuko)
            if($("#titoi_calc").is(':checked')){}else{
                var ttszy = tehai_titoi_shanten(zenhai_yuko)
            }
            if($("#kokusi_calc").is(':checked')){}else{
                var tkszy = tehai_kokusi_shanten(zenhai_yuko)
            }
            if(tszy == void 0){
                tszy = 8
            }
            if(ttszy == void 0){
                ttszy = 8
            }
            if(tkszy == void 0){
                tkszy = 8
            }
            
            //置き換え後のシャンテン数がshanten_baseよりも少なくなれば、
            if(Math.min(tszy, ttszy, tkszy) < shanten_base){
                //現状の手牌について最初の置き換えであれば
                //本当はiを使っているのは絶対に間違っているが面倒なので直していない！
                if(yuko_array[0] == void 0){
                    //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号]
                    yuko_array[0] = zenhai_base[0] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                //現状の手牌における二度目以降の置き換えであれば
                }else{
                    yuko_array[0] = zenhai_base[0] + ("00" + String(yuko_array[0].substr(2,3)*1+1)).slice(-3) + ("00" + String(yuko_array[0].substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yuko_array[0].substr(8,999) + hai_count_map[j]
                }
                /*
                if(shanten_base == 1){
                    yukohai(zenhai_yuko,zenhai_base[i],hai_count_map[j])
                }
                */
            }
        }
    }
    
    yuko_array.sort((a,b) =>{
        return b.substr(2,3)*1 - a.substr(2,3)*1
    })
    yuko_array.sort((a,b) =>{
        return b.substr(5,3)*1 - a.substr(5,3)*1
    })

    
    //yuko_arrayをHTMLに書き出す
    for(var i=0;i<yuko_array.length;i=(i+1)|0){
        if(yuko_array[0] == void 0){continue}
        var text = ""
        var text2 = ""
        for(var j=0;j<yuko_array[0].substr(8,999).length/2;j=(j+1)|0){
            var color = ""
            if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[0].substr(8+j*2,2)))] == 4){color = "border-bottom: 1px solid red;"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[0].substr(8+j*2,2)))] == 3){color = "border-bottom: 1px solid blue;"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[0].substr(8+j*2,2)))] == 2){color = "border-bottom: 1px solid black; border-bottom-style: dashed;"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[0].substr(8+j*2,2)))] == 1){color = ""}
            
            
            text = text + "<img src='./img2/"+haimap2[String(yuko_array[0].substr(8+j*2,2))]+ ".png' style='width:20px; " + color + ";'>"


        }

            //var yuko_array_max_count = 0
            //yuko_array_max_count = yuko_array[0].substr(5,3)*1
            //console.log(yuko_array_max_count)

            $("#yuko_text").html($("#yuko_text").html() + "待:"+ text + " " + yuko_array[0].substr(2,3)*1 + "種" + yuko_array[0].substr(5,3)*1 + "枚" +"<br>")
            /*
            if(glb_sakiyomi_kind != void 0){
                $("#yuko_text2").html($("#yuko_text2").html() + "└" +　glb_sakiyomi_kind.length + "種" + glb_sakiyomi_count + "枚<br>")
                glb_sakiyomi_kind = new Array()
                glb_sakiyomi_count = 0
                glb_uti_record = ""
            }
            */
            
    }

    
    /*
    //シャンテン数は減らないが有効牌が増える場合
    if(sakiyomi == void 0){
        
        
        for(var i=0;i<not_yuko_array.length;i++){
            if(not_yuko_array[i] == void 0){continue}
            if(not_yuko_array[i].substr(5,3)*1 > yuko_array_max_count){
                //console.log(not_yuko_array[i].substr(5,3)*1)
                var text = ""
                for(var j=0;j<not_yuko_array[i].substr(8,999).length/2;j++){
                    var color = ""
                    if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 4){color = "border-bottom: 1px solid red;"}
                    else if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 3){color = "border-bottom: 1px solid blue;"}
                    else if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 2){color = "border-bottom: 1px solid black; border-bottom-style: dashed;"}
                    else if(4 - yamahai[hai_count_map.indexOf(String(not_yuko_array[i].substr(8+j*2,2)))] == 1){color = ""}
                    text = text + "<img src='./img2/"+haimap2[String(not_yuko_array[i].substr(8+j*2,2))]+ ".png' style='width:20px; " + color + ";'>"
                }
                $("#yuko_text3").html($("#yuko_text3").html() + "打:"+"<img src='./img2/"+haimap2[String(not_yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 待:"+ text + " " + not_yuko_array[i].substr(2,3)*1 + "種" + not_yuko_array[i].substr(5,3)*1 + "枚" +"<br>")
            }
        }
    }
    */
    
}

function yuko_toggle(it,id){
    $("#"+it).toggle()
    $("#"+id).toggle()
}


//var glb_yukoarraycount = 0

function yukohai_array(sakiyomi,uti,mati){

    
    //手牌が14牌でなければFunctionを抜ける
    if(sakiyomi == void 0){
        if(S.length + A.length + NAKI.length*3 + ANKAN.length*3 < 14){return}
    }
    //有効牌の配列
    //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号],
    var yuko_array = []

    //全牌の数をカウントする配列
    var yamahai = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    //手牌と上がり牌を配列に収める
    if(sakiyomi == void 0){
        var zenhai=$.merge($.merge([],S),A)
        //SとAをコピーしておく
        S_copy = S.concat()
        A_copy = A.concat()
    }else{
        var zenhai=sakiyomi.concat()
    }

    //数牌の数字ごとに枚数を収めるための配列
    var man_hai_count=[0,0,0,0,0,0,0,0,0]
    var pin_hai_count=[0,0,0,0,0,0,0,0,0]
    var sou_hai_count=[0,0,0,0,0,0,0,0,0]
    var yakuhai_hai_count=[0,0,0,0,0,0,0]
    var zenhai_length=zenhai.length

    //手牌の枚数を記憶する
    for(var i=0;i<zenhai_length;i=(i+1)|0){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1, yamahai[0]=yamahai[0]+1}
      else if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1, yamahai[1]=yamahai[1]+1}
      else if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1, yamahai[2]=yamahai[2]+1}
      else if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1, yamahai[3]=yamahai[3]+1}
      else if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1, yamahai[4]=yamahai[4]+1}
      else if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1, yamahai[5]=yamahai[5]+1}
      else if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1, yamahai[6]=yamahai[6]+1}
      else if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1, yamahai[7]=yamahai[7]+1}
      else if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1, yamahai[8]=yamahai[8]+1}
      else if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1, yamahai[9]=yamahai[9]+1}
      else if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1, yamahai[10]=yamahai[10]+1}
      else if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1, yamahai[11]=yamahai[11]+1}
      else if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1, yamahai[12]=yamahai[12]+1}
      else if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1, yamahai[13]=yamahai[13]+1}
      else if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1, yamahai[14]=yamahai[14]+1}
      else if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1, yamahai[15]=yamahai[15]+1}
      else if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1, yamahai[16]=yamahai[16]+1}
      else if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1, yamahai[17]=yamahai[17]+1}
      else if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1, yamahai[18]=yamahai[18]+1}
      else if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1, yamahai[19]=yamahai[19]+1}
      else if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1, yamahai[20]=yamahai[20]+1}
      else if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1, yamahai[21]=yamahai[21]+1}
      else if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1, yamahai[22]=yamahai[22]+1}
      else if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1, yamahai[23]=yamahai[23]+1}
      else if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1, yamahai[24]=yamahai[24]+1}
      else if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1, yamahai[25]=yamahai[25]+1}
      else if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1, yamahai[26]=yamahai[26]+1}
      else if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1, yamahai[27]=yamahai[27]+1}
      else if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1, yamahai[28]=yamahai[28]+1}
      else if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1, yamahai[29]=yamahai[29]+1}
      else if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1, yamahai[30]=yamahai[30]+1}
      else if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1, yamahai[31]=yamahai[31]+1}
      else if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1, yamahai[32]=yamahai[32]+1}
      else if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1, yamahai[33]=yamahai[33]+1}
    }


    for(var i=0;i<NAKI.length;i=(i+1)|0){
        for(var j=0;j<NAKI[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(NAKI[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(NAKI[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(NAKI[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(NAKI[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(NAKI[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(NAKI[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(NAKI[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(NAKI[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(NAKI[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(NAKI[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(NAKI[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(NAKI[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(NAKI[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(NAKI[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(NAKI[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(NAKI[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(NAKI[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(NAKI[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(NAKI[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(NAKI[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(NAKI[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(NAKI[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(NAKI[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(NAKI[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(NAKI[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(NAKI[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(NAKI[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(NAKI[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(NAKI[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(NAKI[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(NAKI[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(NAKI[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(NAKI[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(NAKI[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }
    for(var i=0;i<ANKAN.length;i=(i+1)|0){
        for(var j=0;j<ANKAN[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(ANKAN[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(ANKAN[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(ANKAN[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(ANKAN[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(ANKAN[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(ANKAN[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(ANKAN[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(ANKAN[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(ANKAN[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(ANKAN[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(ANKAN[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(ANKAN[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(ANKAN[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(ANKAN[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(ANKAN[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(ANKAN[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(ANKAN[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(ANKAN[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(ANKAN[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(ANKAN[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(ANKAN[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(ANKAN[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(ANKAN[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(ANKAN[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(ANKAN[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(ANKAN[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(ANKAN[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(ANKAN[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(ANKAN[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(ANKAN[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(ANKAN[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(ANKAN[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(ANKAN[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(ANKAN[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }

    var dora_length=DORA.length
    for(var i=0;i<dora_length;i=(i+1)|0){
        if(DORA[i]==11){yamahai[8]=yamahai[8]+1}
        else if(DORA[i]==12){yamahai[0]=yamahai[0]+1}
        else if(DORA[i]==13){yamahai[1]=yamahai[1]+1}
        else if(DORA[i]==14){yamahai[2]=yamahai[2]+1}
        else if(DORA[i]==15){yamahai[3]=yamahai[3]+1}
        else if(DORA[i]==16){yamahai[4]=yamahai[4]+1}
        else if(DORA[i]==17){yamahai[5]=yamahai[5]+1}
        else if(DORA[i]==18){yamahai[6]=yamahai[6]+1}
        else if(DORA[i]==19){yamahai[7]=yamahai[7]+1}
        else if(DORA[i]==21){yamahai[17]=yamahai[17]+1}
        else if(DORA[i]==22){yamahai[9]=yamahai[9]+1}
        else if(DORA[i]==23){yamahai[10]=yamahai[10]+1}
        else if(DORA[i]==24){yamahai[11]=yamahai[11]+1}
        else if(DORA[i]==25){yamahai[12]=yamahai[12]+1}
        else if(DORA[i]==26){yamahai[13]=yamahai[13]+1}
        else if(DORA[i]==27){yamahai[14]=yamahai[14]+1}
        else if(DORA[i]==28){yamahai[15]=yamahai[15]+1}
        else if(DORA[i]==29){yamahai[16]=yamahai[16]+1}
        else if(DORA[i]==31){yamahai[26]=yamahai[26]+1}
        else if(DORA[i]==32){yamahai[18]=yamahai[18]+1}
        else if(DORA[i]==33){yamahai[19]=yamahai[19]+1}
        else if(DORA[i]==34){yamahai[20]=yamahai[20]+1}
        else if(DORA[i]==35){yamahai[21]=yamahai[21]+1}
        else if(DORA[i]==36){yamahai[22]=yamahai[22]+1}
        else if(DORA[i]==37){yamahai[23]=yamahai[23]+1}
        else if(DORA[i]==38){yamahai[24]=yamahai[24]+1}
        else if(DORA[i]==39){yamahai[25]=yamahai[25]+1}
        else if(DORA[i]==41){yamahai[30]=yamahai[30]+1}
        else if(DORA[i]==43){yamahai[27]=yamahai[27]+1}
        else if(DORA[i]==45){yamahai[28]=yamahai[28]+1}
        else if(DORA[i]==47){yamahai[29]=yamahai[29]+1}
        else if(DORA[i]==51){yamahai[33]=yamahai[33]+1}
        else if(DORA[i]==53){yamahai[31]=yamahai[31]+1}
        else if(DORA[i]==55){yamahai[32]=yamahai[32]+1}
    }

    //一人打ちモードなら、捨て牌を山牌から除く
    if(document.getElementById("game_show").style.display != "none"){
    //if($("#game_show").css("display") != "none"){
        let arrayHaiSutelength = arrayHaiSute.length
        for(var i=0;i<arrayHaiSutelength;i=(i+1)|0){
            yamahai[hai_count_map.indexOf(arrayHaiSute[i])]=yamahai[hai_count_map.indexOf(arrayHaiSute[i])]+1
        }
    }

    //有効牌候補を羅列する
    //var yuko_hai_koho = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    //国士対応
    //var yuko_hai_koho = new Array(1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1)
    if(document.getElementById("kokusi_calc").checked){
    //if($("#kokusi_calc").is(':checked')){
        var yuko_hai_koho = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }else{
        var yuko_hai_koho = [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
    }

    //各牌について有効牌候補を配列に挿入する
    /*
    var mannum_base = (
        String(man_hai_count[8])
        +String(man_hai_count[7])
        +String(man_hai_count[6])
        +String(man_hai_count[5])
        +String(man_hai_count[4])
        +String(man_hai_count[3])
        +String(man_hai_count[2])
        +String(man_hai_count[1])
        +String(man_hai_count[0])
        )*1
    var mannum = 0
    
    var mnsb = String(("000" + ShantenTable[mannum]).slice(-4))
    //var mannumshanten_base1 = String(mannumshanten_base.substr(0,2))
    //var mannumshanten_base2 = String(mannumshanten_base.substr(2,2))
    var mns = ""
    */
    /*
    for(var i=0;i<man_hai_count.length;i++){
        if(man_hai_count[i]>0){
            if(man_hai_count[i-2] != void 0 && yamahai[i-2]<4){
                mannum = mannum_base + 1*10**(i-2)
                mns = String(("000" + ShantenTable[mannum]).slice(-4))
                //mannumshanten1 = String(mannumshanten.substr(0,2))
                //mannumshanten2 = String(mannumshanten.substr(2,2))
                if(mns[0]*1-mnsb[0]*1 > 0 || mns[1]*1-mnsb[1]*1 > 0 || mns[2]*1-mnsb[2]*1 > 0 || mns[3]*1-mnsb[3]*1 > 0){    
                    yuko_hai_koho[i-2] = yuko_hai_koho[i-2]+1
                }
            }
            if(man_hai_count[i-1] != void 0 && yamahai[i-1]<4){
                mannum = mannum_base + 1*10**(i-1)
                mns = String(("000" + ShantenTable[mannum]).slice(-4))
                //mannumshanten1 = String(mannumshanten.substr(0,2))
                //mannumshanten2 = String(mannumshanten.substr(2,2))
                if(mns[0]*1-mnsb[0]*1 > 0 || mns[1]*1-mnsb[1]*1 > 0 || mns[2]*1-mnsb[2]*1 > 0 || mns[3]*1-mnsb[3]*1 > 0){    
                    yuko_hai_koho[i-1] = yuko_hai_koho[i-1]+1
                }
            }
            if(man_hai_count[i] != void 0 && yamahai[i]<4){
                mannum = mannum_base + 1*10**(i)
                mns = String(("000" + ShantenTable[mannum]).slice(-4))
                //mannumshanten1 = String(mannumshanten.substr(0,2))
                //mannumshanten2 = String(mannumshanten.substr(2,2))
                if(mns[0]*1-mnsb[0]*1 > 0 || mns[1]*1-mnsb[1]*1 > 0 || mns[2]*1-mnsb[2]*1 > 0 || mns[3]*1-mnsb[3]*1 > 0){    
                    yuko_hai_koho[i] = yuko_hai_koho[i]+1
                }
            }
            if(man_hai_count[i+1] != void 0 && yamahai[i+1]<4){
                mannum = mannum_base + 1*10**(i+1)
                mns = String(("000" + ShantenTable[mannum]).slice(-4))
                //mannumshanten1 = String(mannumshanten.substr(0,2))
                //mannumshanten2 = String(mannumshanten.substr(2,2))
                if(mns[0]*1-mnsb[0]*1 > 0 || mns[1]*1-mnsb[1]*1 > 0 || mns[2]*1-mnsb[2]*1 > 0 || mns[3]*1-mnsb[3]*1 > 0){    
                    yuko_hai_koho[i+1] = yuko_hai_koho[i+1]+1
                }
            }
            if(man_hai_count[i+2] != void 0 && yamahai[i+2]<4){
                mannum = mannum_base + 1*10**(i+1)
                mns = String(("000" + ShantenTable[mannum]).slice(-4))
                //mannumshanten1 = String(mannumshanten.substr(0,2))
                //mannumshanten2 = String(mannumshanten.substr(2,2))
                if(mns[0]*1-mnsb[0]*1 > 0 || mns[1]*1-mnsb[1]*1 > 0 || mns[2]*1-mnsb[2]*1 > 0 || mns[3]*1-mnsb[3]*1 > 0){    
                    yuko_hai_koho[i+2] = yuko_hai_koho[i+2]+1
                }
            }
        }
    }
    */
    //有効牌候補を事前にShantenTableで調べるのは成功しない　雀頭候補かどうかと6ブロックかどうかは単体では評価できないので
    for(var i=0;i<9;i=(i+1)|0){
        if(man_hai_count[i]>0){
            if(man_hai_count[i-2] != void 0 && yamahai[i-2]<4){yuko_hai_koho[i-2] = yuko_hai_koho[i-2]+1}
            if(man_hai_count[i-1] != void 0 && yamahai[i-1]<4){yuko_hai_koho[i-1] = yuko_hai_koho[i-1]+1}
            if(man_hai_count[i] != void 0 && yamahai[i]<4){yuko_hai_koho[i] = yuko_hai_koho[i]+1}
            if(man_hai_count[i+1] != void 0 && yamahai[i+1]<4){yuko_hai_koho[i+1] = yuko_hai_koho[i+1]+1}
            if(man_hai_count[i+2] != void 0 && yamahai[i+2]<4){yuko_hai_koho[i+2] = yuko_hai_koho[i+2]+1}
        }
    }
    for(var i=0;i<9;i=(i+1)|0){
        if(pin_hai_count[i]>0){
            if(pin_hai_count[i-2] != void 0 && yamahai[i-2+9]<4){yuko_hai_koho[i-2+9] = yuko_hai_koho[i-2+9]+1}
            if(pin_hai_count[i-1] != void 0 && yamahai[i-1+9]<4){yuko_hai_koho[i-1+9] = yuko_hai_koho[i-1+9]+1}
            if(pin_hai_count[i] != void 0 && yamahai[i+9]<4){yuko_hai_koho[i+9] = yuko_hai_koho[i+9]+1}
            if(pin_hai_count[i+1] != void 0 && yamahai[i+1+9]<4){yuko_hai_koho[i+1+9] = yuko_hai_koho[i+1+9]+1}
            if(pin_hai_count[i+2] != void 0 && yamahai[i+2+9]<4){yuko_hai_koho[i+2+9] = yuko_hai_koho[i+2+9]+1}
        }
    }
    for(var i=0;i<9;i=(i+1)|0){
        if(sou_hai_count[i]>0){
            if(sou_hai_count[i-2] != void 0 && yamahai[i-2+18]<4){yuko_hai_koho[i-2+18] = yuko_hai_koho[i-2+18]+1}
            if(sou_hai_count[i-1] != void 0 && yamahai[i-1+18]<4){yuko_hai_koho[i-1+18] = yuko_hai_koho[i-1+18]+1}
            if(sou_hai_count[i] != void 0 && yamahai[i+18]<4){yuko_hai_koho[i+18] = yuko_hai_koho[i+18]+1}
            if(sou_hai_count[i+1] != void 0 && yamahai[i+1+18]<4){yuko_hai_koho[i+1+18] = yuko_hai_koho[i+1+18]+1}
            if(sou_hai_count[i+2] != void 0 && yamahai[i+2+18]<4){yuko_hai_koho[i+2+18] = yuko_hai_koho[i+2+18]+1}
        }
    }
    if(yakuhai_hai_count[0] > 0 && yamahai[27] < 4){yuko_hai_koho[27] = yuko_hai_koho[27]+1}
    if(yakuhai_hai_count[1] > 0 && yamahai[28] < 4){yuko_hai_koho[28] = yuko_hai_koho[28]+1}
    if(yakuhai_hai_count[2] > 0 && yamahai[29] < 4){yuko_hai_koho[29] = yuko_hai_koho[29]+1}
    if(yakuhai_hai_count[3] > 0 && yamahai[30] < 4){yuko_hai_koho[30] = yuko_hai_koho[30]+1}
    if(yakuhai_hai_count[4] > 0 && yamahai[31] < 4){yuko_hai_koho[31] = yuko_hai_koho[31]+1}
    if(yakuhai_hai_count[5] > 0 && yamahai[32] < 4){yuko_hai_koho[32] = yuko_hai_koho[32]+1}
    if(yakuhai_hai_count[6] > 0 && yamahai[33] < 4){yuko_hai_koho[33] = yuko_hai_koho[33]+1}

    
    //現状のシャンテン数を保持する
    var shanten_base = 8
    var tszy = tehai_shanten(zenhai)
    if(document.getElementById("titoi_calc").checked){}else{
    //if($("#titoi_calc").is(':checked')){}else{
        var ttszy = tehai_titoi_shanten(zenhai)
    }
    if(document.getElementById("kokusi_calc").checked){}else{
    //if($("#kokusi_calc").is(':checked')){}else{
        var tkszy = tehai_kokusi_shanten(zenhai)
    }
    if(tszy == void 0){
        tszy = 8
    }
    if(ttszy == void 0){
        ttszy = 8
    }
    if(tkszy == void 0){
        tkszy = 8
    }
    shanten_base = Math.min(tszy, ttszy, tkszy)
    /*
    if(tszy < shanten_base){
        shanten_base = tszy
    }
    if(ttszy < shanten_base){
        shanten_base = ttszy
    }
    if(tkszy < shanten_base){
        shanten_base = tkszy
    }
    */


    //if(sakiyomi != void 0){shanten_base = shanten_base - 1}
    //sakiyomiはshanten_baseが1の時だけ実行していた
    //shanten_baseが0になる時も実行させるために、
    //console.log(zenhai)
    //console.log(tehai_shanten(zenhai),tszy, ttszy, tkszy,shanten_base)
    //if(sakiyomi != void 0){shanten_base = Math.max(shanten_base - 1,1)}

    //現状の手牌と上がり牌を保持する
    var zenhai_base = []
    zenhai_base = zenhai.concat()


    //const starttime = performance.now()

    //現状の手牌と上がり牌について、一枚ずつ有効牌候補に置き換えて、シャンテン数が減少するなら有効牌として保持する
    let zenhaibaselength = zenhai_base.length
    for(var i=0;i<zenhaibaselength;i=(i+1)|0){
        //二枚目の同じ牌なら処理を飛ばして、
        if(zenhai_base.indexOf(zenhai_base[i]) != i){continue}
        //有効牌候補について、
        var yukoarraytext = ""
        for(var j=0;j<yuko_hai_koho.length;j=(j+1)|0){
            //有効牌候補の枚数が一枚以上で、交換候補が入替候補と同じでなければ、
            if(yuko_hai_koho[j]>0 && zenhai_base[i] != hai_count_map[j]){
                //有効牌に置き換える用の牌配列
                var zenhai_yuko = []
                zenhai_yuko = zenhai.concat()
                //一牌ずつ有効牌候補に置き換える           
                zenhai_yuko[i] = hai_count_map[j]

                var tszy = tehai_shanten(zenhai_yuko)
                if(document.getElementById("titoi_calc").checked){}else{
                    var ttszy = tehai_titoi_shanten(zenhai_yuko)
                }
                if(document.getElementById("kokusi_calc").checked){}else{
                    var tkszy = tehai_kokusi_shanten(zenhai_yuko)
                }
                if(tszy == void 0){
                    tszy = 8
                }
                if(ttszy == void 0){
                    ttszy = 8
                }
                if(tkszy == void 0){
                    tkszy = 8
                }

                //console.log(tszy,ttszy,tkszy,shanten_base)
                //置き換え後のシャンテン数がshanten_baseよりも少なくなれば、
                //console.log(zenhai_base[i],tszy, ttszy, tkszy,shanten_base)
                //console.log(zenhai_yuko)
                //if(Math.min(tszy, ttszy, tkszy) < shanten_base || Math.min(tszy, ttszy, tkszy) == -1){
                if(Math.min(tszy, ttszy, tkszy) < shanten_base){
                //if(Math.min(tszy, ttszy, tkszy) < shanten_base){
                    
                    /*
                    //現状の手牌について最初の置き換えであれば
                    if(yuko_array[i] == void 0){
                        //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号]
                        yuko_array[i] = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    //現状の手牌における二度目以降の置き換えであれば
                    }else{
                        yuko_array[i] = zenhai_base[i] + ("00" + String(yuko_array[i].substr(2,3)*1+1)).slice(-3) + ("00" + String(yuko_array[i].substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yuko_array[i].substr(8,999) + hai_count_map[j]
                    }
                    */

                    //現状の手牌について最初の置き換えであれば
                    if(yukoarraytext == ""){
                        yukoarraytext = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    }
                    else{
                        yukoarraytext = zenhai_base[i] + ("00" + String(yukoarraytext.substr(2,3)*1+1)).slice(-3) + ("00" + String(yukoarraytext.substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yukoarraytext.substr(8,999) + hai_count_map[j]
                    }


                    /*
                    if(yuko_array[i] == void 0){
                        //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号]
                        yuko_array[i] = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    //現状の手牌における二度目以降の置き換えであれば
                    }else{
                        yuko_array[i] = zenhai_base[i] + ("00" + String(yuko_array[i].substr(2,3)*1+1)).slice(-3) + ("00" + String(yuko_array[i].substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yuko_array[i].substr(8,999) + hai_count_map[j]
                    }
                    */


                    
                    //sakiyomi中でなく、1シャンテンならsakiyomiに入る yukohai(sakiyomi,uti,mati)
                    /*
                    if(sakiyomi == void 0 && shanten_base == 1){
                        yukohai(zenhai_yuko,zenhai_base[i],hai_count_map[j])
                    }
                    */
                }
            }
        }
        if(yukoarraytext != ""){
            yuko_array.push(yukoarraytext)
        } 
        yukoarraytext = ""
        //console.log(yuko_array)
    }

    //const endtime = performance.now()
    //console.log(endtime - starttime)

    //有効牌配列を、枚数・種類で並び替えする
    yuko_array.sort((a,b) =>{
        return b.substr(2,3)*1 - a.substr(2,3)*1
    })
    yuko_array.sort((a,b) =>{
        return b.substr(5,3)*1 - a.substr(5,3)*1
    })


    //glb_yukoarraycount = glb_yukoarraycount +1
    //console.log(yuko_array)
    return yuko_array

}

//候補牌に入れ替えたときに候補牌ごとの候補牌が何枚になるか
function old_yukohai_array_rank(arraylist){

    //arraylistは
    //[43 005 017 31 32 34 35 45] = [南を打ち、5種、17枚、待ち牌は31,32,34,35,45]
    //の集まり

    const starttime = performance.now()

    var rank = new Object()
    var max = ""
    //var rank3 = new Object()
    //[43 005 017 31 32 34 35 45] = [南を打ち、5種、17枚、待ち牌は31,32,34,35,45]
    
    var zenhai_moto = $.merge($.merge([],S),A)
    var zenhai = new Array()

    //現状のシャンテン数を保持する
    var shanten_base = 8
    var tszy = tehai_shanten()
    if($("#titoi_calc").is(':checked')){}else{
        var ttszy = tehai_titoi_shanten()
    }
    if($("#kokusi_calc").is(':checked')){}else{
        var tkszy = tehai_kokusi_shanten()
    }
    if(tszy == void 0){
        tszy = 8
    }
    if(ttszy == void 0){
        ttszy = 8
    }
    if(tkszy == void 0){
        tkszy = 8
    }
    shanten_base = Math.min(tszy, ttszy, tkszy)

    const arraylistlength = arraylist.length
    //arraylist 捨て牌候補種類候補枚数候補牌　配列の数だけ繰り返す
    for(var i=0;i<arraylistlength;i=(i+1)|0){
        if(arraylist[i] == void 0){console.log(arraylist); continue}
        max = 0
        //聴牌なら有効枚数順で並べる
        if(shanten_base == 0){
            max = arraylist[i].substr(5,3)*1
            rank[arraylist[i].substr(0,2)] = max
        }
        else if(shanten_base == 2){
            var rank2 = new Object()
            var rank2max = 0
            
            let arraylistisubstr8length = arraylist[i].substr(8).length
            ////元手牌の捨て牌受入牌候補配列の数だけ繰り返す
            for(var j=0;j<arraylistisubstr8length/2;j=(j+1)|0){

                ////zenhaiをいじくるのでいじくる前のHTML表示手牌に戻す
                zenhai = zenhai_moto.concat()
                ////元手牌の入替を一手進める
                ////北を捨ててまず二万を受け入れする
                zenhai.splice(zenhai.indexOf(String(arraylist[i].substr(0,2))),1)
                zenhai.push(String(arraylist[i].substr(8+j*2,2)))

                ////一手進めた手牌で捨て牌受入牌候補配列を作成する
                ////北を捨ててまず二万を受入した時の候補牌配列
                var yuko_arraynext = yukohai_array(zenhai,0,0)

                let yukoarraynextlength = yuko_arraynext.length
                //北を捨ててまず二万を受け入れした時の候補牌配列の数だけ繰り返す（例だと3回）
                for(var k=0;k<yukoarraynextlength;k=(k+1)|0){
                    if(yuko_arraynext[k] == void 0){continue}
                    //北を捨ててまず二万を受け入れした時の候補牌配列の受入候補種類の数だけ繰り返す
                    let yukoarraynextksubstr8length = yuko_arraynext[k].substr(8).length
                    for(var l=0;l<yukoarraynextksubstr8length/2;l=(l+1)|0){
                        ////元手牌の入替を一手進めた状態　を保存する
                        zenhainext = zenhai.concat()
                        ////北を捨ててまず二万を受け入れした後で発を捨てて三万を受け入れする
                        zenhainext.splice(zenhainext.indexOf(String(yuko_arraynext[k].substr(0,2))),1)
                        zenhainext.push(String(yuko_arraynext[k].substr(8+l*2,2)))
                        //選択基準はyukohai_arrayの中での並び替え方次第
                        var countnum = 4 - zanmaisu(zenhainext,yuko_arraynext[k].substr(8+l*2,2))

                        /*
                        var countnum = 4
                        for(var m=0;m<zenhainext.length;m++){
                            if(zenhainext[m] == yuko_arraynext[k].substr(8+l*2,2)){
                                countnum = countnum -1
                            }
                        }
                        */
                        //console.log(countnum , (4 - zanmaisu(zenhainext,yuko_arraynext[k].substr(8+l*2,2))))

                        //發を打って4枚の三万を受け入れした時のテンパイ枚数　4*4 = 016
                        max = max *1 + yukohai_array(zenhainext,0,0)[0].substr(5,3) * countnum
                        //console.log(String(arraylist[i].substr(0,2)),String(yuko_arraynext[k].substr(0,2)),yukohai_array(zenhainext,0,0),zenhainext,max)
                        
                    }
                    ////北を捨てて二万を受け入れして發を打った時の受入候補牌それぞれの聴牌時受入れ枚数最大値が納められる
                    ////rank2[53] = （三万の時）016とか（五万の時）016とか（六万の時）004004004
                    ////個別に評価値を持つ必要もないので単純に合計値にしてしまう
                    rank2[String(yuko_arraynext[k].substr(0,2))] = max
                    max = 0
                    //console.log(Math.max(rank2))
                    //console.log(String(arraylist[i].substr(0,2)),rank2)
                }
                ////北を捨てて二万を受け入れして發、五万、四万をそれぞれ打った時の受入候補牌それぞれの聴牌時受入れ枚数最大値が納められる
                ////rank2[53] = 004002004004004, rank2[15] = , rank2[14] =,
                ////北を打ってまず二万を受け入れした時の評価値最大
                rank2max = Math.max.apply(null, Object.values(rank2));
                //console.log(rank2max)

                //rank[String(arraylist[i].substr(8+j*2,2))] = rank2max
                var countnum = 4 - zanmaisu(zenhai_moto,arraylist[i].substr(8+j*2,2))

                /*
                var countnum = 4
                for(var m=0;m<zenhai_moto.length;m++){
                    if(zenhai_moto[m] == arraylist[i].substr(8+j*2,2)){
                        countnum = countnum -1
                    }
                }
                */

                //console.log(countnum , (4 - zanmaisu(zenhai_moto,arraylist[i].substr(8+j*2,2))))
                

                //發を打って4枚の三万を受け入れした時のテンパイ枚数　4*4 = 016
                //max = max *1 + yukohai_array(zenhainext,0,0)[0].substr(5,3) * countnum
                if(rank[String(arraylist[i].substr(0,2))] == void 0){
                    rank[String(arraylist[i].substr(0,2))] = rank2max * countnum
                }
                else{
                    rank[String(arraylist[i].substr(0,2))] = rank[String(arraylist[i].substr(0,2))] *1 + rank2max * countnum
                }
                //console.log(rank)
                //max = 0
                rank2 = new Object()
                rank2max = 0

            }
        }
        //nシャンテンなら次シャンテンの有効枚数まで調べる（ので七対子の評価が過剰に高くなる）
        else{
            //候補牌　の数だけ繰り返す
            let arraylistisubstr8length = arraylist[i].substr(8).length
            for(var j=0;j<arraylistisubstr8length/2;j=(j+1)|0){
                zenhai = zenhai_moto.concat()
                //第一打を除く
                zenhai.splice(zenhai.indexOf(String(arraylist[i].substr(0,2))),1)
                //第一待ち牌を加える
                zenhai.push(String(arraylist[i].substr(8+j*2,2)))

                //console.log(zenhai)
                var countnum = 4 - zanmaisu(zenhai_moto,arraylist[i].substr(8+j*2,2))
                max = max + yukohai_array(zenhai,0,0)[0].substr(5,3) * countnum
                //console.log(countnum)
                
            }
            
            rank[String(arraylist[i].substr(0,2))] = max
            max = 0
        }
    }

    //{12: "004007004008004011", 15: "004004008004"}
    console.log(rank)
    //console.log(rank3)

    
    const endtime = performance.now()
    console.log(endtime - starttime)


    //console.log(glb_yukoarraycount)
    //glb_yukoarraycount = 0
    return rank
    

}

function zanmaisu(zenhai,hai){
    var yamahai = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    var zenhai_length=zenhai.length

    //手牌の枚数を記憶する
    for(var i=0;i<zenhai_length;i=(i+1)|0){
      if(zenhai[i]==11){yamahai[0]=yamahai[0]+1}
      else if(zenhai[i]==12){yamahai[1]=yamahai[1]+1}
      else if(zenhai[i]==13){yamahai[2]=yamahai[2]+1}
      else if(zenhai[i]==14){yamahai[3]=yamahai[3]+1}
      else if(zenhai[i]==15){yamahai[4]=yamahai[4]+1}
      else if(zenhai[i]==16){yamahai[5]=yamahai[5]+1}
      else if(zenhai[i]==17){yamahai[6]=yamahai[6]+1}
      else if(zenhai[i]==18){yamahai[7]=yamahai[7]+1}
      else if(zenhai[i]==19){yamahai[8]=yamahai[8]+1}
      else if(zenhai[i]==21){yamahai[9]=yamahai[9]+1}
      else if(zenhai[i]==22){yamahai[10]=yamahai[10]+1}
      else if(zenhai[i]==23){yamahai[11]=yamahai[11]+1}
      else if(zenhai[i]==24){yamahai[12]=yamahai[12]+1}
      else if(zenhai[i]==25){yamahai[13]=yamahai[13]+1}
      else if(zenhai[i]==26){yamahai[14]=yamahai[14]+1}
      else if(zenhai[i]==27){yamahai[15]=yamahai[15]+1}
      else if(zenhai[i]==28){yamahai[16]=yamahai[16]+1}
      else if(zenhai[i]==29){yamahai[17]=yamahai[17]+1}
      else if(zenhai[i]==31){yamahai[18]=yamahai[18]+1}
      else if(zenhai[i]==32){yamahai[19]=yamahai[19]+1}
      else if(zenhai[i]==33){yamahai[20]=yamahai[20]+1}
      else if(zenhai[i]==34){yamahai[21]=yamahai[21]+1}
      else if(zenhai[i]==35){yamahai[22]=yamahai[22]+1}
      else if(zenhai[i]==36){yamahai[23]=yamahai[23]+1}
      else if(zenhai[i]==37){yamahai[24]=yamahai[24]+1}
      else if(zenhai[i]==38){yamahai[25]=yamahai[25]+1}
      else if(zenhai[i]==39){yamahai[26]=yamahai[26]+1}
      else if(zenhai[i]==41){yamahai[27]=yamahai[27]+1}
      else if(zenhai[i]==43){yamahai[28]=yamahai[28]+1}
      else if(zenhai[i]==45){yamahai[29]=yamahai[29]+1}
      else if(zenhai[i]==47){yamahai[30]=yamahai[30]+1}
      else if(zenhai[i]==51){yamahai[31]=yamahai[31]+1}
      else if(zenhai[i]==53){yamahai[32]=yamahai[32]+1}
      else if(zenhai[i]==55){yamahai[33]=yamahai[33]+1}
    }
    for(var i=0;i<NAKI.length;i=(i+1)|0){
        for(var j=0;j<NAKI[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(NAKI[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(NAKI[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(NAKI[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(NAKI[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(NAKI[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(NAKI[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(NAKI[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(NAKI[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(NAKI[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(NAKI[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(NAKI[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(NAKI[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(NAKI[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(NAKI[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(NAKI[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(NAKI[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(NAKI[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(NAKI[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(NAKI[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(NAKI[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(NAKI[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(NAKI[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(NAKI[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(NAKI[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(NAKI[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(NAKI[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(NAKI[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(NAKI[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(NAKI[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(NAKI[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(NAKI[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(NAKI[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(NAKI[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(NAKI[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }
    for(var i=0;i<ANKAN.length;i=(i+1)|0){
        for(var j=0;j<ANKAN[i].length/2;j=(j+1)|0){
            var k = j * 2
            if(ANKAN[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            else if(ANKAN[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            else if(ANKAN[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            else if(ANKAN[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            else if(ANKAN[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            else if(ANKAN[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            else if(ANKAN[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            else if(ANKAN[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            else if(ANKAN[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            else if(ANKAN[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            else if(ANKAN[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            else if(ANKAN[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            else if(ANKAN[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            else if(ANKAN[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            else if(ANKAN[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            else if(ANKAN[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            else if(ANKAN[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            else if(ANKAN[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            else if(ANKAN[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            else if(ANKAN[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            else if(ANKAN[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            else if(ANKAN[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            else if(ANKAN[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            else if(ANKAN[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            else if(ANKAN[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            else if(ANKAN[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            else if(ANKAN[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            else if(ANKAN[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            else if(ANKAN[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            else if(ANKAN[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            else if(ANKAN[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            else if(ANKAN[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            else if(ANKAN[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            else if(ANKAN[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }

    var dora_length=DORA.length
    for(var i=0;i<dora_length;i=(i+1)|0){
        if(DORA[i]==11){yamahai[8]=yamahai[8]+1}
        else if(DORA[i]==12){yamahai[0]=yamahai[0]+1}
        else if(DORA[i]==13){yamahai[1]=yamahai[1]+1}
        else if(DORA[i]==14){yamahai[2]=yamahai[2]+1}
        else if(DORA[i]==15){yamahai[3]=yamahai[3]+1}
        else if(DORA[i]==16){yamahai[4]=yamahai[4]+1}
        else if(DORA[i]==17){yamahai[5]=yamahai[5]+1}
        else if(DORA[i]==18){yamahai[6]=yamahai[6]+1}
        else if(DORA[i]==19){yamahai[7]=yamahai[7]+1}
        else if(DORA[i]==21){yamahai[17]=yamahai[17]+1}
        else if(DORA[i]==22){yamahai[9]=yamahai[9]+1}
        else if(DORA[i]==23){yamahai[10]=yamahai[10]+1}
        else if(DORA[i]==24){yamahai[11]=yamahai[11]+1}
        else if(DORA[i]==25){yamahai[12]=yamahai[12]+1}
        else if(DORA[i]==26){yamahai[13]=yamahai[13]+1}
        else if(DORA[i]==27){yamahai[14]=yamahai[14]+1}
        else if(DORA[i]==28){yamahai[15]=yamahai[15]+1}
        else if(DORA[i]==29){yamahai[16]=yamahai[16]+1}
        else if(DORA[i]==31){yamahai[26]=yamahai[26]+1}
        else if(DORA[i]==32){yamahai[18]=yamahai[18]+1}
        else if(DORA[i]==33){yamahai[19]=yamahai[19]+1}
        else if(DORA[i]==34){yamahai[20]=yamahai[20]+1}
        else if(DORA[i]==35){yamahai[21]=yamahai[21]+1}
        else if(DORA[i]==36){yamahai[22]=yamahai[22]+1}
        else if(DORA[i]==37){yamahai[23]=yamahai[23]+1}
        else if(DORA[i]==38){yamahai[24]=yamahai[24]+1}
        else if(DORA[i]==39){yamahai[25]=yamahai[25]+1}
        else if(DORA[i]==41){yamahai[30]=yamahai[30]+1}
        else if(DORA[i]==43){yamahai[27]=yamahai[27]+1}
        else if(DORA[i]==45){yamahai[28]=yamahai[28]+1}
        else if(DORA[i]==47){yamahai[29]=yamahai[29]+1}
        else if(DORA[i]==51){yamahai[33]=yamahai[33]+1}
        else if(DORA[i]==53){yamahai[31]=yamahai[31]+1}
        else if(DORA[i]==55){yamahai[32]=yamahai[32]+1}
    }

    //一人打ちモードなら、捨て牌を山牌から除く
    if(document.getElementById("game_show").style.display != "none"){
        for(var i=0;i<arrayHaiSute.length;i=(i+1)|0){
            yamahai[hai_count_map.indexOf(arrayHaiSute[i])]=yamahai[hai_count_map.indexOf(arrayHaiSute[i])]+1
        }
    }


    
    return yamahai[hai_count_map.indexOf(hai)]
    

}

function yukohai_array_rank(arraylist){

    //arraylistは
    //[43 005 017 31 32 34 35 45] = [南を打ち、5種、17枚、待ち牌は31,32,34,35,45]
    //の集まり
    const starttime = performance.now()

    var yukohaiarraysaved = {}
    var rank = {}
    var max = ""
    //[43 005 017 31 32 34 35 45] = [南を打ち、5種、17枚、待ち牌は31,32,34,35,45]
    
    var zenhai_moto = $.merge($.merge([],S),A)
    var zenhai = []

    //現状のシャンテン数を保持する
    var shanten_base = 8
    var tszy = tehai_shanten()
    if($("#titoi_calc").is(':checked')){}else{
        var ttszy = tehai_titoi_shanten()
    }
    if($("#kokusi_calc").is(':checked')){}else{
        var tkszy = tehai_kokusi_shanten()
    }
    if(tszy == void 0){
        tszy = 8
    }
    if(ttszy == void 0){
        ttszy = 8
    }
    if(tkszy == void 0){
        tkszy = 8
    }
    shanten_base = Math.min(tszy, ttszy, tkszy)

    const arraylistlength = arraylist.length
    //arraylist 捨て牌候補種類候補枚数候補牌　配列の数だけ繰り返す
    for(var i=0;i<arraylistlength;i=(i+1)|0){
        if(arraylist[i] == void 0){console.log(arraylist); continue}
        max = 0
        //聴牌なら有効枚数順で並べる
        if(shanten_base == 0){
            max = arraylist[i].substr(5,3)*1
            rank[arraylist[i].substr(0,2)] = max
        }
        else if(shanten_base ==2){
            var rank2 = {}
            var rank2max = 0
            
            let arraylistisubstr8length = arraylist[i].substr(8).length
            ////元手牌の捨て牌受入牌候補配列の数だけ繰り返す
            for(var j=0;j<arraylistisubstr8length/2;j=(j+1)|0){

                ////zenhaiをいじくるのでいじくる前のHTML表示手牌に戻す
                zenhai = zenhai_moto.concat()
                ////元手牌の入替を一手進める
                ////北を捨ててまず二万を受け入れする
                zenhai.splice(zenhai.indexOf(String(arraylist[i].substr(0,2))),1)
                zenhai.push(String(arraylist[i].substr(8+j*2,2)))

                ////一手進めた手牌で捨て牌受入牌候補配列を作成する
                ////北を捨ててまず二万を受入した時の候補牌配列
                if(yukohaiarraysaved[zenhai.sort()] == void 0){
                    var yuko_arraynext = yukohai_array(zenhai,0,0)
                    yukohaiarraysaved[zenhai.sort()] = yuko_arraynext
                }
                else{
                    var yuko_arraynext = yukohaiarraysaved[zenhai.sort()]
                }

                let yukoarraynextlength = yuko_arraynext.length
                //北を捨ててまず二万を受け入れした時の候補牌配列の数だけ繰り返す（例だと3回）
                for(var k=0;k<yukoarraynextlength;k=(k+1)|0){
                    if(yuko_arraynext[k] == void 0){continue}
                    //北を捨ててまず二万を受け入れした時の候補牌配列の受入候補種類の数だけ繰り返す
                    let yukoarraynextksubstr8length = yuko_arraynext[k].substr(8).length
                    for(var l=0;l<yukoarraynextksubstr8length/2;l=(l+1)|0){
                        ////元手牌の入替を一手進めた状態　を保存する
                        zenhainext = zenhai.concat()
                        ////北を捨ててまず二万を受け入れした後で発を捨てて三万を受け入れする
                        zenhainext.splice(zenhainext.indexOf(String(yuko_arraynext[k].substr(0,2))),1)
                        zenhainext.push(String(yuko_arraynext[k].substr(8+l*2,2)))
                        //選択基準はyukohai_arrayの中での並び替え方次第
                        var countnum = 4 - zanmaisu(zenhainext,yuko_arraynext[k].substr(8+l*2,2))

                        //發を打って4枚の三万を受け入れした時のテンパイ枚数　4*4 = 016
                        if(yukohaiarraysaved[zenhainext.sort()] == void 0){
                            var temp = yukohai_array(zenhainext,0,0)
                            yukohaiarraysaved[zenhainext.sort()] = temp
                            max = max *1 + temp[0].substr(5,3) * countnum

                        }
                        else{
                            max = max *1 + yukohaiarraysaved[zenhainext.sort()][0].substr(5,3) * countnum
                        }
                        //max = max *1 + yukohai_array(zenhainext,0,0)[0].substr(5,3) * countnum
                        
                    }
                    ////北を捨てて二万を受け入れして發を打った時の受入候補牌それぞれの聴牌時受入れ枚数最大値が納められる
                    ////rank2[53] = （三万の時）016とか（五万の時）016とか（六万の時）004004004
                    ////個別に評価値を持つ必要もないので単純に合計値にしてしまう
                    rank2[String(yuko_arraynext[k].substr(0,2))] = max
                    max = 0
                }
                ////北を捨てて二万を受け入れして發、五万、四万をそれぞれ打った時の受入候補牌それぞれの聴牌時受入れ枚数最大値が納められる
                ////rank2[53] = 004002004004004, rank2[15] = , rank2[14] =,
                ////北を打ってまず二万を受け入れした時の評価値最大
                rank2max = Math.max.apply(null, Object.values(rank2));

                var countnum = 4 - zanmaisu(zenhai_moto,arraylist[i].substr(8+j*2,2))

                //發を打って4枚の三万を受け入れした時のテンパイ枚数　4*4 = 016
                if(rank[String(arraylist[i].substr(0,2))] == void 0){
                    rank[String(arraylist[i].substr(0,2))] = rank2max * countnum
                }
                else{
                    rank[String(arraylist[i].substr(0,2))] = rank[String(arraylist[i].substr(0,2))] *1 + rank2max * countnum
                }
                rank2 = {}
                rank2max = 0
            }
        }
        //nシャンテンなら次シャンテンの有効枚数まで調べる（ので七対子の評価が過剰に高くなる）
        else{
            //候補牌　の数だけ繰り返す
            let arraylistisubstr8length = arraylist[i].substr(8).length
            for(var j=0;j<arraylistisubstr8length/2;j=(j+1)|0){
                zenhai = zenhai_moto.concat()
                //第一打を除く
                zenhai.splice(zenhai.indexOf(String(arraylist[i].substr(0,2))),1)
                //第一待ち牌を加える
                zenhai.push(String(arraylist[i].substr(8+j*2,2)))

                var countnum = 4 - zanmaisu(zenhai_moto,arraylist[i].substr(8+j*2,2))
                max = max + yukohai_array(zenhai,0,0)[0].substr(5,3) * countnum
                
            }
            
            rank[String(arraylist[i].substr(0,2))] = max
            max = 0
        }
    }

    //{12: "004007004008004011", 15: "004004008004"}
    
    
    const endtime = performance.now()
    console.log(endtime - starttime)

    console.log(rank)
    console.log(yukohaiarraysaved)
    return rank

}