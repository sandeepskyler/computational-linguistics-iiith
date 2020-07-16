var lan;
var Buttons;
var wcount=0;
var c=0;
var engarr=[];
var hinarr=[];
var rhindi;
var renglish2;
var randomHindi;
var eng1 = ['John ate an apple before afternoon',
                            'before afternoon John ate an apple',
                            'John before afternoon ate an apple'
                            ];
            var eng2 = ['some students like to study in the night',
                            'at night some students like to study'
                           ];
            var eng3 = ['John and Mary went to church',
                            'Mary and John went to church'];
            var eng4 = ['John went to church after eating',
                            'after eating John went to church',
                            'John after eating went to church'];
            var eng5 = ['did he go to market',
                            'he did go to market'];
            var eng6 = ['the woman who called my sister sells cosmetics',
                            'the woman who sells cosmetics called my sister',
                            'my sister who sells cosmetics called the woman',
                            'my sister who called the woman sells cosmetics'];
            var eng7 = ['John goes to the library and studies',
                            'John studies and goes to the library'];
            var eng8 = ['John ate an apple so did she',
                            'she ate an apple so did John'];
            var eng9 = ['the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'she‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌'];
            var eng10 = ['I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌',
                             'I‌ ‌told‌ ‌her‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'yesterday‌ ‌I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌ ‌yesterday‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌',
                             'yesterday‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌'];

 //all multiple correct hindi sentences with 7 different sentences
                var hin1 = ['राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                    'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                    'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                    'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌'];
                var hin2 = ['राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                    'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌'];
                var hin3 = ['मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌'];
                var hin4 = ['राम‌ ‌खाकर‌ ‌सोया‌',
                    'खाकर‌ ‌राम‌ ‌सोया‌',
                    'राम‌ ‌सोया‌ ‌खाकर‌',
                    'खाकर‌ ‌सोया‌ ‌राम‌',
                    'सोया‌ ‌राम‌ ‌खाकर‌',
                    'सोया‌ ‌खाकर‌ ‌राम‌'];
                var hin5 = ['बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                    'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌'];
                var hin6 = ['एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                    'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब'];
                var hin7 = ['एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                    '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'];
//all hindi strings in one array
        var hindiALL=[
                    'राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                    'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                    'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                    'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                    'राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                    'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                    'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'राम‌ ‌खाकर‌ ‌सोया‌',
                    'खाकर‌ ‌राम‌ ‌सोया‌',
                    'राम‌ ‌सोया‌ ‌खाकर‌',
                    'खाकर‌ ‌सोया‌ ‌राम‌',
                    'सोया‌ ‌राम‌ ‌खाकर‌',
                    'सोया‌ ‌खाकर‌ ‌राम‌',
                    'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                    'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                    'एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                    'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब',
                    'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                    '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'
        ]
function Language()
{

     lan = document.getElementById("select-lang").value;

    if(lan==='eng')
    {
            //emptying the fields while switching between languages(english/hindi)            
           lol();
             //array with all 10 different english sentences
             engarr = [eng1,eng2,eng3,eng4,eng5,eng6,eng7,eng8,eng9,eng10];

           messs();
            // randomly accessing 1 english sentence among 10 english sentences
             renglish2 = engarr[Math.floor(Math.random() * engarr.length)];

            //randomly selecting 1 sentence among the correct sentence of same question 
             renglish = renglish2[Math.floor(Math.random() * renglish2.length)];
            //console.log(renglish)
            ranques(renglish);
            //randomizing words
            
    }
    else if(lan==='hindi')
    {   

                //emptying the string data while switching between languages(english/hindi)
                lol();

            //array with all 7 different hindi sentences
                    hinarr = [hin1,hin2,hin3,hin4,hin5,hin6,hin7];
            
           messs();
            // randomly accessing 1 hindi sentence among 7 hindi sentences
                randomHindi = hinarr[Math.floor(Math.random() * hinarr.length)];

            //randomly selecting 1 sentence among the correct sentence of same question 
                rhindi = randomHindi[Math.floor(Math.random() * randomHindi.length)];
            //console.log(rhindi)
            
            //randomizing words
            ranques(rhindi);
                
        }
    else
        {           
            //document.querySelectorAll("#wrong, #ans, #button-select-intro,#sentence-intro,#msg,#sel,#reformed,#check-correctness,#jumbled-words,#correct").innerHTML="";  
           set2('msg'); set2('sel'); set2('reformed'); set2('check-correctness'); set2('correct'); set2('wrong'); set2('ans');set2('button-select-intro');set2('sentence-intro');set2('jumbled-words');
                        alert("Please Select A Language.");

        }   
}

function lol()
    {
            document.querySelectorAll("#wrong, #ans, #msg,#correct,#check-correctness,#jumbled-words, #reformed, #sel").innerHTML="";
    }
function messs(){
            set('sentence-intro','Form a sentence (Declarative or Interrogative or any other type) from the given words');
            document.getElementById("button-select-intro").innerHTML="(select the buttons in proper order)";
            document.getElementById("button-select-intro").setAttribute("style","color:blue;");
            document.getElementById("sentence-intro").setAttribute("style","color:blue;font-size:100%");
            
    }
    function ranques(a){
        var arrwords=a.split(" ");
            var words=[];
            var k=0,m=0;
            while(arrwords.length>k)
            { m = Math.floor(Math.random() * arrwords.length);
                if(arrwords[m]!="no"){
                words[k]=arrwords[m];
                arrwords[m]="no";
                k++;
                }
            }

            //displaying random buttons
            var i=0;
            c=0;
            wcount = words.length
            set('jumbled-words','')
            for(i=0;i<wcount;i++)
            {
                document.getElementById("jumbled-words").innerHTML += "<button class='btn' id='btn"+i+"' value='"+words[i]+"' onclick='Bfunction(this.id,this.value);'>"+words[i]+"</button>";  
            }


            //all the jumbled buttons are stored to display them in same random/jumbled order when reform button is clicked.
             Buttons =document.getElementById("jumbled-words").innerHTML ;
    }
    set= function(id, txt){
        document.getElementById(id).innerHTML=txt;
    }
    set2= function(id){
        document.getElementById(id).innerHTML="";
    }