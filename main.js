function calculateLove() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();
  
    // Calculate a hash value for the pair of names
    const lovePercentage = hashFunction(name1 + name2);
  
    // Display the result
    document.getElementById('lovePercentage').innerText = lovePercentage + '%';
  }
  
  // Simple hash function (you can replace this with a more sophisticated one)
  function hashFunction(str) {
    let hash = 0;
    if (str.length === 0) return hash;
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
  
    return Math.abs(hash) % 101; // Ensure the result is between 0 and 100
  }
  