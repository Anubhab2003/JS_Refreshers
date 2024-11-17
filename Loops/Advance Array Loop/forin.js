const myObj={
    js:'Javascript',
    py:'Python',
    rb:'Ruby',
    cpp:'C++'
}

for (const key in myObj) {
    // console.log(`${key} shorthand for ${myObj[key]}`);
    
}

const myarr=['Javascript','Python','Ruby','C++']
for (const language in myarr) {
    console.log(language);
}