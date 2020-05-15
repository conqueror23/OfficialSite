export const formatChangeBody =(changebody)=>{
    const record = {};
    const recordArray =[]
    const lines =changebody.split('\n');
    lines.map(line=>{
        if(line.includes(':')){
            const lineResult= line.split(':')
            recordArray.push(lineResult);
            const key = lineResult[0].replace('"').trim();
            record[key]=lineResult[1];
        }
    })
    return recordArray
}
export const formatChanges =(changes)=>{
    const changeBody = changes[0].replace('---',);
    return formatChangeBody(changeBody)
}
