export const getType = (target)=>{
	return Object.prototype.toString.call(target).slice(7,length-1).toLocaleLowerCase();
} 