function closeWindow(){
    console.log("Close window");
    window.open("index.html","_blank");
    window.close();
}
function loadRest(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(function(data){    
                        
let html='';
data.forEach(function(data){
if(data.completed==false)
{                    
html +=`
<div>
<strong> ${data.id}) </strong>
${data.title}
<input type="checkbox" name="check" onclick="return counter()">
</div>
`;
                        
}                    
else {
html +=`
<div>
<strong> ${data.id}) </strong>   
${data.title}
<input type="checkbox"disabled checked>
</div>
`;}

                           
});
                
document.getElementById('result').innerHTML= html; 
})    
}   


function counter(){               
var a= document.getElementsByName('check');
var i= 0;
var count;
for(count=0; count<a.length; count++){
if(a[count].checked==true){
i= i+1;
}
}
if(i>=5){

new Promise ((res, rej) =>{
console.log('entered');

if(i<=5){ setTimeout(() => res(),100); console.log('resolve');}
if(i>=6){ setTimeout(() => rej(),100);console.log('reject');}
}).then(mssg)
.catch(refresh);
                           
function mssg(){

   if(confirm('selected 5 tasks.Do you want to continue?')){
       console.log('OK');}
    else{console.log('Cancel');
    alert(`completed ${i} tasks`);
    alert('Press OK to Refresh');
    location.reload();

    }
   }

}

function refresh(){
    if(confirm(`selected ${i} tasks. Do you want to continue?`)){
        console.log('OK');
    }
else{ console.log('Cancel');
    alert(`completed ${i} tasks`);
    alert('Press OK to Refresh the page');
   
// loadRest();

location.reload();


}
}
}


