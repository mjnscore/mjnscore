function h_test(){
  $("#hyouji").html("")
  for(i=0;i<S.length;i++){
    $("#hyouji").html($("#hyouji").html()+S[i]+",")
    }
}


//j1 j2 雀頭仮保存
//k1 k2 k3 刻子仮保存
//s1 s2 s3 順子仮保存

/*
11122233344455
11 122233344455
11 123 234 234 444 55


*/


function agari_rekkyo() {
    //setTimeout(scrollTo, 100, 0, 1)
    //$('html,body').animate({scrollTop:$("#hai_tehai").offset().top},500,"swing")

    //G:上がり方の連想配列 g+nに上がり方を入れていく G=(g1:"55,111,222,333,444",g2:"55,111,234,234,234",g3:"55,123,123,123,444",...)
    G=new Array()
    ANKO=new Array()
    //S2:手牌配列 Sの末尾まで列挙を行う 牌数チェックを行う 牌に連番を振る 01～39まで
    //S:手牌（グローバル）
    //S=new Array("1","1","1","2","2","2","3","3","3","4","4","4","5","5")
    S2=new Array()
    //A:上がり牌（グローバル）
    //T:手牌作業用配列 削除したりしてTが無くなるまで列挙を行う T=(1,1,1,2,2,2,3,3,3,4,4,4) ←5,5を除いている
    //T=new Array("1","1","1","2","2","2","3","3","3","4","4","4","5","5")
    T=new Array()
    //M:面子保存配列 雀頭から順番に入れていって最後まで埋められたらGに加える M=(11)
    M=new Array()
    //mentsu_rekkyo内で使う仮保存配列 再帰するたびに一番最後に切り落とした面子を戻していく kが刻子 sが順子
    k=new Array()
    s=new Array()
    //j1 j2 は雀頭 Sのforループのたびに初期化する
    //二次元配列コピー用の連番
    g=0

    S2=$.merge([],S);
    if(A[0]!=null){S2.push(A[0])}
    S2.sort()
    //手牌+上がり牌で、対子を探してからmentsu_rekkyoする
    for(i=0;i<S2.length;i++){
        if(S2[i]!=S2[i-1]){
            //TにSをコピー
            T=$.merge([],S2);
            //Mを空に
            M=new Array()
            //mentsu_rekkyo用繰り返しカウントをリセット
            k=new Array()
            s=new Array()
            if(T[i]==T[i+1] && T[i+1]!=null){
                /**///alert(i+"回目")
                j1=T[i]
                j2=T[i+1]
                M.push(T[i].toString()+T[i+1].toString())
                /**///alert(M[0]+M[1])
                //M.push(S[i]+S[i+1])
                //delete S[i]
                //delete S[i+1]
                T.splice(i,1)
                T.splice(i,1)
                /**///alert(T[0]+T[1]+T[2]+T[3]+T[4]+T[5]+T[6]+T[7]+T[8]+T[9]+T[10]+T[11]+T[12]+T[13])
                mentsu_rekkyo()
                //?
                //T.unshift=j2
                //T.unshift=j1
            }
        }
    }
    $("#hyouji").html("")
    for(g=0;g<G.length;g++){
        $("#hyouji").html($("#hyouji").html()+G[g][0]+","+G[g][1]+","+G[g][2]+","+G[g][3]+","+G[g][4]+"<br>")
        }

}

