export const formatChangeBody =(changebody)=>{
    const record = {};
    const lines =changebody.split('\n');
    lines.map(line=>{
        if(line.includes(':')){
            const lineResult= line.split(':')
            const key = lineResult[0].replace('"').trim();
            record[key]=lineResult[1];
        }
    })
    return record
}
export const formatChanges =(changes)=>{
    let changeBody;
    if(changes[0].includes('---')){
        changeBody = changes[0].split('---')[1];
    }else{
        changeBody = changes[0];
    }
    return formatChangeBody(changeBody)
}
