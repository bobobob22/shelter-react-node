const splitClasses = (arg, styleVariable) => {
    const arr = arg.split(' ') || [];
    const classesArray = [];
    arr.forEach((el) => {
        if (styleVariable[el]) {
            classesArray.push(styleVariable[el]);
        }
    });
    return classesArray;
};

export default splitClasses;