function mentsu_rekkyo() {
  //M=new Array(55,123,123,123)
  //G.push(M)
  //alert(G[0][0]+"'"+G[0][1])
  //alert(M[0]+M[1])
  //alert("T"+T[0]+T[1]+T[2]+T[3]+T[4]+T[5]+T[6]+T[7]+T[8]+T[9]+T[10]+T[11]+T[12]+T[13])
  //できた手牌を保存する
  if(T.length==0){
    /**///alert(i+"回目で完了")
    //alert("M"+M[0]+","+M[1]+","+M[2]+","+M[3]+","+M[4]+","+M[5]+","+M[6])
    //GにMを代入する（pushだと参照渡しなので）
    G[g]=new Array()
    for(a=0;a<M.length;a++){
      G[g][a]=M[a]
    }
    //G.push(M)
    //M=new Array(j1.toString()+j2.toString())
    //$("#hyouji").html($("#hyouji").html()+G[g][0]+","+G[g][1]+","+G[g][2]+","+G[g][3]+","+G[g][4]+","+G[g][5]+","+G[g][6]+"<br>")
    //$("#hyouji").html($("#hyouji").html()+M[0]+","+M[1]+","+M[2]+","+M[3]+","+M[4]+","+M[5]+","+M[6]+"<br>")
    g=g+1
    //alert("G"+G[0][0]+","+G[0][1]+","+G[0][2]+","+G[0][3]+","+G[0][4]+","+G[0][5]+","+G[0][6])
    //return;
  }
  T.sort()
  /**///alert("Tsort:"+T[0]+T[1]+T[2]+T[3]+T[4]+T[5]+T[6]+T[7]+T[8]+T[9]+T[10]+T[11]+T[12]+T[13])
  //刻子チェック
  if($.inArray(T[0],T,1)>-1 && $.inArray(T[0],T,$.inArray(T[0],T,1)*1+1)>-1){
  //T.indexOf(T[0],1)>-1 && T.indexOf(T[0],T.indexOf(T[0],1)*1+1)>-1){
    M.push(T[0].toString()+T[1].toString()+T[2].toString())

    //刻子を仮保存しておく
    k1=T[0]
    //刻子仮保存配列の末尾に追加する
    k.push(T[0],T[0],T[0])
    //Tから刻子を削除する sortしてることが前提 危ない
    T.splice(0,1)
    T.splice(0,1)
    T.splice(0,1)
    /**///alert("Tk"+T[0]+T[1]+T[2]+T[3]+T[4]+T[5]+T[6]+T[7]+T[8]+T[9]+T[10]+T[11]+T[12]+T[13])
    //削除したTで面子列挙する
    mentsu_rekkyo()
    //上の面子列挙がダメで抜けてきたら最新の仮保存刻子を戻して次の順子チェックへ
    T.unshift(k.pop(),k.pop(),k.pop())

    M.pop()
    
    /**///alert("Tkun"+T[0]+T[1]+T[2]+T[3]+T[4]+T[5]+T[6])
  }
  if($.inArray((T[0]*1+1).toString(),T)>-1 && $.inArray((T[0]*1+2).toString(),T)>-1){
  //T.indexOf((T[0]*1+1).toString())>-1 && T.indexOf((T[0]*1+2).toString())>-1){
    //複雑なことしなくても単純に123でいい M.push(T[0].toString()+T[T.indexOf((T[0]*1+1).toString())].toString()+T[T.indexOf((T[0]*1+2).toString())].toString())
    M.push(T[0]+(T[0]*1+1)+(T[0]*1+2))
    //順子の値を仮保存しておく
    s1=T[0]
    s.push(T[0],(T[0]*1+1).toString(),(T[0]*1+2).toString())
    //s2=T[T.indexOf(T[0])+1]
    //s3=T[T.indexOf(T[0])+2]
    //Tから順子を削除する
    T.splice(0,1)
    //alert($.inArray((s1*1+1).toString(),T))
    T.splice($.inArray((s1*1+1).toString(),T),1)
    T.splice($.inArray((s1*1+2).toString(),T),1)
    //T.splice(T.indexOf((s1*1+1).toString()),1)
    //T.splice(T.indexOf((s1*1+2).toString()),1)
    /**///alert("Ts"+T[0]+T[1]+T[2]+T[3]+T[4]+T[5]+T[6]+T[7]+T[8]+T[9]+T[10]+T[11]+T[12]+T[13])
    //削除したTで面子列挙する
    mentsu_rekkyo()
    //上の面子列挙がダメで抜けてきたら最新の仮保存刻子を戻して次の順子チェックへ
    T.unshift(s.pop(),s.pop(),s.pop())

    M.pop()
  }

  //console.log(M)
}

