"use strict";

$(function(){
    // alert("the DOM has finished loading!")
    //
    // // id selectors
    // let mainHeader = $('#main-container').html();
    // alert(mainHeader);
    // let firstList = $('#first-list').html();
    // alert(firstList);
    //
    // // class selectors
    // $('.codeup').css('border', '1px solid red');
    //
    // //element selectors
    // $('li').css('font-size', '20px')
    //
    // let statement = $('h1').html();
    // alert(statement);
    //
    // //multiple selectors
    // $('h1,p,li').css('background-color', 'yellow')
    //
    // //all selector
    // $('*').css('color', 'red')

    $('h1').click(function(){
        $(this).css('background-color', 'blue');
    })

    $('p').dblclick(function (){
        $(this).css('font-size', '18px')
    })
})


