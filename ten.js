//G:手牌+上がり牌のみの上がりパターン G={(55,111,222,333,444),(55,123,123,123,444)...}
//agari:（手牌+上がり牌）+鳴牌+アンカン牌の上がり型区切り agari=(55,111,222,333,444)
//zenhai:agariの牌個別区切り =(11,11,11,12,12,12,13,13,13,14,14,14,15,15)
//A:上がり牌 A=5
//NAKI:鳴き牌 NAKI=(333,444)
//ANKAN:アンカン牌 ANKAN=(5555,6666)
//anko_check:手牌と上がり牌とアンカン(55,111,2222)
//萬11筒21索31風41字51

//クイズモード回答グローバル変数
var quiz_siharaiten=0
var quiz_siharaiten2=0
//牌被りチェックにグローバル化
zenhai=new Array()

function tensu() {
  $("#yaku_list").html("")
  $("#tensu").html("")
  quiz_siharaiten=0
  quiz_siharaiten2=0
  $("#kirimaehu").html("")
  //ミンコミンカンアンカンは共通なのでforの外で符計算する
  /*
  //符の初期値
  //基本点の20
  hu=20
  kirimaehu="基本20"
  //19字牌のアンカンは32符、以外は16符
  for(i=0;i<ANKAN.length;i++){
    if(ANKAN[i].substring(2,4)=="11" || ANKAN[i].substring(2,4)=="19" || ANKAN[i].substring(2,4)=="21" || ANKAN[i].substring(2,4)=="29" || ANKAN[i].substring(2,4)=="31" || ANKAN[i].substring(2,4)=="39" || ANKAN[i].substring(2,4)=="51" || ANKAN[i].substring(2,4)=="53" || ANKAN[i].substring(2,4)=="55" || ANKAN[i].substring(2,4)=="41" || ANKAN[i].substring(2,4)=="43" || ANKAN[i].substring(2,4)=="45" || ANKAN[i].substring(2,4)=="47"){hu=hu+32,kirimaehu=kirimaehu+"+么九暗槓32"}
    else{hu=hu+16,kirimaehu=kirimaehu+"+中張暗槓16"}
  }
  
  for(i=0;i<NAKI.length;i++){
    if(NAKI[i].length==8){
      if(NAKI[i].substring(0,2)=="11" || NAKI[i].substring(0,2)=="19" || NAKI[i].substring(0,2)=="21" || NAKI[i].substring(0,2)=="29" || NAKI[i].substring(0,2)=="31" || NAKI[i].substring(0,2)=="39" || NAKI[i].substring(0,2)=="51" || NAKI[i].substring(0,2)=="53" || NAKI[i].substring(0,2)=="55" || NAKI[i].substring(0,2)=="41" || NAKI[i].substring(0,2)=="43" || NAKI[i].substring(0,2)=="45" || NAKI[i].substring(0,2)=="47"){hu=hu+16,kirimaehu=kirimaehu+"+么九明槓16"}
      else{hu=hu+8,kirimaehu=kirimaehu+"+中張明槓8"}
    }
    else{
      if(NAKI[i].substring(0,2)==NAKI[i].substring(2,4)){
      if(NAKI[i].substring(0,2)=="11" || NAKI[i].substring(0,2)=="19" || NAKI[i].substring(0,2)=="21" || NAKI[i].substring(0,2)=="29" || NAKI[i].substring(0,2)=="31" || NAKI[i].substring(0,2)=="39" || NAKI[i].substring(0,2)=="51" || NAKI[i].substring(0,2)=="53" || NAKI[i].substring(0,2)=="55" || NAKI[i].substring(0,2)=="41" || NAKI[i].substring(0,2)=="43" || NAKI[i].substring(0,2)=="45" || NAKI[i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu+"+么九明刻4"}
      else{hu=hu+2,kirimaehu=kirimaehu+"+中張明刻2"}
      }
    }
  }
  */
  //カンの数をカウント
  kan=0
  ankan=ANKAN.length
  minkan=0

  for(i=0;i<NAKI.length;i++){
    if(NAKI[i].length==8){
      kan=kan+1
    }
  }
  minkan=kan
  kan=kan+ANKAN.length

  //牌数を配列に保存
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
  zenhai_length=zenhai.length
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
  //alert("T"+hai_count[0]+hai_count[1]+hai_count[2]+hai_count[3]+hai_count[4]+hai_count[5]+hai_count[6]+hai_count[7]+hai_count[8]+hai_count[9]+hai_count[10]+hai_count[11]+hai_count[12]+hai_count[13]+hai_count[14]+hai_count[15]+hai_count[16]+hai_count[17]+hai_count[18]+hai_count[19]+hai_count[20]+hai_count[21]+hai_count[22]+hai_count[23]+hai_count[24]+hai_count[25]+hai_count[26]+hai_count[27]+hai_count[28]+hai_count[29]+hai_count[30]+hai_count[31]+hai_count[32]+hai_count[33])

  //国士無双　これの外で判別する
  kokusi=0
  if(hai_count[0]>=1 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]>=1 && 
     hai_count[9]>=1 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]>=1 && 
     hai_count[18]>=1 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]>=1 && 
     hai_count[27]>=1 && hai_count[28]>=1 && hai_count[29]>=1 && hai_count[30]>=1 && hai_count[31]>=1 && hai_count[32]>=1 && hai_count[33]>=1){
       kokusi=1
       if(G.length==0){G[0]=["a","b","c","d","k"]}
       else{G[G.length*1+1]=["a","b","c","d","k"]}}
  //チートイツ
  titoi_check=0
  for(i=0;i<34;i++){
    if(hai_count[i]==2){titoi_check=titoi_check+1}
  }
  if(titoi_check==7 && NAKI.length==0){
    if(G.length==0){G[0]=["e","f","g","h","t"]}
    else{G[G.length]=["e","f","g","h","t"]}
  }

  //G[]の内、一番kihonten_maxが高いものを表示する
  kihonten_max=0

  //G[m][n]の数だけ繰り返す アガリ形になる組み合わせだけ繰り返す 鳴き部分の符計算もこのforの中でやる
  g_length=G.length
  for(g_count=0;g_count<g_length;g_count++){

    //符計算
    //符の初期値
    //基本点の20
    hu=20
    kirimaehu="基本20"
    //19字牌のアンカンは32符、以外は16符
    for(i=0;i<ANKAN.length;i++){
      if(ANKAN[i].substring(2,4)=="11" || ANKAN[i].substring(2,4)=="19" || ANKAN[i].substring(2,4)=="21" || ANKAN[i].substring(2,4)=="29" || ANKAN[i].substring(2,4)=="31" || ANKAN[i].substring(2,4)=="39" || ANKAN[i].substring(2,4)=="51" || ANKAN[i].substring(2,4)=="53" || ANKAN[i].substring(2,4)=="55" || ANKAN[i].substring(2,4)=="41" || ANKAN[i].substring(2,4)=="43" || ANKAN[i].substring(2,4)=="45" || ANKAN[i].substring(2,4)=="47"){hu=hu+32,kirimaehu=kirimaehu+"+么九暗槓32"}
      else{hu=hu+16,kirimaehu=kirimaehu+"+中張暗槓16"}
    }
    
    for(i=0;i<NAKI.length;i++){
      if(NAKI[i].length==8){
        if(NAKI[i].substring(0,2)=="11" || NAKI[i].substring(0,2)=="19" || NAKI[i].substring(0,2)=="21" || NAKI[i].substring(0,2)=="29" || NAKI[i].substring(0,2)=="31" || NAKI[i].substring(0,2)=="39" || NAKI[i].substring(0,2)=="51" || NAKI[i].substring(0,2)=="53" || NAKI[i].substring(0,2)=="55" || NAKI[i].substring(0,2)=="41" || NAKI[i].substring(0,2)=="43" || NAKI[i].substring(0,2)=="45" || NAKI[i].substring(0,2)=="47"){hu=hu+16,kirimaehu=kirimaehu+"+么九明槓16"}
        else{hu=hu+8,kirimaehu=kirimaehu+"+中張明槓8"}
      }
      else{
        if(NAKI[i].substring(0,2)==NAKI[i].substring(2,4)){
        if(NAKI[i].substring(0,2)=="11" || NAKI[i].substring(0,2)=="19" || NAKI[i].substring(0,2)=="21" || NAKI[i].substring(0,2)=="29" || NAKI[i].substring(0,2)=="31" || NAKI[i].substring(0,2)=="39" || NAKI[i].substring(0,2)=="51" || NAKI[i].substring(0,2)=="53" || NAKI[i].substring(0,2)=="55" || NAKI[i].substring(0,2)=="41" || NAKI[i].substring(0,2)=="43" || NAKI[i].substring(0,2)=="45" || NAKI[i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu+"+么九明刻4"}
        else{hu=hu+2,kirimaehu=kirimaehu+"+中張明刻2"}
        }
      }
    }


    var agari=new Array()
    agari=$.merge([],G[g_count])
    //NAKIのsortをやめてみるテスト
    if(NAKI[0]!=null){agari=$.merge(agari,NAKI)}
    if(ANKAN[0]!=null){agari=$.merge(agari,ANKAN)}
  


    //アンカン含むアンコチェック用配列
    anko_check=new Array()
    anko_check_make=new Array()
    anko_check_make=$.merge([],G[g_count])
    anko_check=$.merge(anko_check_make,ANKAN)

    //アンコの数（カン除く）
    kotu=0
    anko=0
    minko=0
    //アンコ・ミンコの配列番号
    anko_i=new Array()
    minko_i=new Array()

    //親子ツモロン自風場風の変数化
    oyaval=$('input[name="oya"]:checked').val()
    tumoval=$('input[name="tumo"]:checked').val()
    jikazeval=$('input[name="jikaze"]:checked').val()
    bakazeval=$('input[name="bakaze"]:checked').val()
    //alert(oyaval+","+tumoval+","+jikazeval+","+bakazeval)
    //ミンコ2　アンコ4　ミンカン8　アンカン16　19字牌なら倍（↑アンコチェックの中でアンコの符は一緒に計算する）

    //アンコ数のチェック
    if(tumoval=="tumo"){
      for(i=1;i<G[g_count].length;i++){
        if(G[g_count][i].substring(0,2)==G[g_count][i].substring(2,4)){
          anko=anko+1
          anko_i.push(i)
          if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+8,kirimaehu=kirimaehu+"+么九暗刻8"}
          else{hu=hu+4,kirimaehu=kirimaehu+"+中張暗刻4"}
        }
      }
    }
    //ロンだとミンコかもしれないのでまずミンコ分を計上してアンコならアンコ分を足す
    else if(tumoval=="ron"){
      //Gの面子数だけ繰り返す
      for(i=1;i<G[g_count].length;i++){
        //刻子なら
        if(G[g_count][i].substring(0,2)==G[g_count][i].substring(2,4)){
          //とりあえずミンコ分の符を加える
          minko_i.push(i)
          if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu+"+么九明刻4"}
          else{hu=hu+2,kirimaehu=kirimaehu+"+中張明刻2"}
          //刻子の牌がアガリ牌と違っていればミンコを一つ削ってアンコ確定
          if(G[g_count][i].substring(0,2)!=A[0]){
              anko=anko+1
              anko_i.push(i)
              minko_i.pop()
              if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+么九暗刻8"}
              else{hu=hu+2,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+中張暗刻4"}
          }
            else{
              for(j=1;j<G[g_count].length;j++){
                if(i==j){break}
                if(G[g_count][j].substring(0,2)==G[g_count][i].substring(0,2) || G[g_count][j].substring(2,4)==G[g_count][i].substring(0,2) || G[g_count][j].substring(4,6)==G[g_count][i].substring(0,2)){
                  anko=anko+1
                  anko_i.push(i)
                  if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+么九暗刻8"}
                  else{hu=hu+2,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+中張暗刻4"}
                  minko_i.pop()
                  break
                  }
              }
            }
        }
      }
    }

    for(i=1;i<G[g_count].length;i++){
        if(G[g_count][i].substring(0,2)==G[g_count][i].substring(2,4)){kotu=kotu+1}
    }
    minko=kotu-anko

    tuiso=0
    ryuiso=0
    tinrao=0
    daisangen=0
    daisusi=0
    syosusi=0
    daisyarin=0
    tyuren=0
    tyuren2=0
    suanko=0
    //kokusi=0
    sukantu=0
    var tenho=0
    var tiho=0

    tanyao=0
    honro=0
    juntyan=0
    tyanta=0
    titoi=0 //七対子
    var tumo=0
    pinhu=0
    kuipinhu=0
    ipeko=0
    ryanpeko=0
    sansyoku=0
    ikki=0
    toitoi=0
    sananko=0
    sankantu=0
    sandoko=0
    syosangen=0
    tinitu=0
    honitu=0
    haku=0
    hatu=0
    tyun=0
    var jikaze=0
    var bakaze=0

    //字一色 牌数合計をチェックしてないので東東とかでも役が成立してしまう（放置）
    if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
      hai_count[27]>=0 && hai_count[28]>=0 && hai_count[29]>=0 && hai_count[30]>=0 && hai_count[31]>=0 && hai_count[32]>=0 && hai_count[33]>=0){tuiso=1}
    //緑一色
    if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[19]>=0 && hai_count[20]>=0 && hai_count[21]>=0 && hai_count[22]==0 && hai_count[23]>=0 && hai_count[24]==0 && hai_count[25]>=0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]>=0 && hai_count[33]==0){ryuiso=1}
    //清老頭
    if(hai_count[0]>=0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]>=0 && 
      hai_count[9]>=0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]>=0 && 
      hai_count[18]>=0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]>=0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tinrao=1}
    //大三元
    if(hai_count[31]>=3 && hai_count[32]>=3 && hai_count[33]>=3){daisangen=1}
    //小四喜
    if(hai_count[27]>=2 && hai_count[28]>=3 && hai_count[29]>=3 && hai_count[30]>=3){syosusi=1}
    if(hai_count[27]>=3 && hai_count[28]>=2 && hai_count[29]>=3 && hai_count[30]>=3){syosusi=1}
    if(hai_count[27]>=3 && hai_count[28]>=3 && hai_count[29]>=2 && hai_count[30]>=3){syosusi=1}
    if(hai_count[27]>=3 && hai_count[28]>=3 && hai_count[29]>=3 && hai_count[30]>=2){syosusi=1}
    //大四喜
    if(hai_count[27]>=3 && hai_count[28]>=3 && hai_count[29]>=3 && hai_count[30]>=3){syosusi=0,daisusi=1}

    //大車輪（ローカル）
    if(hai_count[10]==2 && hai_count[11]==2 && hai_count[12]==2 && hai_count[13]==2 && hai_count[14]==2 && hai_count[15]==2 && hai_count[16]==2){
      daisyarin=1
    }
    //鳴いていると成立しない役満
    if(NAKI.length==0){
      //天和地和
      if(oyaval=="oya" && $("#tenho").is(':checked')){tenho=1}
      if(oyaval=="ko" && $("#tiho").is(':checked')){tiho=1}
      //九蓮
      if(hai_count[0]>=3 && hai_count[1]>=1 && hai_count[2]>=1 && hai_count[3]>=1 && hai_count[4]>=1 && hai_count[5]>=1 && hai_count[6]>=1 && hai_count[7]>=1 && hai_count[8]>=3 && 
        hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
        hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tyuren=1}
      if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
        hai_count[9]>=3 && hai_count[10]>=1 && hai_count[11]>=1 && hai_count[12]>=1 && hai_count[13]>=1 && hai_count[14]>=1 && hai_count[15]>=1 && hai_count[16]>=1 && hai_count[17]>=3 && 
        hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tyuren=1}
      if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
        hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
        hai_count[18]>=3 && hai_count[19]>=1 && hai_count[20]>=1 && hai_count[21]>=1 && hai_count[22]>=1 && hai_count[23]>=1 && hai_count[24]>=1 && hai_count[25]>=1 && hai_count[26]>=3 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tyuren=1}
      //純九蓮
      tyuren_list=new Array()
      tyuren_list=$.merge([],S)
      tyuren_list.sort()
      if(tyuren_list[0]=="11" && tyuren_list[1]=="11" && tyuren_list[2]=="11" && tyuren_list[3]=="12" && tyuren_list[4]=="13" && tyuren_list[5]=="14" && tyuren_list[6]=="15" && tyuren_list[7]=="16" && tyuren_list[8]=="17" && tyuren_list[9]=="18" && tyuren_list[10]=="19" && tyuren_list[11]=="19" && tyuren_list[12]=="19"){tyuren=0,tyuren2=1}
      if(tyuren_list[0]=="21" && tyuren_list[1]=="21" && tyuren_list[2]=="21" && tyuren_list[3]=="22" && tyuren_list[4]=="23" && tyuren_list[5]=="24" && tyuren_list[6]=="25" && tyuren_list[7]=="26" && tyuren_list[8]=="27" && tyuren_list[9]=="28" && tyuren_list[10]=="29" && tyuren_list[11]=="29" && tyuren_list[12]=="29"){tyuren=0,tyuren2=1}
      if(tyuren_list[0]=="31" && tyuren_list[1]=="31" && tyuren_list[2]=="31" && tyuren_list[3]=="32" && tyuren_list[4]=="33" && tyuren_list[5]=="34" && tyuren_list[6]=="35" && tyuren_list[7]=="36" && tyuren_list[8]=="37" && tyuren_list[9]=="38" && tyuren_list[10]=="39" && tyuren_list[11]=="39" && tyuren_list[12]=="39"){tyuren=0,tyuren2=1}
      //四暗刻（ロンだと雀頭ロンじゃないと不成立）
      if(anko+ankan==4){suanko=1}
    }
    //四槓子
    if(kan==4){sukantu=1}
    //役満ここまで
    //もし役満がついていなければ
    if(tuiso==0 && ryuiso==0 && tinrao==0 && daisangen==0 && daisusi==0 && syosusi==0 && daisyarin==0 && tyuren==0 && tyuren2==0 && suanko==0 && kokusi==0 && sukantu==0 && tenho==0 && tiho==0){
    //断ヤオ九
    if(hai_count[0]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tanyao=1}
    //混老頭
    if(hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && 
      hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && 
      hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0){honro=1}
    //純全帯
    else if((agari[0].substring(0,2)=="11" || agari[0].substring(0,2)=="19" || agari[0].substring(0,2)=="21" || agari[0].substring(0,2)=="29" || agari[0].substring(0,2)=="31" || agari[0].substring(0,2)=="39") &&
      (agari[1].substring(0,2)=="11" || (agari[1].substring(0,2)=="17" && agari[1].substring(2,4)=="18") || agari[1].substring(0,2)=="19" || agari[1].substring(0,2)=="21" || (agari[1].substring(0,2)=="27" && agari[1].substring(2,4)=="28") || agari[1].substring(0,2)=="29" || agari[1].substring(0,2)=="31" || (agari[1].substring(0,2)=="37" && agari[1].substring(2,4)=="38") || agari[1].substring(0,2)=="39") &&
      (agari[2].substring(0,2)=="11" || (agari[2].substring(0,2)=="17" && agari[2].substring(2,4)=="18") || agari[2].substring(0,2)=="19" || agari[2].substring(0,2)=="21" || (agari[2].substring(0,2)=="27" && agari[2].substring(2,4)=="28") || agari[2].substring(0,2)=="29" || agari[2].substring(0,2)=="31" || (agari[2].substring(0,2)=="37" && agari[2].substring(2,4)=="38") || agari[2].substring(0,2)=="39") &&
      (agari[3].substring(0,2)=="11" || (agari[3].substring(0,2)=="17" && agari[3].substring(2,4)=="18") || agari[3].substring(0,2)=="19" || agari[3].substring(0,2)=="21" || (agari[3].substring(0,2)=="27" && agari[3].substring(2,4)=="28") || agari[3].substring(0,2)=="29" || agari[3].substring(0,2)=="31" || (agari[3].substring(0,2)=="37" && agari[3].substring(2,4)=="38") || agari[3].substring(0,2)=="39") &&
      (agari[4].substring(0,2)=="11" || (agari[4].substring(0,2)=="17" && agari[4].substring(2,4)=="18") || agari[4].substring(0,2)=="19" || agari[4].substring(0,2)=="21" || (agari[4].substring(0,2)=="27" && agari[4].substring(2,4)=="28") || agari[4].substring(0,2)=="29" || agari[4].substring(0,2)=="31" || (agari[4].substring(0,2)=="37" && agari[4].substring(2,4)=="38") || agari[4].substring(0,2)=="39")){juntyan=1}
    //混全帯
    else if((agari[0].substring(0,2)=="11" || agari[0].substring(0,2)=="19" || agari[0].substring(0,2)=="21" || agari[0].substring(0,2)=="29" || agari[0].substring(0,2)=="31" || agari[0].substring(0,2)=="39" || agari[0].substring(0,2)=="41" || agari[0].substring(0,2)=="43" || agari[0].substring(0,2)=="45" || agari[0].substring(0,2)=="47" || agari[0].substring(0,2)=="51" || agari[0].substring(0,2)=="53" || agari[0].substring(0,2)=="55") &&
      (agari[1].substring(0,2)=="11" || (agari[1].substring(0,2)=="17" && agari[1].substring(2,4)=="18") || agari[1].substring(0,2)=="19" || agari[1].substring(0,2)=="21" || (agari[1].substring(0,2)=="27" && agari[1].substring(2,4)=="28") || agari[1].substring(0,2)=="29" || agari[1].substring(0,2)=="31" || (agari[1].substring(0,2)=="37" && agari[1].substring(2,4)=="38") || agari[1].substring(0,2)=="39" || agari[1].substring(0,2)=="41" || agari[1].substring(0,2)=="43" || agari[1].substring(0,2)=="45" || agari[1].substring(0,2)=="47" || agari[1].substring(0,2)=="51" || agari[1].substring(0,2)=="53" || agari[1].substring(0,2)=="55") &&
      (agari[2].substring(0,2)=="11" || (agari[2].substring(0,2)=="17" && agari[2].substring(2,4)=="18") || agari[2].substring(0,2)=="19" || agari[2].substring(0,2)=="21" || (agari[2].substring(0,2)=="27" && agari[2].substring(2,4)=="28") || agari[2].substring(0,2)=="29" || agari[2].substring(0,2)=="31" || (agari[2].substring(0,2)=="37" && agari[2].substring(2,4)=="38") || agari[2].substring(0,2)=="39" || agari[2].substring(0,2)=="41" || agari[2].substring(0,2)=="43" || agari[2].substring(0,2)=="45" || agari[2].substring(0,2)=="47" || agari[2].substring(0,2)=="51" || agari[2].substring(0,2)=="53" || agari[2].substring(0,2)=="55") &&
      (agari[3].substring(0,2)=="11" || (agari[3].substring(0,2)=="17" && agari[3].substring(2,4)=="18") || agari[3].substring(0,2)=="19" || agari[3].substring(0,2)=="21" || (agari[3].substring(0,2)=="27" && agari[3].substring(2,4)=="28") || agari[3].substring(0,2)=="29" || agari[3].substring(0,2)=="31" || (agari[3].substring(0,2)=="37" && agari[3].substring(2,4)=="38") || agari[3].substring(0,2)=="39" || agari[3].substring(0,2)=="41" || agari[3].substring(0,2)=="43" || agari[3].substring(0,2)=="45" || agari[3].substring(0,2)=="47" || agari[3].substring(0,2)=="51" || agari[3].substring(0,2)=="53" || agari[3].substring(0,2)=="55") &&
      (agari[4].substring(0,2)=="11" || (agari[4].substring(0,2)=="17" && agari[4].substring(2,4)=="18") || agari[4].substring(0,2)=="19" || agari[4].substring(0,2)=="21" || (agari[4].substring(0,2)=="27" && agari[4].substring(2,4)=="28") || agari[4].substring(0,2)=="29" || agari[4].substring(0,2)=="31" || (agari[4].substring(0,2)=="37" && agari[4].substring(2,4)=="38") || agari[4].substring(0,2)=="39" || agari[4].substring(0,2)=="41" || agari[4].substring(0,2)=="43" || agari[4].substring(0,2)=="45" || agari[4].substring(0,2)=="47" || agari[4].substring(0,2)=="51" || agari[4].substring(0,2)=="53" || agari[4].substring(0,2)=="55")){tyanta=1}
    //平和（喰いピンフチェック）
    if((agari[0].substring(0,2)!=bakazeval && agari[0].substring(0,2)!=jikazeval && agari[0].substring(0,2)!="51" && agari[0].substring(0,2)!="53" && agari[0].substring(0,2)!="55") &&
      agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 &&
      agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 &&
      agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 &&
      agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 &&
      ((agari[1].substring(0,2)==A[0] && agari[1].charAt(5)!="9") || (agari[1].substring(4,6)==A[0] && agari[1].charAt(1)!="1") ||
        (agari[2].substring(0,2)==A[0] && agari[2].charAt(5)!="9") || (agari[2].substring(4,6)==A[0] && agari[2].charAt(1)!="1") ||
        (agari[3].substring(0,2)==A[0] && agari[3].charAt(5)!="9") || (agari[3].substring(4,6)==A[0] && agari[3].charAt(1)!="1") ||
        (agari[4].substring(0,2)==A[0] && agari[4].charAt(5)!="9") || (agari[4].substring(4,6)==A[0] && agari[4].charAt(1)!="1"))){
          if(NAKI.length==0){pinhu=1}
          else{kuipinhu=1}
        }
        
    //鳴いたら役がつかないもの
    if(NAKI.length==0){
      //七対子
      if(G[g_count][0]=="e"){titoi=1}
      //ツモ
      if(tumoval=="tumo"){tumo=1}
      //二盃口
      if(agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 &&
        agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 &&
        agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 &&
        agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 &&
        ((agari[1].substring(0,2)==agari[2].substring(0,2) && agari[1].substring(2,4)==agari[2].substring(2,4) && agari[3].substring(0,2)==agari[4].substring(0,2) && agari[3].substring(2,4)==agari[4].substring(2,4)) ||
          (agari[1].substring(0,2)==agari[3].substring(0,2) && agari[1].substring(2,4)==agari[3].substring(2,4) && agari[2].substring(0,2)==agari[4].substring(0,2) && agari[2].substring(2,4)==agari[4].substring(2,4)) ||
          (agari[1].substring(0,2)==agari[4].substring(0,2) && agari[1].substring(2,4)==agari[4].substring(2,4) && agari[2].substring(0,2)==agari[3].substring(0,2) && agari[2].substring(2,4)==agari[3].substring(2,4)))){ryanpeko=1}
      //一盃口
      if(ryanpeko==0){
        if((agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && ((agari[1].substring(0,2)==agari[2].substring(0,2) && agari[1].substring(2,4)==agari[2].substring(2,4)) || (agari[1].substring(0,2)==agari[3].substring(0,2) && agari[1].substring(2,4)==agari[3].substring(2,4)) || (agari[1].substring(0,2)==agari[4].substring(0,2) && agari[1].substring(2,4)==agari[4].substring(2,4)))) ||
          (agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && ((agari[2].substring(0,2)==agari[1].substring(0,2) && agari[2].substring(2,4)==agari[1].substring(2,4)) || (agari[2].substring(0,2)==agari[3].substring(0,2) && agari[2].substring(2,4)==agari[3].substring(2,4)) || (agari[2].substring(0,2)==agari[4].substring(0,2) && agari[2].substring(2,4)==agari[4].substring(2,4)))) ||
          (agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && ((agari[3].substring(0,2)==agari[1].substring(0,2) && agari[3].substring(2,4)==agari[1].substring(2,4)) || (agari[3].substring(0,2)==agari[2].substring(0,2) && agari[3].substring(2,4)==agari[2].substring(2,4)) || (agari[3].substring(0,2)==agari[4].substring(0,2) && agari[3].substring(2,4)==agari[4].substring(2,4)))) ||
          (agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && ((agari[4].substring(0,2)==agari[1].substring(0,2) && agari[4].substring(2,4)==agari[1].substring(2,4)) || (agari[4].substring(0,2)==agari[2].substring(0,2) && agari[4].substring(2,4)==agari[2].substring(2,4)) || (agari[4].substring(0,2)==agari[3].substring(0,2) && agari[4].substring(2,4)==agari[3].substring(2,4))))){ipeko=1}
      }
    }
    //鳴いても成立する
    //三色同順
    //もしagari[1]が順子で、かつ、agari[1]とagari[3]が一の位が同じ順子で、かつ、agari[1]とagari[4]が一の位が同じ順子で、かつ、agari[1]とagari[3]とagari[4]の十の位がどれも違えば三色
    if((agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1)) ||
      (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1)) ||
      (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[3].substring(0,1)) ||
      (agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[2].substring(1,2)==agari[3].substring(1,2) && agari[2].substring(3,4)==agari[3].substring(3,4) && agari[2].substring(1,2)==agari[4].substring(1,2) && agari[2].substring(3,4)==agari[4].substring(3,4) && agari[2].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1))){sansyoku=1}
    //一気通貫
    if((agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && agari[1].substring(0,1)==agari[2].substring(0,1) && agari[1].substring(0,1)==agari[3].substring(0,1) && agari[1].substring(1,2)!=agari[2].substring(1,2) && agari[1].substring(1,2)!=agari[3].substring(1,2) && agari[2].substring(1,2)!=agari[3].substring(1,2) && (agari[1].substring(1,2)=="1" || agari[1].substring(1,2)=="4" || agari[1].substring(1,2)=="7") && (agari[2].substring(1,2)=="1" || agari[2].substring(1,2)=="4" || agari[2].substring(1,2)=="7") && (agari[3].substring(1,2)=="1" || agari[3].substring(1,2)=="4" || agari[3].substring(1,2)=="7")) ||
      (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && agari[1].substring(0,1)==agari[2].substring(0,1) && agari[1].substring(0,1)==agari[4].substring(0,1) && agari[1].substring(1,2)!=agari[2].substring(1,2) && agari[1].substring(1,2)!=agari[4].substring(1,2) && agari[2].substring(1,2)!=agari[4].substring(1,2) && (agari[1].substring(1,2)=="1" || agari[1].substring(1,2)=="4" || agari[1].substring(1,2)=="7") && (agari[2].substring(1,2)=="1" || agari[2].substring(1,2)=="4" || agari[2].substring(1,2)=="7") && (agari[4].substring(1,2)=="1" || agari[4].substring(1,2)=="4" || agari[4].substring(1,2)=="7")) ||
      (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && agari[1].substring(0,1)==agari[3].substring(0,1) && agari[1].substring(0,1)==agari[4].substring(0,1) && agari[1].substring(1,2)!=agari[3].substring(1,2) && agari[1].substring(1,2)!=agari[4].substring(1,2) && agari[3].substring(1,2)!=agari[4].substring(1,2) && (agari[1].substring(1,2)=="1" || agari[1].substring(1,2)=="4" || agari[1].substring(1,2)=="7") && (agari[3].substring(1,2)=="1" || agari[3].substring(1,2)=="4" || agari[3].substring(1,2)=="7") && (agari[4].substring(1,2)=="1" || agari[4].substring(1,2)=="4" || agari[4].substring(1,2)=="7")) ||
      (agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && agari[2].substring(0,1)==agari[3].substring(0,1) && agari[2].substring(0,1)==agari[4].substring(0,1) && agari[2].substring(1,2)!=agari[3].substring(1,2) && agari[2].substring(1,2)!=agari[4].substring(1,2) && agari[3].substring(1,2)!=agari[4].substring(1,2) && (agari[2].substring(1,2)=="1" || agari[2].substring(1,2)=="4" || agari[2].substring(1,2)=="7") && (agari[3].substring(1,2)=="1" || agari[3].substring(1,2)=="4" || agari[3].substring(1,2)=="7") && (agari[4].substring(1,2)=="1" || agari[4].substring(1,2)=="4" || agari[4].substring(1,2)=="7"))){ikki=1}
    //対々和
    if(agari[1].substring(0,2)==agari[1].substring(2,4) && agari[2].substring(0,2)==agari[2].substring(2,4) && agari[3].substring(0,2)==agari[3].substring(2,4) && agari[4].substring(0,2)==agari[4].substring(2,4)){toitoi=1}
    //三暗刻（ロンだと雀頭ロンじゃないと不成立）
    if(anko+ankan==3){sananko=1}
    //三槓子
    if(kan==3){sankantu=1}
    /*
    //三色同刻
    if((agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1)) ||
      (agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1)) ||
      (agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[3].substring(0,1)) ||
      (agari[2].substring(0,2)==agari[2].substring(2,4) && agari[2].substring(1,2)==agari[3].substring(1,2) && agari[2].substring(3,4)==agari[3].substring(3,4) && agari[2].substring(1,2)==agari[4].substring(1,2) && agari[2].substring(3,4)==agari[4].substring(3,4) && agari[2].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1))){sandoko=1}
    */
    //三色同刻
    if((agari[1].substring(0,1)<4 && agari[3].substring(0,1)<4 && agari[4].substring(0,1)<4 && agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1)) ||
      (agari[1].substring(0,1)<4 && agari[2].substring(0,1)<4 && agari[4].substring(0,1)<4 && agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1)) ||
      (agari[1].substring(0,1)<4 && agari[2].substring(0,1)<4 && agari[3].substring(0,1)<4 && agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[3].substring(0,1)) ||
      (agari[2].substring(0,1)<4 && agari[3].substring(0,1)<4 && agari[4].substring(0,1)<4 && agari[2].substring(0,2)==agari[2].substring(2,4) && agari[2].substring(1,2)==agari[3].substring(1,2) && agari[2].substring(3,4)==agari[3].substring(3,4) && agari[2].substring(1,2)==agari[4].substring(1,2) && agari[2].substring(3,4)==agari[4].substring(3,4) && agari[2].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1))){sandoko=1}
    //小三元
    if(hai_count[31]>=3 && hai_count[32]>=3 && hai_count[33]==2 || hai_count[31]>=3 && hai_count[32]==2 && hai_count[33]>=3 || hai_count[31]==2 && hai_count[32]>=3 && hai_count[33]>=3){syosangen=1}
    //混一色
    if((hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
        hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0) || 
      (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
        hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0) || 
      (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
        hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0)){honitu=1}
    //清一色
    if((hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0) || 
      (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0) || 
      (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0)){honitu=0,tinitu=1}
    //白
    if(agari[1].substring(0,2)=="51" || agari[2].substring(0,2)=="51" || agari[3].substring(0,2)=="51" || agari[4].substring(0,2)=="51"){haku=1}
    //發
    if(agari[1].substring(0,2)=="53" || agari[2].substring(0,2)=="53" || agari[3].substring(0,2)=="53" || agari[4].substring(0,2)=="53"){hatu=1}
    //中
    if(agari[1].substring(0,2)=="55" || agari[2].substring(0,2)=="55" || agari[3].substring(0,2)=="55" || agari[4].substring(0,2)=="55"){tyun=1}
    //自風
    if(agari[1].substring(0,2)==jikazeval || agari[2].substring(0,2)==jikazeval || agari[3].substring(0,2)==jikazeval || agari[4].substring(0,2)==jikazeval){jikaze=1}
    //場風
    if(agari[1].substring(0,2)==bakazeval || agari[2].substring(0,2)==bakazeval || agari[3].substring(0,2)==bakazeval || agari[4].substring(0,2)==bakazeval){bakaze=1}


    //if(tyuren_list[0]=="31"){alert("m");alert("s")}else{alert("s")}
    
    //alert("tuiso"+tuiso+"/ryuiso"+ryuiso+"/tinrao"+tinrao+"/daisangen"+daisangen+"/daisusi"+daisusi+"/syosusi"+syosusi+"/tyuren"+tyuren+"/tyuren2"+tyuren2+"/sukantu"+sukantu+"/suanko"+suanko+"/daisyarin"+daisyarin+"/kokusi"+kokusi)
    //alert("tanyao"+tanyao+"/honro"+honro+"/juntyan"+juntyan+"/tyanta"+tyanta+"/pinhu"+pinhu+"/ipeko"+ipeko+"/ryanpeko"+ryanpeko+"/sansyoku"+sansyoku+"/ikki"+ikki+"/toitoi"+toitoi+"/sananko"+sananko+"/sankantu"+sankantu+"/sandoko"+sandoko+"/tinitu"+tinitu+"/honitu"+honitu+"/yakuhai"+haku+hatu+tyun+jikaze+bakaze)
    //$("#yaku_list").html($("#yaku_list").html()+"tuiso"+tuiso+"/ryuiso"+ryuiso+"/tinrao"+tinrao+"/daisangen"+daisangen+"/daisusi"+daisusi+"/syosusi"+syosusi+"/tyuren"+tyuren+"/tyuren2"+tyuren2+"/sukantu"+sukantu+"/suanko"+suanko+"/daisyarin"+daisyarin+"/kokusi"+kokusi+"<br>")
    //$("#yaku_list").html($("#yaku_list").html()+"tanyao"+tanyao+"/honro"+honro+"/juntyan"+juntyan+"/tyanta"+tyanta+"/pinhu"+pinhu+"/ipeko"+ipeko+"/ryanpeko"+ryanpeko+"/sansyoku"+sansyoku+"/ikki"+ikki+"/toitoi"+toitoi+"/sananko"+sananko+"/sankantu"+sankantu+"/sandoko"+sandoko+"/tinitu"+tinitu+"/honitu"+honitu+"/yakuhai"+haku+hatu+tyun+jikaze+bakaze+"<br>")



    //符計算
    //基本点の20
    //面前でロン上がりなら10
    //ミンコ2　アンコ4　ミンカン8　アンカン16　19字牌なら倍（↑アンコミンコチェックの中で一緒に計算する）
    //ツモ上がりなら2　※ピンフの場合は例外あり
    //カンチャン（4・6）ペンチャン（12・）タンキ（5・）なら2　リャンメン（・34・）シャボ（55,66）なら0（平和以外は高くなるほうの符を選択して良い）
    //雀頭が役牌なら2　ダブ風なら4


    //面前でロン上がりなら10
    if(NAKI.length==0 && tumoval=="ron"){hu=hu+10,kirimaehu=kirimaehu+"+門前加符10"}
    
    //ツモ上がりなら2（※ピンツモで2符をつけるかローカルルールあり）
    if(pinhu==0 && kuipinhu==0 && tumoval=="tumo"){hu=hu+2,kirimaehu=kirimaehu+"+ツモ符2"}
    
    //タンキ待ちなら2
    if(pinhu==0 && kuipinhu==0){
      if(G[g_count][0].substring(0,2)==A[0]){hu=hu+2,kirimaehu=kirimaehu+"+単騎待ち2"}
      else{
        for(i=1;i<G[g_count].length;i++){
      //カンチャン待ちなら2
          if(G[g_count][i].substring(0,2)*1+1==G[g_count][i].substring(2,4)*1 && G[g_count][i].substring(2,4)==A[0]){hu=hu+2,kirimaehu=kirimaehu+"+嵌張待ち2";break}
      //ペンチャン待ちなら2
          else if(G[g_count][i].substring(0,2)*1+1==G[g_count][i].substring(2,4)*1 && ((G[g_count][i].substring(1,2)=="1" && G[g_count][i].substring(4,6)==A[0]) || (G[g_count][i].substring(1,2)=="7" && G[g_count][i].substring(0,2)==A[0]))){hu=hu+2,kirimaehu=kirimaehu+"+辺張待ち2";break}
        }
      }
    }
    //雀頭が役牌なら2
    if(G[g_count][0].substring(0,2)=="51" ||G[g_count][0].substring(0,2)=="53" || G[g_count][0].substring(0,2)=="55"){hu=hu+2,kirimaehu=kirimaehu+"+雀頭役牌2"}
    //自風・場風なら2（※ローカルルールあり）
    if(G[g_count][0].substring(0,2)==jikazeval){hu=hu+2,kirimaehu=kirimaehu+"+雀頭自風2"}

    if(G[g_count][0].substring(0,2)==bakazeval){hu=hu+2,kirimaehu=kirimaehu+"+雀頭場風2"}

    //平和なら符は0（※ローカルルールあり）
    //if(pinhu==1){hu=20,kirimaehu="平和20"}
    //喰い平和なら符に+10（※ローカルルールあり？）
    if(kuipinhu==1){hu=hu+10,kirimaehu=kirimaehu+"+喰い平和10"}
    //符確定
    kirimaehu=hu+"符:"+kirimaehu
    hu=Math.ceil(hu/10)*10
    //七対子なら切り上げせずに25符
    if(titoi==1){hu=25}
    //もし役牌が0なら～のforここまで
    }
    //点数計算

    //上がり役発表
    agariyaku=""
    kihonten=0
    siharaiten=0
    siharaiten_call=""
    yakuman=0
    han=0

    


    if(kokusi==1){yakuman=yakuman+1,agariyaku=agariyaku+"国士無双/"}//うまく取れてない
    if(suanko==1){yakuman=yakuman+1,agariyaku=agariyaku+"四暗刻/"}
    if(daisangen==1){yakuman=yakuman+1,agariyaku=agariyaku+"大三元/"}
    if(tuiso==1){yakuman=yakuman+1,agariyaku=agariyaku+"字一色/"}
    if(syosusi==1){yakuman=yakuman+1,agariyaku=agariyaku+"小四喜/"}
    if(daisusi==1){yakuman=yakuman+1,agariyaku=agariyaku+"大四喜/"}
    if(ryuiso==1){yakuman=yakuman+1,agariyaku=agariyaku+"緑一色/"}
    if(tinrao==1){yakuman=yakuman+1,agariyaku=agariyaku+"清老頭/"}
    if(sukantu==1){yakuman=yakuman+1,agariyaku=agariyaku+"四槓子/"}
    if(tyuren==1){yakuman=yakuman+1,agariyaku=agariyaku+"九連宝燈/"}
    if(tyuren2==1){yakuman=yakuman+1,agariyaku=agariyaku+"純正九連宝燈/"}

    if(daisyarin==1){yakuman=yakuman+1,agariyaku=agariyaku+"大車輪/"}//ローカル役ではある
    if(tenho==1){yakuman=yakuman+1,agariyaku=agariyaku+"天和/"}
    if(tiho==1){yakuman=yakuman+1,agariyaku=agariyaku+"地和/"}

    //役満でなければハンを計算する
    if(yakuman==0){
      if($("#riti").is(':checked') && $("#driti").is(':checked')==false){
        if(NAKI.length==0){
          han=han+1
          agariyaku=agariyaku+"立直(1)/"
          if($("#ippatu").is(':checked')){
            han=han+1
            agariyaku=agariyaku+"一発(1)/"}
        }
      }
      if(tumo==1){han=han+1,agariyaku=agariyaku+"門前清自摸和(1)/"}
      if(tanyao==1){han=han+1,agariyaku=agariyaku+"断么九(1)/"}
      if(pinhu==1){han=han+1,agariyaku=agariyaku+"平和(1)/"}
      if(ipeko==1){han=han+1,agariyaku=agariyaku+"一盃口(1)/"}
      if(haku==1){han=han+1,agariyaku=agariyaku+"白(1)/"}
      if(hatu==1){han=han+1,agariyaku=agariyaku+"發(1)/"}
      if(tyun==1){han=han+1,agariyaku=agariyaku+"中(1)/"}
      if(jikaze==1){han=han+1,agariyaku=agariyaku+"自風(1)/"}
      if(bakaze==1){han=han+1,agariyaku=agariyaku+"場風(1)/"}
      if(kan>0 && $("#rinsyan").is(':checked') && tumoval=="tumo"){han=han+1,agariyaku=agariyaku+"嶺上開花(1)/"}//ツモ2符を認めないルールもあり
      if($("#tyankan").is(':checked') && tumoval=="ron"){han=han+1,agariyaku=agariyaku+"槍槓(1)/"}
      if($("#haitei").is(':checked') && tumoval=="tumo"){han=han+1,agariyaku=agariyaku+"海底摸月(1)/"}
      if($("#hotei").is(':checked') && tumoval=="ron"){han=han+1,agariyaku=agariyaku+"河底撈魚(1)/"}
      if(sansyoku==1){
        if(NAKI.length==0){han=han+2;agariyaku=agariyaku+"三色同順(2)/"}else{han=han+1;agariyaku=agariyaku+"三色同順(1*)/"}
        }
      if(ikki==1){
        if(NAKI.length==0){han=han+2;agariyaku=agariyaku+"一気通貫(2)/"}else{han=han+1;agariyaku=agariyaku+"一気通貫(1*)/"}
        }
      if(tyanta==1){
        if(NAKI.length==0){han=han+2;agariyaku=agariyaku+"混全帯么九(2)/"}else{han=han+1;agariyaku=agariyaku+"混全帯么九(1*)/"}
        }
      if(titoi==1){han=han+2,agariyaku=agariyaku+"七対子(2)/"}
      if(toitoi==1){han=han+2,agariyaku=agariyaku+"対々和(2)/"}
      if(sananko==1){han=han+2,agariyaku=agariyaku+"三暗刻(2)/"}
      if(honro==1){han=han+2,agariyaku=agariyaku+"混老頭(2)/"}
      if(sandoko==1){han=han+2,agariyaku=agariyaku+"三色同刻(2)/"}
      if(sankantu==1){han=han+2,agariyaku=agariyaku+"三槓子(2)/"}
      if(syosangen==1){han=han+2,agariyaku=agariyaku+"小三元(2)/"}
      if($("#driti").is(':checked')){
        if(NAKI.length==0){
          han=han+2
          agariyaku=agariyaku+"ダブル立直(2)/"
          if($("#ippatu").is(':checked')){
            han=han+1
            agariyaku=agariyaku+"一発(1)/"}
          }
      }
      if(honitu==1){
        if(NAKI.length==0){han=han+3;agariyaku=agariyaku+"混一色(3)/"}else{han=han+2;agariyaku=agariyaku+"混一色(2*)/"}
        }
      if(juntyan==1){
        if(NAKI.length==0){han=han+3;agariyaku=agariyaku+"純全帯(3)/"}else{han=han+2;agariyaku=agariyaku+"純全帯(2*)/"}
        }
      if(ryanpeko==1){han=han+3,agariyaku=agariyaku+"二盃口(3)/"}
      if(tinitu==1){
        if(NAKI.length==0){han=han+6;agariyaku=agariyaku+"清一色(6)/"}else{han=han+5;agariyaku=agariyaku+"清一色(5*)/"}
        }
      //ハンが1以上ならドラを数える
      if(han>0){
        //var dora=Math.max(Math.round($("#dora").val()),0)
        

        var dora_length=DORA.length
        var dora = 0
        for(var i=0;i<dora_length;i++){
          dora = dora + zenhai.filter(function(value){
            return value == DORA[i]
          }).length
        }
        dora = dora +Math.max(Math.round($("#dora").val()),0)

        han=han+dora
        if(dora>0){agariyaku=agariyaku+"ドラ"+dora+"/"}

      }

    }
  

    //基本点の計算
    if(yakuman>0){kihonten=8000*yakuman}
    else if(han>=$("#kazoe").val() && $("#kazoe").val()>0){kihonten=8000}
    else if(han>10){kihonten=6000}
    else if(han==8 || han==9 || han==10){kihonten=4000}
    else if(han==6 || han==7){kihonten=3000}
    else if(han==5){kihonten=2000}
    else{kihonten=Math.min(2000,hu*Math.pow(2,(han+2)))}
    //ローカル？切り上げ満貫　30符4ハン、60符3ハンは1920となり2000点に切り上げる

    if(kihonten>kihonten_max){
      kihonten_max=kihonten
      //支払い点の計算
      //子のロンあがり
      bakazejikaze=""
      if(bakazeval=="41"){bakazejikaze="東場"}
      else if(bakazeval=="43"){bakazejikaze="南場"}
      else if(bakazeval=="45"){bakazejikaze="西場"}
      else if(bakazeval=="47"){bakazejikaze="北場"}
      if(jikazeval=="41"){bakazejikaze=bakazejikaze+"東風"}
      else if(jikazeval=="43"){bakazejikaze=bakazejikaze+"南風"}
      else if(jikazeval=="45"){bakazejikaze=bakazejikaze+"西風"}
      else if(jikazeval=="47"){bakazejikaze=bakazejikaze+"北風"}
      //bakazejikaze=$('#bakaze option:selected').text()+$('#jikaze option:selected').text()
      if(oyaval=="ko"){
        if(tumoval=="ron"){
          siharaiten=kihonten*4
          siharaiten_call=Math.ceil(siharaiten/100)*100+"点(子ロン)"
          quiz_siharaiten=Math.ceil(siharaiten/100)*100}
        else{
          siharaiten=kihonten
          siharaiten_call=Math.ceil(siharaiten/100)*100+","+Math.ceil(siharaiten*2/100)*100+"点(子ツモ)"
          //oya
          quiz_siharaiten=Math.ceil(siharaiten*2/100)*100
          //ko
          quiz_siharaiten2=Math.ceil(siharaiten/100)*100}
      }
      else{
        if(tumoval=="ron"){
          siharaiten=kihonten*6
          siharaiten_call=Math.ceil(siharaiten/100)*100+"点(親ロン)"
          quiz_siharaiten=Math.ceil(siharaiten/100)*100}
        else{
          siharaiten=kihonten*2
          siharaiten_call=Math.ceil(siharaiten/100)*100+"点オール(親ツモ)"
          quiz_siharaiten=Math.ceil(siharaiten/100)*100}
      }
    
      //alert(han+"ハン"+hu+"符"+kihonten+"点/"+siharaiten_call)
      //if(yakuman>0){$("#tensu").html(yakuman+"役満"+kihonten+"点/"+siharaiten_call)}基本点の表示いらない
      //else if(han>0){$("#tensu").html(han+"飜"+hu+"符"+kihonten+"点/"+siharaiten_call)}
      if(yakuman>0){$("#tensu").html(yakuman+"役満"+"/"+siharaiten_call+"("+bakazejikaze+")"+"<br>")
                    $("#kirimaehu").html("")}
      else if(han>0){$("#tensu").html(han+"飜"+hu+"符"+"/"+siharaiten_call+"("+bakazejikaze+")"+"<br>")
                    $("#kirimaehu").html(kirimaehu)}

      /*
      if(kokusi==1){$("#yaku_list").html($("#yaku_list").html()+"国士無双/")}
      if(suanko==1){$("#yaku_list").html($("#yaku_list").html()+"四暗刻/")}
      if(daisangen==1){$("#yaku_list").html($("#yaku_list").html()+"大三元/")}
      if(tuiso==1){$("#yaku_list").html($("#yaku_list").html()+"字一色/")}
      if(syosusi==1){$("#yaku_list").html($("#yaku_list").html()+"小四喜/")}
      if(daisusi==1){$("#yaku_list").html($("#yaku_list").html()+"大四喜/")}
      if(ryuiso==1){$("#yaku_list").html($("#yaku_list").html()+"緑一色/")}
      if(tinrao==1){$("#yaku_list").html($("#yaku_list").html()+"清老頭/")}
      if(sukantu==1){$("#yaku_list").html($("#yaku_list").html()+"四槓子/")}
      if(tyuren==1){$("#yaku_list").html($("#yaku_list").html()+"九連宝燈/")}
      if(tyuren2==1){$("#yaku_list").html($("#yaku_list").html()+"純正九連宝燈/")}

      if(daisyarin==1){$("#yaku_list").html($("#yaku_list").html()+"大車輪/")}
    
      if($("#riti").is(':checked') && $("#driti").is(':checked')==false){$("#yaku_list").html($("#yaku_list").html()+"立直/")}
      if($("#ippatu").is(':checked')){$("#yaku_list").html($("#yaku_list").html()+"一発/")}
      if(tumo==1){$("#yaku_list").html($("#yaku_list").html()+"門前清自摸和/")}
      if(tanyao==1){$("#yaku_list").html($("#yaku_list").html()+"断?九/")}
      if(pinhu==1){$("#yaku_list").html($("#yaku_list").html()+"平和/")}
      if(ipeko==1){$("#yaku_list").html($("#yaku_list").html()+"一盃口/")}
      if(haku==1){$("#yaku_list").html($("#yaku_list").html()+"白/")}
      if(hatu==1){$("#yaku_list").html($("#yaku_list").html()+"發/")}
      if(tyun==1){$("#yaku_list").html($("#yaku_list").html()+"中/")}
      if(jikaze==1){$("#yaku_list").html($("#yaku_list").html()+"自風/")}
      if(bakaze==1){$("#yaku_list").html($("#yaku_list").html()+"場風/")}
      if($("#rinsyan").is(':checked')){$("#yaku_list").html($("#yaku_list").html()+"嶺上開花/")}
      if($("#tyankan").is(':checked')){$("#yaku_list").html($("#yaku_list").html()+"槍槓/")}
      if($("#haitei").is(':checked')){$("#yaku_list").html($("#yaku_list").html()+"海底摸月/")}
      if($("#hotei").is(':checked')){$("#yaku_list").html($("#yaku_list").html()+"河底撈魚/")}
      if(sansyoku==1){$("#yaku_list").html($("#yaku_list").html()+"三色同順/")}
      if(ikki==1){$("#yaku_list").html($("#yaku_list").html()+"一気通貫/")}
      if(tyanta==1){$("#yaku_list").html($("#yaku_list").html()+"混全帯?九/")}

      if(toitoi==1){$("#yaku_list").html($("#yaku_list").html()+"対々和/")}
      if(sananko==1){$("#yaku_list").html($("#yaku_list").html()+"三暗刻/")}
      if(honro==1){$("#yaku_list").html($("#yaku_list").html()+"混老頭/")}
      if(sandoko==1){$("#yaku_list").html($("#yaku_list").html()+"三色同刻/")}
      if(sankantu==1){$("#yaku_list").html($("#yaku_list").html()+"三槓子/")}
      if(syosangen==1){$("#yaku_list").html($("#yaku_list").html()+"小三元/")}
      if($("#driti").is(':checked')){$("#yaku_list").html($("#yaku_list").html()+"ダブル立直/")}
      if(honitu==1){$("#yaku_list").html($("#yaku_list").html()+"混一色/")}
      if(juntyan==1){$("#yaku_list").html($("#yaku_list").html()+"純全帯/")}
      if(ryanpeko==1){$("#yaku_list").html($("#yaku_list").html()+"二盃口/")}
      if(tinitu==1){$("#yaku_list").html($("#yaku_list").html()+"清一色/")}
      */
      $("#yaku_list").html(agariyaku+"<br>")
    }

  //alert(syosusi)
  //alert(S[0]+S[1]+S[2]+S[3]+S[4]+S[5]+S[6]+S[7]+S[8]+S[9]+S[10]+S[11]+S[12])
  //alert("zenhai_sort"+zenhai_sort[0]+zenhai_sort[1]+zenhai_sort[2]+zenhai_sort[3]+zenhai_sort[4]+zenhai_sort[5]+zenhai_sort[6]+zenhai_sort[7]+zenhai_sort[8]+zenhai_sort[9]+zenhai_sort[10]+zenhai_sort[11]+zenhai_sort[12]+zenhai_sort[13])
  //alert("daisyarin_list"+daisyarin_list[0]+daisyarin_list[1]+daisyarin_list[2]+daisyarin_list[3]+daisyarin_list[4]+daisyarin_list[5]+daisyarin_list[6]+daisyarin_list[7]+daisyarin_list[8]+daisyarin_list[9]+daisyarin_list[10]+daisyarin_list[11]+daisyarin_list[12]+daisyarin_list[13])
  //上がり形の候補数だけ繰り返すのforここまで
  }

  var dcount=1
  var d_dcount = 1
  zenhai_length=zenhai.length
  for(i=0;i<zenhai_length;i++){
    for(j=i+1;j<zenhai_length;j++){
      if(zenhai[i]==""){
        continue;
      }
      if(zenhai[i]==zenhai[j]){
        dcount=dcount+1
      }
    }
    var d_dora = 0

    d_dora = d_dora + DORA_hyoji.filter(function(value){
      return value == zenhai[i]
    }).length

      
    dcount = dcount + d_dora
    if(dcount>4){
      break
    }
    else{
      dcount=1
    }
  }
  for(i=0;i<dora_length;i++){
    d_dcount = DORA_hyoji.filter(function(value){
      return value == DORA_hyoji[i]
    }).length
    if(d_dcount > 4){
      break
    }
    else{
      d_dcount = 1
    }
  }
  
  if(dcount>4 || d_dcount>4){$("#yaku_list").html(agariyaku+"(※牌数オーバー)"+"<br>")}

  /*
  aaaaa=""
  for (i = 0; i < zenhai.length; i++) {
    aaaaa = aaaaa + "," + zenhai[i]
  }
    //alert(zenhai[0]+","+zenhai[1]+","+zenhai[2]+","+zenhai[3]+","+zenhai[4]+","+zenhai[5]+","+zenhai[6]+","+zenhai[7]+","+zenhai[8]+","+zenhai[9]+","+zenhai[10]+","+zenhai[11]+","+zenhai[12]+","+zenhai[13]+"."+zenhai.length)
    alert(aaaaa)
    */

  
  $("#yaku_list").css("font-size","medium")
  len = 0;
  str = escape($("#yaku_list").text());
  for (i=0;i<str.length;i++,len++) {
      if (str.charAt(i) == "%") {
          if (str.charAt(++i) == "u") {
              i += 3;
              len++;
          }
          i++;
      }
  }
  $("#yaku_list").css("font-size",Math.min($("#yaku_list").css("font-size").replace(/px/g,''),$("body").width()/((len+2)/2)))
  $("#tensu").css("font-size","medium")
  len = 0;
  str = escape($("#tensu").text());
  for (i=0;i<str.length;i++,len++) {
      if (str.charAt(i) == "%") {
          if (str.charAt(++i) == "u") {
              i += 3;
              len++;
          }
          i++;
      }
  }
  $("#tensu").css("font-size",Math.min($("#tensu").css("font-size").replace(/px/g,''),$("body").width()/((len+2)/2)))
  $("#kirimaehu").css("font-size","medium")
  len = 0;
  str = escape($("#kirimaehu").text());
  for (i=0;i<str.length;i++,len++) {
      if (str.charAt(i) == "%") {
          if (str.charAt(++i) == "u") {
              i += 3;
              len++;
          }
          i++;
      }
  }
  $("#kirimaehu").css("font-size",Math.min($("#kirimaehu").css("font-size").replace(/px/g,''),$("body").width()/((len+2)/2)))

}

