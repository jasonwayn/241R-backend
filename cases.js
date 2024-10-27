function factorial(n){
    if (n<=1) return 1;
    return n*factorial(n-1);
}

function permutation(n,r){
    return factorial(n)/factorial(n-r);
}

function multiPermutation(n,r){
    return n**r;
}

function combination(n,r){
    return factorial(n)/(factorial(n-r)*factorial(r));
}

function multiCombination(n,r){
    return factorial(n+r-1)/(factorial(r)*factorial(n-1));
}

module.exports = {
    factorial,
    permutation,
    multiPermutation,
    combination,
    multiCombination
};