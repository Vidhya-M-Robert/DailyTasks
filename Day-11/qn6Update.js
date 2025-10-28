function longestIncreasingSubsequence(arr){
    const n = arr.length;
    const dp = Array(n).fill(1);       //creates an array dp of length n.Every element is initialized to 1.
    const prev = Array(n).fill(-1);  

    let maxLen = 1;
    let lastIndex = 0;
    for(let i = 1; i<n; i++){
        for(let j=0;j<i;j++){
                if(arr[j] < arr[i] && dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
            if(dp[i] > maxLen){
                maxLen = dp[i];
                lastIndex = i;
            }
        }
        const lis = [];
        while(lastIndex !== -1){
            lis.unshift(arr[lastIndex]);
            lastIndex = prev[lastIndex];
    }
    return lis;
}
console.log(longestIncreasingSubsequence([10, 20, 15, 30, 22, 40]));