//計算モードでリーチ打牌と当たり牌のチェックを行う
function check_reach2(){
  
  $("#mati_text").html("")
  S_length=S.length
  //dora_count=$("#dora").val()

  /*
  var dora_length=DORA.length
  var dora_count = 0
  for(var i=0;i<dora_length;i++){
    _count = _count + zenhai.filter(function(value){
      return value == DORA[i]
    }).length
  }
  */


  //14枚の牌の種類（0～34）
  arrayHai=new Array()
  arrayHai=[0,0,0,0,0,0,0,0,0,0,0,0,0]
  //上がり牌の種類（0～34）
  arrayHaiA=new Array()
  arrayHaiA=[0]
  //手牌＋鳴き牌＋上がり牌の種類と枚数
  arrayHaicount=new Array()
  //未選択の牌が無く、上がっていなければ
  if(S_length+A.length+(NAKI.length+ANKAN.length)*3==14 && $("#tensu").html()==""){
    //手牌の種類と枚数を数える
    for(i=0;i<S_length;i++){
        for (key in haimap) {
            if (haimap[key] == S[i]) {
                var searchKey = key;
                break;
            }
        }
      if(arrayHaicount[searchKey]==null){
        arrayHaicount[searchKey]=1
      }
      else{
        arrayHaicount[searchKey]=arrayHaicount[searchKey]*1+1
      }
      arrayHai[i]=S[i]
    }
    //上がり牌の種類と枚数を数える
    for (key in haimap) {
        if (haimap[key] == A[0]) {
            var searchKey = key;
            break;
        }
    }
    if(arrayHaicount[searchKey]==null){
        arrayHaicount[searchKey]=1
    }
    else{
        arrayHaicount[searchKey]=arrayHaicount[searchKey]*1+1
    }
    arrayHaiA[0]=A[0]
    //鳴き牌の種類と枚数を数える
    for(i=0;i<NAKI.length;i++){
        for(j=0;j<NAKI[i].length/2;j++){
            for (key in haimap) {
                if (haimap[key] == NAKI[i].substring(j*2,(j+1)*2)) {
                    var searchKey = key;
                    break;
                }
            }
            if(arrayHaicount[searchKey]==null){
                arrayHaicount[searchKey]=1
            }
            else{
                arrayHaicount[searchKey]=arrayHaicount[searchKey]*1+1
            }
        }
    }
    //暗カン牌の種類と枚数を数える
    for(i=0;i<ANKAN.length;i++){
        for(j=0;j<ANKAN[i].length/2;j++){
            for (key in haimap) {
                if (haimap[key] == ANKAN[i].substring(j*2,(j+1)*2)) {
                    var searchKey = key;
                    break;
                }
            }
            if(arrayHaicount[searchKey]==null){
                arrayHaicount[searchKey]=1
            }
            else{
                arrayHaicount[searchKey]=arrayHaicount[searchKey]*1+1
            }
        }
    }
    //枚数オーバーを返す
    if(Math.max.apply(null, arrayHaicount)>4){return;}
    //手牌を全種類試して上がりパターンを探す
    loop1:for(ti=0;ti<S_length;ti++){
      if($.inArray(arrayHai[ti],arrayHai,ti*1+1)>-1){continue;}
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
          

          agari_rekkyo()
          tensu()
          S[ti]=arrayHai[ti]
          for(Sti=ti;Sti<13;Sti++){
            if(arrayHai[Sti]!=null){
              Sti=(arrayHai[Sti])
                break;
            }
          }
          if($("#tensu").text()!=""){
            if(yakuman!=""){
              mati_text=yakuman+"役満"
            }
            else{
              mati_text=han+"翻"+hu+"符"
            }
            mati=mati+"待<img src='./img2/"+haimap2[haimap[hai]]+".png' style='width:20px;'>"+"*"+(4-arrayHaicount[hai])+""+"("+mati_text+")"+","
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
        $("#mati_text").html($("#mati_text").html()+"打"+"<img src='./img2/"+haimap2[Sti]+".png' style='width:20px;'>"+":"+mati+"<br>")
      }
    }
      
    for (key in haimap) {
        if (haimap[key] == A[0]) {
            var searchKey = key;
            break;
        }
    }

    //上がり牌が手牌に一つもなければ、
    //上がり牌を全種類試して上がりパターンを探す
    if($.inArray(A[0],S)==-1){
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
            if(yakuman!=""){
              mati_text=yakuman+"役満"
            }
            else{
              mati_text=han+"翻"+hu+"符"
            }
            //console.log("check"+ti)
            //mati=mati+haimap2[haimap[hai]]+"("+(4-arrayHaicount[hai])+"/4"+"("+han+"翻"+hu+"符)"+","
            mati=mati+"待<img src='./img2/"+haimap2[haimap[hai]]+".png' style='width:20px;'>"+"*"+(4-arrayHaicount[hai])+""+"("+mati_text+")"+","
            //break;
          }
        }
        if(y<9){y=y+1}else{x=x+1,y=1}
      }
      if(mati!=""){
          //console.log("打"+ti+":"+mati)
          //$("#guide_m").html($("#guide_m").html()+"打"+ti+":"+mati+"<br>")
          $("#mati_text").html($("#mati_text").html()+"打"+"<img src='./img2/"+haimap2[A[0]]+".png' style='width:20px;'>"+":"+mati+"<br>")
      }
    }
    $("#tensu").html("")
    $("#yaku_list").html("")
    $("#kirimaehu").html("")
    ////set_S()
  }
}

