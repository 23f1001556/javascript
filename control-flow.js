let priceOfChoclate = 45;
let hasAmountCash = 60;


const canBuyChoclate = hasAmountCash >= priceOfChoclate ;
console.log(canBuyChoclate);
console.log(typeof canBuyChoclate);

//or by if else condition

if(canBuyChoclate){
    console.log('enjoy ur purchase');
}else{
    console.log('bring more money');
}

let hour = 10;
if (hour >= 6 && hour <=12){
    console.log('serving brakefast')
}else if(hour>12 && hour<=16){
    console.log('serving lunch')
}else{
    console.log('serving dinner')
}

//can bw written as  a  each one of them contail a single block i.e console.log 

if (hour >= 6 && hour <=12)
    console.log('serving brakefast')
else if(hour>12 && hour<=16)
    console.log('serving lunch')
else
    console.log('serving dinner')



let job = ' software Developer ';

if (job === 'software Developer')
    console.log('writes code')
else if(job === 'Designer')
    console.log('Makes interface designs');
else if( job === 'Manager' )
    console.log('Manages team')
else
    console.log('works directly with customers')
//too much if else so in such case use switch case

switch(job){
    case 'software Developer':
        console.log('writes code');
        break;
    case 'Designer':
        console.log('Makes interface designs');
        break;
    case 'Manager':
        console.log('Manages team');
        break;
    default:
        console.log('works directly with customers')
}

// //
// ⚖️ 2️⃣ == → Loose equality (type conversion allowed)

// Compares values after converting types if needed.

// Example:

// 5 == "5"   // ✅ true (string "5" is converted to number 5)
// false == 0 // ✅ true
// null == undefined // ✅ true

// //
// 🔒 3️⃣ === → Strict equality (no type conversion)

// Compares both value and type.

// Example:

// 5 === "5"   // ❌ false (different types)
// 5 === 5     // ✅ true
// false === 0 // ❌ false


// This is the safest and recommended operator in modern JavaScript because it avoids unexpected matches due to automatic type conversions.

