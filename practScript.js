/// <reference path="jquery-3.1.1.js" />

// Practice Test

$(document).ready(function () {
    $("#btnAny").click(function () {
        alert($(this).attr("id"));
    });

    $("#spnClick").click(function () {
        addSomething(this,"I was added!");
    });

    $("#btnMore").on("click", doThis);
});

function clearLinks() {
    $("a").removeClass();
}

function addList() {
    var div = $("<div>");
    var ul = $("<ul>");
    ul.append($("<li>").text("One"));
    ul.append($("<li>").text("Two"));
    ul.append($("<li>").text("Three"));
    ul.append($("<li>").text("Four"));
    ul.appendTo(div);
    div.appendTo($("#myHolder"));
}

function changeClassesj() {
    $("p").addClass("textHolder");
}

function changeClasses() {
    var paras = document.getElementsByTagName("p");
    for (var i = 0; i < paras.length; i++) {
        var par = paras[i];
        //par.innerText = "found you";
        //par.className += " textHolder";
        var oldClasses = par.getAttribute("class").trim();
        par.setAttribute("class", oldClass + " textHolder");
    }
}


function doThisj() {
    alert($(this).parent()[0].tagName);
}

function doThis() {
    // get element clicked.
    var btn = this;
    // get the parent of this 
    var par = btn.parentNode;
            // get the tagname of the parent. 
    var tgName = par.tagName;
    // alert
    alert(tgName);
    alert(this.parentNode.tagName);
}


function changeListTextj() {
    $("li").eq(2).text("Text was changed.");

}
function changeListText() {
    $("li")[2].innerText = "Text was changed.";

    document.getElementsByTagName("li")[2].innerText = "Text was changed.";
}

function addSomething(obj, str) {
    var newP = $("<p>").text(str);
    $(obj).parent().parent().append(newP);
}

function changeSpans() {
    $("#someText span").append("- Added Here");
}
var toggle = true;
function moveText() {
    var p,t;
    if (toggle) {
        p = $("#myParagraph");
        t = p.next();
    } else {
        p = $("#myParagraph").next();
        t = p.prev();
    }
    toggle = !toggle;
    t.text(p.text());
    p.text("");
}

function handleHere(e) {
    e = e || window.event;
    var tar = e.target || e.srcElement;
    //alert(tar.tagName);
    if (tar.tagName === "LI") {
        var newLi = document.createElement("li");
        newLi.innerText = "I was Added because you clicked " + tar.innerText;
        tar.parentNode.appendChild(newLi);
    }

}