function tensu_return() {

  quiz_siharaiten=0
  quiz_siharaiten2=0
  //カンの数をカウント
  kan=0
  ankan=ANKAN.length
  minkan=0

  for(i=0;i<NAKI.length;i++){
    if(NAKI[i].length==8){
      kan=kan+1
    }
  }
  minkan=kan
  kan=kan+ANKAN.length

  //牌数を配列に保存
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
  zenhai_length=zenhai.length
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

  //国士無双　これの外で判別する
  kokusi=0
  if(hai_count[0]>=1 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]>=1 && 
     hai_count[9]>=1 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]>=1 && 
     hai_count[18]>=1 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]>=1 && 
     hai_count[27]>=1 && hai_count[28]>=1 && hai_count[29]>=1 && hai_count[30]>=1 && hai_count[31]>=1 && hai_count[32]>=1 && hai_count[33]>=1){
       kokusi=1
       if(G.length==0){G[0]=["a","b","c","d","k"]}
       else{G[G.length*1+1]=["a","b","c","d","k"]}
  }
  //チートイツ
  titoi_check=0
  for(i=0;i<34;i++){
    if(hai_count[i]==2){titoi_check=titoi_check+1}
  }
  if(titoi_check==7 && NAKI.length==0){
    if(G.length==0){G[0]=["e","f","g","h","t"]}
    else{G[G.length]=["e","f","g","h","t"]}
  }

  //G[]の内、一番kihonten_maxが高いものを表示する
  kihonten_max=0

  //G[m][n]の数だけ繰り返す アガリ形になる組み合わせだけ繰り返す 鳴き部分の符計算もこのforの中でやる
  g_length=G.length
  for(g_count=0;g_count<g_length;g_count++){

    //符計算
    //符の初期値
    //基本点の20
    hu=20
    kirimaehu="基本20"
    //19字牌のアンカンは32符、以外は16符
    for(i=0;i<ANKAN.length;i++){
      if(ANKAN[i].substring(2,4)=="11" || ANKAN[i].substring(2,4)=="19" || ANKAN[i].substring(2,4)=="21" || ANKAN[i].substring(2,4)=="29" || ANKAN[i].substring(2,4)=="31" || ANKAN[i].substring(2,4)=="39" || ANKAN[i].substring(2,4)=="51" || ANKAN[i].substring(2,4)=="53" || ANKAN[i].substring(2,4)=="55" || ANKAN[i].substring(2,4)=="41" || ANKAN[i].substring(2,4)=="43" || ANKAN[i].substring(2,4)=="45" || ANKAN[i].substring(2,4)=="47"){hu=hu+32,kirimaehu=kirimaehu+"+么九暗槓32"}
      else{hu=hu+16,kirimaehu=kirimaehu+"+中張暗槓16"}
    }
    
    for(i=0;i<NAKI.length;i++){
      if(NAKI[i].length==8){
        if(NAKI[i].substring(0,2)=="11" || NAKI[i].substring(0,2)=="19" || NAKI[i].substring(0,2)=="21" || NAKI[i].substring(0,2)=="29" || NAKI[i].substring(0,2)=="31" || NAKI[i].substring(0,2)=="39" || NAKI[i].substring(0,2)=="51" || NAKI[i].substring(0,2)=="53" || NAKI[i].substring(0,2)=="55" || NAKI[i].substring(0,2)=="41" || NAKI[i].substring(0,2)=="43" || NAKI[i].substring(0,2)=="45" || NAKI[i].substring(0,2)=="47"){hu=hu+16,kirimaehu=kirimaehu+"+么九明槓16"}
        else{hu=hu+8,kirimaehu=kirimaehu+"+中張明槓8"}
      }
      else{
        if(NAKI[i].substring(0,2)==NAKI[i].substring(2,4)){
          if(NAKI[i].substring(0,2)=="11" || NAKI[i].substring(0,2)=="19" || NAKI[i].substring(0,2)=="21" || NAKI[i].substring(0,2)=="29" || NAKI[i].substring(0,2)=="31" || NAKI[i].substring(0,2)=="39" || NAKI[i].substring(0,2)=="51" || NAKI[i].substring(0,2)=="53" || NAKI[i].substring(0,2)=="55" || NAKI[i].substring(0,2)=="41" || NAKI[i].substring(0,2)=="43" || NAKI[i].substring(0,2)=="45" || NAKI[i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu+"+么九明刻4"}
          else{hu=hu+2,kirimaehu=kirimaehu+"+中張明刻2"}
        }
      }
    }


    var agari=new Array()
    agari=$.merge([],G[g_count])
    //NAKIのsortをやめてみるテスト
    if(NAKI[0]!=null){agari=$.merge(agari,NAKI)}
    if(ANKAN[0]!=null){agari=$.merge(agari,ANKAN)}
  


    //アンカン含むアンコチェック用配列
    anko_check=new Array()
    anko_check_make=new Array()
    anko_check_make=$.merge([],G[g_count])
    anko_check=$.merge(anko_check_make,ANKAN)

    //アンコの数（カン除く）
    kotu=0
    anko=0
    minko=0
    //アンコ・ミンコの配列番号
    anko_i=new Array()
    minko_i=new Array()

    //親子ツモロン自風場風の変数化
    oyaval=$('input[name="oya"]:checked').val()
    tumoval=$('input[name="tumo"]:checked').val()
    jikazeval=$('input[name="jikaze"]:checked').val()
    bakazeval=$('input[name="bakaze"]:checked').val()
    //alert(oyaval+","+tumoval+","+jikazeval+","+bakazeval)
    //ミンコ2　アンコ4　ミンカン8　アンカン16　19字牌なら倍（↑アンコチェックの中でアンコの符は一緒に計算する）

    //アンコ数のチェック
    if(tumoval=="tumo"){
      for(i=1;i<G[g_count].length;i++){
        if(G[g_count][i].substring(0,2)==G[g_count][i].substring(2,4)){
          anko=anko+1
          anko_i.push(i)
          if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+8,kirimaehu=kirimaehu+"+么九暗刻8"}
          else{hu=hu+4,kirimaehu=kirimaehu+"+中張暗刻4"}
        }
      }
    }
    //ロンだとミンコかもしれないのでまずミンコ分を計上してアンコならアンコ分を足す
    else if(tumoval=="ron"){
      //Gの面子数だけ繰り返す
      for(i=1;i<G[g_count].length;i++){
        //刻子なら
        if(G[g_count][i].substring(0,2)==G[g_count][i].substring(2,4)){
          //とりあえずミンコ分の符を加える
          minko_i.push(i)
          if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu+"+么九明刻4"}
          else{hu=hu+2,kirimaehu=kirimaehu+"+中張明刻2"}
          //刻子の牌がアガリ牌と違っていればミンコを一つ削ってアンコ確定
          if(G[g_count][i].substring(0,2)!=A[0]){
              anko=anko+1
              anko_i.push(i)
              minko_i.pop()
              if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+么九暗刻8"}
              else{hu=hu+2,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+中張暗刻4"}
          }
            else{
              for(j=1;j<G[g_count].length;j++){
                if(i==j){break}
                if(G[g_count][j].substring(0,2)==G[g_count][i].substring(0,2) || G[g_count][j].substring(2,4)==G[g_count][i].substring(0,2) || G[g_count][j].substring(4,6)==G[g_count][i].substring(0,2)){
                  anko=anko+1
                  anko_i.push(i)
                  if(G[g_count][i].substring(0,2)=="11" || G[g_count][i].substring(0,2)=="19" || G[g_count][i].substring(0,2)=="21" || G[g_count][i].substring(0,2)=="29" || G[g_count][i].substring(0,2)=="31" || G[g_count][i].substring(0,2)=="39" || G[g_count][i].substring(0,2)=="51" || G[g_count][i].substring(0,2)=="53" || G[g_count][i].substring(0,2)=="55" || G[g_count][i].substring(0,2)=="41" || G[g_count][i].substring(0,2)=="43" || G[g_count][i].substring(0,2)=="45" || G[g_count][i].substring(0,2)=="47"){hu=hu+4,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+么九暗刻8"}
                  else{hu=hu+2,kirimaehu=kirimaehu.substr(0,kirimaehu.length-6)+"+中張暗刻4"}
                  minko_i.pop()
                  break
                  }
              }
            }
        }
      }
    }

    for(i=1;i<G[g_count].length;i++){
        if(G[g_count][i].substring(0,2)==G[g_count][i].substring(2,4)){kotu=kotu+1}
    }
    minko=kotu-anko

    tuiso=0
    ryuiso=0
    tinrao=0
    daisangen=0
    daisusi=0
    syosusi=0
    daisyarin=0
    tyuren=0
    tyuren2=0
    suanko=0
    //kokusi=0
    sukantu=0
    var tenho=0
    var tiho=0

    tanyao=0
    honro=0
    juntyan=0
    tyanta=0
    titoi=0 //七対子
    var tumo=0
    pinhu=0
    kuipinhu=0
    ipeko=0
    ryanpeko=0
    sansyoku=0
    ikki=0
    toitoi=0
    sananko=0
    sankantu=0
    sandoko=0
    syosangen=0
    tinitu=0
    honitu=0
    haku=0
    hatu=0
    tyun=0
    var jikaze=0
    var bakaze=0

    //字一色 牌数合計をチェックしてないので東東とかでも役が成立してしまう（放置）
    if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
      hai_count[27]>=0 && hai_count[28]>=0 && hai_count[29]>=0 && hai_count[30]>=0 && hai_count[31]>=0 && hai_count[32]>=0 && hai_count[33]>=0){tuiso=1}
    //緑一色
    if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[19]>=0 && hai_count[20]>=0 && hai_count[21]>=0 && hai_count[22]==0 && hai_count[23]>=0 && hai_count[24]==0 && hai_count[25]>=0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]>=0 && hai_count[33]==0){ryuiso=1}
    //清老頭
    if(hai_count[0]>=0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]>=0 && 
      hai_count[9]>=0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]>=0 && 
      hai_count[18]>=0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]>=0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tinrao=1}
    //大三元
    if(hai_count[31]>=3 && hai_count[32]>=3 && hai_count[33]>=3){daisangen=1}
    //小四喜
    if(hai_count[27]>=2 && hai_count[28]>=3 && hai_count[29]>=3 && hai_count[30]>=3){syosusi=1}
    if(hai_count[27]>=3 && hai_count[28]>=2 && hai_count[29]>=3 && hai_count[30]>=3){syosusi=1}
    if(hai_count[27]>=3 && hai_count[28]>=3 && hai_count[29]>=2 && hai_count[30]>=3){syosusi=1}
    if(hai_count[27]>=3 && hai_count[28]>=3 && hai_count[29]>=3 && hai_count[30]>=2){syosusi=1}
    //大四喜
    if(hai_count[27]>=3 && hai_count[28]>=3 && hai_count[29]>=3 && hai_count[30]>=3){syosusi=0,daisusi=1}

    //大車輪（ローカル）
    if(hai_count[10]==2 && hai_count[11]==2 && hai_count[12]==2 && hai_count[13]==2 && hai_count[14]==2 && hai_count[15]==2 && hai_count[16]==2){daisyarin=1}
    //鳴いていると成立しない役満
    if(NAKI.length==0){
    //天和地和
    if(oyaval=="oya" && $("#tenho").is(':checked')){tenho=1}
    if(oyaval=="ko" && $("#tiho").is(':checked')){tiho=1}
    //九蓮
    if(hai_count[0]>=3 && hai_count[1]>=1 && hai_count[2]>=1 && hai_count[3]>=1 && hai_count[4]>=1 && hai_count[5]>=1 && hai_count[6]>=1 && hai_count[7]>=1 && hai_count[8]>=3 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tyuren=1}
    if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]>=3 && hai_count[10]>=1 && hai_count[11]>=1 && hai_count[12]>=1 && hai_count[13]>=1 && hai_count[14]>=1 && hai_count[15]>=1 && hai_count[16]>=1 && hai_count[17]>=3 && 
      hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tyuren=1}
    if(hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
      hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
      hai_count[18]>=3 && hai_count[19]>=1 && hai_count[20]>=1 && hai_count[21]>=1 && hai_count[22]>=1 && hai_count[23]>=1 && hai_count[24]>=1 && hai_count[25]>=1 && hai_count[26]>=3 && 
      hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tyuren=1}
    //純九蓮
    tyuren_list=new Array()
    tyuren_list=$.merge([],S)
    tyuren_list.sort()
    if(tyuren_list[0]=="11" && tyuren_list[1]=="11" && tyuren_list[2]=="11" && tyuren_list[3]=="12" && tyuren_list[4]=="13" && tyuren_list[5]=="14" && tyuren_list[6]=="15" && tyuren_list[7]=="16" && tyuren_list[8]=="17" && tyuren_list[9]=="18" && tyuren_list[10]=="19" && tyuren_list[11]=="19" && tyuren_list[12]=="19"){tyuren=0,tyuren2=1}
    if(tyuren_list[0]=="21" && tyuren_list[1]=="21" && tyuren_list[2]=="21" && tyuren_list[3]=="22" && tyuren_list[4]=="23" && tyuren_list[5]=="24" && tyuren_list[6]=="25" && tyuren_list[7]=="26" && tyuren_list[8]=="27" && tyuren_list[9]=="28" && tyuren_list[10]=="29" && tyuren_list[11]=="29" && tyuren_list[12]=="29"){tyuren=0,tyuren2=1}
    if(tyuren_list[0]=="31" && tyuren_list[1]=="31" && tyuren_list[2]=="31" && tyuren_list[3]=="32" && tyuren_list[4]=="33" && tyuren_list[5]=="34" && tyuren_list[6]=="35" && tyuren_list[7]=="36" && tyuren_list[8]=="37" && tyuren_list[9]=="38" && tyuren_list[10]=="39" && tyuren_list[11]=="39" && tyuren_list[12]=="39"){tyuren=0,tyuren2=1}
    //四暗刻（ロンだと雀頭ロンじゃないと不成立）
    if(anko+ankan==4){suanko=1}
    }
    //四槓子
    if(kan==4){sukantu=1}
    //役満ここまで
    //もし役満がついていなければ
    if(tuiso==0 && ryuiso==0 && tinrao==0 && daisangen==0 && daisusi==0 && syosusi==0 && daisyarin==0 && tyuren==0 && tyuren2==0 && suanko==0 && kokusi==0 && sukantu==0 && tenho==0 && tiho==0){
      //断ヤオ九
      if(hai_count[0]==0 && hai_count[8]==0 && 
        hai_count[9]==0 && hai_count[17]==0 && 
        hai_count[18]==0 && hai_count[26]==0 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0){tanyao=1}
      //混老頭
      if(hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && 
        hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && 
        hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0){honro=1}
      //純全帯
      else if((agari[0].substring(0,2)=="11" || agari[0].substring(0,2)=="19" || agari[0].substring(0,2)=="21" || agari[0].substring(0,2)=="29" || agari[0].substring(0,2)=="31" || agari[0].substring(0,2)=="39") &&
        (agari[1].substring(0,2)=="11" || (agari[1].substring(0,2)=="17" && agari[1].substring(2,4)=="18") || agari[1].substring(0,2)=="19" || agari[1].substring(0,2)=="21" || (agari[1].substring(0,2)=="27" && agari[1].substring(2,4)=="28") || agari[1].substring(0,2)=="29" || agari[1].substring(0,2)=="31" || (agari[1].substring(0,2)=="37" && agari[1].substring(2,4)=="38") || agari[1].substring(0,2)=="39") &&
        (agari[2].substring(0,2)=="11" || (agari[2].substring(0,2)=="17" && agari[2].substring(2,4)=="18") || agari[2].substring(0,2)=="19" || agari[2].substring(0,2)=="21" || (agari[2].substring(0,2)=="27" && agari[2].substring(2,4)=="28") || agari[2].substring(0,2)=="29" || agari[2].substring(0,2)=="31" || (agari[2].substring(0,2)=="37" && agari[2].substring(2,4)=="38") || agari[2].substring(0,2)=="39") &&
        (agari[3].substring(0,2)=="11" || (agari[3].substring(0,2)=="17" && agari[3].substring(2,4)=="18") || agari[3].substring(0,2)=="19" || agari[3].substring(0,2)=="21" || (agari[3].substring(0,2)=="27" && agari[3].substring(2,4)=="28") || agari[3].substring(0,2)=="29" || agari[3].substring(0,2)=="31" || (agari[3].substring(0,2)=="37" && agari[3].substring(2,4)=="38") || agari[3].substring(0,2)=="39") &&
        (agari[4].substring(0,2)=="11" || (agari[4].substring(0,2)=="17" && agari[4].substring(2,4)=="18") || agari[4].substring(0,2)=="19" || agari[4].substring(0,2)=="21" || (agari[4].substring(0,2)=="27" && agari[4].substring(2,4)=="28") || agari[4].substring(0,2)=="29" || agari[4].substring(0,2)=="31" || (agari[4].substring(0,2)=="37" && agari[4].substring(2,4)=="38") || agari[4].substring(0,2)=="39")){juntyan=1}
      //混全帯
      else if((agari[0].substring(0,2)=="11" || agari[0].substring(0,2)=="19" || agari[0].substring(0,2)=="21" || agari[0].substring(0,2)=="29" || agari[0].substring(0,2)=="31" || agari[0].substring(0,2)=="39" || agari[0].substring(0,2)=="41" || agari[0].substring(0,2)=="43" || agari[0].substring(0,2)=="45" || agari[0].substring(0,2)=="47" || agari[0].substring(0,2)=="51" || agari[0].substring(0,2)=="53" || agari[0].substring(0,2)=="55") &&
        (agari[1].substring(0,2)=="11" || (agari[1].substring(0,2)=="17" && agari[1].substring(2,4)=="18") || agari[1].substring(0,2)=="19" || agari[1].substring(0,2)=="21" || (agari[1].substring(0,2)=="27" && agari[1].substring(2,4)=="28") || agari[1].substring(0,2)=="29" || agari[1].substring(0,2)=="31" || (agari[1].substring(0,2)=="37" && agari[1].substring(2,4)=="38") || agari[1].substring(0,2)=="39" || agari[1].substring(0,2)=="41" || agari[1].substring(0,2)=="43" || agari[1].substring(0,2)=="45" || agari[1].substring(0,2)=="47" || agari[1].substring(0,2)=="51" || agari[1].substring(0,2)=="53" || agari[1].substring(0,2)=="55") &&
        (agari[2].substring(0,2)=="11" || (agari[2].substring(0,2)=="17" && agari[2].substring(2,4)=="18") || agari[2].substring(0,2)=="19" || agari[2].substring(0,2)=="21" || (agari[2].substring(0,2)=="27" && agari[2].substring(2,4)=="28") || agari[2].substring(0,2)=="29" || agari[2].substring(0,2)=="31" || (agari[2].substring(0,2)=="37" && agari[2].substring(2,4)=="38") || agari[2].substring(0,2)=="39" || agari[2].substring(0,2)=="41" || agari[2].substring(0,2)=="43" || agari[2].substring(0,2)=="45" || agari[2].substring(0,2)=="47" || agari[2].substring(0,2)=="51" || agari[2].substring(0,2)=="53" || agari[2].substring(0,2)=="55") &&
        (agari[3].substring(0,2)=="11" || (agari[3].substring(0,2)=="17" && agari[3].substring(2,4)=="18") || agari[3].substring(0,2)=="19" || agari[3].substring(0,2)=="21" || (agari[3].substring(0,2)=="27" && agari[3].substring(2,4)=="28") || agari[3].substring(0,2)=="29" || agari[3].substring(0,2)=="31" || (agari[3].substring(0,2)=="37" && agari[3].substring(2,4)=="38") || agari[3].substring(0,2)=="39" || agari[3].substring(0,2)=="41" || agari[3].substring(0,2)=="43" || agari[3].substring(0,2)=="45" || agari[3].substring(0,2)=="47" || agari[3].substring(0,2)=="51" || agari[3].substring(0,2)=="53" || agari[3].substring(0,2)=="55") &&
        (agari[4].substring(0,2)=="11" || (agari[4].substring(0,2)=="17" && agari[4].substring(2,4)=="18") || agari[4].substring(0,2)=="19" || agari[4].substring(0,2)=="21" || (agari[4].substring(0,2)=="27" && agari[4].substring(2,4)=="28") || agari[4].substring(0,2)=="29" || agari[4].substring(0,2)=="31" || (agari[4].substring(0,2)=="37" && agari[4].substring(2,4)=="38") || agari[4].substring(0,2)=="39" || agari[4].substring(0,2)=="41" || agari[4].substring(0,2)=="43" || agari[4].substring(0,2)=="45" || agari[4].substring(0,2)=="47" || agari[4].substring(0,2)=="51" || agari[4].substring(0,2)=="53" || agari[4].substring(0,2)=="55")){tyanta=1}
      //平和（喰いピンフチェック）
      if((agari[0].substring(0,2)!=bakazeval && agari[0].substring(0,2)!=jikazeval && agari[0].substring(0,2)!="51" && agari[0].substring(0,2)!="53" && agari[0].substring(0,2)!="55") &&
        agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 &&
        agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 &&
        agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 &&
        agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 &&
        ((agari[1].substring(0,2)==A[0] && agari[1].charAt(5)!="9") || (agari[1].substring(4,6)==A[0] && agari[1].charAt(1)!="1") ||
          (agari[2].substring(0,2)==A[0] && agari[2].charAt(5)!="9") || (agari[2].substring(4,6)==A[0] && agari[2].charAt(1)!="1") ||
          (agari[3].substring(0,2)==A[0] && agari[3].charAt(5)!="9") || (agari[3].substring(4,6)==A[0] && agari[3].charAt(1)!="1") ||
          (agari[4].substring(0,2)==A[0] && agari[4].charAt(5)!="9") || (agari[4].substring(4,6)==A[0] && agari[4].charAt(1)!="1"))){
            if(NAKI.length==0){pinhu=1}
            else{kuipinhu=1}
      }
          
      //鳴いたら役がつかないもの
      if(NAKI.length==0){
        //七対子
        if(G[g_count][0]=="e"){titoi=1}
        //ツモ
        if(tumoval=="tumo"){tumo=1}
        //二盃口
        if(agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 &&
          agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 &&
          agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 &&
          agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 &&
          ((agari[1].substring(0,2)==agari[2].substring(0,2) && agari[1].substring(2,4)==agari[2].substring(2,4) && agari[3].substring(0,2)==agari[4].substring(0,2) && agari[3].substring(2,4)==agari[4].substring(2,4)) ||
            (agari[1].substring(0,2)==agari[3].substring(0,2) && agari[1].substring(2,4)==agari[3].substring(2,4) && agari[2].substring(0,2)==agari[4].substring(0,2) && agari[2].substring(2,4)==agari[4].substring(2,4)) ||
            (agari[1].substring(0,2)==agari[4].substring(0,2) && agari[1].substring(2,4)==agari[4].substring(2,4) && agari[2].substring(0,2)==agari[3].substring(0,2) && agari[2].substring(2,4)==agari[3].substring(2,4)))){ryanpeko=1}
        //一盃口
        if(ryanpeko==0){
        if((agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && ((agari[1].substring(0,2)==agari[2].substring(0,2) && agari[1].substring(2,4)==agari[2].substring(2,4)) || (agari[1].substring(0,2)==agari[3].substring(0,2) && agari[1].substring(2,4)==agari[3].substring(2,4)) || (agari[1].substring(0,2)==agari[4].substring(0,2) && agari[1].substring(2,4)==agari[4].substring(2,4)))) ||
          (agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && ((agari[2].substring(0,2)==agari[1].substring(0,2) && agari[2].substring(2,4)==agari[1].substring(2,4)) || (agari[2].substring(0,2)==agari[3].substring(0,2) && agari[2].substring(2,4)==agari[3].substring(2,4)) || (agari[2].substring(0,2)==agari[4].substring(0,2) && agari[2].substring(2,4)==agari[4].substring(2,4)))) ||
          (agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && ((agari[3].substring(0,2)==agari[1].substring(0,2) && agari[3].substring(2,4)==agari[1].substring(2,4)) || (agari[3].substring(0,2)==agari[2].substring(0,2) && agari[3].substring(2,4)==agari[2].substring(2,4)) || (agari[3].substring(0,2)==agari[4].substring(0,2) && agari[3].substring(2,4)==agari[4].substring(2,4)))) ||
          (agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && ((agari[4].substring(0,2)==agari[1].substring(0,2) && agari[4].substring(2,4)==agari[1].substring(2,4)) || (agari[4].substring(0,2)==agari[2].substring(0,2) && agari[4].substring(2,4)==agari[2].substring(2,4)) || (agari[4].substring(0,2)==agari[3].substring(0,2) && agari[4].substring(2,4)==agari[3].substring(2,4))))){ipeko=1}
        }
      }
      //鳴いても成立する
      //三色同順
      //もしagari[1]が順子で、かつ、agari[1]とagari[3]が一の位が同じ順子で、かつ、agari[1]とagari[4]が一の位が同じ順子で、かつ、agari[1]とagari[3]とagari[4]の十の位がどれも違えば三色
      if((agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1)) ||
        (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1)) ||
        (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[3].substring(0,1)) ||
        (agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[2].substring(1,2)==agari[3].substring(1,2) && agari[2].substring(3,4)==agari[3].substring(3,4) && agari[2].substring(1,2)==agari[4].substring(1,2) && agari[2].substring(3,4)==agari[4].substring(3,4) && agari[2].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1))){sansyoku=1}
      //一気通貫
      if((agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && agari[1].substring(0,1)==agari[2].substring(0,1) && agari[1].substring(0,1)==agari[3].substring(0,1) && agari[1].substring(1,2)!=agari[2].substring(1,2) && agari[1].substring(1,2)!=agari[3].substring(1,2) && agari[2].substring(1,2)!=agari[3].substring(1,2) && (agari[1].substring(1,2)=="1" || agari[1].substring(1,2)=="4" || agari[1].substring(1,2)=="7") && (agari[2].substring(1,2)=="1" || agari[2].substring(1,2)=="4" || agari[2].substring(1,2)=="7") && (agari[3].substring(1,2)=="1" || agari[3].substring(1,2)=="4" || agari[3].substring(1,2)=="7")) ||
        (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && agari[1].substring(0,1)==agari[2].substring(0,1) && agari[1].substring(0,1)==agari[4].substring(0,1) && agari[1].substring(1,2)!=agari[2].substring(1,2) && agari[1].substring(1,2)!=agari[4].substring(1,2) && agari[2].substring(1,2)!=agari[4].substring(1,2) && (agari[1].substring(1,2)=="1" || agari[1].substring(1,2)=="4" || agari[1].substring(1,2)=="7") && (agari[2].substring(1,2)=="1" || agari[2].substring(1,2)=="4" || agari[2].substring(1,2)=="7") && (agari[4].substring(1,2)=="1" || agari[4].substring(1,2)=="4" || agari[4].substring(1,2)=="7")) ||
        (agari[1].substring(0,2)*1+1==agari[1].substring(2,4)*1 && agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && agari[1].substring(0,1)==agari[3].substring(0,1) && agari[1].substring(0,1)==agari[4].substring(0,1) && agari[1].substring(1,2)!=agari[3].substring(1,2) && agari[1].substring(1,2)!=agari[4].substring(1,2) && agari[3].substring(1,2)!=agari[4].substring(1,2) && (agari[1].substring(1,2)=="1" || agari[1].substring(1,2)=="4" || agari[1].substring(1,2)=="7") && (agari[3].substring(1,2)=="1" || agari[3].substring(1,2)=="4" || agari[3].substring(1,2)=="7") && (agari[4].substring(1,2)=="1" || agari[4].substring(1,2)=="4" || agari[4].substring(1,2)=="7")) ||
        (agari[2].substring(0,2)*1+1==agari[2].substring(2,4)*1 && agari[3].substring(0,2)*1+1==agari[3].substring(2,4)*1 && agari[4].substring(0,2)*1+1==agari[4].substring(2,4)*1 && agari[2].substring(0,1)==agari[3].substring(0,1) && agari[2].substring(0,1)==agari[4].substring(0,1) && agari[2].substring(1,2)!=agari[3].substring(1,2) && agari[2].substring(1,2)!=agari[4].substring(1,2) && agari[3].substring(1,2)!=agari[4].substring(1,2) && (agari[2].substring(1,2)=="1" || agari[2].substring(1,2)=="4" || agari[2].substring(1,2)=="7") && (agari[3].substring(1,2)=="1" || agari[3].substring(1,2)=="4" || agari[3].substring(1,2)=="7") && (agari[4].substring(1,2)=="1" || agari[4].substring(1,2)=="4" || agari[4].substring(1,2)=="7"))){ikki=1}
      //対々和
      if(agari[1].substring(0,2)==agari[1].substring(2,4) && agari[2].substring(0,2)==agari[2].substring(2,4) && agari[3].substring(0,2)==agari[3].substring(2,4) && agari[4].substring(0,2)==agari[4].substring(2,4)){toitoi=1}
      //三暗刻（ロンだと雀頭ロンじゃないと不成立）
      if(anko+ankan==3){sananko=1}
      //三槓子
      if(kan==3){sankantu=1}
      /*
      //三色同刻
      if((agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1)) ||
        (agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1)) ||
        (agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[3].substring(0,1)) ||
        (agari[2].substring(0,2)==agari[2].substring(2,4) && agari[2].substring(1,2)==agari[3].substring(1,2) && agari[2].substring(3,4)==agari[3].substring(3,4) && agari[2].substring(1,2)==agari[4].substring(1,2) && agari[2].substring(3,4)==agari[4].substring(3,4) && agari[2].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1))){sandoko=1}
      */
      //三色同刻
      if((agari[1].substring(0,1)<4 && agari[3].substring(0,1)<4 && agari[4].substring(0,1)<4 && agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1)) ||
        (agari[1].substring(0,1)<4 && agari[2].substring(0,1)<4 && agari[4].substring(0,1)<4 && agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[4].substring(1,2) && agari[1].substring(3,4)==agari[4].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[4].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1)) ||
        (agari[1].substring(0,1)<4 && agari[2].substring(0,1)<4 && agari[3].substring(0,1)<4 && agari[1].substring(0,2)==agari[1].substring(2,4) && agari[1].substring(1,2)==agari[2].substring(1,2) && agari[1].substring(3,4)==agari[2].substring(3,4) && agari[1].substring(1,2)==agari[3].substring(1,2) && agari[1].substring(3,4)==agari[3].substring(3,4) && agari[1].substring(0,1)!=agari[2].substring(0,1) && agari[1].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[3].substring(0,1)) ||
        (agari[2].substring(0,1)<4 && agari[3].substring(0,1)<4 && agari[4].substring(0,1)<4 && agari[2].substring(0,2)==agari[2].substring(2,4) && agari[2].substring(1,2)==agari[3].substring(1,2) && agari[2].substring(3,4)==agari[3].substring(3,4) && agari[2].substring(1,2)==agari[4].substring(1,2) && agari[2].substring(3,4)==agari[4].substring(3,4) && agari[2].substring(0,1)!=agari[3].substring(0,1) && agari[2].substring(0,1)!=agari[4].substring(0,1) && agari[3].substring(0,1)!=agari[4].substring(0,1))){sandoko=1}
      //小三元
      if(hai_count[31]>=3 && hai_count[32]>=3 && hai_count[33]==2 || hai_count[31]>=3 && hai_count[32]==2 && hai_count[33]>=3 || hai_count[31]==2 && hai_count[32]>=3 && hai_count[33]>=3){syosangen=1}
      //混一色
      if((hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
          hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0) || 
        (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
          hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0) || 
        (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
          hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0)){honitu=1}
      //清一色
      if((hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
        hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0) || 
        (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
        hai_count[18]==0 && hai_count[19]==0 && hai_count[20]==0 && hai_count[21]==0 && hai_count[22]==0 && hai_count[23]==0 && hai_count[24]==0 && hai_count[25]==0 && hai_count[26]==0 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0) || 
        (hai_count[0]==0 && hai_count[1]==0 && hai_count[2]==0 && hai_count[3]==0 && hai_count[4]==0 && hai_count[5]==0 && hai_count[6]==0 && hai_count[7]==0 && hai_count[8]==0 && 
        hai_count[9]==0 && hai_count[10]==0 && hai_count[11]==0 && hai_count[12]==0 && hai_count[13]==0 && hai_count[14]==0 && hai_count[15]==0 && hai_count[16]==0 && hai_count[17]==0 && 
        hai_count[27]==0 && hai_count[28]==0 && hai_count[29]==0 && hai_count[30]==0 && hai_count[31]==0 && hai_count[32]==0 && hai_count[33]==0)){honitu=0,tinitu=1}
      //白
      if(agari[1].substring(0,2)=="51" || agari[2].substring(0,2)=="51" || agari[3].substring(0,2)=="51" || agari[4].substring(0,2)=="51"){haku=1}
      //發
      if(agari[1].substring(0,2)=="53" || agari[2].substring(0,2)=="53" || agari[3].substring(0,2)=="53" || agari[4].substring(0,2)=="53"){hatu=1}
      //中
      if(agari[1].substring(0,2)=="55" || agari[2].substring(0,2)=="55" || agari[3].substring(0,2)=="55" || agari[4].substring(0,2)=="55"){tyun=1}
      //自風
      if(agari[1].substring(0,2)==jikazeval || agari[2].substring(0,2)==jikazeval || agari[3].substring(0,2)==jikazeval || agari[4].substring(0,2)==jikazeval){jikaze=1}
      //場風
      if(agari[1].substring(0,2)==bakazeval || agari[2].substring(0,2)==bakazeval || agari[3].substring(0,2)==bakazeval || agari[4].substring(0,2)==bakazeval){bakaze=1}





      //符計算
      //基本点の20
      //面前でロン上がりなら10
      //ミンコ2　アンコ4　ミンカン8　アンカン16　19字牌なら倍（↑アンコミンコチェックの中で一緒に計算する）
      //ツモ上がりなら2　※ピンフの場合は例外あり
      //カンチャン（4・6）ペンチャン（12・）タンキ（5・）なら2　リャンメン（・34・）シャボ（55,66）なら0（平和以外は高くなるほうの符を選択して良い）
      //雀頭が役牌なら2　ダブ風なら4


      //面前でロン上がりなら10
      if(NAKI.length==0 && tumoval=="ron"){hu=hu+10,kirimaehu=kirimaehu+"+門前加符10"}
      
      //ツモ上がりなら2（※ピンツモで2符をつけるかローカルルールあり）
      if(pinhu==0 && kuipinhu==0 && tumoval=="tumo"){hu=hu+2,kirimaehu=kirimaehu+"+ツモ符2"}
      
      //タンキ待ちなら2
      if(pinhu==0 && kuipinhu==0){
        if(G[g_count][0].substring(0,2)==A[0]){hu=hu+2,kirimaehu=kirimaehu+"+単騎待ち2"}
        else{
          for(i=1;i<G[g_count].length;i++){
        //カンチャン待ちなら2
            if(G[g_count][i].substring(0,2)*1+1==G[g_count][i].substring(2,4)*1 && G[g_count][i].substring(2,4)==A[0]){hu=hu+2,kirimaehu=kirimaehu+"+嵌張待ち2";break}
        //ペンチャン待ちなら2
            else if(G[g_count][i].substring(0,2)*1+1==G[g_count][i].substring(2,4)*1 && ((G[g_count][i].substring(1,2)=="1" && G[g_count][i].substring(4,6)==A[0]) || (G[g_count][i].substring(1,2)=="7" && G[g_count][i].substring(0,2)==A[0]))){hu=hu+2,kirimaehu=kirimaehu+"+辺張待ち2";break}
          }
        }
      }
      //雀頭が役牌なら2
      if(G[g_count][0].substring(0,2)=="51" ||G[g_count][0].substring(0,2)=="53" || G[g_count][0].substring(0,2)=="55"){hu=hu+2,kirimaehu=kirimaehu+"+雀頭役牌2"}
      //自風・場風なら2（※ローカルルールあり）
      if(G[g_count][0].substring(0,2)==jikazeval){hu=hu+2,kirimaehu=kirimaehu+"+雀頭自風2"}

      if(G[g_count][0].substring(0,2)==bakazeval){hu=hu+2,kirimaehu=kirimaehu+"+雀頭場風2"}

      //平和なら符は0（※ローカルルールあり）
      //if(pinhu==1){hu=20,kirimaehu="平和20"}
      //喰い平和なら符に+10（※ローカルルールあり？）
      if(kuipinhu==1){hu=hu+10,kirimaehu=kirimaehu+"+喰い平和10"}
      //符確定
      kirimaehu=hu+"符:"+kirimaehu
      hu=Math.ceil(hu/10)*10
      //七対子なら切り上げせずに25符
      if(titoi==1){hu=25}
      //もし役牌が0なら～のforここまで
    }
    //点数計算

    //上がり役発表
    agariyaku=""
    kihonten=0
    siharaiten=0
    siharaiten_call=""
    yakuman=0
    han=0
    


    if(kokusi==1){yakuman=yakuman+1,agariyaku=agariyaku+"国士無双/"}//うまく取れてない
    if(suanko==1){yakuman=yakuman+1,agariyaku=agariyaku+"四暗刻/"}
    if(daisangen==1){yakuman=yakuman+1,agariyaku=agariyaku+"大三元/"}
    if(tuiso==1){yakuman=yakuman+1,agariyaku=agariyaku+"字一色/"}
    if(syosusi==1){yakuman=yakuman+1,agariyaku=agariyaku+"小四喜/"}
    if(daisusi==1){yakuman=yakuman+1,agariyaku=agariyaku+"大四喜/"}
    if(ryuiso==1){yakuman=yakuman+1,agariyaku=agariyaku+"緑一色/"}
    if(tinrao==1){yakuman=yakuman+1,agariyaku=agariyaku+"清老頭/"}
    if(sukantu==1){yakuman=yakuman+1,agariyaku=agariyaku+"四槓子/"}
    if(tyuren==1){yakuman=yakuman+1,agariyaku=agariyaku+"九連宝燈/"}
    if(tyuren2==1){yakuman=yakuman+1,agariyaku=agariyaku+"純正九連宝燈/"}

    if(daisyarin==1){yakuman=yakuman+1,agariyaku=agariyaku+"大車輪/"}//ローカル役ではある
    if(tenho==1){yakuman=yakuman+1,agariyaku=agariyaku+"天和/"}
    if(tiho==1){yakuman=yakuman+1,agariyaku=agariyaku+"地和/"}

    //役満でなければハンを計算する
    if(yakuman==0){
      if($("#riti").is(':checked') && $("#driti").is(':checked')==false){
        if(NAKI.length==0){
          han=han+1
          agariyaku=agariyaku+"立直(1)/"
          if($("#ippatu").is(':checked')){
            han=han+1
            agariyaku=agariyaku+"一発(1)/"}
        }
      }
      if(tumo==1){han=han+1,agariyaku=agariyaku+"門前清自摸和(1)/"}
      if(tanyao==1){han=han+1,agariyaku=agariyaku+"断么九(1)/"}
      if(pinhu==1){han=han+1,agariyaku=agariyaku+"平和(1)/"}
      if(ipeko==1){han=han+1,agariyaku=agariyaku+"一盃口(1)/"}
      if(haku==1){han=han+1,agariyaku=agariyaku+"白(1)/"}
      if(hatu==1){han=han+1,agariyaku=agariyaku+"發(1)/"}
      if(tyun==1){han=han+1,agariyaku=agariyaku+"中(1)/"}
      if(jikaze==1){han=han+1,agariyaku=agariyaku+"自風(1)/"}
      if(bakaze==1){han=han+1,agariyaku=agariyaku+"場風(1)/"}
      if(kan>0 && $("#rinsyan").is(':checked') && tumoval=="tumo"){han=han+1,agariyaku=agariyaku+"嶺上開花(1)/"}//ツモ2符を認めないルールもあり
      if($("#tyankan").is(':checked') && tumoval=="ron"){han=han+1,agariyaku=agariyaku+"槍槓(1)/"}
      if($("#haitei").is(':checked') && tumoval=="tumo"){han=han+1,agariyaku=agariyaku+"海底摸月(1)/"}
      if($("#hotei").is(':checked') && tumoval=="ron"){han=han+1,agariyaku=agariyaku+"河底撈魚(1)/"}
      if(sansyoku==1){
        if(NAKI.length==0){han=han+2;agariyaku=agariyaku+"三色同順(2)/"}else{han=han+1;agariyaku=agariyaku+"三色同順(1*)/"}
        }
      if(ikki==1){
        if(NAKI.length==0){han=han+2;agariyaku=agariyaku+"一気通貫(2)/"}else{han=han+1;agariyaku=agariyaku+"一気通貫(1*)/"}
        }
      if(tyanta==1){
        if(NAKI.length==0){han=han+2;agariyaku=agariyaku+"混全帯么九(2)/"}else{han=han+1;agariyaku=agariyaku+"混全帯么九(1*)/"}
        }
      if(titoi==1){han=han+2,agariyaku=agariyaku+"七対子(2)/"}
      if(toitoi==1){han=han+2,agariyaku=agariyaku+"対々和(2)/"}
      if(sananko==1){han=han+2,agariyaku=agariyaku+"三暗刻(2)/"}
      if(honro==1){han=han+2,agariyaku=agariyaku+"混老頭(2)/"}
      if(sandoko==1){han=han+2,agariyaku=agariyaku+"三色同刻(2)/"}
      if(sankantu==1){han=han+2,agariyaku=agariyaku+"三槓子(2)/"}
      if(syosangen==1){han=han+2,agariyaku=agariyaku+"小三元(2)/"}
      if($("#driti").is(':checked')){
        if(NAKI.length==0){
          han=han+2
          agariyaku=agariyaku+"ダブル立直(2)/"
          if($("#ippatu").is(':checked')){
            han=han+1
            agariyaku=agariyaku+"一発(1)/"}
          }
      }
      if(honitu==1){
        if(NAKI.length==0){han=han+3;agariyaku=agariyaku+"混一色(3)/"}else{han=han+2;agariyaku=agariyaku+"混一色(2*)/"}
      }
      if(juntyan==1){
        if(NAKI.length==0){han=han+3;agariyaku=agariyaku+"純全帯(3)/"}else{han=han+2;agariyaku=agariyaku+"純全帯(2*)/"}
      }
      if(ryanpeko==1){han=han+3,agariyaku=agariyaku+"二盃口(3)/"}
      if(tinitu==1){
        if(NAKI.length==0){han=han+6;agariyaku=agariyaku+"清一色(6)/"}else{han=han+5;agariyaku=agariyaku+"清一色(5*)/"}
      }
      //ハンが1以上ならドラを数える
      if(han>0){
        //var dora=Math.max(Math.round($("#dora").val()),0)

        var dora_length=DORA.length
        var dora = 0
        for(var i=0;i<dora_length;i++){
          dora = dora + zenhai.filter(function(value){
            return value == DORA[i]
          }).length
        }
        dora = dora +Math.max(Math.round($("#dora").val()),0)

        han=han+dora
        if(dora>0){agariyaku=agariyaku+"ドラ"+dora+"/"}
      }
    }
  

    //基本点の計算
    if(yakuman>0){kihonten=8000*yakuman}
    else if(han>=$("#kazoe").val() && $("#kazoe").val()>0){kihonten=8000}
    else if(han>10){kihonten=6000}
    else if(han==8 || han==9 || han==10){kihonten=4000}
    else if(han==6 || han==7){kihonten=3000}
    else if(han==5){kihonten=2000}
    else{kihonten=Math.min(2000,hu*Math.pow(2,(han+2)))}
    //ローカル？切り上げ満貫　30符4ハン、60符3ハンは1920となり2000点に切り上げる


    if(kihonten>kihonten_max){
      kihonten_max=kihonten
      //支払い点の計算
      //子のロンあがり
      bakazejikaze=""
      if(bakazeval=="41"){bakazejikaze="東場"}
      else if(bakazeval=="43"){bakazejikaze="南場"}
      else if(bakazeval=="45"){bakazejikaze="西場"}
      else if(bakazeval=="47"){bakazejikaze="北場"}
      if(jikazeval=="41"){bakazejikaze=bakazejikaze+"東風"}
      else if(jikazeval=="43"){bakazejikaze=bakazejikaze+"南風"}
      else if(jikazeval=="45"){bakazejikaze=bakazejikaze+"西風"}
      else if(jikazeval=="47"){bakazejikaze=bakazejikaze+"北風"}
      //bakazejikaze=$('#bakaze option:selected').text()+$('#jikaze option:selected').text()
      if(oyaval=="ko"){
        if(tumoval=="ron"){
          siharaiten=kihonten*4
          siharaiten_call=Math.ceil(siharaiten/100)*100+"点(子ロン)"
          quiz_siharaiten=Math.ceil(siharaiten/100)*100
        }
        else{
          siharaiten=kihonten
          siharaiten_call=Math.ceil(siharaiten/100)*100+","+Math.ceil(siharaiten*2/100)*100+"点(子ツモ)"
          //oya
          quiz_siharaiten=Math.ceil(siharaiten*2/100)*100
          //ko
          quiz_siharaiten2=Math.ceil(siharaiten/100)*100
        }
      }
      else{
        if(tumoval=="ron"){
          siharaiten=kihonten*6
          siharaiten_call=Math.ceil(siharaiten/100)*100+"点(親ロン)"
          quiz_siharaiten=Math.ceil(siharaiten/100)*100
        }
        else{
          siharaiten=kihonten*2
          siharaiten_call=Math.ceil(siharaiten/100)*100+"点オール(親ツモ)"
          quiz_siharaiten=Math.ceil(siharaiten/100)*100
        }
      }
    
      if(yakuman>0){
        return yakuman+"役満"
      }
      else if(han>0){
        return han+"飜"+hu+"符"
      }
    
    }

    //上がり形の候補数だけ繰り返すのforここまで
  }





    
}