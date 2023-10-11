module.exports = function towelSort (matrix) {
  let sortMas = [];
  if (!matrix || matrix.length === 0) {
    return [];
  } else {
	  for (let i = 0; i < matrix.length; i++){
	    if(i % 2 === 0){
	      sortMas.push(...matrix[i]);
	    }else {
	      sortMas.push(...matrix[i].reverse());
	    }
	  }
  }
  return sortMas;
}