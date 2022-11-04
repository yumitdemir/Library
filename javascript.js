let id = 0;

let myLibrary=[];


function Book(n,a,p,r,id){
    this.name=n;
    this.author=a;
    this.page=p;
    this.read=r;
    this.id=id;
}



//* card creat
function creatBookCard(n,a,p,r,id){
    
    //-main div
    let main = document.getElementById("main")
    let div = document.createElement("div")
    div.setAttribute("deneme", 1);
    div.classList.add("book-card");
    main.append(div);

    //*p tags
    let name= document.createElement("p");
    name.textContent = n;
    let author = document.createElement("p");
    author.textContent = a;
    let page = document.createElement("p");
    page.textContent = p;
    

    //*buttons
    let read = document.createElement("button");
    if (r == "read"){
        read.className = "read";
    }else{
        read.className = "not-read";
    }
    read.innerText = r;
    read.addEventListener("click", function(){
       
        if (read.className == "read"){
            read.className = "not-read"
            read.innerText = "Unread";
        }else{
            read.className = "read"
            read.innerText = "Read";
        }

        

    })



    let remove = document.createElement("button");
    remove.innerText = "remove";
    remove.classList.add("remove");

    remove.addEventListener("click", function(){
        
        remove.parentNode.classList.add("removed");
        for (let i = 0; i < myLibrary.length; i++){
            
            if(myLibrary[i].id == id){
                
                
                myLibrary.splice(i,1)
            }
        }

    })

    div.append(name);
    div.append(author);
    div.append(page);
    div.append(read);
    div.append(remove);

}




let submit = document.getElementById("submit")
submit.addEventListener("click", function(){
    event.preventDefault();
    let namevalue = document.getElementById("title").value
    let authorvalue = document.getElementById("author").value
    let pagevalue = document.getElementById("page").value

    let readvalue = document.getElementById("read").checked
    
    if (readvalue == true){
        readvalue ="read"
    }else{
        readvalue = "not-read"
    }


    if (namevalue == "" || authorvalue == "" || pagevalue==""){
        return
    }else{
        let book = new Book(namevalue, authorvalue, pagevalue, readvalue, id)
        myLibrary.push(book)
        creatBookCard(namevalue,authorvalue,pagevalue,readvalue,id);
        
        id++

    }

    

})














//* modal
const open = document.getElementById("open");
const modal_container = document.getElementById("container");
const close = document.getElementById("close");

open.addEventListener("click", function(){
    modal_container.classList.add("show")
})

close.addEventListener("click", function(){
    modal_container.classList.remove("show")
})


let deneme = document.getElementById("bookform");
deneme.addEventListener("submit",function(){
    event.preventDefault();
    
})
