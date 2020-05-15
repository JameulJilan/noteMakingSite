// console.log('Welcome to my project.');
showCreatedNotes();
let addNoteBtn = window.document.getElementById('addNoteBtn').addEventListener('click', function (e) {
    let textForNote = window.document.getElementById('textAreaForNote');
    let textForTitle=document.getElementById('textAreaForTitle');
    let createdNotes = localStorage.getItem('createdNotes');
    let arrayOfNotes;
    if(textForNote.value!="")
    {
        if (createdNotes == null) {
            arrayOfNotes = [];
        }
        else {
            arrayOfNotes = JSON.parse(createdNotes);
        }
        let noteObj={
            title:textForTitle.value,
            text:textForNote.value,
        };

        arrayOfNotes.push(noteObj);
        textForNote.value = '';
        textForTitle.value='';
        localStorage.setItem('createdNotes', JSON.stringify(arrayOfNotes));
        // console.log(arrayOfNotes);
    }    
    showCreatedNotes();
})

function showCreatedNotes() {
    let createdNotes = localStorage.getItem('createdNotes');
    if (createdNotes == null || createdNotes==`[]`) {
        window.document.getElementById('createdNotes').innerHTML = `Nothing to show.Please use 'Add Note' section above to create note.`
    }
    else {
        let noteBox = ';'
        JSON.parse(createdNotes).forEach(function (element, index) {
            noteBox += ` <div class="border noteCard mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
             <h5 class="card-title"> ${element.title}</h5>
              <p class="card-text">
                ${element.text}
              </p>
              <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note</button>
            </div>
          </div>`;
        });
        window.document.getElementById('createdNotes').innerHTML =noteBox;
    }
}

function deleteNote(index)
{
    let createdNotes=JSON.parse(localStorage.getItem('createdNotes'));
    createdNotes.splice(index,1);
    localStorage.setItem('createdNotes',JSON.stringify(createdNotes));
    // console.log(localStorage.getItem('createdNotes'));
    showCreatedNotes();
}

let searchNote=window.document.getElementById('searchNote');
searchNote.addEventListener('input',function(){
    let inputVal = searchNote.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){        
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(element.getElementsByTagName('p'))
        if(cardTxt.toLowerCase().includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

let searchNoteButton=window.document.getElementById('searchNoteButton');
searchNoteButton.addEventListener('click',function(){
    let inputVal = searchNote.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){        
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(element.getElementsByTagName('p'))
        if(cardTxt.toLowerCase().includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
    searchNote.value='';
})