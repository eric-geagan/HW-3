// let orderNumber = 1000;

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    // document.getElementById("experience").disabled = true;
   
})


function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById('ordertype').value
    // we could do much better validation, but that's not the point of this example!
    // if (name.length > 2 && address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5) {
    //     document.getElementById("experience").disabled = false;
    //     document.getElementById("receipt").value = ++orderNumber;
    //     document.getElementById("visitdate").value = new Date();
    // }
    // else {
    //     alert("please fill in all fields");
    // }
    let text = [name, city, payment].join(' ')
    let list = document.createElement('li')
    let node = document.createTextNode(text)
    list.appendChild(node)
    document.getElementById('listId').appendChild(list)
}

// function handleClick(RadioElement) {
//     // hanlde select value
//     var sel = document.getElementById('ordertype');

//     // handle radio button
//     var selectedValue = RadioElement.value;
//     if (selectedValue == "yes") {
//         alert("Thank you for your " + sel.value + " order.");
//     }
//     else {
//         alert("Please call customer service at 800-555-5555 and give them this order number: " + orderNumber);
//     }
// }
