const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const addInput = $('.add-input').addEventListener('click', function(){
    // console.log('đây là chức năng thên input');
    renderInputFields()
    
})
const addTextarea = $('.add-textarea').addEventListener('click', function(){
    console.log('đây là chức năng thêm textarea');
    renderTextareaField()

});
const addButton = $('.add-button').addEventListener('click', function(){
    console.log('đây là chức năng thêm button');
    renderButtonField()

})
const saveData = $('.save-data').addEventListener('click', function(){
    console.log('saveData');

})
// const btnControll = $$('.btn');
// btnControll.forEach(element => {
//     element.addEventListener('click',function(e){ 
//         // console.log(e)
//     })
// });
// -------render field---------------------
let fields = {
    input: {
        tittle: '',
        type:'',
        label: '',
        id: '',
        placeholder: '',
        require: false ,
    },
    textarea : {
        id :'',
        name: '',
        rows: '',
        cols: '',
    },
    button :{
        name: '',
        value: '',
        type:'',
        disable: false,
    }
}

function renderInputFields(e){
    let field = document.createElement("div");
    field.className = "field_form"
    field.innerHTML = ` 
    <div class="heading_field">
        <h2 class="title-field">input field</h2>
        <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="body_form">
        <div class="row">
            <label>Type</label>
           
            <select name="type" class="select-type" value="">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="button">button</option>
                <option value="checkbox">checkbox</option>
                <option value="email">email</option>
                <option value="date">date</option>
                <option value="password">password</option>
            </select>
        </div>
        <div class="row">
            <label>Label</label>                  
            <input type="text" value="">
        </div>
        <div class="row">
            <label>Name</label>
             <input type="text" value="">
        </div>
        <div class="row">
            <label>ID</label>
             <input type="text" value="">
        </div>
        <div class="row">
            <label>Placeholder</label>
             <input type="text" value="">
        </div>
        <div class="row">
            <label>Require</label>
             <input type="checkbox">
        </div>
    </div>`
    $('.container-field').appendChild(field)
    // removeField()
}

function renderTextareaField(e){
    let field = document.createElement('div');
    field.className = "field_form"
    field.innerHTML =`
    <div class="heading_field">
            <h2 class="title-field">textarea field</h2>
            <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div class="body_form">
    <div class="row">
        <label>id</label>                  
        <input type="text" value="">
    </div>
    <div class="row">
        <label>Name</label>
         <input type="text" value="">
    </div>
    <div class="row">
        <label>Rows</label>
         <input type="text" value="">
    </div>
    <div class="row">
        <label>Cols</label>
         <input type="text" value="">
    </div>`
    $('.container-field').appendChild(field)
}
function renderButtonField(e){
    let field = document.createElement('div');
    field.className = "field_form"
    field.innerHTML=`
    <div class="heading_field">
        <h2 class="title-field">input field</h2>
        <i class="fa-solid fa-circle-xmark"></i>
        </div>
    <div class="body_form">
    <div class="row">
        <label>Name</label>
        <input type="text" value="">
    </div>
    <div class="row">
        <label>value</label>
        <input type="text" value="">
    </div>
    <div class="row">
        <label>type</label>
        <input type="text" value="">
    </div>
    <div class="row">
        <label>disable</label>
         <input type="checkbox">
    </div>
    </div>`
    $('.container-field').appendChild(field)
} 


// ------------------------------------------------------------
// const removeField = function(index){
//     var remove = $$('.heading_field i')
//     remove.splice(index,1)
//     { 
      
//         this.parentElement.parentElement.remove()

//     }
//   }
