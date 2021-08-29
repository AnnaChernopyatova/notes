let notes = [];
        let headers = [];

        document.addEventListener("DOMContentLoaded", function (){
            debugger;

            if (localStorage.getItem("restoredHeader") != null){
                headers = localStorage.getItem("restoredHeader").split("|");
                notes = localStorage.getItem("restoredText").split("|");

                for ( let i = 0; i < notes.length; i++){
                    document.querySelector("#notesSpace").innerHTML += `<div class = "newNote"><h3> ${headers[i]}</h3> <p class="newNote_text">${notes[i]} </p> </div> `;
                } 
            }
        })


        function addNote(){
            document.querySelector("#alert").style.display = "none";

            let header = document.querySelector("#header").value;
            let text = document.querySelector("#note").value;
            if (header == ''){
                document.querySelector("#alert").style.display = "block";
                return;
            }

            notes.push(text);
            headers.push(header);
            document.querySelector("#notesSpace").innerHTML += `<div class = "newNote"><h3> ${header}</h3> <p class="newNote_text">${text} </p> </div> `;

            setStorage();
        }

        function setStorage(notestotal, headerstotal){
            debugger;
            let headerstr = headers.join("|");
            let notesstr = notes.join("|");
            localStorage.setItem("restoredHeader", headerstr);
            localStorage.setItem("restoredText", notesstr);
        }