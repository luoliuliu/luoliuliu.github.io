var score=0;

function answer1(){
  var response=prompt("请输入图片对应字母选项！");
  if(response=="B"){
    alert("答对了！他是猪猪侠噢！这是我们的男神————GGBOND！");
    score+=1;
    document.getElementById('question2').style.display="block";
    document.getElementById('question1').style.display="none";
    document.getElementById('group2').style.display="block";
    document.getElementById('group1').style.display="none";
    document.getElementById('button2').style.display="block";
    document.getElementById('button1').style.display="none";
  }
  else {
    alert("不对不对，你居然不知GGBOND的真身！");
    document.getElementById('question2').style.display="block";
    document.getElementById('question1').style.display="none";
    document.getElementById('group2').style.display="block";
    document.getElementById('group1').style.display="none";
    document.getElementById('button2').style.display="block";
    document.getElementById('button1').style.display="none";
  }
}

function answer2(){
  var response=prompt("请输入全小写英文字母");
  if(response=="loopy"){
    alert("对咯！正是可爱的露比！露门！");
    score+=1;
    document.getElementById('question3').style.display="block";
    document.getElementById('question2').style.display="none";
    document.getElementById('group3').style.display="block";
    document.getElementById('group2').style.display="none";
    document.getElementById('button3').style.display="block";
    document.getElementById('button2').style.display="none";
  }
  else {
    alert("不对不对！看来大家对韩国来的小伙伴还是不太熟悉……");
    document.getElementById('question3').style.display="block";
    document.getElementById('question2').style.display="none";
    document.getElementById('group3').style.display="block";
    document.getElementById('group2').style.display="none";
    document.getElementById('button3').style.display="block";
    document.getElementById('button2').style.display="none";
  }
}

function answer3(){
  var response=prompt("请输入你的答案");
  if(response=="小七和奶龙"){
    alert("对对！正是如此");
    score+=1;
    document.getElementById('question4').style.display="block";
    document.getElementById('question3').style.display="none";
    document.getElementById('group4').style.display="block";
    document.getElementById('group3').style.display="none";
    document.getElementById('button4').style.display="block";
    document.getElementById('button3').style.display="none";
  }
  else {
    alert("不对不对！再想想吧！");
    document.getElementById('question4').style.display="block";
    document.getElementById('question3').style.display="none";
    document.getElementById('group4').style.display="block";
    document.getElementById('group3').style.display="none";
    document.getElementById('button4').style.display="block";
    document.getElementById('button3').style.display="none";
  }
}

  function answer4(){
    var response=prompt("请输入你的答案");
    if(response=="爆米花"){
      alert("正确！很高兴你也喜欢楼学（微笑.jpg");
      score+=1;
      document.getElementById('blank1').setAttribute("disabled",true);
      document.getElementById('blank1').style.background="grey";
      document.getElementById('blank1').style.color="black";
    }
    else {
      alert("错误！赶快去复习该世界名著一百遍！");
      document.getElementById('blank1').setAttribute("disabled",true);
      document.getElementById('blank1').style.background="grey";
      document.getElementById('blank1').style.color="black";
    }
}

function answer5(){
  var response=prompt("请输入你的答案");
  if(response=="固执；太酷啦"){
    alert("恭喜你答对了，那真是泰酷辣！");
    score+=1;
    document.getElementById('blank2').setAttribute("disabled",true);
    document.getElementById('blank2').style.background="grey";
    document.getElementById('blank2').style.color="black";
  }
  else {
    alert("错误！错误！错误！不过打错也可以xxx");
    document.getElementById('blank2').setAttribute("disabled",true);
    document.getElementById('blank2').style.background="grey";
    document.getElementById('blank2').style.color="black";
  }
}

function answer6(){
  var response=prompt("请输入你的答案");
  if(response=="边角料"){
    alert("正确！但是早上坏！");
    score+=1;
    document.getElementById('question4').style.display="none";
    document.getElementById('group4').style.display="none";
    document.getElementById('button4').style.display="none";
    document.getElementById('final').style.display="block";

    var x = document.getElementById('tips');
    x.style.fontSize = "50px";
    x.style.color = "navy";
    x.innerHTML = "请查收最终结果！";
  }
  else {
    alert("错误！那我祝你早上好！");
    document.getElementById('question4').style.display="none";
    document.getElementById('group4').style.display="none";
    document.getElementById('button4').style.display="none";
    document.getElementById('final').style.display="block";

    var x = document.getElementById('tips');
    x.style.fontSize = "50px";
    x.style.color = "navy";
    x.innerHTML = "请查收最终结果！";
  }
}


function sayhello(){
  if(score==6){
    alert("你的得分是 "+score+" ,表情包亲王！冲浪高手！");
  }
  if(score>3&score<=5){
    alert("你的得分是 "+score+" ,冲浪小达人！");
  }
  if(score<=2){
    alert("你的得分是 "+score+" ,我们也许不在同一片海域！");
  }
}
