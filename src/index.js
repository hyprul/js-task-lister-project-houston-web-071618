//INNERHTML OVERWRITES DOM ELEMENTS, INCLUDING EVENT LISTENERS

//APPEND DOESN'T, BUT IT ONLY TAKES TEXT OR FULL ELEMENT, NO HTML STRING


document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements

  const newlist = document.querySelector('#create-list-form')
  const listtitle = document.querySelector('#new-list-title')
  const listDiv = document.getElementById("app-content");
  const taskform = document.querySelector('#create-task-form')
  const alllistsDiv = document.querySelector('#lists')



  const parentlist = document.querySelector('#parent-list')
  const newtaskdescription = document.querySelector('#new-task-description')
  const newtaskpriority = document.querySelector('#new-task-priority')

newlist.addEventListener('submit', function(e){

	e.preventDefault()

	// console.log(listtitle.value)

	const option = document.createElement("option")
	option.text = listtitle.value


  let uniq = true
    for (op of parentlist.children) {
      if (op.innerText === listtitle.value){
        uniq = false
        break
      }
    }
    if (uniq) {
      parentlist.add(option)
    }
})


taskform.addEventListener('submit', function(e){
    e.preventDefault()
    let selectedList = parentlist.options[parentlist.selectedIndex].text;


    //debugger

    if(document.getElementById(selectedList)){
    	let mylist = document.getElementById(selectedList)
    	mylist.children[1].innerHTML += `<li>
          Task: ${newtaskdescription.value}
          <button data-list-title='${selectedList}' data-task-name='${newtaskdescription.value}' class="delete-task">
              X
          </button>
          <br>
          Priority: ${newtaskpriority.value}
        </li>`

   
    	//debugger
    }
    else{

    alllistsDiv.innerHTML += `
    <div id='${selectedList}'>
      <h2>${selectedList}
        <button data-title='${selectedList}' class="delete-list">
          X
        </button>
      </h2>
      <ul>
          <li>
          Task: ${newtaskdescription.value}
          <button data-list-title='${selectedList}' data-task-name='${newtaskdescription.value}' class="delete-task">
              X
          </button>
          <br>
          Priority: ${newtaskpriority.value}

        </li>
      </ul>
    </div>
    `
    //debugger

  	}

  })

 
  alllistsDiv.addEventListener('click', function(event) {
    //debugger
    //console.log(event.target);
    if (event.target.className == 'delete-task') {
      event.target.parentElement.remove()
    } else if (event.target.className == 'delete-list') {
      event.target.parentElement.parentElement.remove()
    }
  })
  //const app = new TaskLister();
});



	
// 	function deleteDiv(e){
//  e.target.parentElement.parentElement.remove()}

//  		function deleteTask(e){
//  			//debugger
//  e.target.parentElement.remove()


// }


  // const app = new TaskLister();







// taskform.addEventListener('submit', function(e){
// 	e.preventDefault()

// 	var selectedlist = parentlist.options[parentlist.selectedIndex].text;

// 	alllistsDiv.innerHTML += `
//    <div id = '${selectedlist}'>
//      <h2>${selectedlist}
//        <button data-title='${selectedlist}' class=“delete-list”>

//          X
//        </button>
//      </h2>
//      <ul>
//          <li>
//          Task: ${newtaskdescription.value}
//          <button data-list-title='${selectedlist}' data-task-name=“mocha” class=“delete-task”>
//              X
//          </button>
//          <br>
//          Priority: ${newtaskpriority.value}
//        </li>
//      </ul>
//    </div>
//    `
   
//    let deletelist = document.querySelector(`#${selectedlist}`)

//    deletelist.addEventListener('click', function(e){
//    		var elem = document.getElementById(`${selectedlist}`);
// 		elem.parentNode.removeChild(elem);

//    })


// 	// alllistsDiv.innerHTML += selectedlist
// 	// alllistsDiv.innerHTML += newtaskpriority.value
// 	// alllistsDiv.innerHTML += newtaskpriority.value

// })



       // debugger

		  	


    	 // `<li>
      //     Task: ${newtaskdescription.value}
      //     <button data-list-title='${selectedList}' data-task-name='${newtaskdescription.value}' class="delete-task">
      //         X
      //     </button>
      //     <br>
      //     Priority: ${newtaskpriority.value}
      //   </li>`



  //	document.querySelector('.delete-list').addEventListener('click', deleteDiv)
   
    //debugger

    // document.getElementById(taskcounter).addEventListener('click', deleteTask)
  	
