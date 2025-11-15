function formatTimeAgo(timestamp: Date){
    const time = new Date(timestamp).getTime();
    console.log(time);
    // const now = new Date().toLocaleDateString();
    const now = new Date().getTime();
    console.log(now);
    const diff = now-time;
    console.log(diff);
}
// formatTimeAgo(9/15/2025);