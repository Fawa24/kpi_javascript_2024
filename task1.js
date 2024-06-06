let result = prompt('Enter a word:', '');

if (result !== null) {
    if (!result.trim()) {
        alert('Invalid value');
    } else {
        if (result.length % 2 === 0) {
            alert(result[(result.length / 2) - 1] 
            + result[result.length / 2]);
        } else {
            alert(result[Math.floor(result.length / 2)]);
        }
    }
} else {
    alert('Canceled');
}