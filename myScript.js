

for (var i=0; i<8; i++) {
    // We need something to add our new element too
    let target = document.querySelector(".cupcakes");
    // Now we have to create a NEW element
    let box = document.createElement('div');
    // Removed the float for the answer as they will stack on top other wise.
    //box.style.float = "left";
    box.style.height = "300px";
    box.style.width = "250px";
    box.className="box";
    box.id=("box"+i);
    
    // Now we add it to our target
    target.appendChild(box);
        let target2=document.querySelector('#box'+i)
            let img = document.createElement('div');
            img.className="box_img";
            
            let description = document.createElement('div');
            description.className="box_description";
            description.innerHTML+="cake";

            let price = document.createElement('div');
            price.className="box_price";
            price.innerHTML+="$200.00";

            let btn = document.createElement('button');
            btn.className="box_button";
            btn.innerHTML+="köp nu";

         

            target2.appendChild(img);
            target2.appendChild(description);
            target2.appendChild(price);
            target2.appendChild(btn);
            
        
    }
