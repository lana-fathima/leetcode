function minimumPushes(word){
    const frequency = Array(26).fill(0);

    for (const char of word){
        frequency[char.charCodeAt(0)-97]++;
    }

    frequency.sort((a,b) => b- a);


    let pushes = 0 ;

    for (let i = 0; i<26; i++){
        pushes += frequency[i]*(Math.floor(i/8)+1);
    }
    return pushes;
}