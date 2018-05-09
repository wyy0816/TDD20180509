function Anagrarns(str){
    if(!str){
        return []
    }
    
    if(str.length===1){
        return [str]
    }
    if(str.length===2){
    return [str[0]+str[1],str[1]+str[0]]
    }
    if(str.length===3){
        var result=[];
    
        result.push('a'+Anagrarns('bc')[0])
        result.push('a'+Anagrarns('cb')[1])
        result.push('b'+Anagrarns('ac')[0])
        result.push('b'+Anagrarns('ca')[1])
        result.push('c'+Anagrarns('ab')[0])
        result.push('c'+Anagrarns('ba')[1])
   
       return result
     }
    
}
module.exports=Anagrarns