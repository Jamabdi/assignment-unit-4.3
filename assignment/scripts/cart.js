console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log('basket items', basket);
console.log('expecting false since basket is empty by default');

function addItem(item){
    if(basket.length >= 1){
        console.log('item was added to basket array', true);
        }
        else{
            console.log('item was added to basket array', false);
        }
return basket.push(item) && true || false;
// expecting outcome to be true once items are added, false before items are added.
    }
addItem('fruit',);
console.log(basket);
addItem('milk');
console.log(basket);
addItem('eggs');
console.log(basket);









// function listItems(){

// }

// function empty(){
//     for(items in basket){

//     }
// }










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
