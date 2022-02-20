 const fs =require('fs');
// fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
//     if(err) console.log('Bir Hata ile Karşılaşıldı.');
//     console.log('Dosya oluşturuldu');
// })

// fs.readFile('employees.json','UTF8',(err,data)=>{
//     if(err) console.log('Bir Hata ile Karşılaşıldı.');
//     console.log(data);
// });

// fs.appendFile('employees.json','\n{"name": "Employee 2 Name", "salary": 3000}',(err)=>{
//     if(err) console.log('Bir Hata ile Karşılaşıldı.')
//     console.log('Dosya güncellendi.')
// })
fs.unlink('employees.json',(err)=>{
    if(err) console.log('Bir Hata ile Karşılaşıldı.')
    console.log('Dosya Silindi.')
})