hai_count_map = new Array("11","12","13","14","15","16","17","18","19","21","22","23","24","25","26","27","28","29","31","32","33","34","35","36","37","38","39","41","43","45","47","51","53","55")

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

function yuko2_hyoji(){
    $("#yuko_text2").html(glb_yuko_text2)
    glb_yuko_text2 = ""
    glb_yuko_text2_array = new Array()
}

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


function tehai_shanten(tehai){


    var zenhai=$.merge([],S)
    zenhai=$.merge(zenhai,A)
    if(tehai != void 0){zenhai = tehai}
    
    var man_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var pin_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var sou_hai_count=new Array(0,0,0,0,0,0,0,0,0)
    var yakuhai_hai_count=new Array(0,0,0,0,0,0,0)
    var zenhai_length=zenhai.length
    for(var i=0;i<zenhai_length;i++){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1}
      if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1}
      if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1}
      if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1}
      if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1}
      if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1}
      if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1}
      if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1}
      if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1}
      if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1}
      if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1}
      if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1}
      if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1}
      if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1}
      if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1}
      if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1}
      if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1}
      if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1}
      if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1}
      if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1}
      if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1}
      if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1}
      if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1}
      if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1}
      if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1}
      if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1}
      if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1}
      if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1}
      if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1}
      if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1}
      if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1}
      if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1}
      if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1}
      if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1}
    }

    if(Math.max.apply(null,man_hai_count)>4 || Math.max.apply(null,pin_hai_count)>4 || Math.max.apply(null,sou_hai_count)>4 || Math.max.apply(null,yakuhai_hai_count)>4){
        return
    }
    //雀頭を取らないときの萬子の牌数
    var man_num = 0
    for(var i=0;i<9;i++){
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
    var man_janto_array = new Array()
    for(var i=0;i<9;i++){
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
    for(var i=0;i<9;i++){
        
        if(pin_hai_count[i] == 1 && (pin_hai_count[i-2] == 0 || pin_hai_count[i-2] == void 0) && (pin_hai_count[i-1] == 0 || pin_hai_count[i-1] == void 0) && (pin_hai_count[i+1] == 0 || pin_hai_count[i+1] == void 0) && (pin_hai_count[i+2] == 0 || pin_hai_count[i+2] == void 0)){
        }else{
            pin_num = pin_num + pin_hai_count[i]*(10**(9-i))/10  
        }
    }
    //console.log(pin_num)
    //man_hai_count[i]が二個以上あれば、雀頭を取り、配列に追加する
    var pin_janto_check ="000000000"
    pin_janto_check = ("000" + String(pin_num)).slice(-9)
    //console.log(pin_janto_check)
    //雀頭を取るときの萬子の牌数連想配列
    var pin_janto_array = new Array()
    for(var i=0;i<9;i++){
        if(pin_janto_check.substr(i,1)*1>1){
            if(i == 0){
                pin_janto_array.push(String(pin_janto_check.substr(0,1)*1-2) + pin_janto_check.substr(1,8))
            }else{
                pin_janto_array.push(pin_janto_check.substr(0,i) + String(pin_janto_check.substr(i,1)*1-2) + pin_janto_check.substr(i+1,8-i))
                //console.log(pin_janto_array)
            }
            
        }
    }
    

    var pin_str = "0000"
    pin_str = ("000" + ShantenTable[pin_num]).slice(-4)


    var sou_num = 0
    for(var i=0;i<9;i++){
        
        if(sou_hai_count[i] == 1 && (sou_hai_count[i-2] == 0 || sou_hai_count[i-2] == void 0) && (sou_hai_count[i-1] == 0 || sou_hai_count[i-1] == void 0) && (sou_hai_count[i+1] == 0 || sou_hai_count[i+1] == void 0) && (sou_hai_count[i+2] == 0 || sou_hai_count[i+2] == void 0)){
        }else{
            sou_num = sou_num + sou_hai_count[i]*(10**(9-i))/10  
        }
    }

    //man_hai_count[i]が二個以上あれば、雀頭を取り、配列に追加する
    var sou_janto_check ="000000000"
    sou_janto_check = ("000" + String(sou_num)).slice(-9)
    //雀頭を取るときの萬子の牌数連想配列
    var sou_janto_array = new Array()
    for(var i=0;i<9;i++){
        if(sou_janto_check.substr(i,1)*1>1){
            if(i == 0){
                sou_janto_array.push(String(sou_janto_check.substr(0,1)*1-2) + sou_janto_check.substr(1,8))
            }else{
                sou_janto_array.push(sou_janto_check.substr(0,i) + String(sou_janto_check.substr(i,1)*1-2) + sou_janto_check.substr(i+1,8-i))
            }
            
        }
    }
    //console.log(sou_janto_array)
    var sou_str = "0000"
    sou_str = ("000" + ShantenTable[sou_num]).slice(-4)


    var yakuhai_num = 0
    var yakuhai_koho_num = 0
    var yakuhai_janto_num = 0
    for(var i=0;i<7;i++){
        
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
    //面子＋面子候補が4位内、面子候補が順子かどうか
    var mentsuB_num = man_str.substr(0,1)*1+pin_str.substr(0,1)*1+sou_str.substr(0,1)*1
    var mentsuA_num = man_str.substr(2,1)*1+pin_str.substr(2,1)*1+sou_str.substr(2,1)*1
    var mentsu_kohoB_num = man_str.substr(1,1)*1+pin_str.substr(1,1)*1+sou_str.substr(1,1)*1
    var mentsu_kohoA_num = man_str.substr(3,1)*1+pin_str.substr(3,1)*1+sou_str.substr(3,1)*1
    if(mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num> 4){
        mentsu_kohoA_num = mentsu_kohoA_num - (mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num - 4)
        if(yakuhai_janto_num == 1){janto_num = 1}
    }
    if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 4){
        mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 4)
        if(yakuhai_janto_num == 1){janto_num = 1}
    }

    shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num
    
    
    //雀頭を考慮した
    for(var i=0;i<man_janto_array.length;i++){
        janto_num = 0
        var man_janto_num = 0
        for(var j=0;j<9;j++){
            //[i]が孤立牌の場合はスキップする
            if(man_janto_array[i].charAt(j)*1 == 1 && (man_janto_array[i].charAt(j-2)*1 == 0 || man_janto_array[i].charAt(j-2)*1 == void 0) && (man_janto_array[i].charAt(j-1)*1 == 0 || man_janto_array[i].charAt(j-1)*1 == void 0) && (man_janto_array[i].charAt(j+1)*1 == 0 || man_janto_array[i].charAt(j+1)*1 == void 0) && (man_janto_array[i].charAt(j+2)*1 == 0 || man_janto_array[i].charAt(j+2)*1 == void 0)){
            }else{
                man_janto_num = man_janto_num + man_janto_array[i].substr(j,1)*(10**(9-j))/10  
            }
        }
        //console.log(man_janto_num)
        var mentsuB_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(0,1) | 0)*1+pin_str.substr(0,1)*1+sou_str.substr(0,1)*1
        var mentsuA_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(2,1) | 0)*1+pin_str.substr(2,1)*1+sou_str.substr(2,1)*1
        var mentsu_kohoB_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(1,1) | 0)*1+pin_str.substr(1,1)*1+sou_str.substr(1,1)*1
        var mentsu_kohoA_num = (("000" + ShantenTable[Number(man_janto_num)]).slice(-4).substr(3,1) | 0)*1+pin_str.substr(3,1)*1+sou_str.substr(3,1)*1
        //雀頭が一つは確実にあるので面子＋面子候補は3つまでで比較する
        if(mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoA_num = mentsu_kohoA_num - (mentsuA_num + mentsu_kohoA_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            janto_num = 1
        }
        if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            janto_num = 1
        }

        if(shanten > Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num - 1){
            shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num - 1
        }
        //console.log(shanten)
    }

    for(var i=0;i<pin_janto_array.length;i++){
        janto_num = 0
        var pin_janto_num = 0
        for(var j=0;j<9;j++){
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
            janto_num = 1
        }
        if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            janto_num = 1
        }

        if(shanten > Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num - 1){
            shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num - 1
        }
        //console.log(shanten)
    }
    //console.log(pin_janto_array)
    //console.log(mentsuB_num)
    for(var i=0;i<sou_janto_array.length;i++){
        janto_num = 0
        var sou_janto_num = 0
        for(var j=0;j<9;j++){
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
            janto_num = 1
        }
        if(mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num > 3){
            mentsu_kohoB_num = mentsu_kohoB_num - (mentsuB_num + mentsu_kohoB_num + yakuhai_num + yakuhai_koho_num + naki_num - 3)
            janto_num = 1
        }

        if(shanten > Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num -1){
            shanten = Math.min(8 - (mentsuA_num)*2 - (mentsu_kohoA_num), 8 - (mentsuB_num)*2 - (mentsu_kohoB_num)) - (yakuhai_num + naki_num)*2 - yakuhai_koho_num - janto_num - 1
        }
    }
        




    return shanten    

}

