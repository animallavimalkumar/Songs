function calculateFriendship(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
    if(name1==""||name2==""){
        alert("Please enter both names:")
    }else{
        const Friend=Math.floor(Math.random()*100);
        const result=document.getElementById("result");
        result.innerHTML=`${name1} and ${name2} 's Frienship Percentage:${Friend}`;
    }
}