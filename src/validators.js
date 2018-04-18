export const required = (value)=>
    value ? undefined :'Field is Required';

export const notEmpty = (value) => 
    value.trim() !=='' ? undefined : 'Can not just contain spaces';

export const fiveCharOnly = (value) => 
    value.length === 5 ? undefined : 'Must contain exactly 5 numbers';

export const onlyNumbers = (value) =>
    /^\d+$/.test(value) === true ? undefined : "Must only contain numbers";
