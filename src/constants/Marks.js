export const marks=[
    {Subject: "English", term1: 87, term2: 91, mid: 89, final: 90, AVG:89, grade: 'A'},
    {Subject: "English", term1: 87, term2: 91, mid: 89, final: 90, AVG:89, grade: "A"},
    {Subject: "English", term1: 87, term2: 91, mid: 89, final: 90, AVG:89, grade: "A"},
    {Subject: "English", term1: 87, term2: 91, mid: 89, final: 90, AVG:89, grade: "A"},
    {Subject: "English", term1: 87, term2: 91, mid: 89, final: 90, AVG:89, grade: "A"},
    {Subject: "English", term1: 87, term2: 91, mid: 89, final: 90, AVG:89, grade: "A"},

]

export const getGrades= (avg)=>{
    if(avg>=90) return "A+";
    if(avg>=80) return "A";
    if(avg>=70) return "B+";
    if(avg>=60) return "B";
    if(avg>=50) return "C+";
    if(avg>=40) return "C";
    if(avg>=30) return "D";
    if(avg<=30) return "E";

}