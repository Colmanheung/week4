function myFunction(value) {
    var element = document.getElementById("1st");
    if (value == 1){
        element.classList.toggle("button_red");
    }
    else if (value == 2){
        element.classList.toggle("button_blue");
    }
    else if (value == 3){
        element.classList.toggle("button_purple");
    }
    else if (value == 4){
        element.classList.toggle("button_green");
    }
    else if (value == 5){
        element.classList.toggle("button_orange");
    }
    else {
        print("error")
    }
    
    console.log(element)
    var element2 =document.getElementById("angry")
    console.log(value)
}

var newvar = new Vue({
    el:'#ifapp',
    data:{
        message: false,      
    }
})

const newApp = new Vue({
    el:"#divArea",
    data:{
        message2:"Hello",
        message3:"please choose you mood for 1st of March",
    }
})
var app = new Vue({
    el: '#app21',
    data: {
        message1: "Hello welcome to Bedtime Diary !"
    }
})

var dateapp = new Vue({
    el: '#date',
    data:{
        dayinamonth:['1','2','3','4','5'],
        days:[
            {name:'1st',text:"",emotion:0},
            {name:'2nd',text:"",emotion:0},
            {name:'3rd',text:"",emotion:0},
        ]
    },
})

var testingapp = new Vue({
    el: '#items',
    data:{
            message4:"What can you do today?",
            items:['More exercrise', 'Drink more water', 'Chat with friends'],
        
    }
})
  
var moodData = new Vue({
    el:'#mood-app',
    data:{
        moods:[
            {mood:1,name:"angry",style:"rgb(245, 73, 73)"},
            {mood:2,name:"sad",style:"rgb(104, 139, 245)"},
            {mood:3,name:"happy",style:"rgb(242, 162, 88)"},
            {mood:4,name:"worry",style:"rgb(217, 21, 232)"},
            {mood:5,name:"peaceful",style:"rgb(101, 254, 122)"},
        ]
    },
    methods:{
        myfunction:function(value){
            console.log(value)
            var element = document.getElementById("1st");
            if (value == 1){
                element.classList.toggle("button_red");
            }
            else if (value == 2){
                element.classList.toggle("button_blue");
            }
            else if (value == 3){
                element.classList.toggle("button_orange");
            }
            else if (value == 4){
                element.classList.toggle("button_purple");
            }
            else if (value == 5){
                element.classList.toggle("button_green");
            }
            else {
                print("error")
            }
        }
    }
})
var dateData = new Vue({
    el:'#date-app',

})