var glb_uti_record = ""
////var glb_sakiyomi_count = 0
////var glb_sakiyomi_kind = new Array()
var glb_yuko_text2 = ""
var glb_yuko_text2_array = new Array()

function yukohai(sakiyomi,uti,mati){
    //手牌が14牌でなければFunctionを抜ける
    if(sakiyomi == void 0){
        if(S.length + A.length + NAKI.length*3 + ANKAN.length*3 < 14){return}
    }
    //有効牌の配列
    //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号],
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
        $("#yuko_text3").html("")
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
    for(var i=0;i<zenhai_length;i++){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1, yamahai[0]=yamahai[0]+1}
      if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1, yamahai[1]=yamahai[1]+1}
      if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1, yamahai[2]=yamahai[2]+1}
      if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1, yamahai[3]=yamahai[3]+1}
      if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1, yamahai[4]=yamahai[4]+1}
      if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1, yamahai[5]=yamahai[5]+1}
      if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1, yamahai[6]=yamahai[6]+1}
      if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1, yamahai[7]=yamahai[7]+1}
      if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1, yamahai[8]=yamahai[8]+1}
      if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1, yamahai[9]=yamahai[9]+1}
      if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1, yamahai[10]=yamahai[10]+1}
      if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1, yamahai[11]=yamahai[11]+1}
      if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1, yamahai[12]=yamahai[12]+1}
      if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1, yamahai[13]=yamahai[13]+1}
      if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1, yamahai[14]=yamahai[14]+1}
      if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1, yamahai[15]=yamahai[15]+1}
      if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1, yamahai[16]=yamahai[16]+1}
      if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1, yamahai[17]=yamahai[17]+1}
      if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1, yamahai[18]=yamahai[18]+1}
      if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1, yamahai[19]=yamahai[19]+1}
      if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1, yamahai[20]=yamahai[20]+1}
      if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1, yamahai[21]=yamahai[21]+1}
      if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1, yamahai[22]=yamahai[22]+1}
      if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1, yamahai[23]=yamahai[23]+1}
      if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1, yamahai[24]=yamahai[24]+1}
      if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1, yamahai[25]=yamahai[25]+1}
      if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1, yamahai[26]=yamahai[26]+1}
      if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1, yamahai[27]=yamahai[27]+1}
      if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1, yamahai[28]=yamahai[28]+1}
      if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1, yamahai[29]=yamahai[29]+1}
      if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1, yamahai[30]=yamahai[30]+1}
      if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1, yamahai[31]=yamahai[31]+1}
      if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1, yamahai[32]=yamahai[32]+1}
      if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1, yamahai[33]=yamahai[33]+1}
    }
    for(var i=0;i<NAKI.length;i++){
        for(var j=0;j<NAKI[i].length/2;j++){
            var k = j * 2
            if(NAKI[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            if(NAKI[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            if(NAKI[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            if(NAKI[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            if(NAKI[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            if(NAKI[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            if(NAKI[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            if(NAKI[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            if(NAKI[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            if(NAKI[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            if(NAKI[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            if(NAKI[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            if(NAKI[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            if(NAKI[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            if(NAKI[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            if(NAKI[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            if(NAKI[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            if(NAKI[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            if(NAKI[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            if(NAKI[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            if(NAKI[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            if(NAKI[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            if(NAKI[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            if(NAKI[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            if(NAKI[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            if(NAKI[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            if(NAKI[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            if(NAKI[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            if(NAKI[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            if(NAKI[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            if(NAKI[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            if(NAKI[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            if(NAKI[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            if(NAKI[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }
    for(var i=0;i<ANKAN.length;i++){
        for(var j=0;j<ANKAN[i].length/2;j++){
            var k = j * 2
            if(ANKAN[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            if(ANKAN[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            if(ANKAN[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            if(ANKAN[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            if(ANKAN[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            if(ANKAN[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            if(ANKAN[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            if(ANKAN[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            if(ANKAN[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            if(ANKAN[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            if(ANKAN[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            if(ANKAN[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            if(ANKAN[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            if(ANKAN[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            if(ANKAN[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            if(ANKAN[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            if(ANKAN[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            if(ANKAN[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            if(ANKAN[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            if(ANKAN[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            if(ANKAN[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            if(ANKAN[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            if(ANKAN[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            if(ANKAN[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            if(ANKAN[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            if(ANKAN[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            if(ANKAN[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            if(ANKAN[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            if(ANKAN[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            if(ANKAN[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            if(ANKAN[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            if(ANKAN[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            if(ANKAN[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            if(ANKAN[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }

    //一人打ちモードなら、捨て牌を山牌から除く
    if($("#game_show").css("display") != "none"){
        for(var i=0;i<arrayHaiSute.length;i++){
            yamahai[hai_count_map.indexOf(arrayHaiSute[i])]=yamahai[hai_count_map.indexOf(arrayHaiSute[i])]+1

        }
    }

    //有効牌候補を羅列する
    var yuko_hai_koho = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)

    //各牌について有効牌候補を配列に挿入する
    for(var i=0;i<man_hai_count.length;i++){
        if(man_hai_count[i]>0){
            if(man_hai_count[i-2] != void 0 && yamahai[i-2]<4){yuko_hai_koho[i-2] = yuko_hai_koho[i-2]+1}
            if(man_hai_count[i-1] != void 0 && yamahai[i-1]<4){yuko_hai_koho[i-1] = yuko_hai_koho[i-1]+1}
            if(man_hai_count[i] != void 0 && yamahai[i]<4){yuko_hai_koho[i] = yuko_hai_koho[i]+1}
            if(man_hai_count[i+1] != void 0 && yamahai[i+1]<4){yuko_hai_koho[i+1] = yuko_hai_koho[i+1]+1}
            if(man_hai_count[i+2] != void 0 && yamahai[i+2]<4){yuko_hai_koho[i+2] = yuko_hai_koho[i+2]+1}
        }
    }
    for(var i=0;i<pin_hai_count.length;i++){
        if(pin_hai_count[i]>0){
            if(pin_hai_count[i-2] != void 0 && yamahai[i-2+9]<4){yuko_hai_koho[i-2+9] = yuko_hai_koho[i-2+9]+1}
            if(pin_hai_count[i-1] != void 0 && yamahai[i-1+9]<4){yuko_hai_koho[i-1+9] = yuko_hai_koho[i-1+9]+1}
            if(pin_hai_count[i] != void 0 && yamahai[i+9]<4){yuko_hai_koho[i+9] = yuko_hai_koho[i+9]+1}
            if(pin_hai_count[i+1] != void 0 && yamahai[i+1+9]<4){yuko_hai_koho[i+1+9] = yuko_hai_koho[i+1+9]+1}
            if(pin_hai_count[i+2] != void 0 && yamahai[i+2+9]<4){yuko_hai_koho[i+2+9] = yuko_hai_koho[i+2+9]+1}
        }
    }
    for(var i=0;i<sou_hai_count.length;i++){
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
    var ttszy = tehai_titoi_shanten()
    var tkszy = tehai_kokusi_shanten()
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


    //現状の手牌と上がり牌について、一枚ずつ有効牌候補に置き換えて、シャンテン数が減少するなら有効牌として保持する
    for(var i=0;i<zenhai_base.length;i++){
        //二枚目の同じ牌なら処理を飛ばして、
        if(zenhai_base.indexOf(zenhai_base[i]) != i){continue}
        //有効牌候補について、
        for(var j=0;j<yuko_hai_koho.length;j++){
            //有効牌候補の枚数が一枚以上で、交換候補が入替候補と同じでなければ、
            if(yuko_hai_koho[j]>0 && zenhai_base[i] != hai_count_map[j]){
                //有効牌に置き換える用の牌配列
                var zenhai_yuko = new Array()
                //zenhai_yuko = $.merge($.merge([],S),A)
                zenhai_yuko = zenhai.concat()
                //一牌ずつ有効牌候補に置き換える           
                zenhai_yuko[i] = hai_count_map[j]

                var tszy = tehai_shanten(zenhai_yuko)
                var ttszy = tehai_titoi_shanten(zenhai_yuko)
                var tkszy = tehai_kokusi_shanten(zenhai_yuko)
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
                    if(yuko_array[i] == void 0){
                        //yuko_arrayは、[置き換え前の牌番号][候補牌の種類数][候補牌の枚数][候補牌の牌番号]
                        yuko_array[i] = zenhai_base[i] + "001" + ("00" + String((4 - yamahai[j]*1))).slice(-3) + hai_count_map[j]
                    //現状の手牌における二度目以降の置き換えであれば
                    }else{
                        yuko_array[i] = zenhai_base[i] + ("00" + String(yuko_array[i].substr(2,3)*1+1)).slice(-3) + ("00" + String(yuko_array[i].substr(5,3)*1+(4 - yamahai[j]*1))).slice(-3) + yuko_array[i].substr(8,999) + hai_count_map[j]
                    }
                    //sakiyomi中でなく、1シャンテンならsakiyomiに入る yukohai(sakiyomi,uti,mati)
                    if(sakiyomi == void 0 && shanten_base == 1){
                        yukohai(zenhai_yuko,zenhai_base[i],hai_count_map[j])
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
    }

    //有効牌配列を、枚数・種類で並び替えする
    yuko_array.sort((a,b) =>{
        return b.substr(2,3)*1 - a.substr(2,3)*1
    })
    yuko_array.sort((a,b) =>{
        return b.substr(5,3)*1 - a.substr(5,3)*1
    })

    
    //yuko_arrayをHTMLに書き出す
    for(var i=0;i<yuko_array.length;i++){
        if(yuko_array[i] == void 0){continue}
        //待ち牌画像（sakiyomi共通）
        var text = ""
        //ハン数、符数
        var text2 = ""
        for(var j=0;j<yuko_array[i].substr(8,999).length/2;j++){
            var color = ""
            //if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 4){color = "border-bottom: 1px solid red;"}
            if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 4){color = "4"}
            //if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 4){color = "border-image: url('.img2/bg2.png') 15; border-style: solid; border-width: 10px;"}
            // style="border-image: url('./img2/bg3.png') 2; border-style:solid; border-width: 2px;"
            //else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 3){color = "border-bottom: 1px solid blue;"}
            //else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 2){color = "border-bottom: 1px solid black; border-bottom-style: dashed;"}
            //else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 1){color = ""}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 3){color = "3"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 2){color = "2"}
            else if(4 - yamahai[hai_count_map.indexOf(String(yuko_array[i].substr(8+j*2,2)))] == 1){color = "1"}
            
            
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
            $("#yuko_text").html($("#yuko_text").html() + "打:"+"<img src='./img2/"+haimap2[String(yuko_array[i].substr(0,2))]+".png' style='width:20px;'>"+" 待:"+ text + " " + yuko_array[i].substr(2,3)*1 + "種" + yuko_array[i].substr(5,3)*1 + "枚 " + text2 + "<br>")
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
        for(var i=0;i<yuko_array.length;i++){
            if(yuko_array[i] == void 0 ){continue}
            if(glb_yuko_text2_array[yuko_array[i].substr(0,2)*1] == void 0 ){continue}
            glb_yuko_text2 = glb_yuko_text2 + glb_yuko_text2_array[yuko_array[i].substr(0,2)*1]
        }
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

function tehai_titoi_shanten(tehai){
    if(NAKI.length + ANKAN.length > 0){return}

    var zenhai=$.merge([],S)
    zenhai=$.merge(zenhai,A)
    if(tehai != void 0){zenhai = tehai}

    var zenhai_length=zenhai.length
    var hai_count=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    for(i=0;i<zenhai_length;i++){
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

    //チートイツ
    titoi_check=0
    for(i=0;i<34;i++){
        if(hai_count[i]>1){titoi_check=titoi_check+1}
    }
    var shanten_titoi = 6 - titoi_check

    return shanten_titoi

}

function tehai_kokusi_shanten(tehai){
    if(NAKI.length + ANKAN.length > 0){return}

    var zenhai=$.merge([],S)
    zenhai=$.merge(zenhai,A)
    if(tehai != void 0){zenhai = tehai}

    var zenhai_length=zenhai.length
    var hai_count=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    for(i=0;i<zenhai_length;i++){
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
    for(var i=0;i<zenhai_length;i++){
      if(zenhai[i]==11){man_hai_count[0]=man_hai_count[0]+1, yamahai[0]=yamahai[0]+1}
      if(zenhai[i]==12){man_hai_count[1]=man_hai_count[1]+1, yamahai[1]=yamahai[1]+1}
      if(zenhai[i]==13){man_hai_count[2]=man_hai_count[2]+1, yamahai[2]=yamahai[2]+1}
      if(zenhai[i]==14){man_hai_count[3]=man_hai_count[3]+1, yamahai[3]=yamahai[3]+1}
      if(zenhai[i]==15){man_hai_count[4]=man_hai_count[4]+1, yamahai[4]=yamahai[4]+1}
      if(zenhai[i]==16){man_hai_count[5]=man_hai_count[5]+1, yamahai[5]=yamahai[5]+1}
      if(zenhai[i]==17){man_hai_count[6]=man_hai_count[6]+1, yamahai[6]=yamahai[6]+1}
      if(zenhai[i]==18){man_hai_count[7]=man_hai_count[7]+1, yamahai[7]=yamahai[7]+1}
      if(zenhai[i]==19){man_hai_count[8]=man_hai_count[8]+1, yamahai[8]=yamahai[8]+1}
      if(zenhai[i]==21){pin_hai_count[0]=pin_hai_count[0]+1, yamahai[9]=yamahai[9]+1}
      if(zenhai[i]==22){pin_hai_count[1]=pin_hai_count[1]+1, yamahai[10]=yamahai[10]+1}
      if(zenhai[i]==23){pin_hai_count[2]=pin_hai_count[2]+1, yamahai[11]=yamahai[11]+1}
      if(zenhai[i]==24){pin_hai_count[3]=pin_hai_count[3]+1, yamahai[12]=yamahai[12]+1}
      if(zenhai[i]==25){pin_hai_count[4]=pin_hai_count[4]+1, yamahai[13]=yamahai[13]+1}
      if(zenhai[i]==26){pin_hai_count[5]=pin_hai_count[5]+1, yamahai[14]=yamahai[14]+1}
      if(zenhai[i]==27){pin_hai_count[6]=pin_hai_count[6]+1, yamahai[15]=yamahai[15]+1}
      if(zenhai[i]==28){pin_hai_count[7]=pin_hai_count[7]+1, yamahai[16]=yamahai[16]+1}
      if(zenhai[i]==29){pin_hai_count[8]=pin_hai_count[8]+1, yamahai[17]=yamahai[17]+1}
      if(zenhai[i]==31){sou_hai_count[0]=sou_hai_count[0]+1, yamahai[18]=yamahai[18]+1}
      if(zenhai[i]==32){sou_hai_count[1]=sou_hai_count[1]+1, yamahai[19]=yamahai[19]+1}
      if(zenhai[i]==33){sou_hai_count[2]=sou_hai_count[2]+1, yamahai[20]=yamahai[20]+1}
      if(zenhai[i]==34){sou_hai_count[3]=sou_hai_count[3]+1, yamahai[21]=yamahai[21]+1}
      if(zenhai[i]==35){sou_hai_count[4]=sou_hai_count[4]+1, yamahai[22]=yamahai[22]+1}
      if(zenhai[i]==36){sou_hai_count[5]=sou_hai_count[5]+1, yamahai[23]=yamahai[23]+1}
      if(zenhai[i]==37){sou_hai_count[6]=sou_hai_count[6]+1, yamahai[24]=yamahai[24]+1}
      if(zenhai[i]==38){sou_hai_count[7]=sou_hai_count[7]+1, yamahai[25]=yamahai[25]+1}
      if(zenhai[i]==39){sou_hai_count[8]=sou_hai_count[8]+1, yamahai[26]=yamahai[26]+1}
      if(zenhai[i]==41){yakuhai_hai_count[0]=yakuhai_hai_count[0]+1, yamahai[27]=yamahai[27]+1}
      if(zenhai[i]==43){yakuhai_hai_count[1]=yakuhai_hai_count[1]+1, yamahai[28]=yamahai[28]+1}
      if(zenhai[i]==45){yakuhai_hai_count[2]=yakuhai_hai_count[2]+1, yamahai[29]=yamahai[29]+1}
      if(zenhai[i]==47){yakuhai_hai_count[3]=yakuhai_hai_count[3]+1, yamahai[30]=yamahai[30]+1}
      if(zenhai[i]==51){yakuhai_hai_count[4]=yakuhai_hai_count[4]+1, yamahai[31]=yamahai[31]+1}
      if(zenhai[i]==53){yakuhai_hai_count[5]=yakuhai_hai_count[5]+1, yamahai[32]=yamahai[32]+1}
      if(zenhai[i]==55){yakuhai_hai_count[6]=yakuhai_hai_count[6]+1, yamahai[33]=yamahai[33]+1}
    }
    for(var i=0;i<NAKI.length;i++){
        for(var j=0;j<NAKI[i].length/2;j++){
            var k = j * 2
            if(NAKI[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            if(NAKI[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            if(NAKI[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            if(NAKI[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            if(NAKI[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            if(NAKI[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            if(NAKI[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            if(NAKI[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            if(NAKI[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            if(NAKI[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            if(NAKI[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            if(NAKI[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            if(NAKI[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            if(NAKI[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            if(NAKI[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            if(NAKI[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            if(NAKI[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            if(NAKI[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            if(NAKI[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            if(NAKI[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            if(NAKI[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            if(NAKI[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            if(NAKI[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            if(NAKI[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            if(NAKI[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            if(NAKI[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            if(NAKI[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            if(NAKI[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            if(NAKI[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            if(NAKI[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            if(NAKI[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            if(NAKI[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            if(NAKI[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            if(NAKI[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }
    for(var i=0;i<ANKAN.length;i++){
        for(var j=0;j<ANKAN[i].length/2;j++){
            var k = j * 2
            if(ANKAN[i].substr(k,2)*1==11){yamahai[0]=yamahai[0]+1}
            if(ANKAN[i].substr(k,2)*1==12){yamahai[1]=yamahai[1]+1}
            if(ANKAN[i].substr(k,2)*1==13){yamahai[2]=yamahai[2]+1}
            if(ANKAN[i].substr(k,2)*1==14){yamahai[3]=yamahai[3]+1}
            if(ANKAN[i].substr(k,2)*1==15){yamahai[4]=yamahai[4]+1}
            if(ANKAN[i].substr(k,2)*1==16){yamahai[5]=yamahai[5]+1}
            if(ANKAN[i].substr(k,2)*1==17){yamahai[6]=yamahai[6]+1}
            if(ANKAN[i].substr(k,2)*1==18){yamahai[7]=yamahai[7]+1}
            if(ANKAN[i].substr(k,2)*1==19){yamahai[8]=yamahai[8]+1}
            if(ANKAN[i].substr(k,2)*1==21){yamahai[9]=yamahai[9]+1}
            if(ANKAN[i].substr(k,2)*1==22){yamahai[10]=yamahai[10]+1}
            if(ANKAN[i].substr(k,2)*1==23){yamahai[11]=yamahai[11]+1}
            if(ANKAN[i].substr(k,2)*1==24){yamahai[12]=yamahai[12]+1}
            if(ANKAN[i].substr(k,2)*1==25){yamahai[13]=yamahai[13]+1}
            if(ANKAN[i].substr(k,2)*1==26){yamahai[14]=yamahai[14]+1}
            if(ANKAN[i].substr(k,2)*1==27){yamahai[15]=yamahai[15]+1}
            if(ANKAN[i].substr(k,2)*1==28){yamahai[16]=yamahai[16]+1}
            if(ANKAN[i].substr(k,2)*1==29){yamahai[17]=yamahai[17]+1}
            if(ANKAN[i].substr(k,2)*1==31){yamahai[18]=yamahai[18]+1}
            if(ANKAN[i].substr(k,2)*1==32){yamahai[19]=yamahai[19]+1}
            if(ANKAN[i].substr(k,2)*1==33){yamahai[20]=yamahai[20]+1}
            if(ANKAN[i].substr(k,2)*1==34){yamahai[21]=yamahai[21]+1}
            if(ANKAN[i].substr(k,2)*1==35){yamahai[22]=yamahai[22]+1}
            if(ANKAN[i].substr(k,2)*1==36){yamahai[23]=yamahai[23]+1}
            if(ANKAN[i].substr(k,2)*1==37){yamahai[24]=yamahai[24]+1}
            if(ANKAN[i].substr(k,2)*1==38){yamahai[25]=yamahai[25]+1}
            if(ANKAN[i].substr(k,2)*1==39){yamahai[26]=yamahai[26]+1}
            if(ANKAN[i].substr(k,2)*1==41){yamahai[27]=yamahai[27]+1}
            if(ANKAN[i].substr(k,2)*1==43){yamahai[28]=yamahai[28]+1}
            if(ANKAN[i].substr(k,2)*1==45){yamahai[29]=yamahai[29]+1}
            if(ANKAN[i].substr(k,2)*1==47){yamahai[30]=yamahai[30]+1}
            if(ANKAN[i].substr(k,2)*1==51){yamahai[31]=yamahai[31]+1}
            if(ANKAN[i].substr(k,2)*1==53){yamahai[32]=yamahai[32]+1}
            if(ANKAN[i].substr(k,2)*1==55){yamahai[33]=yamahai[33]+1}
        }
    }

    //有効牌候補を羅列する
    var yuko_hai_koho = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)

    //各牌について有効牌候補を配列に挿入する
    for(var i=0;i<man_hai_count.length;i++){
        if(man_hai_count[i]>0){
            if(man_hai_count[i-2] != void 0 && yamahai[i-2]<4){yuko_hai_koho[i-2] = yuko_hai_koho[i-2]+1}
            if(man_hai_count[i-1] != void 0 && yamahai[i-1]<4){yuko_hai_koho[i-1] = yuko_hai_koho[i-1]+1}
            if(man_hai_count[i] != void 0 && yamahai[i]<4){yuko_hai_koho[i] = yuko_hai_koho[i]+1}
            if(man_hai_count[i+1] != void 0 && yamahai[i+1]<4){yuko_hai_koho[i+1] = yuko_hai_koho[i+1]+1}
            if(man_hai_count[i+2] != void 0 && yamahai[i+2]<4){yuko_hai_koho[i+2] = yuko_hai_koho[i+2]+1}
        }
    }
    for(var i=0;i<pin_hai_count.length;i++){
        if(pin_hai_count[i]>0){
            if(pin_hai_count[i-2] != void 0 && yamahai[i-2+9]<4){yuko_hai_koho[i-2+9] = yuko_hai_koho[i-2+9]+1}
            if(pin_hai_count[i-1] != void 0 && yamahai[i-1+9]<4){yuko_hai_koho[i-1+9] = yuko_hai_koho[i-1+9]+1}
            if(pin_hai_count[i] != void 0 && yamahai[i+9]<4){yuko_hai_koho[i+9] = yuko_hai_koho[i+9]+1}
            if(pin_hai_count[i+1] != void 0 && yamahai[i+1+9]<4){yuko_hai_koho[i+1+9] = yuko_hai_koho[i+1+9]+1}
            if(pin_hai_count[i+2] != void 0 && yamahai[i+2+9]<4){yuko_hai_koho[i+2+9] = yuko_hai_koho[i+2+9]+1}
        }
    }
    for(var i=0;i<sou_hai_count.length;i++){
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
    var ttszy = tehai_titoi_shanten()
    var tkszy = tehai_kokusi_shanten()
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
    for(var j=0;j<yuko_hai_koho.length;j++){
        //有効牌候補の枚数が一枚以上で、交換候補が入替候補と同じでなければ、
        if(yuko_hai_koho[j]>0){
            //有効牌に置き換える用の牌配列
            var zenhai_yuko = new Array()
            zenhai_yuko = zenhai.concat()
            //足りない一牌を有効牌候補に置き換える        
            //zenhai_yuko[i] = hai_count_map[j]
            zenhai_yuko.push(hai_count_map[j])

            var tszy = tehai_shanten(zenhai_yuko)
            var ttszy = tehai_titoi_shanten(zenhai_yuko)
            var tkszy = tehai_kokusi_shanten(zenhai_yuko)
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
    for(var i=0;i<yuko_array.length;i++){
        if(yuko_array[0] == void 0){continue}
        var text = ""
        var text2 = ""
        for(var j=0;j<yuko_array[0].substr(8,999).length/2;j++){
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