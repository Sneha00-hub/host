document.getElementById("parent").innerHTML=("something Else");
//document.getElementById("Parent").style.backgroundcolor= ("red");
//document.getElementById("Parent").style.color= ("white");
document.getElementById("parent").style.cssText=("background-color:pink; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am Sneha Singh");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 19 years old");

document.getElementsByTagName("h1")[0].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h1")[1].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h1")[2].style.cssText=("text-transform:uppercase;text-align:centre")

document.getElementsByTagName("h2")[0].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h2")[1].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h2")[2].style.cssText=("text-transform:uppercase;text-align:centre")

document.querySelector("h2").innerHTML=("I am Sneha");
document.querySelector("#hi").innerHTML=("I am Neha");
document.querySelector(".hey").innerHTML=("I am Nihit");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Eshnu");

}
//function myFunction(){
    //document.open();
    //document.write("<h1>Hello World</h1>");
    //document.close();
//}

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write("<h1>Hello World</h1>");
    document.close()
}