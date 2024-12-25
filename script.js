//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var Yesquestions=[

    {
        question: "What did you get on our first date?",
        choices: ["Red rose","White rose","A bouqet of roses","No flowers"],
        answer: 2
    
    },
    
    {
        question: "How many days since we are together?",
        choices: ["670","815","728","770"],
        answer: 3
    
    },
    {
        question: "Tuty?",
        choices: ["Tutyiii","Tity tuty","Tutya","Tityii"],
        answer: 1
    
    },
    {
        question: "Mi big bebi kedvence?",
        choices: ["Grander","Töltött paprika","Mákos zserbó","Bebi"],
        answer: 2
    
    },
    {/*5*/
        question: "Who should have won",
        choices: ["Damu who knew how to cook","Heni","Dorina fasszopo csaló párja aki lefekudt a Natival","Thanos"],
        answer: 1
    
    },
    {
        question: "How many times will we aruge in the next year?",
        choices: ["n^69","2 times","17 times","Bebi will be calm, and other bebi proactive so never"],
        answer: 4
    
    }, 
    {
        question: "Are you excited, why i made you do this??",
        choices: ["Yes","Yes","If you choose this we are breaking up", "Yes"],
        answer: 2
    
    }, 
                
];

var Noquestions=[

    {
        question: "Why don't you love me?",
        choices: ["I'm a bitch","Just cause","Fuck you","All of the above"],
        answer: 1
    
    }, 
    {
        question: "Really?",
        choices: ["Yes you little shit","OF COURSE","Natürlich","Not really, its christmas and i love you so let's go back"],
        answer: 1
    
    }
                
];




//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Gift website created by baby");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
