const fs=require('fs');
const { parse } = require('path');

// let studentData= {id:data.length+1  , name:process.argv[3] , grade:process.argv[4]};



if(process.argv[2]=="add")
{
    let data=JSON.parse( fs.readFileSync("student12.txt",'utf-8'))
    console.log(data)

    let studentData= {id:data.length+1  , name:process.argv[3] , grade:process.argv[4]};

    // console.log(studentData);

    data.push(studentData);

    fs.writeFileSync("student12.txt",JSON.stringify(data));

    console.log(data)
    
}


else if (process.argv[2] == "list"){

// fs.readFile('student12.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });

let data=JSON.parse( fs.readFileSync("student12.txt",'utf-8'))
    data.forEach(student => {
        console.log(student.id);
        console.log(student.name);
        console.log(student.grade);
    });
    fs.writeFileSync("student12.txt",JSON.stringify(data));

}



else if(process.argv[2]=="edit")
{
    let data=JSON.parse( fs.readFileSync("student12.txt",'utf-8'))
    data[parseInt(process.argv[4])].grade = parseInt(process.argv[3]);

    // data[parseInt( process.argv[3])]=process.argv[4];
    fs.writeFileSync("student12.txt",JSON.stringify(data));
}


else if(process.argv[2]=="del")
{
    let data=JSON.parse( fs.readFileSync("student12.txt",'utf-8'))

   data.splice(parseInt(process.argv[3]),1);
   
    fs.writeFileSync("student12.txt",JSON.stringify(data));
}





else if (process.argv[2] == "sum"){
    sum()
}



else
{
    console.log(err);
}


function sum(){
    let sum = 0
    for (let i = 0 ; i < studentData ; i++ )
    sum +=parseInt(studentData[i].grade)
}








