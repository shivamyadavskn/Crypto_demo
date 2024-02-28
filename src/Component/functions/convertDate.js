export const convertDate=(value)=>{
    var myDate=new Date(value);

    return myDate.getDate()+"/"+(myDate.getMonth()+1);
}
