export const getStandard =(country)=>{
    switch(country){
        case "au":
        case "indo":
            return "asic"
        default:
            return "vfsc"
    }
}
