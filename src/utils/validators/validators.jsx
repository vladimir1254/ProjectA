export const required = value =>
{
    if(value) return undefined;
    return 'Field is requiered';
}
export const maxlengthCreator = (maxlength) => value =>
{
    if(value && value.length>maxlength) return `Max length is ${maxlength} symbols`
    return undefined
}