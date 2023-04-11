let a = document.querySelectorAll(".interest__check")
for(let i =0; i< a.length; i++){
    a[i].addEventListener('change',()=>{
        if(a[i].checked){
            if(a[i].closest("label").closest("li").querySelector("ul")!=null){
                let child = a[i].closest("label").closest("li").querySelectorAll("input");
                for(let j = 0; j < child.length; j++){
                    child[j].checked = true;
                }
            }
            rek(a[i]);
        }else{
            if(a[i].closest("label").closest("li").querySelector("ul")!=null){
                let child = a[i].closest("label").closest("li").querySelectorAll("input");
                for(let j = 0; j < child.length; j++){
                    child[j].checked = false;
                }
            }
            unrek(a[i]);
        }
    })
}
function rek(el){
    tmp = el.closest("label").closest("li").closest("ul").closest("li").querySelector("input");
    if(tmp!=null){
        let child = tmp.closest("label").closest("li").querySelector("ul").querySelectorAll("input");
        let flag = false;
        for(let j = 0; j < child.length; j++){
            console.log(flag)
            if(!(child[j].checked)){
                flag = true;
            }
        }
        tmp.checked = true;
        tmp.indeterminate = false;
        if(flag){
            tmp.indeterminate = true;
            tmp.checked = false;
        }
        rek(tmp);
    }
}
function unrek(el){
    tmp = el.closest("label").closest("li").closest("ul").closest("li").querySelector("input");
    if(tmp!=null){
        if(tmp.closest("label").closest("li").querySelector("ul")!=null){
            let child = tmp.closest("label").closest("li").querySelector("ul").querySelectorAll("input");
            let flag = false;
            for(let j = 0; j < child.length; j++){
                console.log(flag)
                if(child[j].checked){
                    flag = true;
                }
            }
            tmp.checked = false;
            tmp.indeterminate = true;
            if(!flag){
                tmp.indeterminate = false;
            
            }
            unrek(tmp);
        }
    }
}