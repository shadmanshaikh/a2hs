const btn = document.getElementById("btn");
let deferredPrompt;
btn.style.display = "none";
window.addEventListener('beforeinstallprompt' , function(e){
    e.defaultPrevent();
    deferredPrompt = e;

    btn.style.display = 'block';
    btn.addEventListener('click',function(e){
        btn.style.display = 'none';
        deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log("user accepted ");
        }else{
            console.log("user dismissed");
        }
        deferredPrompt = null;
       })
    })
})
