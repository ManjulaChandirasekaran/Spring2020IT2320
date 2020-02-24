/*********************************************************************/
var globalX = 5;

//function invocation needs name and ()
console.log(add());//give function name and () and any parameters it takes
console.log(add);//here i have not used () so entire function will be returned
compare(35,15);
var finalPrice = calc(100,0.05);
console.log("Final prices is " + finalPrice);
reportBMI();
GlobalVsLocalScope1();
GlobalVsLocalScope2();

/*********************************************************************/
/***************** Function definition area *************/
function hello()//no input parameters 
{
    console.log("hello");

    //no return values
}

function add()
{
    return (3+4);//return value
}

function compare(x,y)// input parameters
{   //x and y are already defined so dont assign any values to them   

    if (x>y)
        console.log("x is greater");
    else 
        if (x==y)
        console.log("x and y are equal");
            else
            console.log("y is greater");

}

function calc(salesPrice, discount)//function with input parameters & return value
{
    return (salesPrice - (salesPrice*discount));
}

function reportBMI()
{
      //BMI = weight * 703 / (height  * height)
    var employees = [
                {name: "john", weight: 165, height: 60},
                {name: "mary", weight: 146, height: 70},
                {name: "keith", weight: 200, height: 75}
                ];//JS object array
    
    //"no name" function => anonymous function
    //forEach => function(currentValue,index,parentArray)
    employees.forEach( function(emp){
            emp.bmi = (emp.weight * 703)/(emp.height * emp.height);
            console.log(emp.bmi);
            var health = reportHealthStatus(emp.bmi);//regular function
            console.log(health);
        }
    );
}

function reportHealthStatus(bmi)
{    
    if (bmi > 30)
        return "Obese";
    else if (bmi >= 25)
        return "Overweight";
    else if (bmi >= 18.5)
        return "Healthy";
    else
        return "Underweight";
}
//Global vs Local variable and scope
function GlobalVsLocalScope1()
{
    var x1 = 10;//local variable
    console.log(globalX);
    globalX = 6000;
    console.log(x1);
    //console.log(x2);//cant access x2 as it is local to the 2nd function only
}

function GlobalVsLocalScope2()
{
    var x2 = 20;//local variable
    console.log(globalX);    
    console.log(x2);
}
